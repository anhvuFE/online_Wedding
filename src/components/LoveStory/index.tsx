import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/use-scroll-reveal';
import { WEDDING_DATA } from '../../data/wedding-data';

const icons: Record<string, string> = {
  coffee: '☕',
  heart: '💕',
  home: '🏠',
  ring: '💍',
  celebration: '🎉',
};

function TimelineItem({
  item,
  index,
}: {
  item: (typeof WEDDING_DATA.loveStory)[number];
  index: number;
}) {
  const { ref, isInView } = useScrollReveal(0.3);
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-center justify-center mb-12 md:mb-16">
      {/* Center line dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center text-xl md:text-2xl shadow-lg shadow-primary/30"
      >
        {icons[item.icon] || '✨'}
      </motion.div>

      {/* Content card */}
      <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16`}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={`glass-card p-6 md:p-8 ${isLeft ? 'md:col-start-1' : 'md:col-start-2'}`}
        >
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
            {item.date}
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-primary-dark dark:text-primary-light mb-3">
            {item.title}
          </h3>
          <p className="text-gray-600 dark:text-dark-muted leading-relaxed">{item.description}</p>
        </motion.div>

        {/* Empty spacer for the other side */}
        <div className={`hidden md:block ${isLeft ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'}`} />
      </div>
    </div>
  );
}

export default function LoveStory() {
  const { ref: titleRef, isInView: titleVisible } = useScrollReveal();

  return (
    <section id="story" className="py-20 md:py-32 px-4 max-w-6xl mx-auto">
      <div ref={titleRef}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-title text-primary-dark dark:text-primary-light"
        >
          Chuyện Tình Yêu
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="section-subtitle"
        >
          Mỗi câu chuyện tình yêu đều đẹp, nhưng câu chuyện của chúng mình là đặc biệt nhất
        </motion.p>
        <div className="gold-divider" />
      </div>

      {/* Timeline line */}
      <div className="relative mt-16">
        <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0" />

        {WEDDING_DATA.loveStory.map((item, index) => (
          <TimelineItem key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
