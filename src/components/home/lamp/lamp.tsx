"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BentoLayout from "./bento-layout";
import ProductHome from "./product-home";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" max-w-full mt-8 bg-gradient-to-br from-slate-100 to-slate-300 py-4 text-center bg-clip-text text-4xl font-medium tracking-tight leading-loose text-transparent px-4 md:px-0"
      >
        <h1 className="max-w-4xl 2xl:max-w-6xl text-center mx-auto text-3xl md:text-5xl 2xl:text-6xl font-semibold">
          Solusi LED dan Multimedia Berkualitas Tinggi untuk Kebutuhan Anda
        </h1>
        <p className="text-xl 2xl:text-2xl mt-8 max-w-4xl text-center mx-auto">
          Kami menyediakan sewa LED, peralatan pencahayaan, dan multimedia
          equipment berkualitas tinggi untuk memenuhi kebutuhan acara Anda.
          Percayakan pada kami untuk memberikan solusi yang profesional dan
          memukau.
        </p>
        <Link
          href="https://drive.tako.co.id/d/s/yl5SVM0c1iGcO1gI4oMvZo23KDkLtzaO/oE7q9J05mcFHvyzZacRMy9mSwtXB_SBM-Urfg5aCYags"
          target="__blank"
        >
          <Button
            variant="default"
            className="button-services px-8 py-4 cursor-pointer mt-8"
          >
            See All Products
          </Button>
        </Link>
        {/* <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-12 w-full"
        >
          <ProductHome />
        </motion.div> */}
      </motion.div>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [initialWidth1, setInitialWidth1] = useState("12rem");
  const [whileInViewWidth1, setWhileInViewWidth1] = useState("8rem");

  const [initialWidth2, setInitialWidth2] = useState("8rem");
  const [whileInViewWidth2, setWhileInViewWidth2] = useState("16rem");

  const [initialWidth3, setInitialWidth3] = useState("15rem");
  const [whileInViewWidth3, setWhileInViewWidth3] = useState("30rem");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setInitialWidth1("4rem"); // lebar initial untuk layar md ke atas
        setWhileInViewWidth1("4rem"); // lebar whileInView untuk layar md ke atas

        setInitialWidth2("8rem"); // lebar initial untuk layar md ke atas
        setWhileInViewWidth2("16rem"); // lebar whileInView untuk layar md ke atas

        setInitialWidth3("8rem"); // lebar initial untuk layar md ke atas
        setWhileInViewWidth3("16rem"); // lebar whileInView untuk layar md ke atas
      }
      if (window.innerWidth >= 768) {
        setInitialWidth1("8rem"); // lebar initial untuk layar md ke atas
        setWhileInViewWidth1("16rem"); // lebar whileInView untuk layar md ke atas

        setInitialWidth2("8rem"); // lebar initial untuk layar md ke atas
        setWhileInViewWidth2("16rem"); // lebar whileInView untuk layar md ke atas

        setInitialWidth3("8rem"); // lebar initial untuk layar md ke atas
        setWhileInViewWidth3("16rem"); // lebar whileInView untuk layar md ke atas
      }
      if (window.innerWidth >= 1024) {
        setInitialWidth1("15rem"); // lebar initial untuk layar md ke atas
        setWhileInViewWidth1("30rem"); // lebar whileInView untuk layar md ke atas

        setInitialWidth2("8rem"); // lebar initial untuk layar md ke atas
        setWhileInViewWidth2("16rem"); // lebar whileInView untuk layar md ke atas

        setInitialWidth3("15rem"); // lebar initial untuk layar md ke atas
        setWhileInViewWidth3("30rem"); // lebar whileInView untuk layar md ke atas
      } else {
        setInitialWidth1("8rem"); // lebar initial untuk layar kecil
        setWhileInViewWidth1("16rem"); // lebar whileInView untuk layar kecil
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial widths

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-darkcmi w-full rounded-md z-0 xl:pt-72 2xl:pt-[20rem]",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          // initial={{ opacity: 0.5, width: "15rem" }}
          // whileInView={{ opacity: 1, width: "30rem" }}
          initial={{ opacity: 0.5, width: initialWidth3 }}
          whileInView={{ opacity: 1, width: whileInViewWidth3 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-redcmi via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-darkcmi h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-darkcmi  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          // initial={{ opacity: 0.5, width: "15rem" }}
          // whileInView={{ opacity: 1, width: "30rem" }}
          initial={{ opacity: 0.5, width: initialWidth3 }}
          whileInView={{ opacity: 1, width: whileInViewWidth3 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-redcmi text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-darkcmi  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-darkcmi h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-darkcmi blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-orangecmi opacity-50 blur-3xl"></div>
        <motion.div
          // initial={{ width: "8rem" }}
          // whileInView={{ width: "16rem" }}
          initial={{ width: initialWidth2 }}
          whileInView={{ width: whileInViewWidth2 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-orangecmi blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: initialWidth1 }}
          whileInView={{ width: whileInViewWidth1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-white "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-darkcmi "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 md:-translate-y-28 2xl:-translate-y-56 flex-col items-center">
        {children}
      </div>
    </div>
  );
};
