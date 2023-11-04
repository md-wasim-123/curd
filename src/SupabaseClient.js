import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://afhzmspqxzgvnmakuyne.supabase.co'
const supabaseKey =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmaHptc3BxeHpndm5tYWt1eW5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3Njk4MjMsImV4cCI6MjAxNDM0NTgyM30.Dtn2YhRsI2yb7aRTwgNh20T5o40RFUI1wwakCfScGYk'
export const supabase = createClient(supabaseUrl, supabaseKey)
