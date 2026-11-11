import React from "react";
import { Calendar, ArrowRight, ArrowUpRight } from "lucide-react";
import { PROGRAMS, SKOOL_COMMUNITY_URL, SKOOL_ABOUT_URL } from "../data/content";

export const TutoringPrograms: React.FC = () => {
  return (
    <section id="programs" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#D4F0EE] text-[#168C89] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-3">
            <span>LEARNING WITH PURPOSE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#14234F] tracking-tight mb-3 text-balance">
            Building Stronger Foundations, One Lesson at a Time.
          </h2>

          <p className="text-base sm:text-lg text-[#24365F]/85 leading-relaxed">
            Focused learning, personal attention, and consistent support can
            make a real difference.
          </p>
        </div>

        {/* 2 Program Cards Side-by-Side matching reference horizontal card design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {PROGRAMS.map((program) => {
            const isReading = program.id === "reading";

            return (
              <div
                key={program.id}
                className="bg-white rounded-3xl p-5 sm:p-6 border border-[#24365F]/8 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-stretch gap-6"
              >
                {/* Image Section in curved inner container with colored background */}
                <div
                  className={`w-full sm:w-5/12 aspect-4/3 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center p-2.5 ${
                    isReading ? "bg-[#D4F0EE]" : "bg-[#F5ECD7]"
                  }`}
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover rounded-xl shadow-xs"
                    onError={(e) => {
                      if (program.fallbackImage) {
                        e.currentTarget.src = program.fallbackImage;
                      }
                    }}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full sm:w-7/12 flex flex-col justify-between">
                  <div>
                    {/* Badge */}
                    <div className="mb-2.5">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider ${program.tagColor}`}
                      >
                        {program.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#14234F] mb-2 leading-snug">
                      {program.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#24365F]/85 leading-relaxed mb-4">
                      {program.description}
                    </p>
                  </div>

                  {/* Schedule & Action Button */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#24365F]/8">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#14234F]">
                      <Calendar
                        className="w-4 h-4 shrink-0"
                        style={{ color: program.accentColor }}
                      />
                      <span>{program.schedule}</span>
                    </div>

                    <a
                      href={SKOOL_COMMUNITY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform hover:scale-105 shadow-xs focus:outline-hidden focus-visible:ring-2 ${
                        isReading
                          ? "bg-[#168C89] hover:bg-[#127471] text-white focus-visible:ring-[#168C89]"
                          : "bg-[#D99A36] hover:bg-[#c2872a] text-white focus-visible:ring-[#D99A36]"
                      }`}
                      aria-label={`Join ${program.title} on Skool`}
                    >
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered Explore Learning Community Button */}
        <div className="flex justify-center">
          <a
            href={SKOOL_ABOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#14234F] hover:bg-[#24365F] active:scale-98 rounded-full shadow-sm hover:shadow-md transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#14234F] whitespace-nowrap"
          >
            <span>Explore the Learning Community</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
};
