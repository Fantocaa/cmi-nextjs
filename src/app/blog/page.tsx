import HeaderBlog from "@/components/blog/headerblog";
import MainFileBlog from "@/components/blog/mainfileblog";
import React from "react";

async function getData() {
  const res = await fetch("http://cmi_backend_filament.test/post", {
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
      <HeaderBlog />
      <MainFileBlog post={post} />
    </>
  );
}
