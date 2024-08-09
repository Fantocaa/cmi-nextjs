"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
// import useProductStore from "@/components/store/useProductStore";
import Filter from "./product-page/filter";
import { BeatLoader } from "react-spinners";
import { Search, X } from "lucide-react";

interface DetailProductProps {
  id: number;
  nama: string;
  deskripsi: string;
  spesifikasi: string;
  category_name: string;
  image: string;
}

interface Props {
  products: DetailProductProps[];
  categories: any[];
}

export default function ProductPage({ products, categories }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categoryToShow, setCategoryToShow] = useState("all");
  const [loading, setLoading] = useState(true); // Tambahkan keadaan loading
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const [sortBy, setSortBy] = useState("new");
  // const setProduct = useProductStore((state) => state.setProduct);
  // console.log(products);

  useEffect(() => {
    // Contoh: Menunggu 2 detik sebelum mengatur loading menjadi false
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    let updatedProducts = [...products]; // Salin products ke updatedProducts

    if (searchTerm) {
      setCurrentPage(1);
      const filtered = products.filter((product) =>
        product.nama.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else if (pageParam) {
      setCurrentPage(parseInt(pageParam) || 1);
      let sortedProducts = [...products]; // Salin products ke sortedProducts
      if (sortBy === "new") {
        // Sort products by ID in descending order (largest to smallest ID)
        sortedProducts.sort((a, b) => b.id - a.id);
      } else if (sortBy === "old") {
        // Sort products by ID in ascending order (smallest to largest ID)
        sortedProducts.sort((a, b) => a.id - b.id);
      }
      setFilteredProducts(sortedProducts); // Perbarui filteredProducts dengan produk yang sudah diurutkan
    } else if (pageParam) {
      setCurrentPage(parseInt(pageParam) || 1);
      setFilteredProducts(products); // Reset filteredProducts ke nilai awal
    }

    if (searchTerm) {
      setCurrentPage(1); // Reset ke halaman pertama saat melakukan pencarian
      updatedProducts = updatedProducts.filter((product) =>
        product.nama.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter berdasarkan kategori jika kategori telah dipilih
    if (selectedCategory !== "all") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category_name === selectedCategory
      );
    }

    // Sort products based on the selected sorting option
    if (sortBy === "new") {
      updatedProducts.sort((a, b) => b.id - a.id);
    } else if (sortBy === "old") {
      updatedProducts.sort((a, b) => a.id - b.id);
    }
    setFilteredProducts(updatedProducts);
  }, [searchTerm, pageParam, products, sortBy, selectedCategory]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value); // Simpan pilihan pengurutan
    if (value === "new") {
      // Sort products by ID in descending order (largest to smallest ID)
      const sortedProducts = [...filteredProducts].sort((a, b) => b.id - a.id);
      setFilteredProducts(sortedProducts);
    } else if (value === "old") {
      // Sort products by ID in ascending order (smallest to largest ID)
      const sortedProducts = [...filteredProducts].sort((a, b) => a.id - b.id);
      setFilteredProducts(sortedProducts);
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Set halaman ke 1 setiap kali kategori berubah

    // Membangun URL baru dengan halaman di-reset ke 1
    const newUrl = `${pathname}?category=${encodeURIComponent(
      category
    )}&page=1`;

    if (category === "all") {
      router.push(`${pathname}?page=1`, {
        scroll: false,
      }); // Pastikan untuk reset halaman ke 1
      setFilteredProducts(products); // Reset ke semua produk jika kategori adalah 'all'
    } else {
      router.push(newUrl, {
        scroll: false,
      });
      const filtered = products.filter(
        (product) => product.category_name === category
      );
      setFilteredProducts(filtered);
    }
  };

  const handleShowProduct = () => {
    setCategoryToShow(selectedCategory);
    setCurrentPage(1);
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredProducts.slice(firstPostIndex, lastPostIndex);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(products.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="container flex gap-8 my-16">
        <div className="w-1/3 hidden md:block">
          <Filter
            categories={categories}
            selectedCategory={selectedCategory}
            handleCategoryChange={handleCategoryChange}
            handleShowProduct={handleShowProduct}
          />
        </div>
        <div className="w-full">
          <div className="md:flex rounded-xl w-full justify-between">
            <div className="flex gap-4 relative pb-4 md:pb-0">
              <Search className="absolute translate-y-3 translate-x-4 text-white" />
              <Input
                id="search"
                type="text"
                placeholder="Search Product Here"
                className="h-12 w-full md:w-96 rounded-full px-4 pl-12 bg-darkcmi text-white"
                value={searchTerm}
                onChange={handleSearchChange}
              ></Input>
            </div>
            <div className="flex gap-2 md:gap-4">
              <Select
                onValueChange={(value: string) => handleSortChange(value)}
              >
                <SelectTrigger className="w-[180px] h-12 rounded-full px-4">
                  <SelectValue
                    placeholder={sortBy === "new" ? "Newest" : "Latest"}
                  ></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Sort By</SelectLabel>
                    <SelectItem value="new">Newest</SelectItem>
                    <SelectItem value="old">Latest</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select
                onValueChange={(value: string) => handleCategoryChange(value)}
              >
                <SelectTrigger className="w-[180px] h-12 rounded-full px-4 md:hidden">
                  <SelectValue
                    placeholder={sortBy === "all" ? "Category" : "All"}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">All</SelectItem>

                    {categories.map((category, index) => (
                      <SelectItem key={index} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mx-auto max-w-screen-xl">
            {loading ? (
              <div className="flex flex-col justify-center items-center h-screen gap-2">
                <BeatLoader loading={loading} color="#F9A73E" size={10} />
                <h1 className="text-xl">Loading</h1>
              </div>
            ) : (
              <>
                {currentPosts.length > 0 ? (
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-full py-8">
                    {currentPosts.map((product, idx) => (
                      <div key={idx}>
                        <div className="group relative block overflow-hidden rounded-xl bg-white">
                          <Link
                            href={{
                              pathname: "/products/detail",
                              query: { id: product?.id },
                            }}
                            key={product.id}
                          >
                            <div>
                              <Image
                                src={product.image[0]}
                                alt="photo-product"
                                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                                width={500}
                                height={500}
                              />
                              <div className="relative bg-white p-4">
                                <h3 className="text-lg 2xl:text-xl font-semibold text-darkcmi line-clamp-2">
                                  {product.nama}
                                </h3>
                              </div>
                            </div>
                          </Link>
                          <div className="w-full flex justify-center pb-6">
                            <Link
                              href="https://api.whatsapp.com/send?phone=628170500601"
                              className=" w-full px-4"
                              target="__blank"
                            >
                              <Button
                                variant="default"
                                className="text-center w-full bg-darkcmi hover:bg-darkcmi hover:bg-opacity-90"
                              >
                                Contact Us
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex justify-center items-center h-64 w-full">
                    <h1 className="text-2xl font-bold text-gray-500">
                      Tidak ada produk yang ditemukan
                    </h1>
                  </div>
                )}

                <PaginationSection
                  // products={products.length}
                  products={filteredProducts} // Menggunakan filteredProducts yang berisi produk yang sudah difilter
                  postsPerPage={postsPerPage}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  handlePrevPage={handlePrevPage}
                  handleNextPage={handleNextPage}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function PaginationSection({
  products, // Gunakan products yang sudah difilter
  postsPerPage,
  currentPage,
  setCurrentPage,
  handlePrevPage,
  handleNextPage,
}: {
  products: any[];
  postsPerPage: number;
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
  handlePrevPage: () => void;
  handleNextPage: () => void;
}) {
  const router = useRouter();

  // Hitung total jumlah produk setelah difilter
  const totalFilteredProducts = products.length;

  // Hitung jumlah halaman berdasarkan jumlah produk yang sesuai dengan filter pencarian
  const totalPages = Math.ceil(totalFilteredProducts / postsPerPage);

  // Lakukan slice pada array produk yang sesuai dengan halaman saat ini
  const currentPosts = products.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Render halaman-halaman
  const renderPages = () => {
    if (totalPages === 1) {
      return null; // Jika hanya ada satu halaman, tidak perlu menampilkan angka halaman
    }

    // Render nomor halaman dan titik-titik jika perlu
    // Sesuaikan dengan currentPage untuk menentukan kelas aktif
    const renderedPages = [];
    for (let i = 1; i <= totalPages; i++) {
      renderedPages.push(
        <PaginationItem
          key={i}
          className={
            currentPage === i ? "rounded-md text-darkcmi bg-white" : ""
          }
        >
          <PaginationLink
            onClick={() => {
              setCurrentPage(i);
              router.push(`?page=${i}`);
            }}
            className=""
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return renderedPages;
  };

  // Menonaktifkan tombol prev jika currentPage adalah halaman pertama
  const isPrevDisabled = currentPage === 1;

  // Menonaktifkan tombol next jika currentPage adalah halaman terakhir
  const isNextDisabled = currentPage === totalPages;

  // Menampilkan pagination hanya jika jumlah produk yang ditemukan lebih dari 6
  if (totalFilteredProducts <= postsPerPage) {
    return null;
  }

  return (
    <div className="cursor-pointer">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={(e) => {
                e.preventDefault(); // Mencegah perilaku default dari event onClick
                handlePrevPage();
                if (!isPrevDisabled) {
                  router.push(`?page=${currentPage - 1}`);
                }
              }}
              isActive={currentPage === 1}
              aria-disabled={isPrevDisabled}
              className={
                isPrevDisabled
                  ? "pointer-events-none opacity-50 bg-darkcmi"
                  : undefined
              }
            />
          </PaginationItem>

          {renderPages()}

          <PaginationItem>
            <PaginationNext
              onClick={(e) => {
                e.preventDefault(); // Mencegah perilaku default dari event onClick
                handleNextPage();
                if (!isNextDisabled) {
                  router.push(`?page=${currentPage + 1}`);
                }
              }}
              isActive={currentPage === totalPages}
              aria-disabled={isNextDisabled}
              className={
                isNextDisabled
                  ? "pointer-events-none opacity-50 bg-darkcmi"
                  : undefined
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
