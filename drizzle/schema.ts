import { pgTable, pgEnum, pgSchema, AnyPgColumn, serial, varchar, timestamp } from "drizzle-orm/pg-core"


import { sql } from "drizzle-orm"

export const todo = pgTable("todo", {
	id: serial("id").primaryKey().notNull(),
	title: varchar("title", { length: 50 }).notNull(),
	description: varchar("description", { length: 50 }),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
})