import React from 'react';
import CompanyProfile from './CompanyProfile';
import { getUserSession } from '@/lib/core/session';
import { getRecruiterCompany } from '@/lib/api/companies';

const Companypage = async() => {

    const user = await getUserSession()
    const company = await getRecruiterCompany(user?.id)

    // console.log("before session company page", company);

    return (
        <div>
            <CompanyProfile recruiter={user}recruiterCompany={company}></CompanyProfile>
        </div>
    );
};

export default Companypage;