import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const Whychooseus = () => {
  return (
    <>
      <section className="relative">
        {/* <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg/elijah-ekdahl-8XxF2kYHIgo-unsplash.jpg"
            alt="Background Image"
            // width={1080}
            // height={1080}
            layout="fill"
            // objectFit="cover"
            // objectPosition="center"
            // quality={100}
            // priority
            className="object-cover object-bottom"
          />
        </div> */}

        {/* Overlay putih dengan opacity */}
        {/* <div className="absolute inset-0 z-5 bg-darkcmi opacity-90"></div> */}

        <div className="relative z-10 md:py-32 pb-16 ">
          <div className="container md:grid grid-cols-2 justify-center gap-8 items-center">
            <div className="w-full pt-4">
              <h1 className="text-4xl md:text-5xl font-semibold text-white">
                Why{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orangecmi to-redcmi">
                  Choose Us?
                </span>
              </h1>
              <p className="text-lg py-4 leading-normal max-w-[35rem] text-white">
                {/* Kami memahami betapa pentingnya visual dan pencahayaan dalam
          menciptakan pengalaman acara yang mengesankan dan profesional. Dengan
          pengalaman dan dedikasi kami, kami menawarkan solusi LED dan
          multimedia berkualitas tinggi yang dirancang untuk memenuhi kebutuhan
          unik Anda. */}
                We understand the importance of visuals and lighting in creating
                memorable and professional event experiences. With our
                experience and dedication, we offer high-quality LED and
                multimedia solutions designed to meet your unique needs.
              </p>
              <Link href="/about">
                <Button className="py-2 px-8 max-w-[200px] button-services">
                  About Us
                </Button>
              </Link>
            </div>
            <div>
              <Image
                src="/images/logo/CMI Logo.png"
                alt="cmi"
                width={1440}
                height={1440}
                className="max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whychooseus;
