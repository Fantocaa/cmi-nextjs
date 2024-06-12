import React from "react";
import Image from "next/image";
import Link from "next/link";

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
              {/* <div className="flex gap-4 pt-6 items-center">
              <Link
                href="https://www.instagram.com/tako.koporasi/"
                target="__blank"
                aria-label="Instagram"
              >
                <Image
                  src="/images/icon/ig.svg"
                  alt="Instagram"
                  aria-label="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="">
                <Image
                  src="/images/icon/fb.svg"
                  alt="Facebook"
                  aria-label="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="">
                <Image
                  src="/images/icon/yt.svg"
                  alt="Youtube"
                  aria-label="Youtube"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="">
                <Image
                  src="/images/icon/x.svg"
                  alt="X"
                  aria-label="X"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/tako-anugerah-koporasi-pt/"
                target="_blank"
                aria-label="Linkedin"
              >
                <Image
                  src="/images/icon/linkedin.svg"
                  alt="linkedin"
                  width={24}
                  height={24}
                />
              </Link>
            </div> */}
            </div>
            {/* <div>
            <ul>
              Services
              <li></li>
            </ul>
          </div> */}
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
