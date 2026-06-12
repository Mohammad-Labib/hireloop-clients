"use client";

import JobCard from "@/components/Jobs/JobsCard";

// import JobCard from "@/components/JobCard";

export default function JobsPage() {
  const jobs = [
    {
      _id: "1",
      title: "Mobile App Developer",
      companyName: "HireLoop",
      companyLogo:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      category: "Technology",
      type: "Full Time",
      location: "Dhaka, Bangladesh",
      isRemote: true,
      minSalary: 60000,
      maxSalary: 110000,
      currency: "BDT",
    },
    {
      _id: "2",
      title: "Frontend Developer",
      companyName: "Google",
      companyLogo:
        "https://images.unsplash.com/photo-1572021335469-31706a17aaef",
      category: "Technology",
      type: "Full Time",
      location: "Singapore",
      isRemote: false,
      minSalary: 80000,
      maxSalary: 150000,
      currency: "BDT",
    },
    {
      _id: "3",
      title: "UI/UX Designer",
      companyName: "Spotify",
      companyLogo:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
      category: "Design",
      type: "Hybrid",
      location: "Remote",
      isRemote: true,
      minSalary: 50000,
      maxSalary: 90000,
      currency: "BDT",
    },
  ];

  return (
    <section className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <p className="text-violet-400 font-medium mb-2">
            Find Your Next Opportunity
          </p>

          <h1 className="text-5xl font-bold text-white">
            Featured Jobs
          </h1>

          <p className="text-default-500 mt-4 max-w-2xl">
            Discover exciting opportunities from top companies
            around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard
              key={job._id}
              job={job}
            />
          ))}
        </div>
      </div>
    </section>
  );
}