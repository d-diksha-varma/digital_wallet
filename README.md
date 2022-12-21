# Digital Wallet

We are going to build a digital wallet so you must start looking into the resources for the database design and other stuff related to it. Although keeping it simple the project will work on two different roles:
1. Admin
2. User

Features that this app would have are as follows:
1. User Auth based on the role.
2. Money can only be added by the Admin
3. Users can only transfer money from his wallet to others.

Few more will keep adding as we go ahead with the implementation...

# Tasks
Date: 21 Dec 2022
## Setup the Repo
1. Do the necessary setup as you do for all the projects using `npm init`,
2. Spin up the server and create a route `/` which must return a 200 response code.
3. Setup your server to respond to routes which has not been defined as 404 Not Found.
4. After you complete this go ahead and pull out all the sensitive things like database string, secret keys (if present) and else and put it into `.env` and try to fetch out from it.
5. Also, add a logger to your server so that it logs every events on it. Reference: `morgan` npm package.
6. Follow this directory structure:

        src
          models: contains database models
          routes: contains both routes and controllers
            users (example)
              users.controller.js
              users.routes.js
          app.js / index.js

For today this much would be enough. Ping me once done.
