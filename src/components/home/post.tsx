import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PostList from "./postList";
import { Button } from "../ui/button";

async function getData() {
  // const res = await fetch("http://cmi_backend_filament.test/post", {
  const res = await fetch("https://backend.cahayamercusuar.com/post", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const post = await res.json();

  return post;
}

export default async function Post() {
  const post = await getData();
  // console.log(post);

  return (
    <section className="container py-16">
      <div className="bg-darkcmi rounded-2xl p-8">
        <div className="flex justify-between items-center pb-8">
          <h1 className="text-white text-xl md:text-4xl md:pb-8 font-semibold">
            Latest Post
          </h1>
          <Link href="/blog">
            <Button className="py-2 px-8 max-w-[200px] button-services">
              See All
            </Button>
          </Link>
        </div>
        <PostList post={post} />
      </div>
    </section>
  );
}
