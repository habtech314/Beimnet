"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/instructors", label: "Instructors" },
  { href: "/enroll", label: "Enroll" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-4 left-4 right-4 z-50 flex justify-between items-center h-16 transition-all duration-300",
        "bg-background/90 backdrop-blur-md border border-outline-variant rounded-none"
      )}
    >
      <div className="px-margin-mobile md:px-8 w-full flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <Image
            src="/images/logo-new-v2.svg"
            alt="BEIMNET Academy"
            width={44}
            height={44}
            className="w-11 h-11"
            priority
          />
          <span className="font-serif text-[20px] font-bold tracking-tight text-on-surface">
            BEIMNET
          </span>
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[13px] uppercase tracking-[0.1em] transition-colors font-medium",
                pathname === link.href
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
