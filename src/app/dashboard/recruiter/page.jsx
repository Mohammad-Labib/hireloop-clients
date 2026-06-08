
 "use client" 
import { DashboardStats } from '@/components/dashboard/DashboardStats';
import { useSession } from '@/lib/auth-client';
import { Briefcase, Persons, CircleCheck } from '@gravity-ui/icons';
import React from 'react';

const RecruiterDashboardPage = () => {

    const {data: session, isPending} = useSession();
    if(isPending){
        return<div>Loading...</div>
    }

      const recruiterStats = [
    { title: "Total Job Posts", value: "48", icon: Briefcase },
    { title: "Total Applicants", value: "1,284", icon: Persons },
    { title: "Active Jobs", value: "18", icon: Persons },
    { title: "Jobs Closed", value: "32", icon: CircleCheck },
  ];

    const user = session?.user;
    console.log(session);
    return (
        <div className='text-4xl font-bold'>
            <h2>Welcome Back, {user?.name}</h2>
            <DashboardStats statsData={recruiterStats}/>
        </div>
    );
};

export default RecruiterDashboardPage;