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

After cloning make sure to run `yarn` or `yarn install` to install the dependencies for the project. After installing dependencies this will also setup the database for you. It will generate the database client as well as migrate the database for you to setup the tables needed ( in the future there will be a seed script for development ).

Scripts you can run for easier development:

`yarn start:dev` - to run a full development environment in watch mode  
`yarn dev:app` - API and FrontEnd in watch mode ( a now dev env that rebuilds on file changes and is as near to production as possible )   
`yarn dev:db` - Database client in watch mode (prisma2 dev env that auto generates on schema changes)  
`yarn dev` - FrontEnd only in watch mode (next command that watches for file changes in pages folder)  
`yarn test:watch` - to run tests in watch mode

# Deployment

Deployments are handled automatically by Github actions that run when anything gets pushed for the master branch and preview deployments for pull requests.