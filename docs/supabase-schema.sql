-- Create the leads table
CREATE TABLE IF NOT EXISTS leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    source TEXT DEFAULT 'Pinterest',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS (Row Level Security)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert leads (for the funnel)
CREATE POLICY "Allow anonymous inserts" ON leads
    FOR INSERT
    WITH CHECK (true);

-- Create a policy that only allows authenticated users to view leads
CREATE POLICY "Allow authenticated views" ON leads
    FOR SELECT
    USING (auth.role() = 'authenticated');
