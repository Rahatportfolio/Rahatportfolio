# Rahat Ahmed Portfolio

A bilingual-ready portfolio landing page with a Supabase contact form and private admin message inbox.

## Supabase setup

1. Open Supabase Dashboard > SQL Editor.
2. Paste and run `supabase-schema.sql`.
3. Go to Authentication > Users > Add user.
4. Create the admin user with `rahatbddb@gmail.com` and a private password.

## GitHub setup

Upload `index.html`, `supabase-schema.sql`, and this README to:

`https://github.com/Rahatportfolio/Rahatportfolio`

Enable GitHub Pages from Settings > Pages > Deploy from branch > main > root.

The admin panel is available at:

`https://YOUR-GITHUB-USERNAME.github.io/Rahatportfolio/#admin`

The Supabase anon key is safe for browser use when Row Level Security policies are enabled. Never publish a `service_role` key or database password.
