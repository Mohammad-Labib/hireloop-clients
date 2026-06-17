import { recrquireRole } from '@/lib/core/session';
import React from 'react';

const RecruiterLayout =async ({children}) => {
    await recrquireRole('recruiter')
    return children;
};

export default RecruiterLayout;