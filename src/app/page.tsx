// "use client";

import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import Whychooseus from "@/components/home/whychooseus";
import Videocompor from "@/components/home/videocompor";
import Cta from "@/components/home/cta";
import Galery from "@/components/home/galery";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative">
      {/* <Image
        src="/images/bg/bbblurry.svg"
        alt=""
        width={1920}
        height={1080}
        className="fixed -z-50"
      /> */}

      <div>
        {/* <div className="snap-y snap-mandatory"> */}
        <Hero />
        <Services />
        {/* <Whychooseus /> */}
        {/* <Videocompor /> */}
        {/* <Galery /> */}
        <Cta />
        {/* </div> */}
      </div>
    </section>
  );
}
