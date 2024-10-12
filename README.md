# NestJS SaaS

## Description

This project is a boilerplate template for building APIs with [NestJS](https://nestjs.com/). It offers a robust and scalable foundation with essential features and best practices integrated, allowing developers to quickly start developing applications. The template reduces the overhead of initial setup and follows NestJS conventions for a clear project structure.

<div style="display: flex; align-items: center;">
  <img src="https://github.com/mitjasiska/nestjs-saas/blob/main/src/media/warning.png" alt="Warning" width="100" style="margin-right: 20px;" />
  <div>
    <strong>Note: This project is currently under development and is not ready for use in production. Please use it at your own risk.</strong>
  </div>
</div>

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