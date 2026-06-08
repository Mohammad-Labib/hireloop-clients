"use client";
import React from 'react';
import { Card } from "@heroui/react";

// এটি শুধুমাত্র ১টি সিঙ্গেল কার্ড রেন্ডার করবে
export default function StatCard({ title, value, icon: Icon }) {
  return (
    <Card className="border border-[#1e1e1e] bg-[#121212] rounded-xl p-6 shadow-sm w-full">
      <div className="flex flex-col gap-5">
        {/* আইকন কন্টেইনার */}
        {Icon && (
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#1c1c1e] text-neutral-400">
            <Icon size={20} />
          </div>
        )}
        
        {/* টেক্সট কন্টেন্ট */}
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium text-neutral-400 tracking-wide whitespace-nowrap">
            {title}
          </p>
          <h3 className="text-3xl font-semibold text-white tracking-tight">
            {value}
          </h3>
        </div>
      </div>
    </Card>
  );
}