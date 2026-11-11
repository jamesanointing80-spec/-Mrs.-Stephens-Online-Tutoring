import React from "react";
import { BookOpen, Users, Calculator, Heart } from "lucide-react";

export const TrustHighlights: React.FC = () => {
  const highlights = [
    {
      title: "20+ Years",
      subtitle: "of Experience",
      icon: BookOpen,
    },
    {
      title: "Personalized",
      subtitle: "Attention",
      icon: Users,
    },
    {
      title: "Reading &",
      subtitle: "Mathematics",
      icon: Calculator,
    },
    {
      title: "Family",
      subtitle: "Support",
      icon: Heart,
    },
  ];

  return (
    <section className="py-6 sm:py-8 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-sm border border-[#24365F]/8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#24365F]/10">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center justify-center gap-3.5 ${
                    idx > 0 ? "pt-4 sm:pt-0 sm:pl-4" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F8F7F2] flex items-center justify-center shrink-0 text-[#14234F]">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-serif text-base sm:text-lg font-bold text-[#14234F] leading-tight">
                      {item.title}
                    </span>
                    <span className="text-xs sm:text-sm text-[#24365F]/80 leading-tight">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
