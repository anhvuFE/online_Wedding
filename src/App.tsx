import { useState, useRef } from 'react';
import { ConfigProvider } from 'antd';
import { AnimatePresence } from 'framer-motion';
import WelcomeScreen from './components/WelcomeScreen';
import FallingPetals from './components/FallingPetals';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import RSVP from './components/RSVP';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

const antdTheme = {
  token: {
    colorPrimary: '#b76e79',
    colorBgContainer: '#ffffff',
    colorText: '#3d3032',
    colorTextSecondary: '#6b5c5e',
    borderRadius: 12,
    fontFamily: "'Lato', 'Helvetica Neue', sans-serif",
  },
};

export default function App() {
  const [entered, setEntered] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEnter = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.4;
      audio.play().catch(() => {});
    }
    setEntered(true);
  };

  return (
    <ConfigProvider theme={antdTheme}>
      {/* Audio element lives here so MusicPlayer can control it */}
      <audio ref={audioRef} loop preload="auto" id="bg-music">
        <source src={`${import.meta.env.BASE_URL}music/beautiful-in-white.mp3`} type="audio/mpeg" />
      </audio>

      <AnimatePresence>
        {!entered && <WelcomeScreen onEnter={handleEnter} />}
      </AnimatePresence>

      {entered && (
        <div className="min-h-screen bg-cream">
          <FallingPetals />
          <Navigation />
          <Hero />
          <Countdown />
          <EventDetails />
          <RSVP />
          <Footer />
          <MusicPlayer audioRef={audioRef} />
        </div>
      )}
    </ConfigProvider>
  );
}
