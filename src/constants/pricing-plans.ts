import { env } from "@/env/server";

console.log("env.NEXT_PUBLIC_BASIC_PLAN_URL", env.NEXT_PUBLIC_BASIC_PLAN_URL);
export const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    description: "Get started with SpeakEasy!",
    price: "10",
    items: ["3 Blog Posts", "3 Transcriptions"],
    paymentLink: env.NEXT_PUBLIC_BASIC_PLAN_URL,
    priceId: env.NEXT_PUBLIC_BASIC_PLAN_PRICE_ID,
  },
  {
    id: "pro",
    name: "Pro",
    description: "All Blog Posts, let’s go!",
    price: "19.99",
    items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
    paymentLink: env.NEXT_PUBLIC_PRO_PLAN_URL,
    priceId: env.NEXT_PUBLIC_PRO_PLAN_PRICE_ID,
  },
];
