import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema/schema';
import 'dotenv/config';
import { sql } from 'drizzle-orm';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});
const db = drizzle(pool, { schema }) as NodePgDatabase<typeof schema>;

const main = async () => {
  console.log('🗑️ Dropping all tables!');

  try {
    const selectQuery = sql`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' AND table_type = 'BASE TABLE';`;

    const result = await db.execute(selectQuery);

    const tables = result.rows.map((row) => row.table_name);

    for (const table of tables) {
      const dropQuery = sql`DROP TABLE IF EXISTS ${table} CASCADE`;

      await db.execute(dropQuery);
      console.log(`Dropped table ${table}.`);
    }
  } catch (error) {
    console.error('Error while dropping tables:', error);
  }
};

(async () => {
  try {
    await main();
  } catch (err) {
    console.error(err);
    process.exit(0);
  }
})();
