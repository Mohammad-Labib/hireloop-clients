"use client";

import { useState } from "react";
// HeroUI (NextUI) থেকে প্রয়োজনীয় কম্পোনেন্ট
import { Card, Button } from "@heroui/react";
// Gravity UI Icons - ১০০% গ্যারান্টিড আইকনসমূহ
import { Plus, ArrowRight, ChartPie, Bulb, Thunderbolt } from "@gravity-ui/icons";

export default function PayCard() {
  // মন্থলি এবং ইয়ারলি প্ল্যান টগল করার জন্য স্টেট
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      title: "Starter",
      icon: <Bulb className="w-4 h-4 text-[#ff66b2]" />,
      price: "0",
      description: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      buttonText: "Choose This Plan",
      isPopular: false,
    },
    {
      title: "Growth",
      icon: <ChartPie className="w-4 h-4 text-[#ff66b2]" />,
      price: isYearly ? "12" : "17", // ইয়ারলি ডিসকাউন্টের ডামি লজিক
      description: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      buttonText: "Choose This Plan",
      isPopular: true, // ইমেজে মাঝের কার্ডটি হাইলাইটেড এবং সাদা বাটনের
    },
    {
      title: "Premium",
      icon: <Thunderbolt className="w-4 h-4 text-[#ff66b2]" />,
      price: "99",
      description: "Start building your insights hub:",
      features: [
        "Everything in Pro",
        "Multi-profile career portfolios",
        "Shared talent rooms",
        "Recruiter view (read-only)",
      ],
      buttonText: "Choose This Plan",
      isPopular: false,
    },
  ];

  return (
    <section className="relative w-full bg-[#0a0a0a] text-white py-24 px-4 overflow-hidden select-none flex flex-col items-center justify-center">
      
      {/* 📝 Top Header Section */}
      <div className="text-center flex flex-col items-center gap-4 mb-10">
        {/* PRICING Badge */}
        <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-[#5850ec] uppercase">
          <span className="w-1.5 h-1.5 bg-[#5850ec] rounded-sm animate-pulse" />
          PRICING
          <span className="w-1.5 h-1.5 bg-[#5850ec] rounded-sm animate-pulse" />
        </div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl leading-tight">
          Pay for the leverage, <br /> not the listings
        </h2>
      </div>

      {/* 🔄 Monthly / Yearly Toggle Button Container */}
      <div className="mb-16 bg-zinc-900/80 border border-zinc-800/60 p-1 rounded-full flex items-center relative">
        <button
          onClick={() => setIsYearly(false)}
          className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-300 ${
            !isYearly ? "bg-white text-black shadow-md" : "text-neutral-400 hover:text-white"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsYearly(true)}
          className={`px-5 py-2 text-xs font-semibold rounded-full flex items-center gap-2 transition-all duration-300 ${
            isYearly ? "bg-white text-black shadow-md" : "text-neutral-400 hover:text-white"
          }`}
        >
          Yearly
          <span className="bg-[#ff66b2] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
            25%
          </span>
        </button>
      </div>

      {/* 🎴 Pricing Cards Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4 sm:px-8">
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            className={`rounded-2xl transition-all duration-300 w-full flex flex-col p-6 gap-6 ${
              plan.isPopular
                ? "bg-[#141414]/90 border-2 border-zinc-700/80 shadow-2xl scale-105"
                : "bg-[#0d0d0d]/60 border border-zinc-900/80 shadow-xl"
            }`}
            shadow="none"
          >
            {/* Header part: Title and Price */}
            <div className="flex items-center justify-between w-full">
              {/* Title & Icon */}
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-zinc-900/60 rounded-lg border border-zinc-800/40">
                  {plan.icon}
                </div>
                <span className="text-lg font-medium text-neutral-200">{plan.title}</span>
              </div>
              {/* Price */}
              <div className="flex items-baseline text-white">
                <span className="text-3xl font-bold">${plan.price}</span>
                <span className="text-xs text-neutral-500 font-normal ml-0.5">/month</span>
              </div>
            </div>

            {/* Description Line */}
            <p className="text-xs sm:text-sm text-neutral-300 text-left font-medium">
              {plan.description}
            </p>

            {/* Features List */}
            <div className="flex flex-col gap-3 text-left w-full flex-grow">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-400">
                  <div className="p-0.5 bg-zinc-900 rounded border border-zinc-800 mt-0.5 flex-shrink-0">
                    <Plus className="w-3 h-3 text-neutral-500" />
                  </div>
                  <span className="leading-snug">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <Button
              className={`w-full font-semibold text-xs py-5 rounded-xl transition-all duration-200 flex items-center justify-between px-5 ${
                plan.isPopular
                  ? "bg-white text-black hover:bg-neutral-200"
                  : "bg-zinc-900/60 text-neutral-300 border border-zinc-800/80 hover:bg-zinc-800/50"
              }`}
            >
              <span>{plan.buttonText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Card>
        ))}
      </div>

    </section>
  );
}