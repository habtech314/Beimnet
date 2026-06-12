import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant pt-16 pb-10 w-full px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <span className="font-serif text-[28px] text-on-surface font-bold block mb-5 tracking-tight">
              BEIMNET
            </span>
            <p className="text-on-surface-variant text-[15px] max-w-sm mb-6 leading-[1.7]">
              The premier training destination for aspiring beauty professionals. Raising the standard
              of beauty education through passion, precision, and performance.
            </p>
            <div className="flex gap-3">
              {["public", "photo_camera", "play_circle"].map((icon) => (
                <Link
                  key={icon}
                  href="#"
                  className="w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">{icon}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-[11px] uppercase tracking-[0.2em] text-on-surface-variant mb-5 font-semibold">
              Quick Links
            </h5>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/courses", label: "Programs" },
                { href: "/about", label: "Academy" },
                { href: "/instructors", label: "Instructors" },
                { href: "/enroll", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[11px] uppercase tracking-[0.2em] text-on-surface-variant mb-5 font-semibold">
              Contact
            </h5>
            <ul className="flex flex-col gap-3 text-[14px] text-on-surface-variant">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant/60">location_on</span>
                Tulludimtu, Addis Ababa
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant/60">call</span>
                +251 911 000 000
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant/60">mail</span>
                admissions@beimnet.com
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-on-surface-variant">
            &copy; 2024 BEIMNET Beauty Training Center
          </p>
          <div className="flex gap-6 text-[13px] text-on-surface-variant">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
