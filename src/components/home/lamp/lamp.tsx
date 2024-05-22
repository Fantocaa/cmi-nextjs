"use client";
import React from "react";
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
        className="md:text-5xl 2xl:text-6xl max-w-full mt-8 bg-gradient-to-br from-slate-100 to-slate-300 py-4 text-center bg-clip-text text-4xl font-medium tracking-tight leading-loose text-transparent "
      >
        <h1 className="max-w-4xl 2xl:max-w-6xl text-center mx-auto">
          Solusi LED dan Multimedia Berkualitas Tinggi untuk Kebutuhan Anda
        </h1>
        <p className="lg:text-xl 2xl:text-2xl mt-8 max-w-4xl text-center mx-auto">
          Kami menyediakan sewa LED, peralatan pencahayaan, dan multimedia
          equipment berkualitas tinggi untuk memenuhi kebutuhan acara Anda.
          Percayakan pada kami untuk memberikan solusi yang profesional dan
          memukau.
        </p>
        <Link href="/products">
          <Button
            variant="default"
            className="button-services px-8 py-4 cursor-pointer mt-8"
          >
            See All Products
          </Button>
        </Link>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-12 w-full"
        >
          {/* <BentoLayout /> */}
          <ProductHome />
        </motion.div>
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
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-darkcmi w-full rounded-md z-0 xl:pt-72 2xl:pt-[20rem]",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
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
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
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
          <div className="absolute  w-40 h-[100%] right-0 bg-darkcmi  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-darkcmi h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-darkcmi blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-orangecmi opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-orangecmi blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-white "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-darkcmi "></div>
      </div>

      <div className="relative z-50 flex -translate-y-28 2xl:-translate-y-24 flex-col items-center">
        {children}
      </div>
    </div>
  );
};
