import { pgTable, serial, text, varchar, timestamp } from 'drizzle-orm/pg-core';

export const leads = pgTable('leads', {
  id: serial('id').primaryKey(),
  status: varchar('status', { length: 20 }).default('neu'),
  firma: varchar('firma', { length: 255 }),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  telefon: varchar('telefon', { length: 50 }),
  service: varchar('service', { length: 100 }).notNull(),
  projektort: varchar('projektort', { length: 255 }),
  beschreibung: text('beschreibung').notNull(),
  zeitraum: varchar('zeitraum', { length: 100 }),
  budget: varchar('budget', { length: 50 }),
  notizen: text('notizen'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
});

export const partners = pgTable('partners', {
  id: serial('id').primaryKey(),
  status: varchar('status', { length: 20 }).default('beworben'),
  firma: varchar('firma', { length: 255 }).notNull(),
  ansprechpartner: varchar('ansprechpartner', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  telefon: varchar('telefon', { length: 50 }),
  gewerke: text('gewerke').array(),
  einsatzgebiet: text('einsatzgebiet').array(),
  mitarbeiter: varchar('mitarbeiter', { length: 20 }),
  website: varchar('website', { length: 500 }),
  beschreibung: text('beschreibung'),
  notizen: text('notizen'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
});

export const adminUsers = pgTable('admin_users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});
