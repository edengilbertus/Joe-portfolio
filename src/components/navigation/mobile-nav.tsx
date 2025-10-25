"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, User, FileText } from "lucide-react";

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Work", href: "/", icon: Briefcase },
    { name: "About", href: "/about", icon: User },
    {
      name: "Resume",
      href: "https://drive.google.com/file/d/1H0F1jc5fPcVLOfkPADfFhdnzXEHHXlOr/view?usp=sharing",
      icon: FileText,
      isExternal: true,
    },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 w-full h-16 bg-white shadow-[0_-2px_8px_rgba(0,0,0,0.06)] z-[100]">
      <div className="flex justify-around items-center h-full">
        {navItems.map((item) => {
          const isActive = !item.isExternal && pathname === item.href;

          const commonClasses =
            "flex flex-1 flex-col items-center justify-center gap-1 h-full font-medium text-sm transition-colors hover:text-black";

          const textAndIcon = (
            <>
              <item.icon className="h-5 w-5" aria-hidden="true" />
              <span>{item.name}</span>
            </>
          );

          if (item.isExternal) {
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${commonClasses} text-[#333333]`}
              >
                {textAndIcon}
              </a>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`${commonClasses} ${isActive ? "font-bold text-black" : "text-[#333333]"}`}
            >
              {textAndIcon}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}