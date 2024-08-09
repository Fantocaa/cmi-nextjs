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
          className="max-w-4xl mx-auto"
        />
        <div className="grid grid-cols-3 mx-auto justify-center text-center">
          <div className="flex gap-4 items-center justify-center">
            <Cog color="white" size={40} />
            <p className="text-lg">Full Customizable</p>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <Banknote color="white" size={40} />
            <h1 className="text-lg">Best Price</h1>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <Cpu stroke="white" size={40} />
            <h1 className="text-lg">High Technology</h1>
          </div>
        </div>
      </div>
    </>
  );
}
