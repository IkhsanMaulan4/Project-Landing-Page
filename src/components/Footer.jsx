const Footer = () => {
  return (
    <footer className="bg-padang-brown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-padang-gold mb-4">
              Nasi Padang Froyow
            </h3>
            <p className="text-gray-300 mb-4">
              Nasi Padang autentik dengan resep turun temurun. Dibuat dengan cinta untuk kepuasan Anda.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold text-padang-gold mb-4">
              Kontak Kami
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>📧 Email: info@nasipadangfroyow.com</li>
              <li>📍 Jakarta & Sekitarnya</li>
              <li>⏰ Setiap Hari: 10:00 - 21:00 WIB</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-padang-gold mb-4">
              Menu Cepat
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-padang-gold transition-colors"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-padang-gold transition-colors"
                >
                  Mengapa Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-padang-gold transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-padang-gold transition-colors"
                >
                  Testimoni
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-600 pt-8 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://instagram.com/nasipadangfroyow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-padang-gold transition-colors"
            >
              📷 Instagram
            </a>
            <a
              href="https://facebook.com/nasipadangfroyow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-padang-gold transition-colors"
            >
              📘 Facebook
            </a>
            <a
              href="https://wa.me/6282210149399"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-padang-gold transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Nasi Padang Froyow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
