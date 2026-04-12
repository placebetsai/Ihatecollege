-- Run this once in Supabase dashboard → SQL Editor
-- Creates the subscribers table for email capture on ihatecollege.com

CREATE TABLE IF NOT EXISTS subscribers (
  id bigserial PRIMARY KEY,
  email text NOT NULL UNIQUE,
  source text DEFAULT 'ihatecollege.com',
  created_at timestamptz DEFAULT now()
);

-- Allow anonymous inserts (email signup is public)
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone can insert" ON subscribers FOR INSERT WITH CHECK (true);
CREATE POLICY "service role can read all" ON subscribers FOR SELECT USING (auth.role() = 'service_role');

-- Index on email for duplicate checking
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers (email);
