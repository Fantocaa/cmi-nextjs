import Worth from "@/components/about/worth";
import Header from "@/components/about/header";
import MainAbout from "@/components/about/main";
import Image from "next/image";
// import { BentoGridDemo } from "@/components/about/services";
import Services from "@/components/about/services";
import Map from "@/components/about/map";
import Cta from "@/components/home/cta";

export const metadata = {
  title: "About | PT. Cahaya Mercusuar Indonesia",
  description: "Sewa LED Berkualitas Tinggi",
};

const About = () => {
  return (
    <section className="relative">
      <Image
        src="/images/bg/bbblurry.svg"
        alt=""
        width={1920}
        height={1080}
        className="fixed -z-50 h-screen object-cover"
      />
      <>
        <Header />
        <MainAbout />
        <Worth />
        <Services />
        <Map />
        <Cta />
        {/* <BentoGridDemo /> */}
      </>
    </section>
  );
};

export default About;
