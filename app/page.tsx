import FeaturesGrid from '@/components/features-grid';
import IndustriesGrid from '@/components/industries-grid';
import DemoForm from '@/components/demo-form';
import SpecialOffer from '@/components/special-offer';
import Location from '@/components/location';
import Footer from '@/components/footer';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <IndustriesGrid />
      <SpecialOffer />
      <DemoForm />
      <Location />
      <Footer />
    </>
  );
}