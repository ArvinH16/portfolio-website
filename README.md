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

The site is hosted on Cloudflare Pages. Deploy with:

```bash
npm run deploy
```

## Contact form

To get the contact form working create an AWS account and set up SES (Simple Email Service). Then plug your details into `.dev.vars.example` and rename it to `.dev.vars`. You'll also need to add these as environment variables in the Cloudflare dashboard for it to work in production.

## Credits

This site is built on the open-source portfolio template by [Hamish Williams](https://github.com/HamishMW/portfolio), adapted with my own content, projects, and design tweaks. All projects shown are my own work.
