-- ============================================================
-- ORNATE CHRISTMAS LIGHTING — SUPABASE DATABASE SETUP
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- QUOTES TABLE
create table if not exists quotes (
  id            bigserial primary key,
  created_at    timestamptz default now(),
  first_name    text not null,
  last_name     text not null,
  email         text not null,
  phone         text not null,
  address       text not null,
  city          text not null,
  property_type text,
  service       text,
  home_size     text,
  referral      text,
  message       text,
  status        text default 'new'
    check (status in ('new','contacted','quoted','accepted','declined'))
);

-- JOBS TABLE
create table if not exists jobs (
  id            bigserial primary key,
  created_at    timestamptz default now(),
  quote_id      bigint references quotes(id),
  first_name    text not null,
  last_name     text not null,
  email         text not null,
  phone         text not null,
  address       text not null,
  city          text not null,
  service       text,
  status        text default 'scheduled'
    check (status in ('scheduled','in-progress','completed','on-hold')),
  price         numeric(10,2),
  install_date  date,
  removal_date  date,
  notes          text default '',
  photos         text[] default '{}',
  files          text[] default '{}',
  scheduled_time text default 'TBD'
);

-- ROW LEVEL SECURITY
-- Allow public INSERT on quotes (the website form needs this)
alter table quotes enable row level security;

create policy "Public can insert quotes"
  on quotes for insert
  with check (true);

-- Only authenticated users can read/update/delete quotes
create policy "Auth users can select quotes"
  on quotes for select
  using (auth.role() = 'authenticated');

create policy "Auth users can update quotes"
  on quotes for update
  using (auth.role() = 'authenticated');

-- Jobs — authenticated only
alter table jobs enable row level security;

create policy "Auth users can select jobs"
  on jobs for select
  using (auth.role() = 'authenticated');

create policy "Auth users can insert jobs"
  on jobs for insert
  with check (auth.role() = 'authenticated');

create policy "Auth users can update jobs"
  on jobs for update
  using (auth.role() = 'authenticated');

create policy "Auth users can delete jobs"
  on jobs for delete
  using (auth.role() = 'authenticated');

-- ============================================================
-- MIGRATION: Run this if you already created the jobs table
-- before these columns were added.
-- ============================================================

alter table jobs add column if not exists files          text[] default '{}';
alter table jobs add column if not exists scheduled_time text   default 'TBD';

-- ============================================================
-- AUGUST 1ST SEASON RESET (pg_cron)
-- Automatically resets all completed jobs back to "scheduled"
-- every August 1st at 6:00 AM UTC so they are ready for the
-- new season without any manual action.
--
-- Requires pg_cron extension. Enable it in:
-- Supabase Dashboard → Database → Extensions → pg_cron
-- ============================================================

select cron.schedule(
  'ornate-season-reset',            -- job name (unique)
  '0 6 1 8 *',                      -- cron: 6:00 AM UTC on Aug 1
  $$
    update jobs
    set
      status         = 'scheduled',
      install_date   = null,
      removal_date   = null,
      scheduled_time = 'TBD'
    where status = 'completed';
  $$
);

-- To verify the cron job was created:
-- select * from cron.job;

-- To remove it if needed:
-- select cron.unschedule('ornate-season-reset');

-- ============================================================
-- STORAGE BUCKET for job photos
-- Run this separately OR create the bucket manually in
-- Supabase Dashboard → Storage → New Bucket
-- ============================================================

-- insert into storage.buckets (id, name, public)
-- values ('job-photos', 'job-photos', true);

-- NOTE: Create the bucket manually in the Supabase Dashboard:
-- Storage → New Bucket → Name: "job-photos" → Public: true

-- ============================================================
-- AFTER RUNNING THIS SQL:
-- 1. Go to Supabase → Authentication → Users → Add User
--    Add your admin email and set a password
-- 2. Copy your Project URL and anon key from:
--    Supabase → Settings → API
-- 3. Paste them into:
--    - site/js/quote.js  (SUPABASE_URL and SUPABASE_ANON_KEY)
--    - site/admin/index.html  (same two values)
--    - site/admin/dashboard.html  (same two values)
-- ============================================================
