/* eslint-disable n/no-process-env */
import { createEnv } from "@t3-oss/env-nextjs";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { ZodError, z } from "zod";

expand(config());

export const env = createEnv({
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string(),
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string(),
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string(),
    NEXT_PUBLIC_BASIC_PLAN_URL: z.string(),
    NEXT_PUBLIC_PRO_PLAN_URL: z.string(),
    NEXT_PUBLIC_BASIC_PLAN_PRICE_ID: z.string(),
    NEXT_PUBLIC_PRO_PLAN_PRICE_ID: z.string(),
  },
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    DATABASE_URL: z.string(),
    CLERK_SECRET_KEY: z.string(),
    STRIPE_SECRET_KEY: z.string(),
    STRIPE_WEBHOOK_SECRET: z.string(),
  },
  onValidationError: (error: ZodError) => {
    console.error(
      "❌ Invalid environment variables:",
      error.flatten().fieldErrors
    );
    process.exit(1);
  },
  emptyStringAsUndefined: true,

  // eslint-disable-next-line n/no-process-env
  experimental__runtimeEnv: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    NEXT_PUBLIC_BASIC_PLAN_URL: process.env.NEXT_PUBLIC_BASIC_PLAN_URL,
    NEXT_PUBLIC_PRO_PLAN_URL: process.env.NEXT_PUBLIC_PRO_PLAN_URL,
    NEXT_PUBLIC_BASIC_PLAN_PRICE_ID:
      process.env.NEXT_PUBLIC_BASIC_PLAN_PRICE_ID,
    NEXT_PUBLIC_PRO_PLAN_PRICE_ID: process.env.NEXT_PUBLIC_PRO_PLAN_PRICE_ID,
  },
});
