import Link from "next/link";
import { PropsWithChildren } from "react";

type Props = {
  href: string;
};

export default function NavLink({ href, children }: PropsWithChildren<Props>) {
  return (
    <Link
      href={{ pathname: href }}
      className="text-gray-600 transition-colors duration-200 hover:text-primary group-hover:text-primary"
    >
      {children}
    </Link>
  );
}
