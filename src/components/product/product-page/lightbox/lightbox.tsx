"use client";

import Image from "next/image";
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

interface LightboxProps {
  images: string[];
}

export default function Lightboxx({ images }: LightboxProps) {
  const [index, setIndex] = useState<number>(0);
  const [index2, setIndex2] = useState<number>(-1);

  return (
    <>
      <div className="w-1/2">
        <div className="pb-4">
          <Image
            src={images[index]}
            alt={`photo-product-${index}`}
            className="h-96 2xl:h-[30rem] w-full object-cover rounded-xl cursor-pointer"
            width={500}
            height={500}
            onClick={() => setIndex2(index)}
          />
        </div>
        <div className="flex flex-wrap gap-4 2xl:gap-[0.83rem]">
          {images.map((imgSrc, idx) => (
            <Image
              key={idx}
              src={imgSrc}
              alt={`product-image-${idx}`}
              width={96}
              height={96}
              className={`h-24 w-24 object-cover rounded-xl cursor-pointer ${
                idx === index ? "border-4 border-yellow-500" : ""
              }`}
              onClick={() => setIndex(idx)}
            />
          ))}
        </div>
      </div>
      <Lightbox
        plugins={[Fullscreen, Zoom]}
        open={index2 >= 0}
        index={index2}
        close={() => setIndex2(-1)}
        // slides={images.map((image) => ({ src: images[index] }))}
        slides={images.map((image) => ({ src: image }))}
      />
    </>
  );
}
