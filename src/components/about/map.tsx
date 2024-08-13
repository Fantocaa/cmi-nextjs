import Image from "next/image";
import React from "react";

export default function Map() {
  return (
    <div className="w-full container py-16">
      <div>
        <Image
          src="/images/header/Frame 816.png"
          alt="map"
          width={1080}
          height={1080}
          className="mx-auto pb-4 w-full md:max-w-screen-md"
        />
      </div>
      <Image
        src="/images/bg/Map.png"
        alt="map"
        width={1080}
        height={1080}
        className="mx-auto"
      />
    </div>
  );
}
