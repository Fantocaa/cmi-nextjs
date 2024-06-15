import { SparklesIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <>
      <div className="bg-darkcmi">
        <div className="relative">
          <div className="container">
            <div className="absolute top-12 lg:top-24 2xl:top-40">
              <div className="Welcome-box py-[8px] px-[7px] border border-[#BF212F] opacity-[0.9] flex justify-center items-center text-center ">
                <SparklesIcon className="text-[#F9A73E] mr-[10px] h-5 w-5" />
                <h1 className="Welcome-text text-xs pr-2 ">
                  PT. Cahaya Mercusuar Indonesia
                </h1>
              </div>
              <h1 className="pt-8 text-3xl md:text-5xl font-semibold">
                Product List
              </h1>
              <p className="pt-4 text-xl max-w-[22rem] lg:max-w-full">
                Explore Our Range of High-Quality LED and Multimedia Equipment
              </p>
            </div>
          </div>
          <Image
            src="/images/header/Header WEB.jpg"
            alt="header"
            width={1920}
            height={600}
            className="h-80 lg:h-full object-cover object-right"
          />
        </div>
      </div>
    </>
  );
}
