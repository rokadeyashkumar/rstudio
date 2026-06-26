This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.







rstudio/
├── public/
│   ├── images/
│   ├── icons/
│   └── videos/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── globals.scss
│   │   │
│   │   ├── (website)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── about/page.tsx
│   │   │   ├── services/page.tsx
│   │   │   ├── portfolio/page.tsx
│   │   │   ├── events/page.tsx
│   │   │   └── contact/page.tsx
│   │   │
│   │   ├── admin/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── content/page.tsx
│   │   │   ├── clients/page.tsx
│   │   │   ├── bookings/page.tsx
│   │   │   ├── events/page.tsx
│   │   │   ├── portfolio/page.tsx
│   │   │   └── settings/page.tsx
│   │   │
│   │   ├── gallery/
│   │   │   └── [slug]/page.tsx
│   │   │
│   │   └── api/
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.scss
│   │   │   ├── Input.tsx
│   │   │   ├── Input.module.scss
│   │   │   ├── Card.tsx
│   │   │   └── Card.module.scss
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Navbar.module.scss
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.scss
│   │   │
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── Hero.module.scss
│   │       ├── Testimonials.tsx
│   │       └── Testimonials.module.scss
│   │
│   ├── lib/
│   │   ├── db.ts
│   │   ├── auth.ts
│   │   ├── email.ts
│   │   ├── storage.ts
│   │   └── qr.ts
│   │
│   ├── styles/
│   │   └── abstracts/
│   │       ├── _variables.scss
│   │       └── _mixins.scss
│   │
│   └── types/
│       └── index.ts
│
├── .env.local
├── package.json
├── next.config.ts
└── tsconfig.json