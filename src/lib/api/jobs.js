
const basUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const getCompanyJobs = async(companyId, status = 'active') => {
    const res = await fetch(`${basUrl}/api/jobs?companyId=${companyId}&status=${status}`);
    return res.json();

}