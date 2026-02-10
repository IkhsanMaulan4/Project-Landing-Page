import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const SocialProof = () => {
  const testimonials = [
    {
      name: 'Budi Santoso',
      avatar: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=F97316&color=fff&size=200',
      rating: 5,
      review: 'Rendangnya juara! Sama persis kayak di Padang. Bumbunya meresap sempurna, dagingnya empuk. Pokoknya top markotop!'
    },
    {
      name: 'Siti Nurhaliza',
      avatar: 'https://ui-avatars.com/api/?name=Siti+Nurhaliza&background=DC2626&color=fff&size=200',
      rating: 5,
      review: 'Sudah langganan 3 bulan! Porsinya besar, rasanya autentik, harganya juga masuk akal. Pelayanannya ramah banget.'
    },
    {
      name: 'Ahmad Rizki',
      avatar: 'https://ui-avatars.com/api/?name=Ahmad+Rizki&background=78350F&color=fff&size=200',
      rating: 5,
      review: 'Pertama kali coba langsung jatuh cinta. Ayam pop-nya crispy di luar, juicy di dalam. Sambalnya pedasnya pas!'
    },
    {
      name: 'Dewi Lestari',
      avatar: 'https://ui-avatars.com/api/?name=Dewi+Lestari&background=FBBF24&color=000&size=200',
      rating: 5,
      review: 'Nasi Padang terenak yang pernah saya coba di Jakarta. Gulai tambusunya bikin nagih! Pengiriman juga cepat dan masih hangat.'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-padang-red mb-4">
            Kata Pelanggan Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ribuan pelanggan sudah merasakan kelezatan Nasi Padang Froyow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-padang-cream p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-padang-brown">
                    {testimonial.name}
                  </h4>
                  <div className="flex text-padang-gold">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "{testimonial.review}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-padang-orange mb-2">1000+</p>
            <p className="text-gray-600">Pelanggan Puas</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-padang-orange mb-2">4.9/5</p>
            <p className="text-gray-600">Rating Kepuasan</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-padang-orange mb-2">15+</p>
            <p className="text-gray-600">Menu Pilihan</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-padang-orange mb-2">5 Tahun</p>
            <p className="text-gray-600">Pengalaman</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
