import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1TidwIQ5WU7g3ur3Jp762vUz',
    'seeker_premium': 'price_1TiefDQ5WU7g3ur33xvfd2nY',
    'recruiter_growth': 'price_1TiedcQ5WU7g3ur3GjsXNtw9',
    'recruiter_enterprise': 'price_1TiebyQ5WU7g3ur3Ub8Mk0EB',

}