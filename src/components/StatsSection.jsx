"use client";

import Image from "next/image";
// HeroUI (NextUI) কম্পোনেন্ট
import { Card, CardBody } from "@heroui/react";
import { motion } from "motion/react"
// Gravity UI Icons
import { Briefcase, Persons, Target, Star } from "@gravity-ui/icons";

export default function StatsSection() {
  const statsData = [
    {
      id: 1,
      icon: <Briefcase className="w-5 h-5 text-neutral-400" />,
      value: "50K",
      label: "Active Jobs",
    },
    {
      id: 2,
      icon: <Persons className="w-5 h-5 text-neutral-400" />,
      value: "12K",
      label: "Companies",
    },
    {
      id: 3,
      icon: <Target className="w-5 h-5 text-neutral-400" />,
      value: "2M",
      label: "Job Seekers",
    },
    {
      id: 4,
      icon: <Star className="w-5 h-5 text-neutral-400" />,
      value: "97%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section className="relative w-full bg-[#0a0a0a] text-white py-24 px-4 overflow-hidden select-none flex flex-col items-center justify-center">

      {/* 🌍 Background Globe Image Container */}
      <div className="absolute  left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1000px] opacity-80 pointer-events-none z-0">
        {/* গ্লোবের পেছনের নীল কালার লাইٹنگ বা গ্লো ইফেক্ট */}
        <div className="absolute inset-0 bg-blue-600/20 blur-[120px] rounded-full scale-75 transform translate-y-[-10%]" />

        {/* মূল গ্লোব ইমেজ (সরাসরি public ফোল্ডারের পাথ দেওয়া হয়েছে) */}
        <Image
          src="/images/globe.png"
          alt="Globe Network Background"
          fill
          priority
          className="object-contain object-top"
        />

        {/* ইমেজের নিচের অংশকে স্মুথলি ব্যাকগ্রাউন্ডের সাথে মেশানোর জন্য ফেড মাস্ক */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      {/* 📝 Content Wrapper */}
      <div className="relative mx-auto max-w-6xl w-full text-center flex flex-col items-center gap-16 z-10">

        {/* Heading Text */}
        <h2 className="text-2xl sm:text-4xl font-normal text-neutral-200 max-w-2xl leading-snug tracking-tight">
          Assisting over <span className="font-semibold text-white">15,000 job seekers</span> <br />
          find their dream positions.
        </h2>

        {/* motion animation add */}
        <motion.p
         initial={{ scale: 0 }} animate={{ scale: 1 }}
        >
          Remote Job</motion.p>


        {/* 🎴 HeroUI Stats Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-5xl">
          {statsData.map((stat) => (
            <Card
              key={stat.id}
              className="bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-md rounded-2xl shadow-xl  transition-all duration-300"
              shadow="none"
            >
              <div className="p-6 flex flex-col items-start text-left gap-4">
                {/* Icon wrapper */}
                <div className="p-2 bg-zinc-950/60 rounded-xl border border-zinc-800/40">
                  {stat.icon}
                </div>

                {/* Stats Counter & Label */}
                <div className="flex flex-col gap-1">
                  <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-500 font-medium">
                    {stat.label}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}