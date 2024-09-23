import { SignUp } from "@clerk/nextjs";

import Gradient from "@/components/shared/gradient";

export default function Page() {
  return (
    <section className="flex items-center justify-center py-16">
      <Gradient>
        <SignUp />
      </Gradient>
    </section>
  );
}
