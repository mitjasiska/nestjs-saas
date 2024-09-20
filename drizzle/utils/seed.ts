import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from '../../src/drizzle/schema/schema';
import 'dotenv/config';
import { faker } from '@faker-js/faker';
import { users } from '../../src/drizzle/schema/schema';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});
const db = drizzle(pool, { schema }) as NodePgDatabase<typeof schema>;

export const seed = async () => {
  // Insert roles
  const roles = [
    { id: 1, name: 'admin' },
    { id: 2, name: 'user' },
  ];
  await db.insert(schema.roles).values(roles).returning();

  // Insert users
  const users = [
    {
      id: 1,
      name: 'Admin User',
      username: 'admin',
      email: 'admin@example.com',
      password: 'password',
    },
    {
      id: 2,
      name: 'Regular User',
      username: 'user',
      email: 'user@example.com',
      password: 'password',
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
