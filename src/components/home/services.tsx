import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LampDemo } from "./lamp/lamp";
// import ProductHome from "./lamp/product-home";

async function getData() {
  // const res = await fetch("https://fakestoreapi.com/products", {
  const res = await fetch(
    "http://cmi_backend_filament.test/api/admin/products",
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const jsonResponse = await res.json();
  const products = jsonResponse.data;

  return { products };
}

export default async function Services() {
  const { products } = await getData();

  // console.log(products);

  return (
    <div>
      <LampDemo product={products} />
    </div>
  );
}
