'use server'
import{serverMutation} from "../core/server";

export const createCompany = async (newCompanyData) =>{
    return serverMutation('/api/companies', newCompanyData);
}

// const basUrl = process.env.NEXT_PUBLIC_BASE_URL;

// export const createCompany = async (newCompanyData) =>{
//     const res = await fetch(`${basUrl}/api/companies`,{
//         method: 'POST',
//         headers:{
//             'Content-Type': 'application/jobs',
//         },
//         body:JSON.stringify(newCompanyData),
//     });




//     return res.json();
// }