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
import Image from "next/image";

type Product = {
  id: number;
  image_name: string[];
};

type ProductProps = {
  image: Product[];
};

export default function Project({ image }: ProductProps) {
  const [index2, setIndex2] = useState<number>(-1);

  return (
    <>
      {image.slice(0, 6).map((product, idx) => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4" key={idx}>
          {product.image_name.map((imgSrc, imgIdx) => (
            <div
              className="group relative block overflow-hidden rounded-xl border border-darkcmi border-opacity-10 shadow-lg cursor-pointer"
              key={imgIdx}
            >
              <Image
                src={imgSrc}
                alt={`image-${imgIdx}`}
                className="h-96 w-full object-cover transition duration-500 group-hover:scale-105 bg-white text-white"
                width={500}
                height={500}
                onClick={() => setIndex2(imgIdx)}
              />
            </div>
          ))}
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
