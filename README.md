<p align="center">
  <img src="/public/favicon.svg" width="50" alt="Logo" />
</p>
<h1 align="center">Arvin Hakakian — Personal Portfolio</h1>

Personal portfolio of Arvin Hakakian — engineer & founder. Showcases my work across AI products and full-stack platforms, including [BeamBell](https://beambell.com), an AI competitive intelligence agent, CodeScope, and CloudDraft. Built with [Remix](https://remix.run/), [Three.js](https://threejs.org/), and [Framer Motion](https://www.framer.com/motion/).

## Install & run

Make sure you have nodejs `19.9.0` or higher and npm `9.6.3` or higher installed. Install dependencies with:

```bash
npm install
```

Once it's done start up a local server with:

```bash
npm run dev
```

To view the components storybook:

```bash
npm run dev:storybook
```

## Deployment

The site is deployed on [Vercel](https://vercel.com). Connect the repository in the Vercel dashboard (it auto-detects Remix via the `@vercel/remix` preset), or deploy from the CLI:

```bash
vercel
```

Set the contact-form environment variables (see below) under the project's **Settings → Environment Variables** in Vercel.

## Contact form

The contact form sends email through [Resend](https://resend.com). Create an API key, copy `.env.example` to `.env` for local development, and add the same variables in the Vercel dashboard for production. Until you verify a domain in Resend, messages are sent from `onboarding@resend.dev` to the address you signed up with — which is all a contact form needs.

## Credits

This site is built on the open-source portfolio template by [Hamish Williams](https://github.com/HamishMW/portfolio), adapted with my own content, projects, and design tweaks. All projects shown are my own work.
