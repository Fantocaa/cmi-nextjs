// import ProductPage from "@/components/product/product";
// import React from "react";

// async function getData() {
//   // const res = await fetch("http://127.0.0.1:8000/api/admin/products");
//   const res = await fetch("https://fakestoreapi.com/products");
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

// export default async function Product() {
//   const products = await getData();

//   return (
//     <>
//       <div className="pt-24"></div>
//       <ProductPage products={products} />
//     </>
//   );
// }

import ProductPage from "@/components/product/product";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const products = await res.json();
  const categories = Array.from(
    new Set(products.map((product: { category: any }) => product.category))
  );
  return { products, categories };
}

export default async function Product() {
  const { products, categories } = await getData();

  return (
    <>
      <div className="pt-24 bg-white">
        <ProductPage products={products} categories={categories} />
      </div>
    </>
  );
}
