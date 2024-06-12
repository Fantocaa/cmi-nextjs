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
import Lightboxx from "@/components/product/product-page/lightbox/lightbox";
import { getDetailProductsPage } from "@/components/product/helpers";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IconBrandWhatsapp } from "@tabler/icons-react";

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
    <section className="relative">
      <Image
        src="/images/bg/bbblurry.svg"
        alt="bg"
        width={1920}
        height={1080}
        className="fixed -z-50"
      />
      <div className="container py-32 text-white">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/products" className="text-white">
                Products
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white" />
            <BreadcrumbItem>
              <BreadcrumbPage>{product?.category_name}</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white" />
            <BreadcrumbItem>
              <BreadcrumbPage>{product?.nama}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex mt-8 gap-12">
          <Lightboxx images={product?.image} />

          <div className="text-white w-1/2">
            <h1 className="text-4xl font-bold">{product?.nama}</h1>
            <div className="mt-8">
              <h2 className="py-4 text-2xl font-semibold">Deskripsi : </h2>
              <div
                className=" max-w-full break-words"
                dangerouslySetInnerHTML={{ __html: product.deskripsi }}
              />
            </div>
            <div className="mt-8">
              <h2 className="py-4 text-2xl font-semibold">Spesifikasi : </h2>
              <div
                className=" max-w-full break-words"
                dangerouslySetInnerHTML={{ __html: product.spesifikasi }}
              />
            </div>
            <div className="mt-8">
              <Link
                href="https://api.whatsapp.com/send?phone=628170500601"
                target="__blank"
              >
                <Button className="p-6 py-8 text-lg bg-orangecmi text-darkcmi font-semibold flex gap-2 hover:bg-orangecmi hover:bg-opacity-75">
                  <IconBrandWhatsapp />
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
