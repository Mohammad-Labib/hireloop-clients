
"use client"
import Link from "next/link";
import { Button } from "@heroui/react";
import { ShieldExclamation, ArrowLeft, House } from "@gravity-ui/icons";

export default  function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-950 px-4 text-white">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl text-center">
        
        {/* Shield Icon Warning Animation */}
        <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/20 animate-pulse">
          <ShieldExclamation className="w-8 h-8" />
        </div>

        {/* Error Headers */}
        <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2">403</h1>
        <h2 className="text-xl font-bold text-slate-200 mb-3">Access Denied / Unauthorized</h2>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-8">
          Oops! You don&apos;t have permission to access this page. Please sign in with an authorized account or head back to safety.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <Button
            as={Link}
            href="/auth/signin"
            color="primary"
            className="w-full font-semibold py-6 text-sm rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/10 transition-all"
          >
            Sign In with Another Account
          </Button>

          <div className="grid grid-cols-2 gap-3 mt-1">
            <Button
              as={Link}
              href="/"
              variant="bordered"
              className="border-slate-800 hover:bg-slate-800 font-medium py-5 text-xs rounded-xl text-slate-300 flex items-center justify-center gap-1.5 transition"
            >
              <House className="w-4 h-4" /> Home
            </Button>
            
            <Button
              onClick={() => typeof window !== 'undefined' && window.history.back()}
              variant="bordered"
              className="border-slate-800 hover:bg-slate-800 font-medium py-5 text-xs rounded-xl text-slate-300 flex items-center justify-center gap-1.5 transition"
            >
              <ArrowLeft className="w-4 h-4" /> Go Back
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}