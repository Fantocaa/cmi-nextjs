"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
import { SparklesIcon } from "lucide-react";

export default function HeaderCarousel() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-90 z-10">
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
              easeInOut,
              stopOnInteraction: false,
            }),
          ]}
          className="absolute h-96 bg-darkcmi z-0"
        >
          <CarouselContent className="h-96 -ml-0">
            <CarouselItem className="pl-0">
              <Image
                alt="hero"
                src="/images/bg/20230630_173854.jpg"
                className="w-full h-screen object-cover"
                width={1080}
                height={1080}
              />
            </CarouselItem>
            <CarouselItem className="pl-0">
              <Image
                alt="hero"
                src="/images/bg/IMG_5253.jpg"
                className="w-full h-screen object-cover"
                width={1080}
                height={1080}
              />
            </CarouselItem>
            <CarouselItem className="pl-0">
              <Image
                alt="hero"
                src="/images/bg/IMG-20231017-WA0015.jpg"
                className="w-full h-screen object-cover"
                width={1080}
                height={1080}
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
