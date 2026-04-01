import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Petal {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  rotation: number;
  opacity: number;
  color: string;
}

const COLORS = ['#f9a8b8', '#f4c2c2', '#e8b4b8', '#f7cac9', '#f0b7b3', '#fddde6'];

function createPetal(id: number): Petal {
  return {
    id,
    x: Math.random() * 100,
    size: 8 + Math.random() * 14,
    delay: Math.random() * 8,
    duration: 8 + Math.random() * 10,
    rotation: Math.random() * 360,
    opacity: 0.3 + Math.random() * 0.4,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  };
}

export default function FallingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setPetals(Array.from({ length: 20 }, (_, i) => createPetal(i)));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{
            x: `${petal.x}vw`,
            y: -20,
            rotate: petal.rotation,
            opacity: 0,
          }}
          animate={{
            y: '110vh',
            rotate: petal.rotation + 360,
            opacity: [0, petal.opacity, petal.opacity, 0],
            x: [`${petal.x}vw`, `${petal.x + (Math.random() * 20 - 10)}vw`],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill={petal.color}
          >
            <ellipse cx="12" cy="8" rx="5" ry="8" transform="rotate(-15 12 12)" />
            <ellipse cx="12" cy="8" rx="4" ry="7" transform="rotate(20 12 12)" opacity="0.7" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
