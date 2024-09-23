import Link from "next/link";

import { ArrowRight, CheckIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/constants/pricing-plans";
import { cn } from "@/lib/utils";

export default function Pricing() {
  return (
    <section className="relative overflow-hidden" id="pricing">
      <div className="mx-auto max-w-5xl px-12 py-12 lg:px-0 lg:py-24">
        <div className="flex w-full items-center justify-center pb-12">
          <h2 className="mb-8 text-xl font-bold uppercase text-purple-600">
            Pricing
          </h2>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch">
          {pricingPlans.map(
            ({ name, price, description, items, id, paymentLink }, idx) => (
              <div className="relative w-full max-w-lg" key={idx}>
                <div
                  className={cn(
                    "rounded-box relative z-10 flex h-full flex-col gap-4 rounded-2xl border-[1px] border-gray-500/20 p-8 lg:gap-8",
                    id === "pro" && "gap-5 border-2 border-violet-500"
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-lg font-bold capitalize lg:text-xl">
                        {name}
                      </p>
                      <p className="text-base-content/80 mt-2">{description}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <p className="text-5xl font-extrabold tracking-tight">
                      ${price}
                    </p>
                    <div className="mb-[4px] flex flex-col justify-end">
                      <p className="text-base-content/60 text-xs font-semibold uppercase">
                        USD
                      </p>
                      <p className="text-base-content/60 text-xs">/month</p>
                    </div>
                  </div>
                  <ul className="flex-1 space-y-2.5 text-base leading-relaxed">
                    {items.map((item, idx) => (
                      <li className="flex items-center gap-2" key={idx}>
                        <CheckIcon size={18}></CheckIcon>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2">
                    <Button
                      variant={"link"}
                      className={cn(
                        "flex gap-2 rounded-full border-2 bg-black text-gray-100",
                        id === "pro" && "border-amber-300 px-4"
                      )}
                    >
                      <Link
                        href={{ pathname: paymentLink }}
                        className="flex items-center gap-1"
                      >
                        Start Spinning <ArrowRight size={18} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
