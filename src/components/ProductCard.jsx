import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const { fields } = product;
  // Update field names to match Contentful (English names)
  const imageUrl = fields.image?.fields?.file?.url || 'https://images.unsplash.com/photo-1596040033229-a0b3b1c42a39?w=400&h=300&fit=crop';
  const name = fields.name || 'Produk';
  const description = fields.description || 'Deskripsi tidak tersedia';
  const price = fields.price || 'Hubungi kami';

  const handleOrder = () => {
    const message = `Halo Nasi Padang Froyow, saya mau pesan ${name}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6282210149399?text=${encodedMessage}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={imageUrl.startsWith('//') ? `https:${imageUrl}` : imageUrl}
          alt={name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-padang-gold text-padang-brown px-4 py-2 rounded-full font-bold shadow-lg">
          {typeof price === 'number' ? `Rp ${price.toLocaleString('id-ID')}` : price}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-padang-red mb-3">
          {name}
        </h3>
        <p className="text-gray-600 mb-6 line-clamp-3">
          {description}
        </p>
        <button
          onClick={handleOrder}
          className="w-full bg-padang-orange text-white py-3 rounded-full font-bold hover:bg-padang-red transition-colors duration-200 transform hover:scale-105"
        >
          🛒 Pesan Sekarang
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
