import React from "react";

import type { Metadata } from "next";
import ProjectMain from "@/components/project/projectMain";

export const metadata: Metadata = {
  title: "Project | PT. Cahaya Mercusuar Indonesia",
  description: "Sewa LED Berkualitas Tinggi",
};

export default function Project() {
  return (
    <>
      <section className="py-32 container">
        <ProjectMain />
      </section>
    </>
  );
}
