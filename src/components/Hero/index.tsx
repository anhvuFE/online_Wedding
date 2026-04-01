import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../../data/wedding-data';

export default function Hero() {
  const { bride, groom, date } = WEDDING_DATA;
  const weddingDate = new Date(date);
  const formattedDate = weddingDate.toLocaleDateString('vi-VN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm md:text-base tracking-[0.35em] uppercase mb-8 font-light opacity-90"
        >
          Chúng mình sắp cưới rồi
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h1 className="font-script text-6xl sm:text-7xl md:text-8xl leading-tight">
            {groom.firstName}
          </h1>
          <div className="flex items-center justify-center gap-4 my-3">
            <span className="h-px w-12 md:w-20 bg-white/40" />
            <span className="font-serif text-xl md:text-2xl italic opacity-80">&</span>
            <span className="h-px w-12 md:w-20 bg-white/40" />
          </div>
          <h1 className="font-script text-6xl sm:text-7xl md:text-8xl leading-tight">
            {bride.firstName}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10"
        >
          <div className="gold-divider !my-5" />
          <p className="font-serif text-lg md:text-xl tracking-wider opacity-95">{formattedDate}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-10"
        >
          <a
            href="#rsvp"
            className="inline-block px-8 py-3 border border-white/50 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/15 transition-all duration-300"
          >
            Xác Nhận Tham Dự
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-0.5 h-1.5 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
