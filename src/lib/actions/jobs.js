'use client'

import { serverMutation } from "../core/server" 

export const createJob = async (newJobData) =>{
    return serverMutation('/api/jobs', newJobData);
}




// 'use server'

// const basUrl = process.env.NEXT_PUBLIC_BASE_URL;

// export const createJob = async (newJobData) => {

//     const res = await fetch(`${basUrl}/api/jobs`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newJobData),
//     });

    
//     return await res.json(); 
// }
 

// 'use server'

// // আপনার এনভায়রনমেন্ট ভেরিয়েবল ব্যাকএন্ডে ঠিকমতো পাচ্ছে কি না তা নিশ্চিত করুন
// const basUrl = process.env.NEXT_PUBLIC_BASE_URL;

// export const createJob = async (newJobData) => {
//     try {
//         const targetUrl = `${basUrl}/api/jobs`;
//         console.log("Sending request to:", targetUrl); // ডিবাগিং এর জন্য ইউআরএল প্রিন্ট

//         const res = await fetch(targetUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(newJobData),
//         });

//         // যদি সার্ভার থেকে কোন কারণে HTML বা এরর পেজ আসে
//         if (!res.ok) {
//             const errorText = await res.text();
//             console.error(`API Route returned Error Status ${res.status}:`, errorText.slice(0, 300)); // প্রথম ৩০০ ক্যারেক্টার প্রিন্ট করবে
//             return { 
//                 success: false, 
//                 error: `Backend API Error (Status ${res.status}). Check your server logs.` 
//             };
//         }

//         // রেসপন্স ঠিক থাকলে তবেই JSON পার্স করুন
//         const data = await res.json();
//         return { success: true, ...data };

//     } catch (error) {
//         console.error("Error in createJob Server Action:", error);
//         return { success: false, error: error.message };
//     }
// }