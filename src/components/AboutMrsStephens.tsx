import React from "react";
import { Check } from "lucide-react";
import { OWNER_PORTRAIT_URL } from "../data/content";

export const AboutMrsStephens: React.FC = () => {
  const highlights = [
    "20+ Years Experience",
    "Passionate Educator",
    "Student-Focused Approach",
    "Supportive Community",
  ];

  return (
    <section id="about" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT: Portrait in rounded squircle frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer soft double border */}
              <div className="relative rounded-3xl overflow-hidden p-3 bg-white border-2 border-[#168C89]/20 shadow-md">
                <div className="aspect-4/5 rounded-2xl overflow-hidden bg-[#D8F0EE]">
                  <img
                    src={OWNER_PORTRAIT_URL}
                    alt="Mrs. Lorene Stephens smiling"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Content & Checkmark list */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Bio Copy */}
              <div className="sm:col-span-7 flex flex-col items-start">
                {/* Eyebrow */}
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#D4F0EE] text-[#168C89] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-3">
                  <span>MEET MRS. STEPHENS</span>
                </div>

                {/* Heading */}
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#14234F] tracking-tight mb-4">
                  Meet Mrs. Lorene Stephens.
                </h2>

                {/* Paragraphs */}
                <div className="space-y-3 text-xs sm:text-sm text-[#24365F]/85 leading-relaxed mb-6">
                  <p>
                    Education is more than teaching lessons. It is about building
                    confidence, encouraging growth, and helping every child
                    succeed.
                  </p>
                  <p>
                    With over 20 years of experience, Mrs. Stephens is committed
                    to supporting students, families, and communities through
                    personalized learning.
                  </p>
                </div>

                {/* Signature quote with curved flourish */}
                <div className="relative pt-1">
                  <p className="font-serif text-xl sm:text-2xl italic font-semibold text-[#14234F]">
                    Together, we can build a stronger tomorrow.
                  </p>
                  {/* Subtle curved gold line */}
                  <svg
                    viewBox="0 0 240 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-48 sm:w-56 h-2.5 text-[#D99A36] mt-1"
                  >
                    <path
                      d="M2 7C60 2 180 2 238 7"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* 4 Checkmarks list on the right */}
              <div className="sm:col-span-5 flex flex-col justify-center space-y-4 pt-4 sm:pt-0 sm:border-l sm:border-[#24365F]/10 sm:pl-6">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D99A36] text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#14234F] whitespace-nowrap">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
