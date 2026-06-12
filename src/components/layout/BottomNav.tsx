"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/courses", label: "Courses", icon: "school" },
  { href: "/about", label: "About", icon: "info" },
  { href: "/gallery", label: "Gallery", icon: "collections" },
  { href: "/instructors", label: "Team", icon: "groups" },
  { href: "/enroll", label: "Enroll", icon: "edit_note" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-outline-variant md:hidden safe-area-bottom">
      <div className="flex items-center justify-around h-14 px-1">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex flex-col items-center justify-center gap-px py-1.5 px-1 rounded-none transition-colors min-w-0 flex-1",
                active
                  ? "text-primary"
                  : "text-on-surface-variant"
              )}
            >
              <span
                className={cn(
                  "material-symbols-outlined transition-all",
                  active && "font-variation-settings 'FILL' 1"
                )}
                style={{
                  fontSize: "20px",
                  fontVariationSettings: active ? "'FILL' 1, 'wght' 400" : undefined,
                }}
              >
                {link.icon}
              </span>
              <span className="text-[9px] font-medium leading-tight truncate">
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
