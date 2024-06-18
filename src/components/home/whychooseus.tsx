import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import Link from "next/link";

const Whychooseus = () => {
  return (
    <div className="container md:flex justify-center gap-8">
      <div className="w-full md:w-1/2 pt-4">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Why{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orangecmi to-redcmi">
            Choose Us?
          </span>
        </h1>
        <p className="text-lg py-4 leading-normal max-w-[35rem]">
          {/* Kami memahami betapa pentingnya visual dan pencahayaan dalam
          menciptakan pengalaman acara yang mengesankan dan profesional. Dengan
          pengalaman dan dedikasi kami, kami menawarkan solusi LED dan
          multimedia berkualitas tinggi yang dirancang untuk memenuhi kebutuhan
          unik Anda. */}
          We understand the importance of visuals and lighting in creating
          memorable and professional event experiences. With our experience and
          dedication, we offer high-quality LED and multimedia solutions
          designed to meet your unique needs.
        </p>
        <Link href="/about">
          <Button className="bg-opacity-100 py-2 px-8 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
            About Us
          </Button>
        </Link>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full md:w-1/2 mt-8 md:mt-0"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-3xl">Customizable</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur. Convallis duis nulla eget
            nulla sed bibendum leo. Ultrices consectetur sed massa eu tellus
            adipiscing morbi eros risus.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-3xl">Technology</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur. Convallis duis nulla eget
            nulla sed bibendum leo. Ultrices consectetur sed massa eu tellus
            adipiscing morbi eros risus.
          </AccordionContent>
        </AccordionItem>
        {/* <AccordionItem value="item-3">
          <AccordionTrigger className="text-3xl">Innovation</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur. Convallis duis nulla eget
            nulla sed bibendum leo. Ultrices consectetur sed massa eu tellus
            adipiscing morbi eros risus.
          </AccordionContent>
        </AccordionItem> */}
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-3xl">Best Price</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur. Convallis duis nulla eget
            nulla sed bibendum leo. Ultrices consectetur sed massa eu tellus
            adipiscing morbi eros risus.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Whychooseus;
