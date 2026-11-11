import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SKOOL_COMMUNITY_URL } from "../data/content";

export const FinalCTA: React.FC = () => {
  return (
    <section className="bg-[#14234F] text-white py-8 sm:py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Left Decorative Book Stack & Sprout */}
          <div className="flex items-center gap-5 text-center lg:text-left">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0">
              <svg
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-md"
              >
                {/* Sprout emerging from books */}
                <path
                  d="M40 28C40 18 48 14 54 14C54 22 48 27 40 28Z"
                  fill="#168C89"
                />
                <path
                  d="M40 28C40 16 30 15 26 19C26 25 32 28 40 28Z"
                  fill="#D99A36"
                />
                <path
                  d="M40 36V26"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Book 1 (Top) */}
                <rect x="18" y="34" width="44" height="9" rx="2.5" fill="#FFFFFF" />
                <rect x="18" y="34" width="6" height="9" rx="1.5" fill="#168C89" />
                {/* Book 2 (Middle) */}
                <rect x="14" y="44" width="52" height="10" rx="3" fill="#F2EBDD" />
                <rect x="14" y="44" width="7" height="10" rx="1.5" fill="#D99A36" />
                {/* Book 3 (Bottom) */}
                <rect x="10" y="55" width="60" height="11" rx="3.5" fill="#FFFFFF" />
                <rect x="10" y="55" width="8" height="11" rx="1.5" fill="#168C89" />
              </svg>
            </div>

            <div>
              <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
                Your Child&apos;s Learning Journey Deserves the Right Support.
              </h2>
              <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-2xl">
                Every small step in learning matters. Let&apos;s work together to
                strengthen confidence and create brighter opportunities.
              </p>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0">
            <a
              href={SKOOL_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 text-xs sm:text-sm font-semibold text-[#14234F] bg-[#D99A36] hover:bg-[#e4a747] active:scale-98 rounded-full shadow-md transition-all whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Join Our Community Today</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
