import React from "react";
import { ArrowUpRight, GraduationCap, Users, Heart } from "lucide-react";
import { SKOOL_COMMUNITY_URL, IMAGES } from "../data/content";

export const CommunitySection: React.FC = () => {
  const communityBenefits = [
    {
      title: "Support",
      subtitle: "for Students",
      icon: GraduationCap,
    },
    {
      title: "Resources",
      subtitle: "for Parents",
      icon: Users,
    },
    {
      title: "A Community",
      subtitle: "with Purpose",
      icon: Heart,
    },
  ];

  return (
    <section id="community" className="bg-[#14234F] text-white relative overflow-hidden py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT: Text & 3 Circles */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="text-[11px] sm:text-xs font-bold text-[#D99A36] uppercase tracking-wider mb-2">
              MORE THAN TUTORING — A COMMUNITY THAT CARES
            </span>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-white tracking-tight leading-tight mb-4">
              Stronger Children. Supported Families. A Better{" "}
              <span className="italic font-serif text-white">Tomorrow</span>.
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6 max-w-xl">
              Join Mrs. Stephens Online Tutoring on Skool and become part of a
              growing community built around your child&apos;s success.
            </p>

            {/* CTA & 3 Value Circles Row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 pt-2">
              <a
                href={SKOOL_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 text-xs sm:text-sm font-semibold text-[#14234F] bg-[#D99A36] hover:bg-[#e4a747] active:scale-98 rounded-full shadow-md transition-all whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white shrink-0"
              >
                <span>Join Mrs. Stephens&apos; Community</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              {/* 3 Circular Badges separated by thin vertical line */}
              <div className="flex items-center gap-5 sm:gap-6 sm:border-l sm:border-white/20 sm:pl-8">
                {communityBenefits.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center text-center">
                      <div className="w-11 h-11 rounded-full border border-[#D99A36]/80 flex items-center justify-center mb-1.5 text-[#D99A36]">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold text-white leading-tight">
                        {item.title}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-white/70 leading-tight">
                        {item.subtitle}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Young Student Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-xl aspect-16/11 bg-[#24365F]">
              <img
                src={IMAGES.happyStudent}
                alt="Young student smiling proudly resting chin on books"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
