import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../../hooks/use-scroll-reveal';
import { WEDDING_DATA } from '../../data/wedding-data';

function Lightbox({
  image,
  onClose,
}: {
  image: (typeof WEDDING_DATA.gallery)[number];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-pointer"
      onClick={onClose}
    >
      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        src={image.src}
        alt={image.alt}
        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  );
}

export default function Gallery() {
  const [selected, setSelected] = useState<(typeof WEDDING_DATA.gallery)[number] | null>(null);
  const { ref: titleRef, isInView: titleVisible } = useScrollReveal();

  return (
    <section id="gallery" className="py-20 md:py-32 px-4 max-w-7xl mx-auto">
      <div ref={titleRef}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-title text-primary-dark dark:text-primary-light"
        >
          Bộ Sưu Tập Ảnh
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="section-subtitle"
        >
          Những khoảnh khắc đáng nhớ mãi mãi
        </motion.p>
        <div className="gold-divider" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mt-16">
        {WEDDING_DATA.gallery.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative group cursor-pointer overflow-hidden rounded-xl ${
              index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
            onClick={() => setSelected(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-sm font-medium">{photo.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && <Lightbox image={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
