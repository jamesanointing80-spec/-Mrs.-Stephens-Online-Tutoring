import React from "react";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  variant = "light",
}) => {
  const isDark = variant === "dark";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Book Emblem matching the exact reference icon */}
      <div className="relative w-11 h-11 shrink-0">
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
        >
          {/* Radiant rising sun/star figure */}
          <path
            d="M32 6L34.5 14.5L43 17L34.5 19.5L32 28L29.5 19.5L21 17L29.5 14.5L32 6Z"
            fill="#D99A36"
          />
          <circle cx="32" cy="17" r="4.5" fill="#E96B91" />
          
          {/* Left book page with teal curve */}
          <path
            d="M10 46C17.5 40 25 40 31.5 44.5V23C25 18 17.5 18 10 23V46Z"
            fill="#168C89"
          />
          {/* Right book page with navy curve */}
          <path
            d="M54 46C46.5 40 39 40 32.5 44.5V23C39 18 46.5 18 54 23V46Z"
            fill="#14234F"
          />
          {/* Golden base pages sweeping under */}
          <path
            d="M8 48C17 44 25.5 44 31.5 47C37.5 44 46 44 55 48C56 48.5 56.5 49.5 55.5 50.5C48 56 38 56 31.5 52C25 56 15 56 7.5 50.5C6.5 49.5 7 48.5 8 48Z"
            fill="#D99A36"
          />
          {/* White page accent lines */}
          <path
            d="M14 28C19 25 25 25 29 27.5"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M50 28C45 25 39 25 35 27.5"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      </div>

      <div className="flex flex-col leading-tight">
        <span
          className={`font-serif text-xl sm:text-2xl font-bold tracking-tight ${
            isDark ? "text-white" : "text-[#14234F]"
          }`}
        >
          Mrs. Stephens
        </span>
        <span
          className={`text-xs sm:text-sm font-semibold tracking-wide ${
            isDark ? "text-[#D99A36]" : "text-[#168C89]"
          }`}
        >
          Online Tutoring
        </span>
      </div>
    </div>
  );
};
