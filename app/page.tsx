import CtaSection from "@/components/home/CtaSection";
import DepartmentsGrid from "@/components/home/DepartmentsGrid";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import PageShell from "@/components/layout/PageShell";


export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <DepartmentsGrid />
      <HowItWorks />
      <CtaSection />
    </PageShell>
  );
}