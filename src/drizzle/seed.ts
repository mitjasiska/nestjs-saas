import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema/schema';
import 'dotenv/config';
import { faker } from '@faker-js/faker';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});
const db = drizzle(pool, { schema }) as NodePgDatabase<typeof schema>;

async function main() {
  const userIds = await Promise.all(
    Array(50)
      .fill('')
      .map(async () => {
        const user = await db
          .insert(schema.users)
          .values({
            email: faker.internet.email(),
            name: faker.person.firstName() + ' ' + faker.person.lastName(),
            password: '',
          })
          .returning();

        return user[0].id;
      }),
  );

  const roles = [
    { id: 1, name: 'user' },
    { id: 2, name: 'admin' },
  ];

  const insertedRoles = await db.insert(schema.roles).values(roles).returning();
  const roleIds = insertedRoles.map((role) => role.id);

  await Promise.all(
    userIds.map(async (userId) => {
      const randomRoleId = Math.floor(Math.random() * roleIds.length);

      return db.insert(schema.userRole).values({
        userId,
        roleId: roles[randomRoleId].id,
      });
    }),
  );
}

main()
  .then()
  .catch((err) => {
    console.error(err);
    process.exit(0);
  });
