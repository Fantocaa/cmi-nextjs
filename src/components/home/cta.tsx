import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <div className="container">
      <div className="mt-8 relative">
        <div className="absolute top-32 md:top-48 xl:top-56 pl-6 md:pl-0 md:right-6 lg:right-36 text-darkcmi">
          <h1 className="text-4xl md:text-5xl font-semibold max-w-sm">
            It&apos;s easy to get{" "}
            <span className="text-7xl md:text-8xl font-bold">Started</span>
          </h1>
          <p className="text-xl md:text-2xl py-4 font-semibold">
            We can talk anymore about this
          </p>
          <Link href="/contact">
            <Button className="p-6 text-lg bg-darkcmi">Contact Us</Button>
          </Link>
        </div>
      </div>
      <div className="py-16">
        <Image
          src="/images/Frame 626.png"
          alt="contact"
          width={1920}
          height={1080}
          className="w-full h-[21rem] md:h-[36rem] rounded-xl object-cover object-right md:object-center"
        />
      </div>
    </div>
  );
};

export default Cta;
