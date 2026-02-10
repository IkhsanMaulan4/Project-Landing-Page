import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import ProductList from './components/ProductList';
import SocialProof from './components/SocialProof';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhySection />
      <ProductList />
      <SocialProof />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
