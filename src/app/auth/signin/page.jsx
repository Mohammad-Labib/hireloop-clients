"use client";

import { useState } from "react";
import Link from "next/link";
import { Input, Button } from "@heroui/react";
import {  signIn } from "@/lib/auth-client"; // Better Auth ক্লায়েন্ট ইনস্ট্যান্স
import { useRouter, useSearchParams } from "next/navigation";

export default function SigninPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const searchparams = useSearchParams();
  const redirectTo = searchparams.get("redirect") || "/"
  // console.log("Redireacting: ", redirectTo);
  // স্ট্যান্ডার্ড ও নিরাপদ চেঞ্জ হ্যান্ডলার
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignin = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const result = await signIn.email({
        email: formData.email,
        password: formData.password,
      });

      if (result?.error) {
        setError(result.error.message);
        return;
      }

      setSuccess("Login successful!");

      // ফর্ম রিসেট
      setFormData({
        email: "",
        password: "",
        // router.push(redirectTo);
      });
      router.push(redirectTo);

    } catch (err) {
      setError(err.message || "Sign in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-950 px-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-center text-white">
          Welcome Back
        </h1>

        <p className="text-center text-slate-400 mt-2">
          Sign in to continue
        </p>

        <form onSubmit={handleSignin} className="mt-6 space-y-5">
          
          {/* Email Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-neutral-400">Email</label>
            <Input
              placeholder="you@example.com"
              variant="bordered"
              type="email"
              name="email"
              className="w-full text-white"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-neutral-400">Password</label>
            <Input
              placeholder="••••••••"
              variant="bordered"
              type="password"
              name="password"
              className="w-full text-white"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* এরর মেসেজ */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          {/* সাকসেস মেসেজ */}
          {success && (
            <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-3 rounded-xl text-sm">
              {success}
            </div>
          )}

          {/* সাবমিট বাটন */}
          <Button
            type="submit"
            color="primary"
            className="w-full font-semibold py-6 text-sm rounded-xl"
            isDisabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        <p className="text-center text-slate-400 mt-6 text-sm">
          Don&apos;t have an account yet?{" "}
          <Link
            href= {`/auth/signup?redirect=${redirectTo}`}
            className="text-blue-500 hover:text-blue-400 font-medium underline underline-offset-4"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}