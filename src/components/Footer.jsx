"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// Gravity UI Icons ইমপোর্ট করা হলো
import {  LogoGithub,  LogoFacebook, LogoLinkedin } from "@gravity-ui/icons";
// import {LogoFacebook} from '@gravity-ui/icons';

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const footerLinks = {
    product: [
      { label: "Job discovery", href: "/jobs" },
      { label: "Worker AI", href: "/worker-ai" },
      { label: "Companies", href: "/companies" },
      { label: "Salary data", href: "/salary" },
    ],
    navigations: [
      { label: "Help center", href: "/help" },
      { label: "Career library", href: "/library" },
      { label: "Contact", href: "/contact" },
    ],
    resources: [
      { label: "Brand Guideline", href: "/brand" },
      { label: "Newsroom", href: "/newsroom" },
    ],
  };

  return (
    <footer className="w-full bg-[#121212] text-neutral-400 border-t border-neutral-800 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand info and Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          
          {/* Left Block: Logo and Description */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-1 text-2xl font-bold tracking-tight select-none w-fit">
              <span className="text-[#0070f3]">hire</span>
              <span className="relative flex items-center justify-center w-7 h-7 mx-0.5">
                {mounted && (
                  <>
                    <span className="absolute inset-0 rounded-full border-3 border-t-cyan-400 border-r-blue-500 border-b-transparent border-l-transparent animate-spin [animation-duration:3s]"></span>
                    <span className="absolute inset-1 rounded-full border-3 border-b-orange-500 border-l-red-500 border-t-transparent border-r-transparent animate-spin [animation-duration:2s] reverse"></span>
                  </>
                )}
              </span>
              <span className="text-[#f5a623]">p</span>
            </Link>
            <p className="max-w-sm text-sm text-neutral-500 font-normal leading-relaxed">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          {/* Right Blocks: Link Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Product */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[#5850ec] text-sm font-semibold tracking-wider uppercase">Product</h3>
              <ul className="flex flex-col gap-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Navigations */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[#5850ec] text-sm font-semibold tracking-wider uppercase">Navigations</h3>
              <ul className="flex flex-col gap-3">
                {footerLinks.navigations.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
              <h3 className="text-[#5850ec] text-sm font-semibold tracking-wider uppercase">Resources</h3>
              <ul className="flex flex-col gap-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section: Socials and Copyright */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          
          {/* Social Icons with Gravity UI Components */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg bg-neutral-900 text-neutral-400 hover:text-white transition-colors" aria-label="Facebook">
              <LogoFacebook className="w-4 h-4" />
            </a>
            
            {/* Pinterest / Middle Highlighted Icon */}
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#5850ec] text-white hover:opacity-90 transition-opacity" aria-label="Pinterest">
              <LogoGithub className="w-4 h-4" />
            </a>
            
            {/* LinkedIn */}
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg bg-neutral-900 text-neutral-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <LogoLinkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright and Policy Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-neutral-600 font-medium">
            <span>Copyright 2026 — Programming Hero</span>
            <div className="hidden sm:block w-[1px] h-3 bg-neutral-800" />
            <div className="flex items-center gap-3">
              <Link href="/terms" className="hover:text-neutral-400 transition-colors">Terms & Policy</Link>
              <span>-</span>
              <Link href="/privacy" className="hover:text-neutral-400 transition-colors">Privacy Guideline</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}