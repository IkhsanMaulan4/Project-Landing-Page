import { motion } from 'framer-motion';
import { PhoneIcon } from '@heroicons/react/24/solid';

const CTASection = () => {
  return (
    <section id="cta" className="gradient-cta py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Lapar? Pesan Sekarang!
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Diantar hangat ke rumah Anda. Cukup klik tombol di bawah dan pesan via WhatsApp
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <p className="text-lg mb-4">⏰ Jam Operasional</p>
            <p className="text-2xl font-bold mb-4">Setiap Hari: 10:00 - 21:00 WIB</p>
            <p className="text-lg">📍 Area Pengiriman: Jakarta & Sekitarnya</p>
          </div>

          <a
            href="https://wa.me/6282210149399?text=Halo%20Nasi%20Padang%20Froyow%2C%20saya%20mau%20pesan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-padang-gold text-padang-brown px-12 py-6 rounded-full font-bold text-2xl hover:bg-white transition-all duration-200 transform hover:scale-105 shadow-2xl"
          >
            <PhoneIcon className="h-8 w-8" />
            Pesan via WhatsApp
          </a>  
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
