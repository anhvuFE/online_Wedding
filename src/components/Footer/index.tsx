import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../../data/wedding-data';

export default function Footer() {
  const { bride, groom } = WEDDING_DATA;

  return (
    <footer className="py-16 px-4 text-center bg-rose-gold-dark">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-script text-4xl md:text-5xl text-white/90 mb-3">
          {groom.firstName} & {bride.firstName}
        </p>
        <div className="w-12 h-px bg-white/20 mx-auto my-5" />
        <p className="text-white/50 text-sm tracking-wider">
          Cảm ơn bạn đã là một phần trong câu chuyện của chúng mình
        </p>
      </motion.div>
    </footer>
  );
}
