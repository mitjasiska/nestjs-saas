import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from '../../src/drizzle/schema/schema';
import 'dotenv/config';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});
const db = drizzle(pool, { schema }) as NodePgDatabase<typeof schema>;

export const migrateDb = async () => {
  console.log('🚀 Migrating database!');

  try {
    await migrate(db, { migrationsFolder: './drizzle/migrations' });
    console.log(`Migration complete.`);
  } catch (error) {
    console.error('Error while migrating:', error);
  }
};
