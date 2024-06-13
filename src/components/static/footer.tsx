import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-darkcmi text-white font-inter w-full py-8 ">
      <div className="container">
        <div className="px-4 md:px-0">
          <div className="block md:flex justify-between pb-12 gap-8">
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
                Terangi Setiap Momen dengan Solusi LED Display Terbaik untuk
                Semua Jenis Event Anda.
              </h2>
            </div>
            <div className="md:w-1/2 flex flex-col items-end">
              <div>
                <h1 className="pb-4 text-xl text-left">Contact Us</h1>
                <ul>
                  <li className="flex items-center gap-4 mb-4">
                    <Phone />
                    <h1 className="2xl:text-lg font-medium ">
                      +62 81 705 006 01
                    </h1>
                  </li>
                  <li className="flex items-center gap-4 mb-4">
                    <Mail />
                    <h1 className="2xl:text-lg font-medium ">
                      marketing@cahayamercusuar.com
                    </h1>
                  </li>
                  <li className="flex items-center gap-4">
                    <MapPin />
                    <h1 className="2xl:text-lg font-medium md:max-w-md 2xl:max-w-md w-64 md:w-full">
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
              © 2024 PT. TAKO ANUGERAH KOPORASI, All Rights Reserved
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
