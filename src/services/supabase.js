
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://bjrghqdgxmvaobmwyike.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqcmdocWRneG12YW9ibXd5aWtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1NzU1MjEsImV4cCI6MjAxNDE1MTUyMX0.6BUMR7Zqyt39ZsQ1jHJNoLBNJ3lQBnMjcJQwJW5cNVI"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
