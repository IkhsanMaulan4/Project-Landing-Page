import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getProducts } from '../services/contentful';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError('Gagal memuat produk. Silakan coba lagi nanti.');
        console.error('Error loading products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-padang-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-padang-red mb-4">
            Menu Pilihan Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Setiap hidangan dibuat dengan cinta dan resep autentik dari Padang
          </p>
        </motion.div>

        {loading && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-padang-orange"></div>
            <p className="mt-4 text-gray-600 text-lg">Memuat menu...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg inline-block">
              <p className="font-bold mb-2">Oops!</p>
              <p>{error}</p>
            </div>
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">Belum ada menu tersedia saat ini.</p>
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.sys.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
