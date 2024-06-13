// "use client";

import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import Whychooseus from "@/components/home/whychooseus";
import Videocompor from "@/components/home/videocompor";
import Cta from "@/components/home/cta";
import Galery from "@/components/home/galery";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | PT. Cahaya Mercusuar Indonesia | Sewa LED Berkualitas Tinggi",
  description: "Make your Journey to the next level",
};

export default async function Home() {
  return (
    <section className="relative">
      <Image
        src="/images/bg/bbblurry.svg"
        alt=""
        width={1920}
        height={1080}
        className="fixed -z-50"
      />
      <>
        <Hero />
        <Services />
        <div className="py-16">
          <Whychooseus />
        </div>
        {/* <Videocompor /> */}
        <div className="py-16">
          <Galery />
        </div>
        <Cta />
        {/* </div> */}
      </>
    </section>
  );
}
