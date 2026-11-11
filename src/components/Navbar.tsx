import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { NAV_LINKS, SKOOL_COMMUNITY_URL } from "../data/content";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ["home", "programs", "about", "community", "faqs"];
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F8F7F2]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#24365F]/8"
          : "bg-[#F8F7F2]/90 backdrop-blur-xs py-4 lg:py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center shrink-0 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#168C89] rounded-lg"
          >
            <BrandLogo />
          </a>

          {/* Navigation Links */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-7 xl:gap-9 text-sm font-medium"
          >
            {NAV_LINKS.map((link) => {
              const targetId = link.href.substring(1);
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-[#14234F] font-semibold"
                      : "text-[#24365F]/80 hover:text-[#14234F]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D99A36] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Primary CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={SKOOL_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white bg-[#D99A36] hover:bg-[#c2872a] active:scale-98 rounded-full shadow-sm hover:shadow-md transition-all whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D99A36]"
            >
              <span>Join Our Community</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            {/* Mobile Hamburger Menu */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#14234F] hover:text-[#168C89] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#168C89] rounded-lg transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F7F2] border-b border-[#24365F]/10 shadow-lg px-4 pt-3 pb-6">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const targetId = link.href.substring(1);
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-[#24365F]/5 text-[#14234F] font-semibold"
                      : "text-[#24365F]/85 hover:bg-[#24365F]/5 hover:text-[#14234F]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D99A36]" />
                  )}
                </a>
              );
            })}
            <div className="pt-3">
              <a
                href={SKOOL_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-center font-semibold text-white bg-[#D99A36] hover:bg-[#c2872a] rounded-xl shadow-xs"
              >
                <span>Join Our Community</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
