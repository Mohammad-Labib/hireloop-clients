"use client";

import React, { useState } from "react";
import { 
  Form, 
  Fieldset, 
  Input, 
  Select, 
  Label,
  ListBox,
  TextField,
  TextArea, 
  Button, 
  Switch
} from "@heroui/react";
import { ChevronDown, Xmark } from "@gravity-ui/icons";
import { createJob } from "@/lib/actions/jobs";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation"; // ১. রিডাইরেক্ট করার জন্য useRouter ইম্পোর্ট করা হয়েছে

// Mocked Recruiter & Company Data for Plan/Status Guardrails
const MOCK_RECRUITER_COMPANY = {
  id: "comp_987654",
  name: "Acme Corp",
  status: "APPROVED",
  plan: "Free",
  activeJobsCount: 1,
};

export default function PostJobForm({company}) {
  console.log("company information", company);
  const router = useRouter(); // ২. রাউটার ইনিশিয়েলাইজ করা হয়েছে
  const [isRemote, setIsRemote] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const PLAN_LIMITS = { Free: 3, Growth: 10, Enterprise: 50 };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    // Guardrail 1: Approved Company Check
    if (MOCK_RECRUITER_COMPANY.status !== "APPROVED") {
      setError("Your company profile must be approved before you can post a job.");
      toast.error("Company profile not approved!");
      return;
    }

    // Guardrail 2: Active Plan Limit Check
    const allowedLimit = PLAN_LIMITS[MOCK_RECRUITER_COMPANY.plan] || 0;
    if (MOCK_RECRUITER_COMPANY.activeJobsCount >= allowedLimit) {
      const limitMsg = `Job limit reached! Your ${MOCK_RECRUITER_COMPANY.plan} plan allows up to ${allowedLimit} active posts.`;
      setError(limitMsg);
      toast.error("Plan limit reached!");
      return;
    }

    const jobPayload = {
      title: data.title,
      category: data.category,
      type: data.type,
      deadline: data.deadline,
      minSalary: Number(data.minSalary),
      maxSalary: Number(data.maxSalary),
      currency: data.currency,
      location: isRemote ? "Remote" : data.location,
      isRemote,
      responsibilities: data.responsibilities,
      requirements: data.requirements,
      benefits: data.benefits || null,
      companyId: MOCK_RECRUITER_COMPANY.id,
      status: "active",
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await createJob(jobPayload);
      
      if (res && (res.insertedId || res.success)) {
        toast.success("Job posted successfully!");
        setSuccess("Job posted successfully! Redirecting...");
        
        e.target.reset();
        setIsRemote(false);

        // ৩. টোস্ট নোটিফিকেশনটি যেন ইউজার দেখতে পায়, তাই ২ সেকেন্ড (২০০০ মিলিসেকেন্ড) পর রিডাইরেক্ট হবে
        setTimeout(() => {
          router.push("/dashboard/recruiter/jobs");
        }, 2000);

      } else {
        const errMsg = res?.error || "Failed to create job listing.";
        setError(errMsg);
        toast.error(errMsg);
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setError("An unexpected error occurred. Please try again.");
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#18181b] text-[#f4f4f5] rounded-xl border border-[#27272a] p-6 shadow-2xl relative font-sans">
      
      <Toaster position="top-center" reverseOrder={false} />

      {/* Header Section */}
      <div className="mb-6 border-b border-[#27272a] pb-4 flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white">Post a New Job</h2>
          <p className="text-sm text-white mt-1">
            Fill in the details below to launch your listing on the job feed.
          </p>
        </div>
        <button type="button" className="text-[#a1a1aa] hover:text-white transition p-1">
          <Xmark className="w-5 h-5" />
        </button>
      </div>

      {/* Auto-filled Recruiter Plan Banner */}
      <div className="mb-6 p-3 bg-[#27272a]/40 rounded-lg border border-[#3f3f46] text-xs flex flex-col sm:flex-row justify-between gap-2 sm:items-center">
        <div>
          <span className="text-[#a1a1aa]">Posting verified under:</span>{" "}
          <strong className="text-white">{MOCK_RECRUITER_COMPANY.name}</strong> 
          <span className="ml-2 px-1.5 py-0.5 rounded bg-[#06b6d4]/20 text-[#22d3ee] font-medium text-[10px]">
            {MOCK_RECRUITER_COMPANY.status}
          </span>
        </div>
        <div className="text-[#a1a1aa]">
          Active plan usage: <strong className="text-white">{MOCK_RECRUITER_COMPANY.activeJobsCount}/{PLAN_LIMITS[MOCK_RECRUITER_COMPANY.plan]}</strong> slots filled ({MOCK_RECRUITER_COMPANY.plan} Plan)
        </div>
      </div>

      <Form onSubmit={handleSubmit} className="space-y-6">
        
        {/* SECTION 1: JOB INFO */}
        <Fieldset className="w-full">
          <legend className="text-md font-semibold text-[#f4f4f5] border-b border-[#27272a] pb-1 w-full mb-4">
            Job Information
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Job Title */}
            <TextField className="w-full flex flex-col gap-1.5">
              <Label className="text-sm font-medium text-[#f4f4f5]">Job Title *</Label>
              <Input
                required
                name="title"
                placeholder="e.g. Senior Frontend Engineer"
                className="bg-[#27272a]/40 border border-[#3f3f46] rounded-xl px-3 text-sm text-white h-10 focus-within:border-[#a1a1aa] transition outline-none w-full"
              />
            </TextField>

            {/* Job Category Select */}
            <Select name="category" className="w-full">
              <Label className="text-sm font-medium text-[#f4f4f5] mb-1 block">Job Category</Label>
              <Select.Trigger className="bg-[#27272a]/40 border border-[#3f3f46] rounded-xl px-3 py-2 w-full flex justify-between items-center text-sm text-[#a1a1aa] h-10 focus-within:border-[#a1a1aa] transition">
                <Select.Value placeholder="Select a category" />
                <ChevronDown className="w-4 h-4 opacity-70" />
              </Select.Trigger>
              <Select.Popover className="bg-[#18181b] border border-[#27272a] rounded-lg shadow-xl text-[#f4f4f5]">
                <ListBox className="p-1">
                  <ListBox.Item id="technology" textValue="Technology & Software" className="p-2 hover:bg-[#27272a] rounded cursor-pointer text-sm">Technology & Software</ListBox.Item>
                  <ListBox.Item id="design" textValue="UI/UX & Creative Design" className="p-2 hover:bg-[#27272a] rounded cursor-pointer text-sm">UI/UX & Creative Design</ListBox.Item>
                  <ListBox.Item id="marketing" textValue="Marketing & Sales" className="p-2 hover:bg-[#27272a] rounded cursor-pointer text-sm">Marketing & Sales</ListBox.Item>
                  <ListBox.Item id="product" textValue="Product Management" className="p-2 hover:bg-[#27272a] rounded cursor-pointer text-sm">Product Management</ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>

            {/* Job Type Select */}
            <Select name="type" className="w-full">
              <Label className="text-sm font-medium text-[#f4f4f5] mb-1 block">Job Type</Label>
              <Select.Trigger className="bg-[#27272a]/40 border border-[#3f3f46] rounded-xl px-3 py-2 w-full flex justify-between items-center text-sm text-[#a1a1aa] h-10 focus-within:border-[#a1a1aa] transition">
                <Select.Value placeholder="Select job commitment" />
                <ChevronDown className="w-4 h-4 opacity-70" />
              </Select.Trigger>
              <Select.Popover className="bg-[#18181b] border border-[#27272a] rounded-lg shadow-xl text-[#f4f4f5]">
                <ListBox className="p-1">
                  <ListBox.Item id="full-time" textValue="Full-time" className="p-2 hover:bg-[#27272a] rounded cursor-pointer text-sm">Full-time</ListBox.Item>
                  <ListBox.Item id="part-time" textValue="Part-time" className="p-2 hover:bg-[#27272a] rounded cursor-pointer text-sm">Part-time</ListBox.Item>
                  <ListBox.Item id="contract" textValue="Contract" className="p-2 hover:bg-[#27272a] rounded cursor-pointer text-sm">Contract</ListBox.Item>
                  <ListBox.Item id="internship" textValue="Internship" className="p-2 hover:bg-[#27272a] rounded cursor-pointer text-sm">Internship</ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>

            {/* Application Deadline */}
            <TextField className="w-full flex flex-col gap-1.5">
              <Label className="text-sm font-medium text-[#f4f4f5]">Application Deadline *</Label>
              <Input
                required
                type="date"
                name="deadline"
                className="bg-[#27272a]/40 border border-[#3f3f46] rounded-xl px-3 text-sm text-[#a1a1aa] h-10 focus-within:border-[#a1a1aa] transition outline-none w-full"
              />
            </TextField>
          </div>

          {/* Salary Matrix Block */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <TextField className="w-full flex flex-col gap-1.5">
              <Label className="text-sm font-medium text-[#f4f4f5]">Min Salary *</Label>
              <Input
                required
                type="number"
                name="minSalary"
                placeholder="0"
                className="bg-[#27272a]/40 border border-[#3f3f46] rounded-xl px-3 text-sm text-white h-10 focus-within:border-[#a1a1aa] transition outline-none w-full"
              />
            </TextField>

            <TextField className="w-full flex flex-col gap-1.5">
              <Label className="text-sm font-medium text-[#f4f4f5]">Max Salary *</Label>
              <Input
                required
                type="number"
                name="maxSalary"
                placeholder="0"
                className="bg-[#27272a]/40 border border-[#3f3f46] rounded-xl px-3 text-sm text-white h-10 focus-within:border-[#a1a1aa] transition outline-none w-full"
              />
            </TextField>
            
            {/* Currency Choice Dropdown */}
            <Select name="currency" className="w-full">
              <Label className="text-sm font-medium text-[#f4f4f5] mb-1 block">Currency</Label>
              <Select.Trigger className="bg-[#27272a]/40 border border-[#3f3f46] rounded-xl px-3 py-2 w-full flex justify-between items-center text-sm text-[#f4f4f5] h-10 focus-within:border-[#a1a1aa] transition">
                <Select.Value placeholder="USD ($)" />
                <ChevronDown className="w-4 h-4 opacity-70" />
              </Select.Trigger>
              <Select.Popover className="bg-[#18181b] border border-[#27272a] rounded-lg shadow-xl text-[#f4f4f5]">
                <ListBox className="p-1">
                  <ListBox.Item id="USD" textValue="USD ($)" className="p-2 hover:bg-[#27272a] rounded cursor-pointer text-sm">USD ($)</ListBox.Item>
                  <ListBox.Item id="EUR" textValue="EUR (€)" className="p-2 hover:bg-[#27272a] rounded cursor-pointer text-sm">EUR (€)</ListBox.Item>
                  <ListBox.Item id="BDT" textValue="BDT (৳)" className="p-2 hover:bg-[#27272a] rounded cursor-pointer text-sm">BDT (৳)</ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Location & Remote Block Matrix */}
          <div className="mt-6 flex flex-col sm:flex-row gap-6 items-end">
            <TextField className="flex-1 w-full flex flex-col gap-1.5">
              <Label className="text-sm font-medium text-[#f4f4f5]">
                Location {!isRemote && "*"}
              </Label>
              <Input
                disabled={isRemote}
                required={!isRemote}
                name="location"
                placeholder={isRemote ? "Remote Position Active" : "e.g. Dhaka, Bangladesh"}
                className={`bg-[#27272a]/40 border border-[#3f3f46] rounded-xl px-3 text-sm text-white h-10 focus-within:border-[#a1a1aa] transition outline-none w-full ${isRemote ? "opacity-40 select-none cursor-not-allowed" : ""}`}
              />
            </TextField>
            
            <div className="pb-2 flex items-center h-10">
              <Switch isSelected={isRemote} onValueChange={setIsRemote}>
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
                <Switch.Content>
                  <Label className="text-sm text-[#a1a1aa] ml-2 select-none cursor-pointer">
                    Remote Placement
                  </Label>
                </Switch.Content>
              </Switch>
            </div>
          </div>
        </Fieldset>

        {/* SECTION 2: JOB CONTENT DETAILS */}
        <Fieldset className="w-full">
          <legend className="text-md font-semibold text-[#f4f4f5] border-b border-[#27272a] pb-1 w-full mb-4">
            Job Content Details
          </legend>

          <div className="space-y-5">
            <TextField className="w-full flex flex-col gap-1.5">
              <Label className="text-sm font-medium text-[#f4f4f5]">Core Responsibilities *</Label>
              <TextArea 
                required
                name="responsibilities"
                placeholder="Outline the day-to-day duties and core targets of this role..." 
                rows={4}
                className="bg-[#27272a]/40 border border-[#3f3f46] rounded-xl px-4 py-3 text-sm text-white focus:border-[#a1a1aa] transition outline-none w-full min-h-[110px] resize-y"
              />
            </TextField>

            <TextField className="w-full flex flex-col gap-1.5">
              <Label className="text-sm font-medium text-[#f4f4f5]">Requirements & Qualifications *</Label>
              <TextArea 
                required
                name="requirements"
                placeholder="What skills, stack competencies, or experience milestones are mandatory?" 
                rows={4}
                className="bg-[#27272a]/40 border border-[#3f3f46] rounded-xl px-4 py-3 text-sm text-white focus:border-[#a1a1aa] transition outline-none w-full min-h-[110px] resize-y"
              />
            </TextField>

            <TextField className="w-full flex flex-col gap-1.5">
              <Label className="text-sm font-medium text-[#f4f4f5]">Benefits & Perks (Optional)</Label>
              <TextArea 
                name="benefits"
                placeholder="e.g. Health insurance, flexible hours, remote allowances..." 
                rows={3}
                className="bg-[#27272a]/40 border border-[#3f3f46] rounded-xl px-4 py-3 text-sm text-white focus:border-[#a1a1aa] transition outline-none w-full min-h-[90px] resize-y"
              />
            </TextField>
          </div>
        </Fieldset>

        {/* Feedbacks */}
        {error && (
          <div className="p-3 bg-danger-500/10 border border-danger-500/30 text-danger rounded-lg text-xs font-medium">
            ⚠️ {error}
          </div>
        )}

        {success && (
          <div className="p-3 bg-success-500/10 border border-success-500/30 text-success rounded-lg text-xs font-medium">
            ✅ {success}
          </div>
        )}

        {/* Form Footer Action */}
        <div className="flex justify-end gap-3 pt-4 border-t border-[#27272a]">
          <Button 
            type="button" 
            variant="flat" 
            className="bg-[#27272a] text-[#e4e4e7] hover:bg-[#3f3f46] h-10 px-4 rounded-xl text-sm font-medium transition"
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            className="bg-white text-black font-semibold shadow-md hover:bg-[#e4e4e7] h-10 px-5 rounded-xl text-sm transition"
          >
            Publish Live Listing
          </Button>
        </div>
      </Form>
    </div>
  );
}