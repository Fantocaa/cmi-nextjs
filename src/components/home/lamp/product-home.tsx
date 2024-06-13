import Image from "next/image";
import React from "react";
import Link from "next/link";

interface DetailProductProps {
  id: number;
  nama: string;
  deskripsi: string;
  spesifikasi: string;
  image: string[];
  category_id: number;
  category_name: string;
}

interface Props {
  product: DetailProductProps[];
}

export default function ProductHome({ product }: Props) {
  // console.log(product);

  if (!Array.isArray(product)) {
    return null;
  }

  return (
    <div className="grid grid-cols-4 gap-4 pb-16 auto-rows-min">
      {product.slice(0, 4).map((prod, idx) => (
        <div key={idx} className="">
          <div className="group relative block overflow-hidden rounded-xl border border-darkcmi border-opacity-10 shadow-lg">
            <Link
              href={{
                pathname: "/products/detail",
                query: { id: prod.id },
              }}
              key={prod.id}
            >
              <div>
                <Image
                  src={prod.image[0]}
                  alt="photo-location"
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 bg-white"
                  width={500}
                  height={500}
                  // layout="fill" // Menyesuaikan gambar dengan ukuran parent
                  // objectFit="cover" // Memastikan gambar mengisi dengan benar
                />
                <div className="relative bg-white p-6">
                  <h3 className=" text-lg font-semibold text-darkcmi line-clamp-1 text-left">
                    {prod.nama}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
