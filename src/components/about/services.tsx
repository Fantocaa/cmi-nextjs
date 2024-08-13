import React from "react";
import { BentoGrid, BentoGridItem } from "../home/lamp/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export default function Services() {
  return (
    <>
      <div className="container py-16">
        <div className="relative">
          <Image
            src="/images/header/Frame 815.png"
            alt="how"
            width={1080}
            height={1080}
            className="absolute -z-10"
          />

          <div className="md:flex gap-8 items-center pt-24 md:pt-40">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl font-semibold mb-4">Design</h1>
              <p className="max-w-lg text-lg">
                Every venue that we handle, treated with a different design and
                plotting. We costumize and recommend a system of lighting and
                LED Display that appropriate and required by customer.
                Therefore, the system can run maximal and efficient.
              </p>
            </div>
            <div className="w-full md:w-1/2 pt-8 md:pt-0">
              <Image
                src="/images/bg/20230608_151945 1.png"
                alt="image-1"
                width={1080}
                height={1080}
                className="rounded-xl"
              />
            </div>
          </div>

          <div className="md:flex flex-row-reverse gap-8 items-center pt-24 md:pt-16">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl font-semibold mb-4">
                Installation Testing & Commisioning
              </h1>
              <p className="max-w-lg text-lg">
                The stage lighting and LED Display system that had been install
                was programmed setting and testing by our team that have been
                trained and experienced in the field of stage lighting and LED
                Display, with using a variety of measurement device to get
                result and accurates colors.
              </p>
            </div>
            <div className="w-full md:w-1/2 pt-8 md:pt-0">
              <Image
                src="/images/bg/20220117_155948.jpg"
                alt="image-1"
                width={1080}
                height={1080}
                className="rounded-xl"
              />
            </div>
          </div>

          <div className="md:flex gap-8 items-center pt-24 md:pt-16">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl font-semibold mb-4">
                After Sales Service
              </h1>
              <p className="max-w-lg text-lg">
                We are realizes that after sales service is one of the most
                important and can’t be eliminate in this industry. therefore, we
                have our own service department that train the customer and
                handle the service for al product that we supply.
              </p>
            </div>
            <div className="w-full md:w-1/2 pt-8 md:pt-0">
              <Image
                src="/images/bg/Foto.jpg"
                alt="image-1"
                width={1080}
                height={1080}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export function BentoGridDemo() {
//   return (
//     <BentoGrid className="container py-32">
//       {items.map((item, i) => (
//         <BentoGridItem
//           key={i}
//           title={item.title}
//           description={item.description}
//           header={item.header}
//           //   icon={item.icon}
//           className={i === 3 || i === 6 ? "md:col-span-2" : ""}
//         />
//       ))}
//     </BentoGrid>
//   );
// }
// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
// );
// const items = [
//   {
//     title: "Design",
//     description: "Explore the birth of groundbreaking ideas and inventions.",
//     // header: <Skeleton />,
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Digital Revolution",
//     description: "Dive into the transformative power of technology.",
//     header: <Skeleton />,
//     icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Art of Design",
//     description: "Discover the beauty of thoughtful and functional design.",
//     header: <Skeleton />,
//     icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Power of Communication",
//     description:
//       "Understand the impact of effective communication in our lives.",
//     header: <Skeleton />,
//     icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Pursuit of Knowledge",
//     description: "Join the quest for understanding and enlightenment.",
//     header: <Skeleton />,
//     icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Joy of Creation",
//     description: "Experience the thrill of bringing ideas to life.",
//     header: <Skeleton />,
//     icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Spirit of Adventure",
//     description: "Embark on exciting journeys and thrilling discoveries.",
//     header: <Skeleton />,
//     icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
//   },
// ];
