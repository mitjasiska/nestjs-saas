import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import * as process from 'node:process';

export default defineConfig({
  schema: './src/drizzle/schema/**/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
