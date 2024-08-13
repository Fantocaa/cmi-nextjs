import HeaderBlog from "@/components/blog/headerblog";
import MainFileBlog from "@/components/blog/mainfileblog";
import Image from "next/image";
import React from "react";

async function getData() {
  // const res = await fetch("http://cmi_backend_filament.test/post", {
  const res = await fetch("https://backend.cahayamercusuar.com/post", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const post = await res.json();

  return { post };
}

export default async function Blog() {
  const { post } = await getData();

  return (
    <>
      <Image
        src="/images/bg/bbblurry.svg"
        alt=""
        width={1920}
        height={1080}
        className="fixed -z-50 h-screen object-cover"
      />
      <HeaderBlog post={post} />
      <MainFileBlog post={post} />
    </>
  );
}
