import React from "react";
import Projects from "@/components/project/project";

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

export default async function ProjectMain() {
  const { image } = await getData();
  //   console.log(image);
  return (
    <>
      <div className="container">
        <Projects image={image} />
      </div>
    </>
  );
}
