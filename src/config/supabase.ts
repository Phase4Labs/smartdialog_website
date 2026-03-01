// Supabase configuration
// For local development, falls back to hardcoded values
// For production (Vercel), use environment variables

export const supabaseConfig = {
  projectId: import.meta.env.VITE_SUPABASE_PROJECT_ID || "psmqkttawkpozgzvuwnl",
  url: import.meta.env.VITE_SUPABASE_URL || "https://psmqkttawkpozgzvuwnl.supabase.co",
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzbXFrdHRhd2twb3pnenZ1d25sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg2MTg0NzksImV4cCI6MjA4NDE5NDQ3OX0.51SjrIuJAqq3DAn-sOjaNf84s0fwzblU8j-ReQpDQaA"
};

// Export individual values for backward compatibility
export const projectId = supabaseConfig.projectId;
export const publicAnonKey = supabaseConfig.anonKey;
export const supabaseUrl = supabaseConfig.url;
