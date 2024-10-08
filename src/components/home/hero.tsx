"use client";

import React from "react";
// import { easeInOut, motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="w-full block">
      <div className="w-full relative">
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
              // easeInOut,
              stopOnInteraction: false,
            }),
          ]}
          className="h-full absolute -z-10"
        >
          <CarouselContent className="h-full -ml-0">
            <CarouselItem className="pl-0">
              <Image
                alt="hero"
                src="/images/bg/20230630_173854.jpg"
                className="w-full h-[80dvh] md:h-screen object-cover"
                width={1080}
                height={1080}
              />
            </CarouselItem>
            <CarouselItem className="pl-0">
              <Image
                alt="hero"
                src="/images/bg/IMG_5253.jpg"
                className="w-full h-[80dvh] md:h-screen object-cover"
                width={1080}
                height={1080}
              />
            </CarouselItem>
            <CarouselItem className="pl-0">
              <Image
                alt="hero"
                src="/images/bg/IMG-20231017-WA0015.jpg"
                className="w-full h-[80dvh] md:h-screen object-cover"
                width={1080}
                height={1080}
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        <div className="h-[80dvh] md:h-screen w-full flex justify-center items-center z-50 bg-darkcmi bg-opacity-80 pt-16 2xl:pt-0">
          <div className="h-full w-full flex flex-col gap-4 justify-center m-auto items-center text-center px-4 sm:px-0">
            <div
              //   variants={slideInFromTop}
              className="Welcome-box py-[8px] px-[7px] border border-[#BF212F] opacity-[0.9] flex justify-center items-center text-center "
            >
              <SparklesIcon className="text-[#F9A73E] mr-[10px] h-5 w-5" />
              <h1 className="Welcome-text text-xs pr-2 ">
                PT. Cahaya Mercusuar Indonesia
              </h1>
            </div>

            <div
              //   variants={slideInFromLeft(0.5)}
              className="flex flex-col gap-6 mt-6 text-4xl md:text-7xl 2xl:text-8xl font-bold text-white w-auto h-auto max-w-[900px] leading-[1.05] opacity-100"
            >
              <span>
                Providing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orangecmi to-redcmi">
                  {" "}
                  the best{" "}
                </span>
                Project Experience
              </span>
            </div>

            <p
              //   variants={slideInFromLeft(0.8)}
              className="text-lg lg:text-xl 2xl:text-2xl text-white my-4 max-w-3xl 2xl:max-w-[960px]"
            >
              {/* Terangi Setiap Momen dengan Solusi LED Display Terbaik untuk Semua
              Jenis Event Anda. Pengalaman Visual yang Luar Biasa dan
              Mengesankan, Dijamin Membawa Sukses dan Kemeriahan ke Setiap Sudut
              Ruangan. */}
              Illuminate Every Moment with the Best LED Display Solutions for
              All Your Events. Extraordinary and Impressive Visual Experiences,
              Guaranteed to Bring Success and Festivity to Every Corner of the
              Room.
            </p>
            <Link
              href="https://api.whatsapp.com/send?phone=628170500601"
              target="__blank"
              //   variants={slideInFromLeft(1)}j
              // className="bg-darkcmi py-2 px-8 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            >
              <Button className="bg-opacity-100 py-2 px-8 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
