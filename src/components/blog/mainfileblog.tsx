"use client";

import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BeatLoader } from "react-spinners";

interface DetailPostProps {
  id: number;
  title: string;
  message: string;
  image_name: string;
  created_at: string;
}

interface Props {
  post: DetailPostProps[];
}

export default function MainFileBlog({ post }: Props) {
  // const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialPage = parseInt(searchParams.get("page") || "1", 10);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [loading, setLoading] = useState(true); // Tambahkan keadaan loading

  // Hitung index pertama dan terakhir untuk post yang akan ditampilkan
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  // Ambil data post sesuai dengan halaman saat ini
  const currentPosts = post.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    // Contoh: Menunggu 2 detik sebelum mengatur loading menjadi false
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  // Mengambil nilai page dari URL saat komponen di-mount
  useEffect(() => {
    const page = parseInt(searchParams.get("page") || "1", 10);
    setCurrentPage(page);
  }, [searchParams]);

  return (
    <>
      <section className="pb-16 text-darkcmi">
        <div className="container">
          <h1 className="text-4xl font-bold pb-8 text-white md:hidden">
            CMI Blog List
          </h1>
          {loading ? (
            <div className="flex flex-col justify-center items-center h-screen gap-2">
              <BeatLoader loading={loading} color="#F9A73E" size={10} />
              <h1 className="text-xl text-white">Loading</h1>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <Link
                  key={post.id}
                  href={{
                    pathname: "/blog/detail",
                    query: { id: post.id },
                  }}
                >
                  <div className="group rounded-2xl relative block overflow-hidden bg-white h-full">
                    <div className="relative overflow-hidden">
                      <Image
                        src={post.image_name}
                        alt={post.title}
                        width={800}
                        height={800}
                        className="w-full h-72 scale-100 transition duration-500 group-hover:scale-105 object-cover"
                      />
                    </div>
                    <div className="p-6 bg-white">
                      <h1 className="text-2xl font-semibold group-hover:underline line-clamp-2">
                        {post.title}
                      </h1>
                      <h1
                        className="text-sm line-clamp-2 pt-2"
                        dangerouslySetInnerHTML={{ __html: post.message }}
                      ></h1>
                      <div className="pt-4 flex gap-2 items-center">
                        <Clock size={16} />
                        <h1 className="text-sm">{post.created_at}</h1>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          <PaginationSection
            totalPosts={post.length}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </section>
    </>
  );
}

function PaginationSection({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
}: {
  totalPosts: number;
  postsPerPage: number;
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
}) {
  // Hitung jumlah total halaman
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const router = useRouter();

  // Render halaman-halaman
  const renderPages = () => {
    if (totalPages === 1) {
      return null; // Jika hanya ada satu halaman, tidak perlu menampilkan pagination
    }

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

  return (
    <div className="cursor-pointer mt-16 text-white">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={(e) => {
                e.preventDefault();
                if (!isPrevDisabled) {
                  const newPage = currentPage - 1;
                  setCurrentPage(newPage);
                  router.push(`?page=${newPage}`);
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
                e.preventDefault();
                if (!isNextDisabled) {
                  const newPage = currentPage + 1;
                  setCurrentPage(newPage);
                  router.push(`?page=${newPage}`);
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
