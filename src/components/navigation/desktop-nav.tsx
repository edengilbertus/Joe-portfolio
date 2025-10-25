"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#selected-work", label: "Work" },
  { href: "/about", label: "About" },
  {
    href: "https://drive.google.com/file/d/1H0F1jc5fPcVLOfkPADfFhdnzXEHHXlOr/view?usp=sharing",
    label: "Resume",
    isExternal: true,
  },
];

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block fixed top-0 left-0 h-screen w-60 bg-sidebar border-r border-sidebar-border text-sidebar-foreground">
      <div className="flex flex-col items-center h-full pt-8">
        <Link href="/" className="mb-16">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/43989fcc-cbbf-485e-8ab8-d0e0d5b034fc-hanssapo-com/assets/images/A0pD9EpS2ck9B9ryXt7Nc8abjmY-1.png"
            alt="Hans Sapo Avatar"
            width={96}
            height={96}
            className="rounded-full"
            quality={100}
            priority
          />
        </Link>
        <nav>
          <ul className="space-y-8 text-center">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.isExternal ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium hover:text-sidebar-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "text-base font-medium hover:text-sidebar-primary transition-colors",
                      (pathname === link.href || (link.href.startsWith("/#") && pathname === "/")) &&
                        "font-bold text-sidebar-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default DesktopNav;