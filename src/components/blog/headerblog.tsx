import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeaderBlog() {
  const blog = [
    {
      id: 1,
      src: "/images/bg/marc-schulte-C1j96r-DArc-unsplash.jpg",
      title: "Unlocking Business Efficiency with SaaS Solutions",
      category: "Business",
    },
    {
      id: 2,
      src: "/images/bg/marc-schulte-C1j96r-DArc-unsplash.jpg",
      title: "Revolutionizing industries through SaaS implementation",
    },
    {
      id: 3,
      src: "/images/bg/marc-schulte-C1j96r-DArc-unsplash.jpg",
      title: "Synergizing SaaS and UX design for elevating digital experiences",
    },
    {
      id: 4,
      src: "/images/bg/marc-schulte-C1j96r-DArc-unsplash.jpg",
      title: "Navigating SaaS waters with intuitive UI and UX",
    },
    {
      id: 5,
      src: "/images/bg/marc-schulte-C1j96r-DArc-unsplash.jpg",
      title: "Sculpting SaaS success - the art of UI and UX design",
    },
    {
      id: 6,
      src: "/images/bg/marc-schulte-C1j96r-DArc-unsplash.jpg",
      title: "Sculpting SaaS success - the art of UI and UX design",
    },
  ];

  return (
    <>
      <section className="pt-32 pb-16 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-8 gap-8 ">
            {/* Main blog post */}
            <div className="col-span-5 relative h-[23.7rem]">
              <Link href="/">
                <div className="w-full h-full relative rounded-2xl overflow-hidden">
                  <Image
                    src={blog[0].src}
                    alt={blog[0].title}
                    width={1080}
                    height={1080}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
                    <span className="bg-white text-black px-2 py-1 rounded text-sm">
                      {blog[0].category}
                    </span>
                    <h1 className="text-xl mt-2">{blog[0].title}</h1>
                  </div>
                </div>
              </Link>
            </div>
            {/* Other featured posts */}
            <div className="col-span-3 text-darkcmi">
              <h2 className="text-lg font-semibold mb-4">
                Other featured posts
              </h2>
              <div className="flex flex-col gap-4">
                {blog.slice(1).map((item) => (
                  <Link href="/" key={item.id}>
                    <div className="w-full flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <Image
                          src={item.src}
                          alt={item.title}
                          width={80}
                          height={80}
                          className="rounded-lg object-cover"
                        />
                      </div>
                      <h1 className="text-base line-clamp-2">{item.title}</h1>
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
