import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Whychooseus = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Accordion type="single" collapsible className="w-1/2">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-3xl">Versatility</AccordionTrigger>
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
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-3xl">Innovation</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur. Convallis duis nulla eget
            nulla sed bibendum leo. Ultrices consectetur sed massa eu tellus
            adipiscing morbi eros risus.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-3xl">Best Price</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur. Convallis duis nulla eget
            nulla sed bibendum leo. Ultrices consectetur sed massa eu tellus
            adipiscing morbi eros risus.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="w-1/2"></div>
    </div>
  );
};

export default Whychooseus;
