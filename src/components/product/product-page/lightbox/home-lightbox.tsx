"use client";

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Product = {
  id: number;
  image_name: string[];
};

type ProductProps = {
  image: Product[];
};

export default function HomeLightbox({ image }: ProductProps) {
  const [index2, setIndex2] = useState<number>(-1);

  return (
    <>
      {image.slice(0, 6).map((product, idx) => (
        <div key={idx}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full items-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-semibold">
                Handling Project
              </h1>
              <p className="text-lg py-4 leading-normal max-w-[26rem]">
                Every project we handle is an opportunity to create something
                extraordinary. We work together with clients to understand their
                specific needs and provide customized solutions.
              </p>
              <Link href="/project">
                <Button className="py-2 px-8 max-w-[200px] button-services">
                  See All
                </Button>
              </Link>
            </div>
            <div className="block md:hidden w-full">
              <Carousel className="overflow-hidden relative">
                <CarouselContent className="flex">
                  {product.image_name.map((imgSrc, imgIdx) => (
                    <CarouselItem
                      key={imgIdx}
                      className="relative cursor-pointer flex-shrink-0"
                      onClick={() => setIndex2(imgIdx)} // Set indeks gambar yang dipilih saat gambar diklik
                    >
                      <Image
                        src={imgSrc}
                        alt={`image-${imgIdx}`}
                        className="h-96 w-full object-cover transition duration-500 group-hover:scale-105 bg-white text-white rounded-2xl"
                        width={500}
                        height={500}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2"></CarouselPrevious>
                <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2"></CarouselNext>
              </Carousel>
            </div>

            {product.image_name.map((imgSrc, imgIdx) => (
              <div key={imgIdx} className="hidden md:block">
                <div
                  className="group relative block overflow-hidden rounded-xl border border-darkcmi border-opacity-10 shadow-lg cursor-pointer"
                  onClick={() => setIndex2(imgIdx)} // Set indeks gambar yang dipilih saat gambar diklik
                >
                  <Image
                    src={imgSrc}
                    alt={`image-${imgIdx}`}
                    className="h-96 w-full object-cover transition duration-500 group-hover:scale-105 bg-white text-white"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Lightbox
        plugins={[Fullscreen, Zoom]}
        open={index2 >= 0}
        index={index2}
        close={() => setIndex2(-1)} // Set indeks kembali ke -1 saat lightbox ditutup
        slides={image
          .flatMap((product) => product.image_name) // Menggabungkan semua array image_name menjadi satu array
          .map((image_name) => ({ src: image_name }))}
      />
    </>
  );
}
