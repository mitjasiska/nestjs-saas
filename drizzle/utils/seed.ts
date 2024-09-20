import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from '../../src/drizzle/schema/schema';
import 'dotenv/config';
import * as bcrypt from 'bcrypt';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});
const db = drizzle(pool, { schema }) as NodePgDatabase<typeof schema>;

export const seed = async () => {
  // Insert roles
  const roles = [{ name: 'admin' }, { name: 'user' }];
  await db.insert(schema.roles).values(roles).returning();

  // Insert users
  const users = [
    {
      name: 'Admin User',
      username: 'admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('password', 10),
    },
    {
      name: 'Regular User',
      username: 'user',
      email: 'user@example.com',
      password: bcrypt.hashSync('password', 10),
    },
  ];
  await db.insert(schema.users).values(users);

  // Insert user roles
  const userRole = [
    { userId: 1, roleId: 1 },
    { userId: 2, roleId: 2 },
  ];
  await db.insert(schema.userRole).values(userRole);
};
