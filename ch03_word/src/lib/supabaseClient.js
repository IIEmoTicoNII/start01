// src/lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://shfqlfrlxvivljsmouqi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoZnFsZnJseHZpdmxqc21vdXFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0NTc4NDcsImV4cCI6MjA2MTAzMzg0N30.Cq9V8vcYYaQQKtgmGO9JsN-29Wro0YrjY8mzOS_muUU";

export const supabase = createClient(supabaseUrl, supabaseKey);
