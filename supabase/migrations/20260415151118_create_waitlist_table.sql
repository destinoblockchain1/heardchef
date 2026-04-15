-- Create waitlist table
create table if not exists public.waitlist (
    id uuid default gen_random_uuid() primary key,
    email text unique not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.waitlist enable row level security;

-- Create policy to allow anyone to insert their email
create policy "Allow public inserts"
    on public.waitlist
    for insert
    with check (true);

-- Create policy to allow only authenticated users to view the waitlist (e.g., admins)
-- Note: This is a basic setup. You might want to restrict this further later.
create policy "Allow authenticated selects"
    on public.waitlist
    for select
    to authenticated
    using (true);
