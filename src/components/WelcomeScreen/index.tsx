import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../../data/wedding-data';

interface Props {
  onEnter: () => void;
}

export default function WelcomeScreen({ onEnter }: Props) {
  const { groom, bride } = WEDDING_DATA;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80)',
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <div className="relative z-10 text-center text-white px-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm tracking-[0.3em] uppercase mb-6 opacity-80"
        >
          Thiệp Mời Cưới
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-script text-5xl sm:text-6xl md:text-7xl leading-tight"
        >
          {groom.firstName} & {bride.firstName}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10"
        >
          <button
            onClick={onEnter}
            className="px-10 py-3.5 bg-white/20 backdrop-blur-sm border border-white/40 text-white rounded-full text-base tracking-wider hover:bg-white/30 transition-all duration-300 active:scale-95"
          >
            Mở Thiệp Mời
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-4 text-xs text-white/50"
        >
          Nhấn để mở thiệp và nghe nhạc
        </motion.p>
      </div>
    </motion.div>
  );
}
