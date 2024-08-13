"use client";

import Image from "next/image";
import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <>
      <section className="w-full block h-[80dvh] 2xl:h-[720px]">
        <div className="w-full relative h-full">
          <div className="w-full h-full absolute -z-10">
            <Image
              alt="hero"
              src="/images/bg/IMG-20231017-WA0015.jpg"
              className="w-full h-full object-cover"
              width={1080}
              height={1080}
            />
          </div>

          <div className="h-[80dvh] 2xl:h-[720px] w-full flex justify-center items-center z-50 bg-darkcmi bg-opacity-80 pt-16 2xl:pt-0">
            <div className="h-full w-full flex flex-col gap-4 pt-28 pb-32 lg:pt-16 2xl:pt-56 items-center text-center px-4 sm:px-0">
              <div className="Welcome-box py-[8px] px-[7px] border border-[#BF212F] opacity-[0.9] flex justify-center items-center text-center ">
                <SparklesIcon className="text-[#F9A73E] mr-[10px] h-5 w-5" />
                <h1 className="Welcome-text text-xs pr-2 ">
                  PT. Cahaya Mercusuar Indonesia
                </h1>
              </div>

              <div className="flex flex-col gap-6 mt-6 text-white w-auto h-auto max-w-[900px] 2xl:max-w-screen-xl leading-[1.05] opacity-100 items-center">
                <h1 className="text-4xl md:text-7xl 2xl:text-8xl font-bold">
                  Creating Unforgettable{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orangecmi to-redcmi">
                    Visual Experiences
                  </span>
                </h1>
                <p className="text-lg text-white max-w-3xl 2xl:max-w-[960px]">
                  We are dedicated to delivering superior and innovative LED
                  Display solutions. We understand the importance of detail in
                  every event. From lighting to multimedia, we provide
                  high-quality equipment that ensures the success and festivity
                  of every moment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
