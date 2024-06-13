"use client";

import Image from "next/image";
import React from "react";
import HeaderCarousel from "./header-carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { easeInOut, motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <>
      <section className="w-full block h-[560px] 2xl:h-[720px]">
        <div className="w-full relative ">
          <div className="w-full h-full absolute -z-10">
            <Image
              alt="hero"
              src="/images/bg/IMG-20231017-WA0015.jpg"
              className="w-full h-full object-cover"
              width={1080}
              height={1080}
            />
          </div>

          <div className="h-[560px] 2xl:h-[720px] w-full flex justify-center items-center z-50 bg-darkcmi bg-opacity-80 pt-16 2xl:pt-0">
            <div className="h-full w-full flex flex-col gap-4 pt-28 2xl:pt-56 items-center text-center px-4 sm:px-0">
              <div className="Welcome-box py-[8px] px-[7px] border border-[#BF212F] opacity-[0.9] flex justify-center items-center text-center ">
                <SparklesIcon className="text-[#F9A73E] mr-[10px] h-5 w-5" />
                <h1 className="Welcome-text text-xs pr-2 ">
                  PT. Cahaya Mercusuar Indonesia
                </h1>
              </div>

              <div className="flex flex-col gap-6 mt-6 text-4xl md:text-7xl 2xl:text-8xl font-bold text-white w-auto h-auto max-w-[900px] 2xl:max-w-screen-xl leading-[1.05] opacity-100">
                <span>We Provide the Best Project Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
