import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DetailPostProps {
  id: number;
  title: string;
  message: string;
  image_name: string;
}

interface Props {
  post: DetailPostProps[];
}

export default function MainFileBlog({ post }: Props) {
  return (
    <>
      <section className="pb-16 bg-slate-50 text-darkcmi">
        <div className="container">
          <div className="grid grid-cols-3 gap-8">
            {post.map((post) => (
              <Link
                key={post.id}
                href={{
                  pathname: "/blog/detail",
                  query: { id: post.id },
                }}
              >
                <div className="group rounded-2xl relative block overflow-hidden bg-white">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image_name}
                      alt={post.title}
                      width={800}
                      height={800}
                      className="w-full h-72 scale-100 transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <h1 className="text-2xl font-semibold group-hover:underline line-clamp-2">
                      {post.title}
                    </h1>
                    <h1
                      className="text-sm line-clamp-2 pt-2"
                      dangerouslySetInnerHTML={{ __html: post.message }}
                    ></h1>
                    <div className="pt-4 flex gap-2 items-center">
                      <Clock size={16} />
                      <h1 className="text-sm">12 June 2024</h1>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
