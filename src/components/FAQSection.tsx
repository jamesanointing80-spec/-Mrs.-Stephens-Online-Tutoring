import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS_LEFT, FAQS_RIGHT } from "../data/content";

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<number[]>([]);

  const toggleFaq = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderItem = (faq: { id: number; question: string; answer: string }) => {
    const isOpen = openIds.includes(faq.id);

    return (
      <div
        key={faq.id}
        className="bg-white rounded-full sm:rounded-2xl border border-[#24365F]/10 shadow-2xs overflow-hidden transition-all"
      >
        <button
          type="button"
          onClick={() => toggleFaq(faq.id)}
          className="w-full py-3.5 px-5 flex items-center justify-between gap-3 text-left font-sans text-xs sm:text-sm font-semibold text-[#14234F] hover:text-[#168C89] transition-colors cursor-pointer"
          aria-expanded={isOpen}
        >
          <span className="leading-snug">{faq.question}</span>
          <span className="shrink-0 text-[#14234F]">
            {isOpen ? (
              <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
            ) : (
              <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            )}
          </span>
        </button>

        {isOpen && (
          <div className="px-5 pb-4 pt-1 text-xs text-[#24365F]/85 leading-relaxed border-t border-[#24365F]/6">
            <p>{faq.answer}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="faqs" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT: Eyebrow, Heading, Arrow flourish */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#D4F0EE] text-[#168C89] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-3">
              <span>GET ANSWERS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#14234F] tracking-tight leading-tight mb-3">
              Questions Parents
              <br />
              Often Ask.
            </h2>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#24365F]/80 font-medium">
              <span>Find quick answers to common questions.</span>
              {/* Curved golden arrow flourish matching reference */}
              <svg
                viewBox="0 0 36 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-5 text-[#D99A36] shrink-0"
              >
                <path
                  d="M2 4C12 2 24 6 28 16M28 16L22 16M28 16L30 11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* RIGHT: 2 Columns of FAQs */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 items-start">
            <div className="space-y-3.5">
              {FAQS_LEFT.map((faq) => renderItem(faq))}
            </div>
            <div className="space-y-3.5">
              {FAQS_RIGHT.map((faq) => renderItem(faq))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
