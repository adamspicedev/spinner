import { NeonQueryFunction, neon } from "@neondatabase/serverless";

import { env } from "@/env/server";

export default async function getDbConnection(): Promise<
  NeonQueryFunction<false, false>
> {
  const sql = neon(env.DATABASE_URL);
  return sql;
}
