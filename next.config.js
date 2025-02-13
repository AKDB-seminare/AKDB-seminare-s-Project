/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SUPABASE_URL: 'https://cltlakihutuggzzrmvqm.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsdGxha2lodXR1Z2d6enJtdnFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzNjQxMzAsImV4cCI6MjA1NDk0MDEzMH0.AQ8q52Vxh4ILQX9fMLgc_QsPbzwROIvlg94qoTAPbuI'
  }
}

module.exports = nextConfig
