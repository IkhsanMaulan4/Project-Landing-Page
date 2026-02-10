import { motion } from 'framer-motion';
import {
  SparklesIcon,
  FireIcon,
  HeartIcon,
  TrophyIcon
} from '@heroicons/react/24/solid';

const WhySection = () => {
  const reasons = [
    {
      icon: <SparklesIcon className="h-12 w-12" />,
      title: 'Resep Turun Temurun',
      description: 'Menggunakan resep asli dari Padang yang telah diwariskan secara turun-temurun untuk memastikan keaslian rasa.'
    },
    {
      icon: <FireIcon className="h-12 w-12" />,
      title: 'Bahan Segar Setiap Hari',
      description: 'Kami hanya menggunakan bahan-bahan segar yang dipilih langsung setiap pagi untuk kualitas terbaik.'
    },
    {
      icon: <HeartIcon className="h-12 w-12" />,
      title: 'Rempah Pilihan',
      description: 'Rempah-rempah premium berkualitas tinggi yang menciptakan cita rasa khas Padang yang autentik.'
    },
    {
      icon: <TrophyIcon className="h-12 w-12" />,
      title: 'Porsi Melimpah',
      description: 'Porsi yang besar dan mengenyangkan dengan harga yang terjangkau. Dijamin puas!'
    }
  ];

  return (
    <section id="why" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-padang-red mb-4">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lebih dari sekadar makanan, kami menghadirkan pengalaman kuliner Padang yang tak terlupakan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-padang-cream p-6 rounded-2xl hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-padang-orange mb-4">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold text-padang-brown mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-700">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
