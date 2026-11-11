import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { TrustHighlights } from "./components/TrustHighlights";
import { TutoringPrograms } from "./components/TutoringPrograms";
import { AboutMrsStephens } from "./components/AboutMrsStephens";
import { CommunitySection } from "./components/CommunitySection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F7F2] text-[#14234F] flex flex-col font-sans selection:bg-[#D99A36]/20 selection:text-[#14234F]">
      {/* 1. Header / Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Trust & Value Highlights */}
        <TrustHighlights />

        {/* 4. Tutoring Programs */}
        <TutoringPrograms />

        {/* 5. Meet Mrs. Lorene Stephens */}
        <AboutMrsStephens />

        {/* 6. Community Section (Full Navy Banner) */}
        <CommunitySection />

        {/* 7. Frequently Asked Questions */}
        <FAQSection />

        {/* 8. Final Call to Action */}
        <FinalCTA />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
