"use client";

import { Magnifier, MapPin } from "@gravity-ui/icons";

export default function Banner() {
  const trendingPositions = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

  return (
    <section className="relative w-full bg-[#0a0a0a] text-white min-h-[85vh] flex flex-col items-center justify-center px-4 overflow-hidden select-none">
      
      {/* Background Subtle Glow/Stars Effect Placeholder */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="mx-auto max-w-4xl text-center flex flex-col items-center gap-6 z-10">
        
        {/* 🚀 Top Mini Badge with Side Gradient Lines (ইমেজের মতো দুই পাশের লাইন) */}
        <div className="w-full max-w-2xl flex items-center justify-center gap-4 select-none">
          {/* বাম পাশের গ্রেডিয়েন্ট লাইন */}
          <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-indigo-500/50" />

          {/* মাঝখানের মূল ব্যাজ কন্টেন্ট */}
          <div className="inline-flex items-center gap-2 bg-zinc-900/90 border border-zinc-800/80 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider text-neutral-400 uppercase shadow-2xl backdrop-blur-md flex-shrink-0">
            <span className="text-sm">💼</span>
            <span className="text-white font-bold">50,000+</span> NEW JOBS THIS MONTH
          </div>

          {/* ডান পাশের গ্রেডিয়েন্ট লাইন */}
          <div className="flex-grow h-[1px] bg-gradient-to-l from-transparent via-zinc-700 to-indigo-500/50" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.15]">
          Find Your Dream Job Today
        </h1>

        {/* Subtitle Paragraph */}
        <p className="text-neutral-400 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
          HireLoop connects top talent with world-class companies. Browse thousands of
          curated opportunities and find your next role — faster.
        </p>

        {/* Advanced Double Search Bar Input Container */}
        <div className="w-full max-w-3xl mt-4 bg-zinc-950/90 border border-zinc-800 rounded-2xl p-2 flex flex-col sm:flex-row items-center gap-2 sm:gap-0 shadow-2xl shadow-indigo-500/5 focus-within:border-zinc-700 transition-all">
          
          {/* Left Field: Job Title, Skill */}
          <div className="w-full flex items-center gap-3 px-3 py-2 sm:py-0">
            <Magnifier className="w-5 h-5 text-neutral-500 flex-shrink-0" />
            <input
              type="text"
              placeholder="Job title, skill or company"
              className="w-full bg-transparent border-none text-white placeholder-neutral-600 text-sm focus:outline-none"
            />
          </div>

          {/* Middle Vertical Divider Line */}
          <div className="hidden sm:block h-6 w-[1px] bg-zinc-800" />

          {/* Right Field: Location or Remote */}
          <div className="w-full flex items-center gap-3 px-3 py-2 sm:py-0">
            <MapPin className="w-5 h-5 text-neutral-500 flex-shrink-0" />
            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full bg-transparent border-none text-white placeholder-neutral-600 text-sm focus:outline-none"
            />
          </div>

          {/* Search Action Button */}
          <button
            type="button"
            className="w-full sm:w-auto bg-[#5850ec] hover:bg-[#6875f5] text-white p-3 sm:px-5 rounded-xl transition-all duration-200 flex items-center justify-center flex-shrink-0"
            aria-label="Search jobs"
          >
            <Magnifier className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Section: Trending Positions list */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 text-sm">
          <span className="text-neutral-500">Trending Position</span>
          <div className="flex flex-wrap justify-center gap-2">
            {trendingPositions.map((position, index) => (
              <button
                key={index}
                type="button"
                className="bg-zinc-900/60 hover:bg-zinc-800 text-neutral-300 hover:text-white border border-zinc-800 px-4 py-1.5 rounded-full text-xs transition-colors"
              >
                {position}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}