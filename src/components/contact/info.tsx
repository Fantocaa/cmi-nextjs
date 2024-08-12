import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Info() {
  return (
    <>
      <div className="container">
        <div className="relative pt-8">
          <div className="absolute top-48 2xl:top-72 right-6 md:right-16">
            <h1 className="text-4xl font-semibold text-darkcmi">Contact Us</h1>
            <ul className="flex flex-col gap-4 mt-8 text-darkcmi">
              <li className="flex items-center gap-4">
                <Phone />
                <h1 className="text-lg md:text-xl">+62 821-4337-9200</h1>
              </li>
              <li className="flex items-center gap-4">
                <Mail />
                <h1 className="text-lg md:text-xl">
                  sub.operations@caritravel.com
                </h1>
              </li>
              <li className="flex items-center gap-4">
                <MapPin />
                <h1 className="text-lg md:text-xl md:max-w-md w-64 md:w-full">
                  Jl. Dharmahusada Indah Blok I Nomor Ruko 16 E, RT.01, RW.09,
                  Kec. Mulyorejo, Kel. Mulyorejo Surabaya Kode pos : 60115
                </h1>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden md:block py-16">
          <Image
            src="/images/Frame 626.png"
            alt="contact"
            width={1080}
            height={1080}
            className="w-full h-[29rem] 2xl:h-full rounded-xl object-cover"
          />
        </div>
        <div className="md:hidden py-16">
          <Image
            src="/images/Frame 626.png"
            alt="contact"
            width={1080}
            height={1080}
            className="w-full h-[28rem] rounded-xl"
          />
        </div>
      </div>
    </>
  );
}
