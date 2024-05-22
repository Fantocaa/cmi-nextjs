import React from "react";
import { getDetailProductsPage } from "@/components/product/helpers";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function DetailProductPage({ searchParams }: Props) {
  // console.log(searchParams.id);

  const idString = searchParams?.id;
  const id = Number(idString);
  // console.log(typeof id);

  const product = await getDetailProductsPage(id);

  // console.log(product);

  return (
    <section className="py-32 bg-white">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-darkcmi">
                {product?.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex mt-16">
          <div className="w-1/2">
            <Image
              src={product?.image}
              alt="product image"
              width={500}
              height={500}
              className="h-72 object-contain"
            />
          </div>
          <div className="text-darkcmi w-1/2">
            <h1 className="text-4xl font-bold">{product?.title}</h1>
            <p className="mt-8">{product?.description}</p>
            <div className="mt-8">
              <Link href="/" target="__blank">
                <Button className="p-8 text-lg">
                  Contact Us for More Info
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
