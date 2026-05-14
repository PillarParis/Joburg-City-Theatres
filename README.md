# Joburg City Theatres Concept Website

Premium responsive multi-page concept site for Joburg City Theatres, built with Next.js App Router, Tailwind CSS, and Framer Motion.

## Pages

- `/` cinematic homepage with animated curtain and spotlight hero
- `/theatres/joburg`
- `/theatres/soweto`
- `/theatres/roodepoort`
- `/events`
- `/gallery`
- `/programs`

## Backend API

- `GET /api/health`
- `GET /api/theatres`
- `GET /api/theatres/[slug]`
- `GET /api/events?theatre=joburg&genre=festival&q=choral`
- `GET /api/programs`
- `POST /api/enquiries`
- `POST /api/newsletter`

The POST endpoints validate requests server-side and append demo records to `storage/*.jsonl`. Those local data files
are ignored by git.

## Local Development

```bash
npm install
npm run dev
```

This workspace includes official logo and event media assets downloaded into `public/media`.
