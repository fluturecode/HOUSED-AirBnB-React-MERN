# Housed - Temporary Stay Booking Application (MERN Stack)
![Screen Shot 2020-07-14 at 3 35 41 PM](https://user-images.githubusercontent.com/59614789/90995002-91a45380-e588-11ea-9c04-431ad5dcb387.png)

## Setup

- `git clone` this repo
- `cd` into it.
- `yarn install`
- `cd client && yarn install`

In addition please refer to the package.json to see all required packages included in this project.

## Dev Dependencies

-	Axios
-	Prettier
-	React
-	React-dom
-	React-router-dom
-	React-scripts
-	Emotion
-	Styled-Components

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


