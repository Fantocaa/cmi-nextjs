import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-darkcmi text-white font-inter w-full py-8 ">
      <div className="container">
        <div className=" lg:px-4 2xl:px-0">
          <div className="block md:flex justify-between pb-4 md:pb-12 gap-8">
            <div className="md:w-1/2">
              <div className="flex items-center gap-4">
                <Link href="/">
                  <Image
                    src="/images/logo/cmi putih.webp"
                    alt="Tako Logo"
                    width={128}
                    height={64}
                  />
                </Link>

                <h1 className="font-bold">PT. CAHAYA MERCUSUAR INDONESIA</h1>
              </div>
              <h2 className="text-slate-300 w-full md:max-w-md">
                Illuminate Every Moment with the Best LED Display Solutions for
                All Your Events.
              </h2>
            </div>
            <div className="md:w-1/2 flex flex-col lg:items-end items-start pt-8 md:pt-0">
              <div>
                <h1 className="pb-4 text-xl text-left">Contact Us</h1>
                <ul className="text-slate-300">
                  <li className="flex items-center gap-4 mb-4">
                    <Phone />
                    <h1 className="2xl:text-lg font-medium ">
                      +62 81 705 006 01
                    </h1>
                  </li>
                  <li className="flex items-center gap-4 mb-4">
                    <Mail />
                    <h1 className="2xl:text-lg font-medium ">
                      info@cahayamercusuar.com
                    </h1>
                  </li>
                  <li className="flex items-center gap-4">
                    <MapPin />
                    <h1 className="2xl:text-lg font-medium md:max-w-md 2xl:max-w-md w-full md:w-64 lg:w-full">
                      Jl. Dharmahusada Indah Blok I Nomor Ruko 16 E, RT.01,
                      RW.09, Kec. Mulyorejo, Kel. Mulyorejo Surabaya Kode pos :
                      60115
                    </h1>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4 pt-6 items-center"></div>
          </div>

          <div className="w-full h-1 bg-white rounded-2xl"></div>
          <div>
            <h1 className="text-xs md:text-base text-center pt-12">
              © 2024 PT. CAHAYA MERCUSUAR INDONESIA, All Rights Reserved
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
