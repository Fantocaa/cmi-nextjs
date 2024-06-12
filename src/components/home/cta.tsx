import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <div className="container">
      <div className="mt-8 relative">
        <div className="absolute top-32 md:top-48 xl:top-56 right-6 md:right-36 text-darkcmi">
          <h1 className="text-5xl font-semibold max-w-sm">
            It&apos;s easy to get{" "}
            <span className="text-8xl font-bold">Started</span>
          </h1>
          <p className="text-2xl py-4">We can talk anymore about this</p>
          {/* <ul className="flex flex-col gap-4 mt-8">
            <li className="flex items-center gap-4">
              <Phone />
              <h1 className="2xl:text-lg font-medium ">+62 81 280 578 717</h1>
            </li>
            <li className="flex items-center gap-4">
              <Mail />
              <h1 className="2xl:text-lg font-medium ">
                marketing@cahayamercusuar.com
              </h1>
            </li>
            <li className="flex items-center gap-4">
              <MapPin />
              <h1 className="2xl:text-lg font-medium md:max-w-md 2xl:max-w-md w-64 md:w-full">
                Jl. Dharmahusada Indah Blok I Nomor Ruko 16 E, RT.01, RW.09,
                Kec. Mulyorejo, Kel. Mulyorejo Surabaya Kode pos : 60115
              </h1>
            </li>
          </ul> */}
          <Link href="/contact">
            <Button className="p-6 text-lg">Contact Us</Button>
          </Link>
        </div>
      </div>
      <div className="py-16">
        <Image
          src="/images/Frame 626.png"
          alt="contact"
          width={1920}
          height={1080}
          className="w-full h-96 md:h-[36rem] rounded-xl object-cover object-right md:object-center"
        />
      </div>
    </div>
  );
};

export default Cta;
