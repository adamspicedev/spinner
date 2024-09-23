"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export default function Providers({ children }: ThemeProviderProps) {
  return (
    <ClerkProvider>
      <NextThemesProvider attribute="class">{children}</NextThemesProvider>
    </ClerkProvider>
  );
}
