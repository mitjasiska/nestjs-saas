# nestjs-saas

## Description

This project is a boilerplate template for building APIs with [NestJS](https://nestjs.com/). It offers a robust and scalable foundation with essential features and best practices integrated, allowing developers to quickly start developing applications. The template reduces the overhead of initial setup and follows NestJS conventions for a clear project structure.

> [!CAUTION]
> This project is currently under development and is not ready for use in production. Please use it at your own risk.

## Features

- TypeScript
- Drizzle with PostgreSQL database connection
- Swagger Documentation
- Jest is replaced by Vitest

## Project Setup

1. Install dependencies:
   ```sh
   npm install
   ```

2. Copy the example environment file `.env.example` to `.env` and update the environment variables according to your setup:
   ```sh
   cp .env.example .env
   ```

## Compile and Run the Application

```bash
# Development
$ npm run start

# Watch mode
$ npm run start:dev

# Production mode
$ npm run start:prod
```

## Database

1. Update `DATABASE_URL` in `.env` with your connection string.

2. List of database commands:

    ```bash
    # Generate new migration files
    $ npm run db:generate
    
    # Apply migrations to your database
    $ npm run db:migrate
    
    # Seed data to your database
    $ npm run db:seed
    
    # Drop all tables in your database
    $ npm run db:drop
    ```

After setting up and running the application, you can access it at the following URLs:

- Application URL: [http://localhost:3000](http://localhost:3000)
- Swagger API Documentation: [http://localhost:3000/api](http://localhost:3000/api)

## Run Tests

```bash
# Unit tests
$ npm run test

# E2E tests
$ npm run test:e2e

# Test coverage
$ npm run test:cov
```

- Author - [Mitja Šiška](https://github.com/mitjasiska)

## License

**NestJS SaaS** is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).