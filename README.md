# Abdullah Faisal — AI Developer Portfolio

A modern, professional portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS**, ready to deploy on **Vercel** for free.

## What's included

- **Hero** — Company-style headline, value props, and your photo (or placeholder)
- **About** — Bio and education
- **Experience** — Work history
- **Projects** — AI/ML and full-stack projects
- **Services** — What we offer (AI & ML, RAG/Chatbots, Full-Stack)
- **Skills** — Languages, frameworks, tools
- **Achievements** — Dean's List, ACM, certifications
- **Blog** — Links to Medium articles
- **Contact** — Form that emails you (via Resend) plus direct email/LinkedIn/phone

## Run locally

1. Install dependencies (if not already done):

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy on Vercel (free)

### Option A: Deploy from GitHub (recommended)

1. **Push this project to GitHub**
   - Create a new repository on [github.com](https://github.com).
   - In your project folder, run:
     ```bash
     git init
     git add .
     git commit -m "Initial commit - portfolio"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
     git push -u origin main
     ```
   - Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and repo name.

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in (use “Continue with GitHub”).
   - Click **“Add New…”** → **“Project”**.
   - Import your GitHub repository (select the portfolio repo).
   - Leave the default settings (Framework: Next.js, Root Directory: `.`, Build Command: `npm run build`).
   - Click **“Deploy”**.

3. **Enable the contact form (optional but recommended)**
   - Sign up at [resend.com](https://resend.com) (free tier: 100 emails/day).
   - Create an API key in the [Resend dashboard](https://resend.com/api-keys).
   - In your Vercel project: **Settings** → **Environment Variables** → add `RESEND_API_KEY` with your key. Optionally add `CONTACT_EMAIL` if you want messages sent to a different address.
   - Redeploy so the new env var is used.

4. **Done**
   - Vercel will build and deploy. You’ll get a URL like `your-project.vercel.app`.
   - Every push to `main` will trigger a new deployment automatically.

### Option B: Deploy with Vercel CLI

1. Install the Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. From the project folder, run:
   ```bash
   vercel
   ```

3. Follow the prompts (log in if needed, link to a new or existing project). Vercel will build and give you a live URL.

## Customize content

- **Your photo:** Add your photo as **`public/profile.jpeg`** or **`public/profile.jpg`** (JPEG format; square or portrait works best). If both are missing, a placeholder with your initials is shown.
- Edit **`src/data/portfolio.ts`** to change:
  - Name, company name, tagline, contact links
  - Hero headline, value props, and CTAs
  - About paragraphs and education
  - Experience, projects, skills, services, blog links, achievements

No other code changes are required for basic content updates.

## Tech stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**

## License

Private — Abdullah Faisal.
