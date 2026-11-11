import React from "react";
import { BrandLogo } from "./BrandLogo";
import { NAV_LINKS } from "../data/content";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[#F8F7F2] border-t border-[#24365F]/8 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand Logo */}
          <div className="shrink-0">
            <BrandLogo />
          </div>

          {/* Center: Navigation Links */}
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-[#24365F]/80"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#168C89] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Copyright & Tagline */}
          <div className="text-center md:text-right text-[11px] sm:text-xs text-[#24365F]/75 leading-tight">
            <p className="font-medium text-[#14234F]">
              © {currentYear} Mrs. Stephens Online Tutoring. All rights reserved.
            </p>
            <p className="mt-1 text-[#24365F]/60">
              Supporting children, empowering families, and building stronger communities through education.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
