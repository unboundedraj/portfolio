# unboundedraj — portfolio

Personal portfolio site for **Dhruv Raj Singh** ([unboundedraj](https://github.com/unboundedraj) on GitHub). It showcases projects, skills, journey, and ways to get in touch.

This is a living site: layout, copy, and features **change from time to time** as I experiment and ship updates. If something looks different on your next visit, that’s intentional.

### History (React → Next)

An earlier version of this portfolio lived in the same GitHub repo as a **Vite + React** app (the old `vite-project/` layout). **`main` is now the Next.js rewrite**—TypeScript, App Router, and the structure under `src/`. Recent commits walk through that migration (modular Next landing first, then Journey, footer, and ongoing polish). If you cloned the repo long ago, pull fresh: the default branch matches what ships today.

---

## Collaborate

I’m open to interesting work, side projects, and conversations with other builders. If you’d like to connect, use the **Contact** section on the site, or reach out on [LinkedIn](https://www.linkedin.com/in/dhruvrajsingh19/).

---

## Stack

| Area        | Details                                      |
| ----------- | -------------------------------------------- |
| Framework   | [Next.js](https://nextjs.org/) 16 (App Router) |
| UI          | React 19, [Tailwind CSS](https://tailwindcss.com/) 4 |
| Language    | TypeScript                                   |
| Icons       | Lucide React, React Icons                    |

---

## Local development

Prerequisites: **Node.js** (LTS recommended) and **npm**.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Other scripts:

| Command       | Description           |
| ------------- | --------------------- |
| `npm run dev` | Development server    |
| `npm run build` | Production build    |
| `npm run start` | Run production server |
| `npm run lint`  | ESLint                |

---

## Project layout (high level)

- **`src/app/`** — App Router pages and layout
- **`src/components/`** — Page sections and shared UI
- **`src/assets/`** — Images, resume PDF, and static media
- **`src/lib/`** — Small helpers and shared constants (e.g. social links)

---

## Deploy

The app is a standard Next.js deployment. Hosting on [Vercel](https://vercel.com/) or any Node-friendly platform works well; see the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.

---

*Built with curiosity. Thanks for stopping by.*
