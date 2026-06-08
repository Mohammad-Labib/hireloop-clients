"use client";

// HeroUI (NextUI) থেকে Button ইম্পোর্ট করা হলো
import { Button } from "@heroui/react";

export default function CTASection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white py-32 px-4 overflow-hidden select-none flex flex-col items-center justify-center min-h-[550px]">
      
      {/* 🌐 3D Radial Grid & Blue Glow Background Layer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] max-w-[1200px] h-[600px] pointer-events-none z-0">
        
        {/* পেছনে থাকা ব্লু গ্লোয়িং লাইট ইফেক্ট */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[70%] h-[60%] bg-blue-600/35 blur-[120px] rounded-full" />
        
        {/* CSS দিয়ে তৈরি পারফেক্ট রেডিয়াল ওয়্যারফ্রেম গ্রিড */}
        <div 
          className="absolute inset-0 w-full h-full opacity-40 mix-blend-screen"
          style={{
            backgroundImage: `
              radial-gradient(circle at top center, transparent 20%, #0a0a0a 80%),
              radial-gradient(ellipse at top center, transparent 0%, rgba(255,255,255,0.03) 1px, transparent 1px),
              conic-gradient(from 180deg at top center, rgba(88,80,236,0.15) 0deg, transparent 60deg, transparent 300deg, rgba(88,80,236,0.15) 360deg)
            `,
            backgroundSize: '100% 100%, 40px 40px, 100% 100%',
          }}
        />

        {/* ইমেজের মতো সুক্ষ্ম বৃত্তাকার রেখা বা গ্রিড তৈরি করার জন্য কাস্টম ওভারলে */}
        <div 
          className="absolute inset-0 opacity-[0.15] mix-blend-screen" 
          style={{
            backgroundImage: 'radial-gradient(circle at top center, transparent 0%, transparent 10px, rgba(255,255,255,0.5) 11px, transparent 12px)',
            backgroundSize: '80px 80px',
            backgroundPosition: 'top center'
          }}
        />

        {/* নিচের অংশকে ব্যাকগ্রাউন্ডের সাথে স্মুথলি ব্লেন্ড করার মাস্ক */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
      </div>

      {/* 📝 Content Wrapper (টেক্সট এবং অ্যাকশন বাটনসমূহ) */}
      <div className="relative mx-auto max-w-3xl w-full text-center flex flex-col items-center z-10">
        
        {/* প্রধান ক্যাচফ্রেজ হেডলাইন */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
          Your next role is <br /> already looking for you
        </h2>

        {/* ছোট সাবটাইটেল ডেসক্রিপশন */}
        <p className="text-sm sm:text-base text-neutral-400 font-normal max-w-xl mb-12 leading-relaxed">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>

        {/* 🔘 Button Group (ইমেজের মতো পাশাপাশি দুটি ভিন্ন স্টাইলের বাটন) */}
        <div className="flex flex-row items-center justify-center gap-4 w-full">
          {/* প্রাইমারি হোয়াইট বাটন */}
          <Button
            className="bg-white hover:bg-neutral-200 text-black font-semibold text-sm px-6 py-6 rounded-xl transition-all duration-200 shadow-xl"
            radius="md"
          >
            Create a free account
          </Button>

          {/* সেকেন্ডারি ডার্ক ট্রান্সপারেন্ট বাটন */}
          <Button
            className="bg-transparent hover:bg-zinc-900/40 text-neutral-300 border border-zinc-800/80 font-medium text-sm px-6 py-6 rounded-xl transition-all duration-200"
            radius="md"
          >
            View pricing
          </Button>
        </div>

      </div>

    </section>
  );
}