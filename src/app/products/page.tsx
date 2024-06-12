import ProductPage from "@/components/product/product";
import Image from "next/image";

async function getData() {
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

  // Extract unique categories from the products
  const categories = Array.from(
    new Set(
      products.map(
        (product: { category_name: string }) => product.category_name
      )
    )
  );

  return { products, categories };
}

export default async function Product() {
  const { products, categories } = await getData();
  // console.log(products);

  return (
    <>
      <div className="pt-20">
        <Image
          src="/images/bg/bbblurry.svg"
          alt=""
          width={1920}
          height={1080}
          className="fixed -z-50"
        />
        <ProductPage products={products} categories={categories} />
      </div>
    </>
  );
}
