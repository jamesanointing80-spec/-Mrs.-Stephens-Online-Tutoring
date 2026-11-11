import React from "react";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { OWNER_PORTRAIT_URL, SKOOL_COMMUNITY_URL } from "../data/content";

export const HeroSection: React.FC = () => {
  const handleScrollToPrograms = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("programs");
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
    <section id="home" className="relative pt-28 pb-10 lg:pt-36 lg:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#D4F0EE] text-[#168C89] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-5">
              <span>PERSONALIZED LEARNING • STRONGER FUTURES</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-[#14234F] leading-[1.12] mb-5 tracking-tight">
              Helping Children Grow in{" "}
              <span className="text-[#168C89] italic font-serif">Reading</span>,{" "}
              Math &{" "}
              <span className="text-[#D99A36] italic font-serif">Confidence</span>.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#24365F]/85 leading-relaxed max-w-xl mb-8">
              Every child deserves the opportunity to learn, grow, and succeed.
              Join Mrs. Stephens Online Tutoring and be part of a supportive
              learning community.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <a
                href={SKOOL_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#D99A36] hover:bg-[#c2872a] active:scale-98 rounded-full shadow-sm hover:shadow-md transition-all whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D99A36]"
              >
                <span>Join Our Learning Community</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </a>

              <button
                type="button"
                onClick={handleScrollToPrograms}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold text-[#14234F] hover:text-[#168C89] bg-transparent hover:bg-white/80 active:scale-98 rounded-full border border-[#14234F]/30 hover:border-[#168C89] transition-all whitespace-nowrap cursor-pointer"
              >
                Explore Our Programs
              </button>
            </div>

            {/* 20+ Years Educational Experience Banner */}
            <div className="flex items-center gap-3 w-full max-w-md pt-2">
              <div className="h-0.5 bg-[#D99A36]/35 flex-1 rounded-full" />
              <div className="flex items-center gap-2 text-xs font-bold text-[#14234F] tracking-wide shrink-0">
                <span className="p-1 rounded-sm bg-[#14234F] text-white">
                  <GraduationCap className="w-3.5 h-3.5" />
                </span>
                <span>20+ Years of Educational Experience</span>
              </div>
              <div className="h-0.5 bg-[#D99A36]/35 flex-1 rounded-full" />
            </div>
          </div>

          {/* RIGHT: Mrs. Stephens Portrait with exact composition */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none flex items-center justify-center">
              {/* Circular light teal backdrop */}
              <div className="absolute w-[320px] sm:w-[380px] lg:w-[420px] aspect-square rounded-full bg-[#D8F0EE] -z-10" />

              {/* Mrs. Stephens Portrait */}
              <div className="relative w-[300px] sm:w-[350px] lg:w-[390px] aspect-square rounded-full overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src={OWNER_PORTRAIT_URL}
                  alt="Mrs. Lorene Stephens smiling"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>

              {/* Laurel Wreath Badge (Top Right) */}
              <div className="absolute -top-3 right-2 sm:-top-5 sm:right-4 z-20">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white shadow-xl border border-[#D99A36]/40 flex flex-col items-center justify-center p-2 text-center">
                  {/* Circular Laurel wreath SVG */}
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] pointer-events-none text-[#D99A36]"
                  >
                    <path
                      d="M20 72C14 52 18 32 42 16M80 72C86 52 82 32 58 16"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeDasharray="2 5"
                    />
                    <circle cx="21" cy="70" r="2.5" fill="currentColor" />
                    <circle cx="16" cy="52" r="2.5" fill="currentColor" />
                    <circle cx="21" cy="35" r="2.5" fill="currentColor" />
                    <circle cx="34" cy="22" r="2.5" fill="currentColor" />
                    <circle cx="79" cy="70" r="2.5" fill="currentColor" />
                    <circle cx="84" cy="52" r="2.5" fill="currentColor" />
                    <circle cx="79" cy="35" r="2.5" fill="currentColor" />
                    <circle cx="66" cy="22" r="2.5" fill="currentColor" />
                  </svg>

                  <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#14234F] leading-none">
                    20+
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-[#14234F] uppercase tracking-wider leading-tight mt-0.5">
                    Years
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-[#24365F]/80 font-medium leading-tight">
                    Dedicated to
                    <br />
                    Students
                  </span>
                </div>
              </div>

              {/* Books & Colorful Pencils Cup graphic (Bottom Right) */}
              <div className="absolute -bottom-4 right-0 sm:right-2 z-20 flex flex-col items-end pointer-events-none">
                {/* Pencil Pot */}
                <div className="relative mr-6 mb-[-6px]">
                  <div className="w-12 h-14 bg-white rounded-t-lg rounded-b-md shadow-md border border-slate-200 flex items-center justify-center relative overflow-hidden">
                    {/* Colorful pencil tips emerging */}
                    <div className="absolute -top-4 flex gap-1 items-end">
                      <div className="w-1.5 h-7 bg-amber-400 rounded-t-xs -rotate-6" />
                      <div className="w-1.5 h-9 bg-emerald-500 rounded-t-xs -rotate-2" />
                      <div className="w-1.5 h-8 bg-sky-500 rounded-t-xs rotate-3" />
                      <div className="w-1.5 h-10 bg-rose-500 rounded-t-xs rotate-6" />
                      <div className="w-1.5 h-8 bg-purple-500 rounded-t-xs rotate-12" />
                    </div>
                  </div>
                </div>

                {/* Stack of colorful textbooks */}
                <div className="flex flex-col items-end space-y-[-2px]">
                  <div className="w-32 sm:w-36 h-3.5 bg-[#168C89] rounded-sm shadow-xs border-r-4 border-teal-800" />
                  <div className="w-36 sm:w-40 h-4 bg-[#D99A36] rounded-sm shadow-xs border-r-4 border-amber-700" />
                  <div className="w-40 sm:w-44 h-4.5 bg-[#14234F] rounded-sm shadow-md border-r-4 border-slate-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
