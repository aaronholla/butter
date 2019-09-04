This is a web app to track what movies have end credit scenes.

Front End
- Next.js
- Apollo Client

Back End
- Apollo Server Micro (apollo server as a microservice)
- Now v2 (deploying backend as serverless functions)
- Prisma2 (managing database and auto generating a db client)
- The Movie Database API

# Development

> Note: In order to run the app make sure to have PostgreSQL running with an empty database named `butter_development`. Prisma2 currently will not create the database needed when running the migrations.

After cloning make sure to run `yarn` or `yarn install` to install the dependencies for the project. After installing dependencies this will also generate a photon.js client for the current schema. 

Then run `yarn db:migrate` to migrate the database to setup the tables needed ( in the future there will also be a seed script for development ).

Scripts you can run for easier development:

`yarn start:dev` - Run a full development environment in watch mode  
`yarn dev:app` - API and FrontEnd in watch mode  
`yarn dev:db` - Database client in watch mode  
`yarn dev`- FrontEnd only in watch mode  

`yarn test` - Run tests once  
`yarn test:watch` - Run tests in watch mode  
`yarn test:coverage` - Run tests and recieve coverage report

`yarn db:save` - Save all current schema changes to a new migration file  
`yarn db:migrate` - Run all pending database migrations

# Deployment

Deployments are handled automatically by Github actions that run when anything gets pushed for the master branch and preview deployments for pull requests.