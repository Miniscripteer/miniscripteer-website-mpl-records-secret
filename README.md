# miniscripteer.com

Official site for **miniscripteer** / MPL Records. Built with Next.js 14
(App Router), Tailwind CSS, NextAuth, and Prisma. Deploys straight to Vercel.

## Pages included

`/` `/store` `/credits` `/countdown` `/contacts` `/news` `/signup` `/login`
`/mplrecords` `/info` `/affiliates`

## What's wired up

- **Contact form** (`/contacts`) → posts to `/api/contact` → forwards to your
  "info" Discord webhook.
- **Sign up** (`/signup`) → posts to `/api/auth/signup` → creates a real user
  account in a database (password hashed with bcrypt) → notifies your
  "emails" Discord webhook → automatically logs the new user in.
- **Log in / log out** → real, working sessions via NextAuth (credentials +
  JWT sessions). The nav bar shows Login/Sign up when logged out, and your
  name + Log out when logged in.
- **Store** (`/store`) → reads from `data/store-items.json`. `AL02 CD` is
  already listed as "Coming soon."
- **Countdown** (`/countdown`) → live countdown to a date you set in an env
  variable.
- **Homepage hero background** → set via `NEXT_PUBLIC_BG_IMAGE_URL`.

## 1. Add a store item

Open `data/store-items.json` and add an object — that's the whole process:

```json
{
  "id": "unique-id-no-spaces",
  "name": "Track Name / Merch Name",
  "description": "A short description.",
  "image": "https://i.imgur.com/XXXXXXX.jpg",
  "price": 15,
  "comingSoon": false,
  "buyLink": "https://your-checkout-link.com"
}
```

Leave `"comingSoon": true` and `"buyLink": null` for anything not on sale yet
(that's how `AL02 CD` is set up right now).

## 2. Local setup

```bash
npm install
cp .env.example .env.local   # then fill in the values (see below)
npx prisma db push           # creates the User table in your database
npm run dev
```

### Environment variables you need

| Variable | What it's for |
|---|---|
| `DATABASE_URL` | Postgres connection string for accounts. Easiest: [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) or [Neon](https://neon.tech) (both have free tiers) — create a database, copy the connection string. |
| `NEXTAUTH_SECRET` | Random string used to sign sessions. Generate one with `openssl rand -base64 32`. |
| `NEXTAUTH_URL` | `http://localhost:3000` locally, your real domain in production. |
| `DISCORD_CONTACT_WEBHOOK_URL` | Discord webhook the contact form sends to. |
| `DISCORD_SIGNUP_WEBHOOK_URL` | Discord webhook new signups send to. |
| `NEXT_PUBLIC_BG_IMAGE_URL` | Direct imgur image link (right-click an imgur image → "Copy image address"; should end in `.jpg`/`.png`) for the homepage hero background. |
| `NEXT_PUBLIC_COUNTDOWN_DATE` | ISO date/time for the countdown, e.g. `2026-12-31T00:00:00Z`. |
| `NEXT_PUBLIC_COUNTDOWN_LABEL` | Text shown above the countdown, e.g. `AL02`. |

A `.env.local` file is already included here with your two Discord webhook
URLs pre-filled — it's git-ignored, so it will **not** be pushed to GitHub.
You still need to fill in `DATABASE_URL` and generate a `NEXTAUTH_SECRET`
before login/signup will work, and replace the imgur placeholder.

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

`.env.local` is in `.gitignore`, so your webhook URLs and secrets won't be
committed. Good — never commit real secrets to a public repo.

## 4. Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Under **Environment Variables**, add every variable from the table above
   (same names, real values — copy them from your `.env.local`).
3. Deploy. Vercel runs `prisma generate` and `next build` automatically
   (already wired into `package.json`).
4. After the first deploy, run `npx prisma db push` once locally (with the
   production `DATABASE_URL` in your `.env.local`) to create the `User`
   table in your production database — or use `npx vercel env pull` to grab
   the production env vars first.

## Notes

- No database is required for the contact form — it only talks to Discord.
- A database **is** required for real accounts (sign up / log in) to persist,
  since Vercel's servers don't keep files between requests. Vercel Postgres
  or Neon (Postgres) both work and have generous free tiers.
- Want a different look? Colors and fonts are defined in
  `tailwind.config.js` and `app/globals.css`.
