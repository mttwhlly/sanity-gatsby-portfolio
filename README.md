# mattwhalley.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/25a56d89-482a-4a79-9280-c049dcd30473/deploy-status)](https://app.netlify.com/sites/sanity-gatsby-portfolio-web-t2mxnymd/deploys)

A portfolio using structured content and a static site builder.

Deployed from [sanity.io/create](https://www.sanity.io/create/?template=sanity-io%2Fsanity-template-gatsby-portfolio).

## Quick start

1. Clone this repository from your GitHub account
2. `npm install` in the project root folder on local
3. `npm run dev` to start the Studio and frontend locally
   - Your Studio should be running on [http://localhost:3333](http://localhost:3333)
   - Your frontend should be running on [http://localhost:8000](http://localhost:8000)
4. `npm run build` to build to production locally

## Enable real-time content preview in development

1. Go to your [project’s API settings on manage.sanity.io](https://manage.sanity.io/projects/2clsvpl5/settings/api) and create a token with read rights.
2. Copy `.env.development.template` to `.env.development` and paste in the token: `SANITY_READ_TOKEN="yourTokenHere"`.
3. Restart the development server (`ctrl + C` and `npm run dev`).

If you want to disable the preview you can set `watchMode: false` in gatsby-config.js. If you just want to preview published changes you can set `overlayDrafts: false` in gatsby-config.js.

## Deploy changes

Netlify automatically deploys new changes commited to the `master` branch on GitHub. If you want to change the deployment branch you may do so in [build & deploy settings on Netlify](https://www.netlify.com/docs/continuous-deployment/#branches-deploys).

