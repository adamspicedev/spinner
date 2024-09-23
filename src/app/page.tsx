import Banner from "@/components/landing/banner";
import Divider from "@/components/landing/divider";
import Footer from "@/components/landing/footer";
import Intro from "@/components/landing/intro";
import Pricing from "@/components/landing/pricing";
import Gradient from "@/components/shared/gradient";

export default function Home() {
  return (
    <main className="inset-0 mx-auto h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] text-slate-800 [background-size:16px_16px]">
      <Gradient />
      <Banner />
      <Divider />
      <Intro />
      <Pricing />
      <Divider />
      <Footer />
    </main>
  );
}
