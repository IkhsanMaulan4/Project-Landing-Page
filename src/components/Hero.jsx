import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getProducts } from '../services/contentful';

const Hero = () => {
  const [heroImage, setHeroImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroImage = async () => {
      try {
        const products = await getProducts();
        // Cari produk Rendang untuk hero image
        const rendangProduct = products.find(
          product => product.fields.name?.toLowerCase().includes('rendang')
        );

        if (rendangProduct && rendangProduct.fields.image) {
          const imageUrl = rendangProduct.fields.image.fields.file.url;
          setHeroImage(imageUrl.startsWith('//') ? `https:${imageUrl}` : imageUrl);
        }
      } catch (error) {
        console.error('Error loading hero image:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroImage();
  }, []);

  return (
    <section id="hero" className="gradient-hero min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Nasi Padang Autentik, Rasa yang Bikin Kangen
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Resep turun temurun dengan bahan segar pilihan. Setiap suapan membawa kenangan rasa Padang yang sesungguhnya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6282210149399?text=Halo%20Nasi%20Padang%20Froyow%2C%20saya%20mau%20pesan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-padang-red px-8 py-4 rounded-full font-bold text-lg hover:bg-padang-gold transition-all duration-200 transform hover:scale-105 shadow-lg text-center"
              >
                🛒 Pesan via WhatsApp
              </a>
              <button
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-padang-red transition-all duration-200 text-center"
              >
                Lihat Menu
              </button>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {loading ? (
              <div className="rounded-3xl shadow-2xl w-full h-[500px] bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
              </div>
            ) : (
              <img
                src={heroImage || "https://images.unsplash.com/photo-1596040033229-a0b3b1c42a39?w=800&h=800&fit=crop"}
                alt="Nasi Padang Froyow - Bundle Rendang"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1596040033229-a0b3b1c42a39?w=800&h=800&fit=crop";
                }}
              />
            )}
            <div className="absolute -bottom-6 -left-6 bg-padang-gold text-padang-brown px-6 py-4 rounded-2xl shadow-xl">
              <p className="text-3xl font-bold">⭐ 4.9/5</p>
              <p className="text-sm">1000+ Pelanggan Puas</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
