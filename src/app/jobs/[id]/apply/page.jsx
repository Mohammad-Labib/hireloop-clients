import { getJobById } from '@/lib/api/jobs';
import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';
import React from 'react';
import JobApply from './JobApply';



const ApplyPage = async ({params}) => {
    const {id} = await params;

    const user = await getUserSession();
    if(!user){
        redirect(`/auth/signin?redirect=/jobs/${id}/apply`);
    }

    if(user.role !== 'seeker'){
        return(
            <div className='w-full min-h-screen bg-zinc-950 flex flex-col justify-center items-center text-white p-6'>
                <p className='text-zinc-400 text=lg'>
                    Only job seekers. Please sign in will a seeker account to proceeor.
                </p>
            </div>
        )
    }

    const job = await getJobById(id)

    // console.log("user Information: ", user);
    return (
        <div>
            <h2>Apply for {job.title} </h2>
            <JobApply></JobApply>
        </div>
    );
};

export default ApplyPage;