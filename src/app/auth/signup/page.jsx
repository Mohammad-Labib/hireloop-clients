"use client";

import { useState } from "react";
import {Description, Label, Radio, RadioGroup} from "@heroui/react";
import Link from "next/link";
import { Input, Button } from "@heroui/react";
import { signUp } from "@/lib/auth-client";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [role, setRole] = useState("seeker")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // স্ট্যান্ডার্ড ও নিরাপদ চেঞ্জ হ্যান্ডলার
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const result = await signUp.email({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role,
        callbackURL: "/",
      });

      if (result?.error) {
        setError(result.error.message);
        return;
      }

      setSuccess("Account created successfully!");

      // ফর্ম রিসেট
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } catch (err) {
      setError(err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-950 px-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-center text-white">
          Create Account
        </h1>

        <p className="text-center text-slate-400 mt-2">
          Sign up to continue
        </p>

        <form onSubmit={handleSignup} className="mt-6 space-y-5">
          
          {/* Full Name Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-neutral-400">Full Name</label>
            <Input
              placeholder="Enter Your Full Name"
              variant="bordered"
              type="text"
              name="name"
              className="w-full text-white"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

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

          {/* role selection */}
          <div className="flex flex-col gap-4">
      <Label>Subscription plan</Label>
      <RadioGroup defaultValue="seeker" onChange={value => setRole(value)} name="role" orientation="horizontal" >

        <Radio  value="seeker">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>Job Seeker</Label>
          </Radio.Content>
        </Radio>

        <Radio value="recruiter">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>Recruiter</Label>
        
          </Radio.Content>
        </Radio>
        
      </RadioGroup>
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
            {loading ? "Creating..." : "Sign Up"}
          </Button>
        </form>

        <p className="text-center text-slate-400 mt-6 text-sm">
          Already have an account?{" "}
          <Link
            href="/auth/signin"
            className="text-blue-500 hover:text-blue-400 font-medium underline underline-offset-4"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}