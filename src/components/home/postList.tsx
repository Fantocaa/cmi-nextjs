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

export default function PostList({ post }: Props) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {post.slice(0, 4).map((post) => (
          <Link
            key={post.id}
            href={{
              pathname: "/blog/detail",
              query: { id: post.id },
            }}
          >
            <div className="group rounded-2xl relative block h-full">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src={post.image_name}
                  alt={post.title}
                  width={800}
                  height={800}
                  className="w-full h-48 rounded-2xl scale-100 transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="pt-6 text-white">
                <h1 className="text-2xl font-semibold group-hover:underline line-clamp-2">
                  {post.title}
                </h1>
                <h1
                  className="text-sm line-clamp-2 pt-2"
                  dangerouslySetInnerHTML={{ __html: post.message }}
                ></h1>
                <div className="pt-4 flex gap-2 items-center">
                  <Clock size={16} />
                  <h1 className="text-sm">{post.created_at}</h1>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
