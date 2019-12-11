# Introduction

This is a sample full stack REST API running in Node using express including Postgres queries & database migrations.

Structure

project   
│   .env <- Variables
|
|
└───src
│   │   server.ts <- Responsible for launching the express server
│   │
│   └───database
│       └───migrations
│       |      1576094942059_sample-migration.js <- Creates a "users" table   
|       |
│       └───models
|           |   user.ts
│   
└───middleware <- CORS, Compression, parsing, error handling etc.
|    │   common.ts
|    |   index.ts <- Export middleware
|
└───services
|    |   index.ts <- Export routes
|    |    
|    └───user
|           routes.ts
|           userController.ts <- Business logic
|            
└───utils <- Bootstrap/utility methods for starting service (e.g. apply metadata, initialise database etc.)
      index.ts
    

## Run locally

### Postgres

1. Install docker
2. `docker run -d --name local_postgres -v my_dbdata:/var/lib/postgresql/data -p 54320:5432 postgres:11`

### Start service

1. Clone repository
2. Install packages: `npm install`
3. Run database migrations: `npm run migrate-database`
4. Insert some data into `sample.users`
5. Run API `npm run dev`
6. Naviagte to http://localhost:3000/api/v1/users
