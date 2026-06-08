import { DashboardSidbar } from '@/components/dashboard/DasboardSidebar';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='flex min-h-screen'>
            <DashboardSidbar></DashboardSidbar>
            <div className='flex-1'>{children}</div>
        </div>
    );
};

export default DashboardLayout;