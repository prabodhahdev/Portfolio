# Prabodha Harshani — Portfolio

Personal portfolio built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Getting started

```bash
npm install
cp .env.example .env.local
# Fill in SMTP credentials in .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Required for the contact form (`/api/contact`):

| Variable | Description |
|---|---|
| `SMTP_HOST` | SMTP server (e.g. `smtp.gmail.com`) |
| `SMTP_PORT` | Port (`587` or `465`) |
| `SMTP_USER` | SMTP username / email |
| `SMTP_PASS` | App password (not your normal Gmail password) |
| `CONTACT_TO_EMAIL` | Inbox that receives form messages |

## Production build

```bash
npm run build
npm start
```

## Deploy (Vercel)

1. Push the repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Add the environment variables above in Project Settings.
4. Deploy.

## Notes

- Place your CV at `public/resume.pdf` so the **Download CV** button works.
- Do not commit `.env` / `.env.local` (already gitignored).
