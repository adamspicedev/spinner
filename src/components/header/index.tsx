import Image from "next/image";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import NavLink from "./nav-link";

export default function Header() {
  return (
    <header>
      <nav className="container fixed mx-auto flex items-center justify-between px-8 py-4">
        <div className="flex lg:flex-1">
          <NavLink href="/">
            <span className="group flex shrink-0 items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Spinner logo"
                width={32}
                height={32}
                className="transform transition duration-200 ease-in-out group-hover:rotate-12"
              />
              <span className="text-lg font-extrabold">Spinner</span>
            </span>
          </NavLink>
        </div>

        <div className="flex gap-2 lg:items-center lg:justify-center lg:gap-12">
          <NavLink href="/#pricing">Pricing</NavLink>
          <SignedIn>
            <NavLink href="/posts">Your Posts</NavLink>
          </SignedIn>
        </div>

        <div className="flex lg:flex-1 lg:justify-end">
          <SignedIn>
            <div className="flex items-center gap-2">
              <NavLink href="/dashboard">Upload a Video</NavLink>
              {/** Profile */}
              <UserButton />
            </div>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <NavLink href="/sign-in">Sign In</NavLink>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}
