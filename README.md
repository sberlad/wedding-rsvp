# Esther & Samuel RSVP Website

Refined multilingual static RSVP website inspired by illuminated manuscript design, using royal jasmine / Jasmin de Grasse motifs and small tulip accents.

Configure Supabase credentials and admin password in `script.js`.

Supabase table:

```sql
create table public.rsvps (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  contact text not null,
  attending boolean not null,
  guest_count int not null,
  guest_names text,
  meal_preference text,
  notes text,
  language text,
  created_at timestamptz default now()
);

alter table public.rsvps enable row level security;

create policy "Allow public RSVP inserts"
on public.rsvps
for insert
to anon
with check (true);
```

Use Cloudflare Access or server-side auth for `/admin` if privacy matters.
