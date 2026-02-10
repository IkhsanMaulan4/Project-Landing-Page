import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Beranda', id: 'hero' },
    { label: 'Mengapa Kami', id: 'why' },
    { label: 'Menu', id: 'products' },
    { label: 'Testimoni', id: 'testimonials' },
    { label: 'Kontak', id: 'cta' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-padang-red">
              Nasi Padang <span className="text-padang-orange">Froyow</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-padang-text hover:text-padang-orange transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/6282210149399?text=Halo%20Nasi%20Padang%20Froyow%2C%20saya%20mau%20pesan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-padang-orange text-white px-6 py-2 rounded-full hover:bg-padang-red transition-colors duration-200"
            >
              Pesan Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-padang-text"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-padang-text hover:text-padang-orange transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/6282210149399?text=Halo%20Nasi%20Padang%20Froyow%2C%20saya%20mau%20pesan"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-padang-orange text-white px-6 py-2 rounded-full hover:bg-padang-red transition-colors duration-200 mt-4"
            >
              Pesan Sekarang
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
