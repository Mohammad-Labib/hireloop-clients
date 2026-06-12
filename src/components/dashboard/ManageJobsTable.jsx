"use client";

import React from "react";
import { Chip, Table, Button, Tooltip } from "@heroui/react";
import { Eye, Pencil, TrashBin } from "@gravity-ui/icons";

export default function ManageJobsTable({ jobs = [] }) {
  
  // স্ট্যাটাস অনুযায়ী চিপের কালার নির্ধারণ করার ফাংশন
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "active":
        return "success";
      case "inactive":
        return "danger";
      default:
        return "warning";
    }
  };

  return (
    <div className="w-full bg-[#18181b] border border-[#27272a] rounded-xl p-4 shadow-xl">
      {jobs.length === 0 ? (
        <div className="text-center py-8 text-zinc-400 text-sm">
          No jobs posted yet.
        </div>
      ) : (
        <Table aria-label="Company jobs management table" removeWrapper className="text-[#f4f4f5]">
          <Table.ResizableContainer>
            <Table.Content className="min-w-[800px]">
              <Table.Header>
                <Table.Column isRowHeader defaultWidth="2fr" id="jobTitle" minWidth={200}>
                  Job Title
                  <Table.ColumnResizer />
                </Table.Column>
                <Table.Column defaultWidth="1.2fr" id="jobCategory" minWidth={130}>
                  Category
                  <Table.ColumnResizer />
                </Table.Column>
                <Table.Column defaultWidth="1.5fr" id="salary" minWidth={150}>
                  Salary Range
                  <Table.ColumnResizer />
                </Table.Column>
                <Table.Column defaultWidth="1.2fr" id="deadline" minWidth={120}>
                  Deadline
                  <Table.ColumnResizer />
                </Table.Column>
                <Table.Column defaultWidth="1fr" id="status" minWidth={100}>
                  Status
                  <Table.ColumnResizer />
                </Table.Column>
                <Table.Column defaultWidth="1.2fr" id="actions" minWidth={130}>
                  Actions
                </Table.Column>
              </Table.Header>

              <Table.Body>
                {jobs.map((job) => {
                  // MongoDB-এর ইউনিক আইডি হ্যান্ডেল করা
                  const jobId = job._id?.["$oid"] || job._id;

                  return (
                    <Table.Row key={jobId} className="border-b border-[#27272a]/50 hover:bg-[#27272a]/20 transition">
                      {/* Title & Workplace Type */}
                      <Table.Cell>
                        <div className="flex flex-col gap-0.5">
                          <span className="font-medium text-white text-sm">{job.jobTitle}</span>
                          <span className="text-[11px] text-zinc-400 capitalize">
                            {job.jobType} • {job.isRemote ? "Remote" : job.location}
                          </span>
                        </div>
                      </Table.Cell>

                      {/* Category */}
                      <Table.Cell className="capitalize text-zinc-300 text-sm">
                        {job.jobCategory}
                      </Table.Cell>

                      {/* Salary Matrix */}
                      <Table.Cell className="text-zinc-300 text-sm">
                        {Number(job.minSalary).toLocaleString()} - {Number(job.maxSalary).toLocaleString()} {job.currency}
                      </Table.Cell>

                      {/* Deadline */}
                      <Table.Cell className="text-zinc-400 text-sm">
                        {job.deadline}
                      </Table.Cell>

                      {/* Status Chip */}
                      <Table.Cell>
                        <Chip
                          color={getStatusColor(job.status)}
                          size="sm"
                          variant="soft"
                          className="capitalize font-medium"
                        >
                          {job.status || "Active"}
                        </Chip>
                      </Table.Cell>

                      {/* Action Icon Buttons */}
                      <Table.Cell>
                        <div className="flex items-center gap-1">
                          <Tooltip content="View Details" closeDelay={0}>
                            <Button
                              isIconOnly
                              size="sm"
                              variant="light"
                              className="text-zinc-400 hover:text-white transition"
                              onClick={() => console.log("View job:", jobId)}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </Tooltip>

                          <Tooltip content="Edit Job" closeDelay={0}>
                            <Button
                              isIconOnly
                              size="sm"
                              variant="light"
                              className="text-zinc-400 hover:text-blue-400 transition"
                              onClick={() => console.log("Edit job:", jobId)}
                            >
                              <Pencil className="w-4 h-4" />
                            </Button>
                          </Tooltip>

                          <Tooltip content="Delete Job" color="danger" closeDelay={0}>
                            <Button
                              isIconOnly
                              size="sm"
                              variant="light"
                              className="text-zinc-400 hover:text-danger transition"
                              onClick={() => console.log("Delete job:", jobId)}
                            >
                              <TrashBin className="w-4 h-4" />
                            </Button>
                          </Tooltip>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table.Content>
          </Table.ResizableContainer>
        </Table>
      )}
    </div>
  );
}