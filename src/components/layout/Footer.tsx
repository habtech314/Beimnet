import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t-2 border-primary pt-20 pb-12 w-full px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto flex flex-col gap-gutter">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <span className="font-serif text-display-lg-mobile text-on-surface font-bold block mb-6">
              BEIMNET
            </span>
            <p className="text-on-surface-variant font-body-md text-body-md max-w-sm mb-8">
              The premier training destination for aspiring beauty professionals. Elevating the standard
              of beauty education through passion, precision, and performance.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-primary hover:text-secondary transition-colors">
                <span className="material-symbols-outlined">public</span>
              </Link>
              <Link href="#" className="text-primary hover:text-secondary transition-colors">
                <span className="material-symbols-outlined">photo_camera</span>
              </Link>
              <Link href="#" className="text-primary hover:text-secondary transition-colors">
                <span className="material-symbols-outlined">play_circle</span>
              </Link>
            </div>
          </div>

          <div>
            <h5 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-6">
              Quick Links
            </h5>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/courses" className="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors">
                  Academy
                </Link>
              </li>
              <li>
                <Link href="/instructors" className="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors">
                  Instructors
                </Link>
              </li>
              <li>
                <Link href="/enroll" className="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-6">
              Contact
            </h5>
            <ul className="flex flex-col gap-4 text-on-surface-variant font-label-md text-label-md">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                123 Fashion Ave, Studio City
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">call</span>
                +1 (555) 000-1234
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">mail</span>
                admissions@beimnet.com
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant font-body-md text-body-md">
            &copy; 2024 BEIMNET Beauty Training Center
          </p>
          <div className="flex gap-8 font-label-sm text-label-sm text-on-surface-variant">
            <Link href="#" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
