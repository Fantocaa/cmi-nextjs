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
  { id: 1, name: "Home", path: "/", target: "blank" },
  { id: 2, name: "About", path: "/about", target: "blank" },
  { id: 3, name: "Product", path: "/products", target: "blank" },
  { id: 4, name: "Project", path: "/project", target: "blank" },
  { id: 5, name: "Blog", path: "/blog", target: "blank" },
  { id: 6, name: "Contact", path: "/contact", target: "blank" },
  {
    id: 7,
    name: "Careers",
    path: "https://karier.tako.co.id/",
    target: "__blank",
  },
];

export function MainNav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(""); // State untuk memantau path sebelumnya
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const toggleDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // };

  useEffect(() => {
    if (pathname !== prevPathname) {
      // Tutup sidebar hanya jika path berubah
      if (isOpen) {
        setIsOpen(false);
      }
      // Perbarui prevPathname untuk memantau perubahan berikutnya
      setPrevPathname(pathname);
    }
  }, [pathname, prevPathname, isOpen]);

  return (
    <>
      <nav>
        <motion.div
          // className="mx-auto bg-white bg-opacity-90 fixed top-0 left-0 right-0 z-50 backdrop-blur"
          className="mx-auto bg-darkcmi bg-opacity-95 fixed top-0 left-0 right-0 z-50 py-2"
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
                        target={link.target}
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

                  {/* <li className="hidden md:block">
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
                  </li> */}
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
                {/* <Link
                  href="https://api.whatsapp.com/send?phone=628170500601"
                  target="__blank"
                  className={`${buttonVariants({
                    variant: "outline",
                  })} flex items-center gap-2 p-12 mt-8`}
                >
                  <IconBrandWhatsapp />
                  Contact Us
                </Link> */}
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
