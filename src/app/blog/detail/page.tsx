import { getDetailPostPage } from "@/components/product/helpers/post";
import Image from "next/image";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = async ({ searchParams }: Props) => {
  const idString = searchParams?.id;
  const id = Number(idString);

  const post = await getDetailPostPage(id);

  // console.log(post);

  return {
    title: `${post?.title} | PT. Cahaya Mercusuar Indonesia`,
  };
};

export default async function DetailBlog({ searchParams }: Props) {
  const idString = searchParams?.id;
  const id = Number(idString);

  const post = await getDetailPostPage(id);

  return (
    <section className="py-32 bg-white text-darkcmi">
      <div className="container">
        <Image
          src={post?.image_name}
          alt={post?.title}
          width={1440}
          height={1440}
          className="h-[28rem] object-cover rounded-2xl"
        />
        <h1 className="text-4xl py-4 font-semibold">{post?.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: post?.message,
          }}
        />
      </div>
    </section>
  );
}
