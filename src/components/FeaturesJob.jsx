"use client";

// HeroUI (NextUI) থেকে প্রয়োজনীয় কম্পোনেন্ট
import { Card } from "@heroui/react";
// Gravity UI Icons ইমপোর্ট করা হলো
import { 
  Magnifier, 
  ChartLine, 
  LayoutCellsLarge, 
  Bookmark, 
  FontCursor, 
  FileText, 
  ShieldCheck, 
  ChartColumn 
} from "@gravity-ui/icons";

export default function FeaturesJob() {
  // ফিচারের ডাটা অ্যারে (ইমেজের ৮টি ফিচার ক্রমানুসারে)
  const featuresData = [
    {
      icon: <Magnifier className="w-5 h-5 text-[#ff66b2]/90" />,
      title: "Smart Search",
      description: "Find your ideal job with advanced filters.",
    },
    {
      icon: <ChartLine className="w-5 h-5 text-[#ff66b2]/90" />,
      title: "Salary Insights",
      description: "Get real salary data to negotiate confidently.",
    },
    {
      icon: <LayoutCellsLarge className="w-5 h-5 text-[#ff66b2]/90" />,
      title: "Top Companies",
      description: "Apply to vetted companies that are hiring.",
    },
    {
      icon: <Bookmark className="w-5 h-5 text-[#ff66b2]/90" />,
      title: "Saved Jobs",
      description: "Manage apps & favorites on your dashboard.",
    },
    {
      icon: <FontCursor className="w-5 h-5 text-[#ff66b2]/90" />,
      title: "One-Click Apply",
      description: "Simplify your job applications for an easier process!",
    },
    {
      icon: <FileText className="w-5 h-5 text-[#ff66b2]/90" />,
      title: "Resume Builder",
      description: "Create professional resumes with modern templates.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#ff66b2]/90" />,
      title: "Skill-Based Matching",
      description: "Discover jobs that match your skills and experience.",
    },
    {
      icon: <ChartColumn className="w-5 h-5 text-[#ff66b2]/90" />,
      title: "Career Growth Resources",
      description: "Boost your career with quick interview tips.",
    },
  ];

  return (
    <section className="relative w-full bg-[#0a0a0a] text-white py-24 px-4 overflow-hidden select-none flex flex-col items-center justify-center">
      
      {/* 📝 Top Section: Badge and Main Heading */}
      <div className="text-center flex flex-col items-center gap-4 mb-20">
        {/* ছোট প্রি-হেডিং ব্যাজ */}
        <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-[#5850ec] uppercase">
          <span className="w-1.5 h-1.5 bg-[#5850ec] rounded-sm animate-pulse" />
          FEATURES JOB
          <span className="w-1.5 h-1.5 bg-[#5850ec] rounded-sm animate-pulse" />
        </div>

        {/* প্রধান টাইটেল */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl leading-tight">
          Everything you need <br /> to succeed
        </h2>
      </div>

      {/* 🎛️ Features 4-Column Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 w-full max-w-7xl px-4 sm:px-8">
        {featuresData.map((feature, index) => (
          <div key={index} className="flex items-start gap-4 group">
            
            {/* 🔲 Left Side: Icon Container Box */}
            <Card
              className="w-12 h-12 rounded-xl bg-zinc-900/50 border border-zinc-800/60 backdrop-blur-md flex items-center justify-center flex-shrink-0 shadow-lg group-hover:border-zinc-700 transition-colors"
              shadow="none"
            >
              <div className="flex items-center justify-center w-full h-full">
                {feature.icon}
              </div>
            </Card>

            {/* 📝 Right Side: Title and Description */}
            <div className="flex flex-col gap-1.5 text-left pt-1">
              <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-neutral-200 transition-colors">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed max-w-[220px]">
                {feature.description}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}