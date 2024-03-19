import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ztrnnlzntkiexpnlofql.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0cm5ubHpudGtpZXhwbmxvZnFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTIxMDksImV4cCI6MjAyNjMyODEwOX0.LEEEB_ju-P0nDb4XCSK4bOKnIhsbKtGL8KbU-uuUnGQ";

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
