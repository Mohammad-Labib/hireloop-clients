import { recrquireRole } from '@/lib/core/session';
import React from 'react';

const SeekerLayout = async({children}) => {
    await recrquireRole('seeker');
    return children;
};

export default SeekerLayout;