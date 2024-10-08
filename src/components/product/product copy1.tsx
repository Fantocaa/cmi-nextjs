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
import { Search } from "lucide-react";
import useProductStore from "@/components/store/useProductStore";
import Filter from "./product-page/filter";

interface DetailProductProps {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: string;
    count: string;
  };
  price: number;
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
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const [sortBy, setSortBy] = useState("new");
  const setProduct = useProductStore((state) => state.setProduct);

  useEffect(() => {
    let updatedProducts = [...products]; // Salin products ke updatedProducts

    if (searchTerm) {
      setCurrentPage(1);
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
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
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter berdasarkan kategori jika kategori telah dipilih
    if (selectedCategory !== "all") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === selectedCategory
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
      router.push(`${pathname}?page=1`); // Pastikan untuk reset halaman ke 1
      setFilteredProducts(products); // Reset ke semua produk jika kategori adalah 'all'
    } else {
      router.push(newUrl);
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  //   const currentPosts = products.slice(firstPostIndex, lastPostIndex);
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
      <div className="container flex">
        <div className="w-1/3 py-12">
          <Filter
            categories={categories}
            selectedCategory={selectedCategory}
            handleCategoryChange={handleCategoryChange}
            handleShowProduct={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
        <div>
          <div className="md:flex p-8 rounded-xl mt-4 w-full justify-between mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex gap-4 relative pb-4 md:pb-0">
              <Search className="absolute translate-y-3 translate-x-4 text-white" />
              <Input
                id="search"
                type="text"
                placeholder="Cari Produk disini"
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
                    placeholder={
                      sortBy === "new" ? "Paling Baru" : "Paling Lama"
                    }
                  ></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Sort By</SelectLabel>
                    <SelectItem value="new">Paling Baru</SelectItem>
                    <SelectItem value="old">Paling Lama</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* <Select
                onValueChange={(value: string) => handleCategoryChange(value)}
              >
                <SelectTrigger className="w-[180px] h-12 rounded-full px-4">
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
              </Select> */}
            </div>
          </div>
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 sm:pb-12 lg:px-8">
            <>
              {currentPosts.length > 0 ? (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-full py-6">
                  {currentPosts.map((product, idx) => (
                    <div key={idx}>
                      <div className="group relative block overflow-hidden rounded-xl border border-darkcmi border-opacity-10 shadow-lg">
                        <Link
                          // href={`/products/${product.id}`}
                          href={{
                            pathname: "/products/detail",
                            query: { id: product?.id },
                          }}
                          key={product.id}
                          // onClick={() => setProduct(product)}
                        >
                          <div>
                            <Image
                              src={product.image}
                              alt="photo-location"
                              className="h-72 w-full object-contain p-8 transition duration-500 group-hover:scale-105 bg-white"
                              width={500}
                              height={500}
                            />
                            <div className="relative bg-white p-6">
                              <h3 className=" text-2xl font-semibold text-darkcmi truncate">
                                {/* Bangkok Dinner Cruise */}
                                {product.title}
                              </h3>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 w-full p-10"></div>
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
            currentPage === i
              ? "bg-content bg-darkcmi rounded-md text-white"
              : ""
          }
        >
          <PaginationLink
            onClick={() => {
              setCurrentPage(i);
              router.push(`?page=${i}`);
            }}
            className="bg-darkcmi opacity-50"
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
