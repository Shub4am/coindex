import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import CryptoMarket from '@/components/CryptoMarket';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CryptoMarket />
      <About />
      <Services />
      <Footer />
    </main>
  );
}
