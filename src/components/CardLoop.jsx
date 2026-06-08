"use client";

// HeroUI (NextUI) থেকে প্রয়োজনীয় কম্পোনেন্ট ইমপোর্ট করা হলো
import { Card, Button } from "@heroui/react";
// Gravity UI Icons ইমপোর্ট করা হলো
import { Pin, Clock, CircleDollar, ArrowRight } from "@gravity-ui/icons";

export default function CardLoop() {
  // কার্ডের ডামি ডাটা অ্যারে
  const jobsData = Array(6).fill({
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25 €40/hour",
  });

  return (
    <section className="relative w-full bg-[#0a0a0a] text-white py-24 px-4 overflow-hidden select-none flex flex-col items-center justify-center">
      
      {/* 📝 Top Section: Badge and Main Headings */}
      <div className="text-center flex flex-col items-center gap-4 mb-16">
        {/* ছোট প্রি-হেডিং ব্যাজ */}
        <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-[#5850ec] uppercase">
          <span className="w-1.5 h-1.5 bg-[#5850ec] rounded-sm animate-pulse" />
          SMART JOB DISCOVERY
          <span className="w-1.5 h-1.5 bg-[#5850ec] rounded-sm animate-pulse" />
        </div>

        {/* প্রধান টাইটেল */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl leading-tight">
          The roles you  never <br /> find by searching
        </h2>
      </div>

      {/* 🎴 HeroUI Job Cards Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-2 sm:px-6">
        {jobsData.map((job, index) => (
          <Card
            key={index}
            className="bg-[#121212]/60 border border-zinc-900 backdrop-blur-md rounded-2xl shadow-xl hover:border-zinc-800 transition-all duration-300 w-full"
            shadow="none"
          >
            {/* কার্ডের ভেতরের কন্টেন্ট (CardBody এর বিকল্প পিওর div লেআউট) */}
            <div className="p-6 flex flex-col items-start justify-between h-full min-h-[260px] gap-6">
              
              {/* উপরের অংশ: টাইটেল এবং বিবরণ */}
              <div className="flex flex-col gap-3 text-left">
                <h3 className="text-xl font-semibold text-white tracking-tight">
                  {job.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed max-w-[280px]">
                  {job.description}
                </p>
              </div>

              {/* মাঝের অংশ: মেটা ট্যাগ বা ব্যাজসমূহ (Location, Type, Salary) */}
              <div className="flex flex-col gap-2 w-full">
                {/* লোকেশন এবং জব টাইপ রো */}
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  {/* Location Tag */}
                  <div className="inline-flex items-center gap-1.5 bg-zinc-900/60 text-neutral-400 border border-zinc-800/40 px-2.5 py-1 rounded-full font-medium">
                    <Pin className="w-3 h-3 text-[#ff66b2]/80" />
                    {job.location}
                  </div>
                  
                  {/* Job Type Tag */}
                  <div className="inline-flex items-center gap-1.5 bg-zinc-900/60 text-neutral-400 border border-zinc-800/40 px-2.5 py-1 rounded-full font-medium">
                    <Clock className="w-3 h-3 text-[#ff66b2]/80" />
                    {job.type}
                  </div>
                </div>

                {/* স্যালারি ট্যাগ রো */}
                <div className="flex items-center text-xs">
                  <div className="inline-flex items-center gap-1.5 bg-zinc-900/60 text-neutral-400 border border-zinc-800/40 px-2.5 py-1 rounded-full font-medium">
                    <CircleDollar className="w-3 h-3 text-[#ff66b2]/80" />
                    {job.salary}
                  </div>
                </div>
              </div>

              {/* নিচের অংশ: অ্যাকশন বাটন বা লিংক */}
              <button 
                type="button"
                className="group inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-neutral-300 bg-transparent border-none p-0 transition-colors cursor-pointer"
              >
                Apply Now
                <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          </Card>
        ))}
      </div>

      {/* 🔘 Bottom Action Button: View all job open */}
      <div className="mt-16 z-10">
        <Button
          className="bg-white hover:bg-neutral-200 text-black font-semibold text-sm px-6 py-5 rounded-xl transition-all duration-200 shadow-lg"
          radius="md"
        >
          View all job open
        </Button>
      </div>

    </section>
  );
}