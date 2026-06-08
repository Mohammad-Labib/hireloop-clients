"use client";
import React from 'react';
import StatCard from './StatCard'; // Default import (কার্লি ব্রেস ছাড়া)
import { FileText, Persons, Thunderbolt, CircleCheck } from '@gravity-ui/icons';

export const DashboardStats = () => {
  // ডাটা এখানেই ডিফাইন করে দেওয়া হলো যাতে পাস করতে ঝামেলা না হয়
  const statsData = [
    { id: 1, title: "Total Job Posts", value: "48", icon: FileText },
    { id: 2, title: "Total Applicants", value: "1,284", icon: Persons },
    { id: 3, title: "Active Jobs", value: "18", icon: Thunderbolt },
    { id: 4, title: "Jobs Closed", value: "32", icon: CircleCheck },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 bg-black">
      {/* মূল গ্রিড লেআউট */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {statsData.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>
    </div>
  );
};