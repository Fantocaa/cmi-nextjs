import React from "react";
import Projects from "@/components/project/project";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project | PT. Cahaya Mercusuar Indonesia",
  description: "Sewa LED Berkualitas Tinggi",
};

async function getData(): Promise<ProductProps> {
  const res = await fetch(
    // "http://cmi_backend_filament.test/api/admin/projects",
    "https://backend.cahayamercusuar.com/api/admin/projects",
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

export default async function Project() {
  const { image } = await getData();

  // console.log(image);

  return (
    <>
      <section className="py-32 container">
        <Projects image={image} />
      </section>
    </>
  );
}
