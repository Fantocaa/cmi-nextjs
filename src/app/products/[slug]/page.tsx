import React, { useEffect, useState } from "react";
import HeaderProduct from "@/components/product/product-page/header-product";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
// import ProductTitle from "@/components/product-page/product-title";
// import ProductDetail from "@/components/product-page/detail-product";
// import Cta from "@/components/main-page/cta/cta";
import { Button } from "@/components/ui/button";
// import HeaderProductMobile from "@/components/product-page/header-product-mobile";
// import { useWindowSize } from "usehooks-ts";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { GetServerSideProps } from "next";
import useProductStore from "@/components/store/useProductStore";
import Image from "next/image";
import { getDetailProductsPage } from "@/components/product/helpers";

type DetailProductProps = {
  // products: any[];
  // categories: any[];
  params: { slug: string[] };
};

// export default function ProductPage({ params }: { params: { slug: string } }) {
export default async function DetailProductPage(props: DetailProductProps) {
  const { params } = props;

  // const product = useProductStore((state) => state.product);

  // if (!product) {
  //   return <div>Produk tidak ditemukan</div>;
  // }

  const _idString = params;
  const _id = Number(params);

  const product = await getDetailProductsPage(_id);

  // console.log(product);

  return (
    <section className="relative">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="pt-12 md:pt-8"></div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Product : {params.slug}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <HeaderProduct />
        <div>
          {/* <section>
            <h1>{product.title}</h1>
            <Image
              src={product.image}
              alt={product.title}
              width={1080}
              height={1080}
            />
            <p>{product.description}</p>
            <p>${product.price}</p>
          </section> */}
        </div>
        {/* <HeaderProductMobile /> */}
        {/* {isMobile ? <HeaderProductMobile /> : <HeaderProduct />}
        <ProductTitle />
        <ProductDetail /> */}
      </div>
      {/* <Cta /> */}
      {/* <div className="bg-white w-full bottom-0 fixed shadow-2xl py-4">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <h1 className="text-sm">Starting From :</h1>
            <p className="text-xl md:text-2xl font-bold">RP.5.399.000</p>
          </div>
          <div>
            <Button className="text-base md:text-lg p-5 md:p-8 bg-pinkcaritravel-900 hover:bg-pinkcaritravel-700">
              Pesan Sekarang
            </Button>
          </div>
        </div>
      </div> */}
    </section>
  );
}
