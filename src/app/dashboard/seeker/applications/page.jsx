import { getApplicationsByApplicant } from '@/lib/api/applications';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const ApplicationPage = async() => {
    const user = await getUserSession();
    const jobs = await getApplicationsByApplicant(user.id)
    return (
        <div>
            <h1>Hello Applications: {jobs.length}</h1>
        </div>
    );
};

export default ApplicationPage;