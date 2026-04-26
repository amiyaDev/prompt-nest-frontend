import PricingSidebar from './PricingSidebar';
import PricingHeader from './PricingHeader';
import PricingCards from './PricingCards';
import FAQ from './FAQ';
import PricingFooter from './PricingFooter';

export default function PricingPage() {
  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex">
      <PricingSidebar />
      <main className="flex-1 flex flex-col min-w-0">
        <PricingHeader />
        <div className="flex-1 overflow-y-auto bg-surface-container-lowest">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="text-center mb-16">
              <h1 className="font-h1 text-h1 text-white mb-4">The Next Frontier of Intelligence</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Choose the plan that fits your ambition. From personal exploration to enterprise-scale deployment.
              </p>
            </div>
            <PricingCards />
            <FAQ />
            <PricingFooter />
          </div>
        </div>
      </main>
    </div>
  );
}