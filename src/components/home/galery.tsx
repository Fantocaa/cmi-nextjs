import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Pastikan jalur impor sesuai dengan lokasi Button Anda

async function getData(): Promise<ProductProps> {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const products: Product[] = await res.json();
  return { products };
}

type Product = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

type ProductProps = {
  products: Product[];
};

export default async function Galery() {
  const { products } = await getData();
  return (
    <div className="container flex justify-center items-center">
      <div className="grid grid-cols-3 gap-4">
        {products.slice(0, 6).map((product, idx) => (
          <div key={idx} className="m-4">
            <div className="group relative block overflow-hidden rounded-xl border border-darkcmi border-opacity-10 shadow-lg">
              <div>
                <Image
                  src={product.url}
                  alt={product.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 bg-white text-white"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
