import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { id: 'home', label: 'Trang Chủ' },
  { id: 'events', label: 'Sự Kiện' },
  { id: 'rsvp', label: 'Xác Nhận' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]!;
        if (section.getBoundingClientRect().top <= 150) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_12px_rgba(183,110,121,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo('home')}
            className={`font-script text-2xl transition-colors ${
              scrolled ? 'text-rose-gold' : 'text-white'
            }`}
          >
            A & L
          </button>

          <div className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm tracking-wider transition-colors relative pb-1 ${
                  scrolled
                    ? 'text-warm-gray hover:text-rose-gold'
                    : 'text-white/80 hover:text-white'
                } ${activeSection === item.id ? (scrolled ? '!text-rose-gold' : '!text-white') : ''}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-rose-gold rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center ${
              scrolled ? 'text-warm-gray-dark' : 'text-white'
            }`}
          >
            <div className="space-y-1.5">
              <motion.div
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className={`w-5 h-0.5 ${scrolled ? 'bg-warm-gray-dark' : 'bg-white'}`}
              />
              <motion.div
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`w-5 h-0.5 ${scrolled ? 'bg-warm-gray-dark' : 'bg-white'}`}
              />
              <motion.div
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className={`w-5 h-0.5 ${scrolled ? 'bg-warm-gray-dark' : 'bg-white'}`}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/97 backdrop-blur-lg md:hidden flex flex-col items-center justify-center gap-8"
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollTo(item.id)}
                className={`font-serif text-2xl transition-colors ${
                  activeSection === item.id ? 'text-rose-gold' : 'text-warm-gray'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
