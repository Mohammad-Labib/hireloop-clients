// import { getJobById } from '@/lib/api/jobs';
import { getJobById } from '@/lib/api/jobs';
import Link from 'next/link';
import React from 'react';

const JobDetailsPage = async ({ params }) => {
    const { id } = await params;
    const job = await getJobById(id);

    // যদি কোনো কারণে জব ডাটা না পাওয়া যায়
    if (!job) {
        return (
            <div className="min-h-screen bg-black text-zinc-500 flex items-center justify-center">
                <p className="text-xl">Job not found!</p>
            </div>
        );
    }

    // ডেট ফরম্যাট করার জন্য ছোট হেল্পার
    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <section className="min-h-screen bg-black text-white py-16 px-4">
            <div className="container mx-auto max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl p-6 md:p-10 shadow-xl">
                
                {/* হেডার সেকশন: টাইটেল ও ব্যাজ */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-8">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-violet-400 bg-violet-950/50 px-3 py-1 rounded-full border border-violet-800/50">
                            {job.category}
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold mt-3 text-zinc-100">
                            {job.title}
                        </h1>
                        <p className="text-zinc-400 mt-2 flex items-center gap-2">
                            📍 {job.location} • <span className="capitalize">{job.type}</span>
                        </p>
                    </div>

                    {/* এপ্লাই বাটন ও ডেডলাইন */}
                    <div className="flex flex-col items-start md:items-end gap-2">
                        <Link className="w-full md:w-auto bg-violet-600 hover:bg-violet-700 text-white font-medium px-8 py-3 rounded-xl transition-all duration-200 active:scale-95 shadow-lg shadow-violet-600/20"
                        href={`/jobs/${id}/apply`}
                        >
                        
                            Apply for Jobs
                        </Link>
                        
                        <p className="text-xs text-rose-400 font-medium mt-1">
                            Deadline: {formatDate(job.deadline)}
                        </p>
                    </div>
                </div>

                {/* কি-ইনফরমেশন গ্রিড (স্যালারি, ওয়ার্ক মোড ইত্যাদি) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800/60">
                    <div className="p-2">
                        <p className="text-xs text-zinc-500 uppercase font-semibold">Salary Range</p>
                        <p className="text-lg font-bold text-emerald-400 mt-1">
                            {job.minSalary?.toLocaleString()} - {job.maxSalary?.toLocaleString()} {job.currency}
                        </p>
                    </div>
                    <div className="p-2 border-t sm:border-t-0 sm:border-x border-zinc-800">
                        <p className="text-xs text-zinc-500 uppercase font-semibold">Work Mode</p>
                        <p className="text-lg font-medium text-zinc-200 mt-1">
                            {job.isRemote ? "Remote 🏠" : "On-site 🏢"}
                        </p>
                    </div>
                    <div className="p-2 border-t sm:border-t-0 border-zinc-800">
                        <p className="text-xs text-zinc-500 uppercase font-semibold">Posted On</p>
                        <p className="text-lg font-medium text-zinc-200 mt-1">
                            {formatDate(job.createdAt)}
                        </p>
                    </div>
                </div>

                {/* ডিটেইলস কন্টেন্ট সেকশন */}
                <div className="space-y-8 mt-8">
                    
                    {/* ১. দায়িত্মসমূহ (Responsibilities) */}
                    <div>
                        <h3 className="text-xl font-semibold text-zinc-200 mb-3 flex items-center gap-2">
                            <span className="text-violet-400">▪</span> Job Responsibilities
                        </h3>
                        <p className="text-zinc-400 leading-relaxed bg-zinc-900/30 p-4 rounded-xl border border-zinc-900 whitespace-pre-line">
                            {job.responsibilities || "No responsibilities specified."}
                        </p>
                    </div>

                    {/* ২. যোগ্যতা (Requirements) */}
                    <div>
                        <h3 className="text-xl font-semibold text-zinc-200 mb-3 flex items-center gap-2">
                            <span className="text-violet-400">▪</span> Requirements
                        </h3>
                        <p className="text-zinc-400 leading-relaxed bg-zinc-900/30 p-4 rounded-xl border border-zinc-900 whitespace-pre-line">
                            {job.requirements || "No requirements specified."}
                        </p>
                    </div>

                    {/* ৩. সুযোগ-সুবিধা (Benefits) */}
                    {job.benefits && (
                        <div>
                            <h3 className="text-xl font-semibold text-zinc-200 mb-3 flex items-center gap-2">
                                <span className="text-violet-400">▪</span> Benefits & Perks
                            </h3>
                            <p className="text-zinc-400 leading-relaxed bg-zinc-900/30 p-4 rounded-xl border border-zinc-900 whitespace-pre-line">
                                {job.benefits}
                            </p>
                        </div>
                    )}
                </div>

                {/* ফুটার নোট */}
                <div className="mt-12 pt-6 border-t border-zinc-900 text-center">
                    <p className="text-xs text-zinc-600">
                        Company ID: {job.companyId} • Status: <span className="text-emerald-500 capitalize">{job.status}</span>
                    </p>
                </div>

            </div>
        </section>
    );
};

export default JobDetailsPage;