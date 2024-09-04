This is the [Next.js](https://nextjs.org/) frontend of TechnoVenture 3.0 packed with the admin console.

## Getting Started
First, run the [backend](https://github.com/rnium/eeefest_api) server locally or on a remote server. create the `.env.local` in the frontend base directory and set the `NEXT_PUBLIC_API_HOST` variable pointing to the backend host. 

Then run the next.js development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Adding/Updating Contests
Go to `@/lib/data/contests.js` and modify the contests details there. `hero_img` and `banner` are statically imported images for nextjs image optimization purpose. If contests are modified make sure to import local images statically. <br />
Additionally, Modify the `contest_names` in `@/components/molecules/ActionTab.jsx` if the contests are modified in the backend.
