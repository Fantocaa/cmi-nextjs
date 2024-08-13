import React from "react";
import Image from "next/image";
import Link from "next/link";
import HomeLightbox from "../product/product-page/lightbox/home-lightbox";

async function getData(): Promise<ProductProps> {
  const res = await fetch(
    // "http://cmi_backend_filament.test/api/admin/image-homes",
    "https://backend.cahayamercusuar.com/api/admin/image-homes",
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const jsonResponse = await res.json();
  const image = jsonResponse.data;
  return { image };
}

type Product = {
  id: number;
  image_name: string[];
};

type ProductProps = {
  image: Product[];
};

export default async function Galery() {
  const { image } = await getData();

  console.log(image);

  return (
    <>
      <div className="md:py-16 md:pt-24 pb-8">
        <div className="container">
          <HomeLightbox image={image} />
        </div>
      </div>
    </>
  );
}
