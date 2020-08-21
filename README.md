# Housed Final Project

## About

Housed serves as a MVP for a temporary housing application. It was developed using the MERN stack with React, MongoDB, Express, and Node.js. 

## Setup

- `git clone` this repo
- `cd` into it.
- `yarn install`
- `cd client && yarn install`
- `cp .env.sample .env`

In addition please refer to the package.json to see all required packages included in this project.

## Dev Dependencies

-	Axios
-	Bootstrap
-	Prettier
-	React
-	React-dom
-	React-router-dom
-	React-scripts
-	Style-Component
-	Style-Components

## Available build commands

Please reference to the package.json in the root directory for the build scripts:

- `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.
- `yarn server`: Runs JUST your Express.JS server.
- `yarn client`: Runs JUST your front-end React app.

Open [http://localhost:3000] to view your local React app in the browser. The page will reload if you make edits.

## Additional Packages

A chatbot was added to this application with “react-simple-chatbot”, in order to run this you must also make sure that “styled-components” is downloaded and running.

## Environment Variables

This application uses several environment variables, as described in ‘sample.env’ :

1.)	Auth ‘tokens’ are used to authenticate and create users. Please refer to the JWT_SECRET.
2.)	A connection to the database stored at MongoDB, is required with a MONGO_URL key.
3.)	A connection to Sendgrid for sending of emails through the applications requires a SENDGRID_API_KEY.

## Storing Images

This application calls to “cloudinary.com” to stores uploaded images for the site.

## To deploy

NOTE: Heroku specifically runs `npm start`, so don't remove that from your package.json file.

- `heroku create your-app-name`
- `heroku config:set MONGODB_URL=<insertYourAtlasDbUri>`
-  `heroku config:set JWT_Secret=<insertYourJWTSecret>`
-  `heroku config:set SENDGRI_API_KEY=<insertYourSendgridApiKey>`
- `git push heroku master`


