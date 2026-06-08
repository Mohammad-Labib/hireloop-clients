"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// import { signOut, useSession } from "@/lib/auth-client"
import { signOut, useSession } from "@/lib/auth-client";


import { Button } from "@heroui/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Better Auth সেশন হুক কল
  // const { data: session, isPending } = useSession();
  // const user = session?.user;

  const { data:session, isPending } = useSession();
  const user = session?.user;
  // console.log(session, isPending);

  const handleSignOut = async () => {
    try {
      await signOut();
      // মোবাইল মেনু খোলা থাকলে তা বন্ধ করার জন্য
      setIsMenuOpen(false); 
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  // Hydration Mismatch এড়ানোর জন্য mounted স্টেট
  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { label: "Browse Jobs", href: "/jobs" },
    { label: "Company", href: "/company" },
    { label: "Pricing", href: "/pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#121212]/95 backdrop-blur-lg border-b border-neutral-800 text-white">
      {/* Header wrapper handling spacing */}
      <header className="mx-auto max-w-7xl h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left Side: Brand Logo & Mobile Toggle Button */}
        <div className="flex items-center gap-4">
          {/* Hamburger / Close Trigger */}
          <button
            className="sm:hidden p-2 text-neutral-400 hover:text-white transition-colors rounded-md focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Main Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 text-2xl font-bold tracking-tight select-none">
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
        </div>

        {/* Right Side Group: Right-aligned Desktop Menu Links & Actions */}
        <div className="hidden sm:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-neutral-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <span className="h-4 w-[1px] bg-neutral-700" aria-hidden="true" />
          
          {/* ডেক্সটপ অথেনটিকেশন পার্ট */}
          {mounted && !isPending && (
            user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-neutral-200">Hi, {user.name}!</span>
                <Button 
                  onClick={handleSignOut} 
                  variant="flat" 
                  color="danger" 
                  size="sm" 
                  className="rounded-xl font-medium"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className="text-[#5850ec] hover:text-[#6875f5] transition-colors text-sm font-medium"
                >
                  Sign In
                </Link>
                
                <Link
                  href="/auth/signup"
                  className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all duration-200 hover:opacity-95 shadow-md shadow-indigo-500/10"
                >
                  Get Started
                </Link>
              </>
            )
          )}
        </div>
      </header>

      {/* Mobile Drawer Overlay Panel */}
      {isMenuOpen && (
        <div className="sm:hidden border-t border-neutral-800 bg-[#121212]/98 backdrop-blur-lg">
          <ul className="flex flex-col gap-1 p-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            
            <hr className="my-3 border-neutral-800" />
            
            {/* মোবাইল অথেনটিকেশন পার্ট */}
            {mounted && !isPending && (
              user ? (
                <div className="px-3 py-2 space-y-3">
                  <div className="text-sm text-neutral-400 font-medium">
                    Signed in as: <span className="text-white font-semibold">{user.name}</span>
                  </div>
                  <Button 
                    onClick={handleSignOut} 
                    color="danger" 
                    variant="flat" 
                    className="w-full font-medium rounded-xl"
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <>
                  <li>
                    <Link
                      href="/auth/signin"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#6875f5] hover:bg-neutral-900 transition-colors"
                    >
                      Sign In
                    </Link>
                  </li>
                  
                  <li className="px-3 pt-2">
                    <Link
                      href="/auth/signup"
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full text-center bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium py-2.5 rounded-xl shadow-lg shadow-indigo-500/10"
                    >
                      Get Started
                    </Link>
                  </li>
                </>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}