import { motion } from 'framer-motion';
import { useCountdown } from '../../hooks/use-countdown';
import { useScrollReveal } from '../../hooks/use-scroll-reveal';
import { WEDDING_DATA } from '../../data/wedding-data';

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white shadow-[0_2px_16px_rgba(183,110,121,0.1)] flex items-center justify-center mb-2">
        <motion.span
          key={value}
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-serif text-3xl sm:text-4xl text-rose-gold-dark"
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </div>
      <span className="text-xs uppercase tracking-widest text-warm-gray-light font-light">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATA.date);
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 px-4">
      <div className="max-w-3xl mx-auto text-center" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Đếm Ngược
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="section-subtitle"
        >
          Đến ngày chúng mình nói "Đồng ý"
        </motion.p>
        <div className="gold-divider" />

        <div className="flex justify-center gap-4 sm:gap-6 mt-12">
          <TimeUnit value={days} label="Ngày" />
          <TimeUnit value={hours} label="Giờ" />
          <TimeUnit value={minutes} label="Phút" />
          <TimeUnit value={seconds} label="Giây" />
        </div>
      </div>
    </section>
  );
}
