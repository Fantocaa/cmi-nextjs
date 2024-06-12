"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import "../../app/globals.css";
import { buttonVariants } from "@/components/ui/button";
import { IconBrandWhatsapp } from "@tabler/icons-react";

// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function MainNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="bg-darkcmi w-full fixed z-50">
      <div className="container mx-auto flex justify-between py-2 items-center">
        <Link href="/">
          <Image
            src="/images/logo/cmi putih.webp"
            width={128}
            height={48}
            alt="Logo"
            className="w-28 2xl:w-32"
          />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
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
                          Terangi Setiap Momen dengan Solusi LED Display Terbaik
                          untuk Semua Jenis Event Anda.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem
                    href="https://drive.tako.co.id/d/s/yl5SVM0c1iGcO1gI4oMvZo23KDkLtzaO/oE7q9J05mcFHvyzZacRMy9mSwtXB_SBM-Urfg5aCYags"
                    target="__blank"
                    title="LED Display"
                  >
                    Terangi Setiap Momen dengan Solusi LED Display Terbaik untuk
                    Semua Jenis Event Anda.
                  </ListItem>
                  {/* <ListItem href="/products/parled" title="PAR LED">
                    Terangi Setiap Momen dengan Solusi LED Display Terbaik untuk
                    Semua Jenis Event Anda.
                  </ListItem>
                  <ListItem href="/products/fresnel" title="Fresnel">
                    Terangi Setiap Momen dengan Solusi LED Display Terbaik untuk
                    Semua Jenis Event Anda.
                  </ListItem> */}
                  {/* <ListItem href="/products/moving-head" title="Moving Head">
                    Terangi Setiap Momen dengan Solusi LED Display Terbaik untuk
                    Semua Jenis Event Anda.
                  </ListItem>
                  <ListItem href="/products/follow-spot" title="Follow Spot">
                    Terangi Setiap Momen dengan Solusi LED Display Terbaik untuk
                    Semua Jenis Event Anda.
                  </ListItem>
                  <ListItem
                    href="/products/smoke-&-laser"
                    title="Smoke & Laser"
                  >
                    Terangi Setiap Momen dengan Solusi LED Display Terbaik untuk
                    Semua Jenis Event Anda.
                  </ListItem>
                  <ListItem
                    href="/products/riging-system"
                    title="Riging System"
                  >
                    Terangi Setiap Momen dengan Solusi LED Display Terbaik untuk
                    Semua Jenis Event Anda.
                  </ListItem>
                  <ListItem
                    href="/products/controller-processor"
                    title="Controller & Processor"
                  >
                    Terangi Setiap Momen dengan Solusi LED Display Terbaik untuk
                    Semua Jenis Event Anda.
                  </ListItem> */}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/products" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Product
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* <Link
        href="https://wa.me/+6281252664674"
        target="_blank"
        className="flex items-center"
      >
        <button className="bg-yellowcmi px-4 py-3 text-darkcmi rounded-xl font-semibold flex items-center gap-4 hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300">
          <Image
            src="/images/icon/whatsapp.svg"
            width={32}
            height={32}
            alt="whatsapp icon"
          />
          More Information
        </button>
      </Link> */}

        <Link
          href="https://api.whatsapp.com/send?phone=628170500601"
          target="__blank"
          className={`${buttonVariants({
            variant: "outline",
          })} flex items-center gap-2 p-8`}
        >
          {/* <Image
            src="/images/icon/whatsapp.svg"
            width={24}
            height={24}
            alt="whatsapp icon"
          /> */}
          <IconBrandWhatsapp />
          Contact Us
        </Link>
      </div>
    </nav>
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
