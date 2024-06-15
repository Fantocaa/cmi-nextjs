// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { cn } from "@/lib/utils";
// import "../../app/globals.css";
// import { buttonVariants } from "@/components/ui/button";
// import { IconBrandWhatsapp } from "@tabler/icons-react";

// // import { Icons } from "@/components/icons"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import { MenuIcon } from "lucide-react";

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Progress",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ];

// export function MainNav() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="bg-darkcmi w-full fixed z-50">
//       <div className="container mx-auto flex justify-between py-2 items-center">
//         <Link href="/">
//           <Image
//             src="/images/logo/cmi putih.webp"
//             width={128}
//             height={48}
//             alt="Logo"
//             className="w-28 2xl:w-32"
//           />
//         </Link>
//         <div className="md:hidden" onClick={toggleMenu}>
//           {menuOpen ? (
//             <MenuIcon className="text-white w-8 h-8" />
//           ) : (
//             <MenuIcon className="text-white w-8 h-8" />
//           )}
//         </div>
//         <div
//           className={`flex flex-col md:flex-row ${
//             menuOpen ? "block" : "hidden"
//           } md:block`}
//         >
//           <NavigationMenu>
//             <NavigationMenuList>
//               <NavigationMenuItem className="hidden md:block">
//                 <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//                     <li className="row-span-3">
//                       <NavigationMenuLink asChild>
//                         <Link
//                           className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                           href="/"
//                         >
//                           <div className="mb-2 mt-4 text-lg font-medium leading-6">
//                             PT. CAHAYA MERCUSUAR INDONESIA
//                           </div>
//                           <p className="text-sm leading-tight text-muted-foreground">
//                             Terangi Setiap Momen dengan Solusi LED Display
//                             Terbaik untuk Semua Jenis Event Anda.
//                           </p>
//                         </Link>
//                       </NavigationMenuLink>
//                     </li>
//                     <ListItem
//                       href="https://drive.tako.co.id/d/s/yl5SVM0c1iGcO1gI4oMvZo23KDkLtzaO/oE7q9J05mcFHvyzZacRMy9mSwtXB_SBM-Urfg5aCYags"
//                       target="__blank"
//                       title="LED Display"
//                     >
//                       Terangi Setiap Momen dengan Solusi LED Display Terbaik
//                       untuk Semua Jenis Event Anda.
//                     </ListItem>
//                     {/* <ListItem href="/products/parled" title="PAR LED">
//                     Terangi Setiap Momen dengan Solusi LED Display Terbaik untuk
//                     Semua Jenis Event Anda.
//                   </ListItem>
//                   <ListItem href="/products/fresnel" title="Fresnel">
//                     Terangi Setiap Momen dengan Solusi LED Display Terbaik untuk
//                     Semua Jenis Event Anda.
//                   </ListItem> */}
//                     {/* <ListItem href="/products/moving-head" title="Moving Head">
//                     Terangi Setiap Momen dengan Solusi LED Display Terbaik untuk
//                     Semua Jenis Event Anda.
//                   </ListItem>
//                   <ListItem href="/products/follow-spot" title="Follow Spot">
//                     Terangi Setiap Momen dengan Solusi LED Display Terbaik untuk
//                     Semua Jenis Event Anda.
//                   </ListItem>
//                   <ListItem
//                     href="/products/smoke-&-laser"
//                     title="Smoke & Laser"
//                   >
//                     Terangi Setiap Momen dengan Solusi LED Display Terbaik untuk
//                     Semua Jenis Event Anda.
//                   </ListItem>
//                   <ListItem
//                     href="/products/riging-system"
//                     title="Riging System"
//                   >
//                     Terangi Setiap Momen dengan Solusi LED Display Terbaik untuk
//                     Semua Jenis Event Anda.
//                   </ListItem>
//                   <ListItem
//                     href="/products/controller-processor"
//                     title="Controller & Processor"
//                   >
//                     Terangi Setiap Momen dengan Solusi LED Display Terbaik untuk
//                     Semua Jenis Event Anda.
//                   </ListItem> */}
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <Link href="/products" legacyBehavior passHref>
//                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                     Product
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <Link href="/about" legacyBehavior passHref>
//                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                     About
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <Link href="/contact" legacyBehavior passHref>
//                   <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                     Contact
//                   </NavigationMenuLink>
//                 </Link>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>
//         {/* <Link
//         href="https://wa.me/+6281252664674"
//         target="_blank"
//         className="flex items-center"
//       >
//         <button className="bg-yellowcmi px-4 py-3 text-darkcmi rounded-xl font-semibold flex items-center gap-4 hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300">
//           <Image
//             src="/images/icon/whatsapp.svg"
//             width={32}
//             height={32}
//             alt="whatsapp icon"
//           />
//           More Information
//         </button>
//       </Link> */}
//         <div className="hidden md:block">
//           <Link
//             href="https://api.whatsapp.com/send?phone=628170500601"
//             target="__blank"
//             className={`${buttonVariants({
//               variant: "outline",
//             })} flex items-center gap-2 p-8`}
//           >
//             {/* <Image
//             src="/images/icon/whatsapp.svg"
//             width={24}
//             height={24}
//             alt="whatsapp icon"
//           /> */}
//             <IconBrandWhatsapp />
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { User } from "lucide-react";
import { ClipboardList } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { Truck } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { buttonVariants } from "@/components/ui/button";

const components: {
  title: string;
  href: string;
  description: string;
  icon: JSX.Element;
}[] = [
  {
    title: "Whatsapp",
    icon: <Phone />,
    href: "https://api.whatsapp.com/send?phone=6282231888611",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Email",
    icon: <Mail />,
    href: "mailto:marketing@atmtrans.id",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

export const NavLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Product", path: "/products" },
  { id: 4, name: "Project", path: "/project" },
  { id: 5, name: "Careers", path: "https://karier.tako.co.id/" },
];

export function MainNav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      // Periksa apakah arah scroll berubah
      if (isScrollingDown && isVisible) {
        setIsVisible(false); // Sembunyikan navbar jika sedang digulir ke bawah
      } else if (!isScrollingDown && !isVisible) {
        setIsVisible(true); // Tampilkan navbar jika sedang digulir ke atas
      }
      setPrevScrollPos(currentScrollPos); // Simpan posisi scroll saat ini
    };

    // Tambahkan event listener untuk meng-handle scroll
    window.addEventListener("scroll", handleScroll);

    // Hapus event listener saat komponen tidak lagi digunakan (unmount)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, prevScrollPos]);

  const transitionDuration = 0.2;

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  const [showDropdown, setShowDropdown] = useState(false);
  // const toggleDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <motion.div
          // className="mx-auto bg-white bg-opacity-90 fixed top-0 left-0 right-0 z-50 backdrop-blur"
          className="mx-auto bg-darkcmi bg-opacity-90 fixed top-0 left-0 right-0 z-50 py-2"
          initial="visible"
          // animate={controls}
          variants={navbarVariants}
          transition={{ duration: transitionDuration }}
        >
          <div className="container">
            <div className="flex h-16 items-center justify-between">
              <Link href="/">
                <Image
                  src="/images/logo/cmi putih.webp"
                  alt="logo"
                  width={128}
                  height={48}
                  className="w-28 2xl:w-32"
                />
              </Link>

              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-white focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              <NavigationMenu className="hidden md:block">
                <NavigationMenuList>
                  {NavLinks.map((link) => (
                    <NavigationMenuItem key={link.id}>
                      <Link
                        href={link.path}
                        className={isActive(link.path) ? "active" : ""}
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink
                          className={`${navigationMenuTriggerStyle()} ${
                            isActive(link.path)
                              ? "active bg-slate-50 text-darkcmi font-semibold"
                              : "font-medium bg-transparent text-white"
                          }`}
                        >
                          {link.name}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}

                  {/* <NavigationMenuItem className="hidden md:block">
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium leading-6">
                                PT. CAHAYA MERCUSUAR INDONESIA
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Terangi Setiap Momen dengan Solusi LED Display
                                Terbaik untuk Semua Jenis Event Anda.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <ListItem
                          href="https:drive.tako.co.id/d/s/yl5SVM0c1iGcO1gI4oMvZo23KDkLtzaO/oE7q9J05mcFHvyzZacRMy9mSwtXB_SBM-Urfg5aCYags"
                          target="__blank"
                          title="LED Display"
                        >
                          Terangi Setiap Momen dengan Solusi LED Display Terbaik
                          untuk Semua Jenis Event Anda.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem> */}

                  <li className="hidden md:block">
                    <Link
                      href="https://api.whatsapp.com/send?phone=628170500601"
                      target="__blank"
                      className={`${buttonVariants({
                        variant: "outline",
                      })} flex items-center gap-2 p-12`}
                    >
                      <IconBrandWhatsapp />
                      Contact Us
                    </Link>
                  </li>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </motion.div>
      </nav>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40" // Pastikan z-index lebih rendah dari sidebar
            onClick={() => setIsOpen(false)}
          ></div>
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:hidden fixed inset-0 overflow-hidden z-50"
          >
            <div className="relative w-64 h-full bg-darkcmi shadow-xl">
              <div className="flex items-center justify-between p-4 py-[18px] border-b border-gray-200">
                <Link href="/">
                  <Image
                    src="/images/logo/cmi putih.webp"
                    alt="logo"
                    width={128}
                    height={48}
                    className="w-28 2xl:w-32"
                  />
                </Link>
                <button onClick={() => setIsOpen(false)} className="text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col p-4">
                <Link
                  href="/"
                  className="flex gap-4 items-center p-2 text-white hover:bg-greenaml-500 rounded"
                >
                  <Menu />
                  Home
                </Link>
                <Link
                  href="/about"
                  className="flex gap-4 items-center p-2 text-white hover:bg-greenaml-500 rounded"
                >
                  <User />
                  About
                </Link>
                <Link
                  href="/project"
                  className="flex gap-4 items-center p-2 text-white hover:bg-greenaml-500 rounded"
                >
                  <ClipboardList />
                  Project
                </Link>
                <Link
                  href="/products"
                  className="flex gap-4 items-center p-2 text-white hover:bg-greenaml-500 rounded"
                >
                  <ClipboardList />
                  Products
                </Link>
                <Link
                  href="https://karier.tako.co.id/"
                  target="__blank"
                  className="flex gap-4 items-center p-2 text-white hover:bg-greenaml-500 rounded"
                >
                  <BookOpenText />
                  Careers
                </Link>
                <Link
                  href="https://api.whatsapp.com/send?phone=628170500601"
                  target="__blank"
                  className={`${buttonVariants({
                    variant: "outline",
                  })} flex items-center gap-2 p-12 mt-8`}
                >
                  <IconBrandWhatsapp />
                  Contact Us
                </Link>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
