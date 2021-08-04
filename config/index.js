// Environment Variables in vercel
// NEXT_PUBLIC_API_URL : https://dj-event-backend-ya.herokuapp.com 
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'


// Environment Variables in vercel
// NEXT_PUBLIC_FRONTEND_URL : https://dj-events-frontend-ya.vercel.app
export const NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'

export const PER_PAGE = 5