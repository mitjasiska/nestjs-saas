import {
  index,
  integer,
  pgTable,
  primaryKey,
  serial,
  text,
} from 'drizzle-orm/pg-core';
import { users } from './users.schema';
import { relations } from 'drizzle-orm';

export const roles = pgTable('roles', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
});

// This The Joint Table
export const userRole = pgTable(
  'user_role',
  {
    userId: integer('user_id').references(() => users.id),
    roleId: integer('role_id').references(() => roles.id),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.roleId, table.userId] }),
    userIdIndex: index('userIdIndex').on(table.userId),
  }),
);

export const roleRelations = relations(roles, ({ many }) => ({
  userRole: many(userRole),
}));

export const userRoleRelations = relations(userRole, ({ one }) => ({
  user: one(users, {
    fields: [userRole.userId],
    references: [users.id],
  }),
  role: one(roles, {
    fields: [userRole.roleId],
    references: [roles.id],
  }),
}));
