import DashboardWrapper from "@/components/dashboard/DashboardWrapper";
import PricingCards from "./PricingCards";
import FAQ from "./FAQ";

export default function PricingPage() {
  return (
    <DashboardWrapper activePage="pricing">
      <div className="text-center mb-16">
        <h1 className="font-h1 text-h1 text-white mb-4">The Next Frontier of Intelligence</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Choose the plan that fits your ambition. From personal exploration to enterprise-scale deployment.
        </p>
      </div>
      <PricingCards />
      <FAQ />
    </DashboardWrapper>
  );
}
