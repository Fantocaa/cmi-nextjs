import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DetailPostProps {
  id: number;
  title: string;
  message: string;
  image_name: string;
  created_at: string;
}

interface Props {
  post: DetailPostProps[];
}

export default function HeaderBlog({ post }: Props) {
  return (
    <>
      <section className="pt-16 md:pt-32 pb-16">
        <div className="container hidden md:block">
          <div className="grid grid-cols-10 gap-8 ">
            {/* Main blog post */}
            <div className="col-span-10 md:col-span-7 relative h-[23.7rem] group">
              <Link href="/">
                <div className="w-full h-full relative rounded-2xl overflow-hidden">
                  <Image
                    src={post[0].image_name}
                    alt={post[0].title}
                    width={1080}
                    height={1080}
                    className="object-cover w-full h-full scale-100 transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-6 text-white">
                    {/* <span className="bg-white text-black px-2 py-1 rounded text-sm">
                      {blog[0].category}
                    </span> */}
                    <h1 className="text-2xl mt-2 group-hover:underline line-clamp-2">
                      {post[0].title}
                    </h1>
                    <div className="pt-4 flex gap-2 items-center">
                      <Clock size={16} />
                      <h1 className="text-sm">{post[0].created_at}</h1>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* Other featured posts */}
            <div className="col-span-3 text-white hidden md:block">
              <h2 className="text-lg font-semibold mb-4">
                Other featured posts
              </h2>
              <div className="flex flex-col gap-4">
                {post.slice(1, 5).map((post) => (
                  <Link
                    href={{
                      pathname: "/blog/detail",
                      query: { id: post.id },
                    }}
                    key={post.id}
                  >
                    <div className="w-full flex items-center gap-4 group">
                      <div className="flex-shrink-0 relative overflow-hidden rounded-lg">
                        <Image
                          src={post.image_name}
                          alt={post.title}
                          width={256}
                          height={256}
                          className="rounded-lg object-cover h-full w-32 scale-100 transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <h1 className="text-base line-clamp-2 group-hover:underline">
                          {post.title}
                        </h1>
                        <div className="pt-1 flex gap-2 items-center">
                          <Clock size={12} />
                          <h1 className="text-xs">{post.created_at}</h1>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
