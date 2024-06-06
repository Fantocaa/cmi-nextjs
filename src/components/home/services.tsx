import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LampDemo } from "./lamp/lamp";

const Services = () => {
  return (
    <div className="md:container mx-auto">
      {/* <div className="w-full h-full rounded-2xl flex justify-center items-center glowing-border"> */}
      {/* <div className="bg-gradient-to-r from-orangecmi to-red-500 w-full h-full rounded-2xl flex justify-center items-center"> */}
      <LampDemo />
      {/* </div> */}
    </div>
  );
};

export default Services;
