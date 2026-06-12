"use client";

import Link from "next/link";
import {
  Card,
  Avatar,
  Chip,
  Button,
} from "@heroui/react";

import {
  MapPin,
  Briefcase,
  CircleDollar,
  ArrowRight,
} from "@gravity-ui/icons";

export default function JobCard({ job }) {
  const {
    _id,
    title,
    location,
    type,
    minSalary,
    maxSalary,
    currency,
    isRemote,
    companyLogo,
    companyName,
    category,
  } = job;

  return (
    <Card className="bg-[#0f0f13] border border-white/10 rounded-3xl p-6 h-full">
      <Card.Header className="flex flex-col items-start gap-5 p-0">
        {/* Company */}
        <div className="flex items-center gap-3">
          <Avatar
            src={companyLogo}
            className="h-12 w-12"
            radius="lg"
          />

          <div>
            <p className="text-sm text-default-500">
              {companyName}
            </p>
          </div>
        </div>

        {/* Job Title */}
        <Card.Title className="text-2xl md:text-3xl font-bold">
          {title}
        </Card.Title>

        {/* Short Description */}
        <Card.Description className="text-default-500 leading-7">
          Join our team and build impactful digital products
          using modern technologies.
        </Card.Description>
      </Card.Header>

      <Card.Content className="p-0 mt-6">
        <div className="flex flex-wrap gap-3">
          <Chip variant="flat" radius="full">
            <div className="flex items-center gap-2">
              <MapPin className="size-4" />
              <span>{location}</span>
            </div>
          </Chip>

          <Chip variant="flat" radius="full">
            <div className="flex items-center gap-2">
              <Briefcase className="size-4" />
              <span>
                {isRemote ? "Remote" : "On Site"}
              </span>
            </div>
          </Chip>

          <Chip variant="flat" radius="full">
            <div className="flex items-center gap-2">
              <CircleDollar className="size-4" />
              <span>
                {minSalary.toLocaleString()} -{" "}
                {maxSalary.toLocaleString()} {currency}
              </span>
            </div>
          </Chip>

          <Chip
            variant="bordered"
            radius="full"
          >
            {type}
          </Chip>

          <Chip
            variant="bordered"
            radius="full"
          >
            {category}
          </Chip>
        </div>
      </Card.Content>

      <Card.Footer className="flex justify-between items-center p-0 mt-8">
        <span className="text-sm text-green-500">
          Active Hiring
        </span>

        <Button
          as={Link}
          href={`/jobs/${_id}`}
          color="primary"
          radius="full"
          endContent={<ArrowRight className="size-4" />}
        >
          Apply Now
        </Button>
      </Card.Footer>
    </Card>
  );
}