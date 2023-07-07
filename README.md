This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# get schema from existing db

$ npm run introspect

CREATE TABLE IF NOT EXISTS "todo" (
"id" serial PRIMARY KEY NOT NULL,
"title" varchar(50) NOT NULL,
"description" varchar(50),
"created_at" timestamp DEFAULT now()
);

import { pgTable, pgEnum, pgSchema, AnyPgColumn, serial, varchar, timestamp } from "drizzle-orm/pg-core"

import { sql } from "drizzle-orm"

export const todo = pgTable("todo", {
id: serial("id").primaryKey().notNull(),
title: varchar("title", { length: 50 }).notNull(),
description: varchar("description", { length: 50 }),
createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
})

export const user = pgTable('user', {
id: serial("id").primaryKey().notNull(),
fullName: varchar("full_name", { length: 50 }).notNull(),
phone: varchar('phone', {length: 50}),
})

1. write schema
2. generate migrations
3. push --- create table etc DDL in database based on schema. not for postgres!

insert into todos (title, description)
values('do homework', 'homework need to be done today');

insert into todos (title, description)
values('wash dish', 'this need to be done tonight');

commit;

select \* from todo;

    "migrations:introspect": "drizzle-kit introspect:pg",
    "migrations:generate": "drizzle-kit generate:pg",
    "migrations:check": "drizzle-kit check:pg",
    "migrations:push": "drizzle-kit push:pg",
    "migrations:drop": "drizzle-kit drop --config=drizzle.config.ts"

    push doesn't work for postgres

---

$ npm run migrations:check
drizzle-kit: v0.19.2
drizzle-orm: v0.27.0

No config path provided, using default 'drizzle.config.ts'
Reading config file 'C:\e-books-selena\next13\todos-db-drizzle\drizzle.config.ts'
Everything's fine 🐶🔥

---
