"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
        "fixed top-4 left-4 right-4 z-50 flex justify-between items-center px-margin-mobile md:px-8 h-20 transition-all duration-300",
        "bg-[#000000] border border-outline-variant rounded-2xl"
      )}
    >
      <Link href="/" className="font-serif italic font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-lg" style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}>
        BEIMNET
      </Link>

      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "font-label-md text-label-md transition-colors",
              pathname === link.href
                ? "text-primary font-bold"
                : "text-on-surface-variant hover:text-primary"
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>

    </nav>
  );
}
