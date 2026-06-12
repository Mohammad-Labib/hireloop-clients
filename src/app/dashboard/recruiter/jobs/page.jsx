import { getCompanyJobs } from '@/lib/api/jobs';
import React from 'react';
import { Table, Chip, Button } from "@heroui/react";

// TODO: Replace placeholders with your actual gravity icon imports if named differently
// import { Eye, Edit, Trash } from "gravity-icons-package"; 
const ViewIcon = () => <span>👁️</span>;
const EditIcon = () => <span>✏️</span>;
const DeleteIcon = () => <span>🗑️</span>;

const RecruiterJobs = async () => {
    const companyId = 'comp_987654'; // todo
    const jobs = await getCompanyJobs(companyId) || []; 

    // Helper function to dynamically color status badges
    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'active':
                return 'success';
            case 'inactive':
                return 'danger';
            default:
                return 'warning';
        }
    };

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Manage All Jobs</h2>
                <p className="text-gray-500 text-sm">Monitor, edit, and track your active job listings.</p>
            </div>

            <Table aria-label="Company jobs management table">
                <Table.ResizableContainer>
                    <Table.Content className="min-w-[800px]">
                        <Table.Header>
                            <Table.Column isRowHeader defaultWidth="2fr" id="title" minWidth={200}>
                                Job Title
                                <Table.ColumnResizer />
                            </Table.Column>
                            <Table.Column defaultWidth="1fr" id="category" minWidth={140}>
                                Category
                                <Table.ColumnResizer />
                            </Table.Column>
                            <Table.Column defaultWidth="1fr" id="type" minWidth={120}>
                                Type
                                <Table.ColumnResizer />
                            </Table.Column>
                            <Table.Column defaultWidth="1fr" id="deadline" minWidth={130}>
                                Deadline
                                <Table.ColumnResizer />
                            </Table.Column>
                            <Table.Column defaultWidth="1fr" id="status" minWidth={100}>
                                Status
                                <Table.ColumnResizer />
                            </Table.Column>
                            <Table.Column defaultWidth="1fr" id="actions" minWidth={150} align="center">
                                Actions
                            </Table.Column>
                        </Table.Header>
                        
                        <Table.Body emptyContent={"No jobs found for this company."}>
                            {jobs.map((job) => (
                                <Table.Row key={job._id?.$oid || job._id}>
                                    {/* Job Title */}
                                    <Table.Cell>
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-gray-700 capitalize">{job.title}</span>
                                            <span className="text-xs text-gray-400">{job.location}</span>
                                        </div>
                                    </Table.Cell>
                                    
                                    {/* Category */}
                                    <Table.Cell>
                                        <span className="text-sm text-gray-600 capitalize">{job.category}</span>
                                    </Table.Cell>
                                    
                                    {/* Type */}
                                    <Table.Cell>
                                        <span className="text-sm text-gray-600 capitalize">{job.type}</span>
                                    </Table.Cell>
                                    
                                    {/* Deadline */}
                                    <Table.Cell>
                                        <span className="text-sm text-gray-600">
                                            {job.deadline ? new Date(job.deadline).toLocaleDateString() : 'N/A'}
                                        </span>
                                    </Table.Cell>
                                    
                                    {/* Status */}
                                    <Table.Cell>
                                        <Chip 
                                            color={getStatusColor(job.status)} 
                                            size="sm" 
                                            variant="soft"
                                            className="capitalize"
                                        >
                                            {job.status || 'Unknown'}
                                        </Chip>
                                    </Table.Cell>
                                    
                                    {/* Actions */}
                                    <Table.Cell>
                                        <div className="flex items-center justify-center gap-2">
                                            <Button 
                                                isIconOnly 
                                                size="sm" 
                                                variant="light" 
                                                aria-label="View details"
                                                className="text-gray-500 hover:text-blue-600"
                                            >
                                                <ViewIcon />
                                            </Button>
                                            <Button 
                                                isIconOnly 
                                                size="sm" 
                                                variant="light" 
                                                aria-label="Edit job"
                                                className="text-gray-500 hover:text-warning-600"
                                            >
                                                <EditIcon />
                                            </Button>
                                            <Button 
                                                isIconOnly 
                                                size="sm" 
                                                variant="light" 
                                                aria-label="Delete job"
                                                className="text-gray-500 hover:text-danger-600"
                                            >
                                                <DeleteIcon />
                                            </Button>
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Content>
                </Table.ResizableContainer>
            </Table>
        </div>
    );
};

export default RecruiterJobs;