import { Banknote, Cog, Cpu } from "lucide-react";
import Image from "next/image";

export default function AllProduct() {
  return (
    <>
      <div className="mb-32">
        <Image
          src="/images/Product LED.png"
          alt="product"
          width={2560}
          height={2560}
          className="w-full max-w-4xl mx-auto pt-8 md:pt-0"
        />
        <div className="md:grid grid-cols-3 mx-auto justify-center text-center pt-8 md:pt-0">
          <div className="flex gap-4 items-center md:justify-center pt-4 md:pt-0">
            <Cog color="white" size={40} />
            <p className="text-lg">Full Customizable</p>
          </div>
          <div className="flex gap-4 items-center md:justify-center pt-4 md:pt-0">
            <Banknote color="white" size={40} />
            <h1 className="text-lg">Best Price</h1>
          </div>
          <div className="flex gap-4 items-center md:justify-center pt-4 md:pt-0">
            <Cpu stroke="white" size={40} />
            <h1 className="text-lg">High Technology</h1>
          </div>
        </div>
      </div>
    </>
  );
}
