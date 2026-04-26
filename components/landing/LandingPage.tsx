import Header from './Header';
import Hero from './Hero';
import SocialProof from './SocialProof';
import Features from './Features';
import CTA from './CTA';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <SocialProof />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
