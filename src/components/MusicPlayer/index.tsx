import { useState, type RefObject } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PauseOutlined, CaretRightOutlined, SoundOutlined } from '@ant-design/icons';

interface Props {
  audioRef: RefObject<HTMLAudioElement | null>;
}

export default function MusicPlayer({ audioRef }: Props) {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.4;
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={togglePlay}
        className="w-11 h-11 rounded-full bg-rose-gold text-white shadow-lg shadow-rose-gold/20 flex items-center justify-center hover:bg-rose-gold-dark transition-colors"
      >
        {isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}
      </motion.button>

      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute -top-1 -right-1"
          >
            <SoundOutlined style={{ fontSize: 10, color: '#b76e79' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
