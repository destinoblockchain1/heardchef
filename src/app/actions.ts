'use server'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY && process.env.SUPABASE_SERVICE_ROLE_KEY !== 'PASTE_HERE'
  ? process.env.SUPABASE_SERVICE_ROLE_KEY 
  : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export async function joinWaitlist(email: string) {
  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  const { data, error } = await supabase
    .from('waitlist')
    .insert([{ email }])
    .select()

  if (error) {
    console.error('Error joining waitlist:', error)
    return { success: false, error: error.message }
  }

  return { success: true, data }
}
