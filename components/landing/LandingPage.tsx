import Header from './Header';
import Hero from './Hero';
import SocialProof from './SocialProof';
import Features from './Features';
import CTA from './CTA';
import Footer from './Footer';
import HowItWorks from './HowItWorks';

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
