import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center py-28 transition-all animate-in sm:pt-32 lg:max-w-6xl">
      <h1 className="py-6 text-center">
        Turn your ideas into{" "}
        <span className="underline decoration-primary/55 decoration-dashed underline-offset-8">
          attention-grabbing
        </span>{" "}
        blog posts.
      </h1>
      <h2 className="px-4 text-center text-slate-600 lg:max-w-4xl lg:px-0">
        Effortlessly transform your video, document, or voice into a blog post
        in seconds, powered by AI.
      </h2>

      <Link href="/#pricing">
        <Button
          variant="link"
          className="mt-6 flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-12 py-8 text-xl font-bold text-white shadow-lg shadow-purple-600/50 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:from-indigo-600 hover:to-purple-600 hover:no-underline lg:mt-20"
        >
          <span className="relative">Spin it!</span>{" "}
          <ArrowRight className="animate-pulse" />
        </Button>
      </Link>
    </div>
  );
}
