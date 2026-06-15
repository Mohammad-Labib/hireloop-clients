import { stripe } from '@/lib/api/stripe'
import { redirect } from 'next/navigation'
import React from 'react'

// HeroUI v3-এর সঠিক কম্পোনেন্ট আমদানি (CardBody-এর বদলে CardContent)
import { Card, CardContent, Button, Chip } from "@heroui/react"

// GravityUI Icons
import { CircleCheck, ArrowLeft, Envelope } from '@gravity-ui/icons'

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams

  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const {
    status,
    customer_details: { email: customerEmail },
    amount_total
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  if (status === 'open') {
    return redirect('/')
  }

  const formattedAmount = amount_total ? (amount_total / 100).toFixed(2) : null;

  if (status === 'complete') {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-6">
          
          <Card className="bg-zinc-900 border border-zinc-800 shadow-2xl relative overflow-hidden">
            {/* টপ সাকসেস গ্লো বর্ডার এফেক্ট */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-emerald-500 to-teal-500" />
            
            {/* HeroUI v3-তে CardBody-এর জায়গায় CardContent ব্যবহার করা হয়েছে */}
            <CardContent className="p-8 flex flex-col items-center text-center space-y-5">
              
              {/* GravityUI Success Icon */}
              <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 shadow-lg shadow-emerald-500/5">
                <CircleCheck width={40} height={40} />
              </div>

              <div className="space-y-2">
                <Chip size="sm" color="success" variant="flat" className="font-semibold uppercase tracking-wider text-xs">
                  Payment Successful
                </Chip>
                <h1 className="text-2xl font-bold text-white tracking-tight">Thank You for Your Order!</h1>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We appreciate your business. Your premium access has been activated.
                </p>
              </div>

              {/* পেমেন্ট ডিটেইলস সামারি বক্স */}
              {formattedAmount && (
                <div className="w-full bg-zinc-950/50 border border-zinc-800/80 rounded-xl p-4 flex justify-between items-center">
                  <span className="text-zinc-400 text-sm font-medium">Total Paid</span>
                  <span className="text-white text-lg font-bold">${formattedAmount}</span>
                </div>
              )}

              {/* কনফার্মেশন মেসেজ */}
              <div className="w-full text-zinc-400 text-sm space-y-3 pt-2">
                <div className="flex items-center justify-center gap-2 text-zinc-300">
                  <Envelope width={16} height={16} className="text-zinc-500" />
                  <span className="font-medium break-all">{customerEmail}</span>
                </div>
                <p className="text-xs text-zinc-500 leading-normal">
                  A confirmation email and invoice have been sent to your inbox.
                </p>
              </div>

              {/* সাপোর্ট লিংক */}
              <div className="text-xs text-zinc-500 pt-2 border-t border-zinc-800/60 w-full">
                Have questions? Contact us at{' '}
                <a href="mailto:orders@example.com" className="text-blue-400 hover:underline font-medium transition-colors">
                  orders@example.com
                </a>
              </div>

            </CardContent>
          </Card>

          {/* ব্যাক টু ড্যাশবোর্ড বাটন */}
          <div className="flex justify-center">
            {/* HeroUI v3-তে নেভিগেশনের জন্য সরাসরি href ব্যবহার করা যায় */}
            <Button 
              href="/"
              variant="light"
              className="text-zinc-400 hover:text-white font-medium text-sm flex items-center gap-2"
            >
              <ArrowLeft width={16} height={16} />
              Back to Dashboard
            </Button>
          </div>

        </div>
      </div>
    )
  }
}