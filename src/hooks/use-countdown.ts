import { useState, useEffect } from 'react';

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function useCountdown(targetDate: string): CountdownTime {
  const [time, setTime] = useState<CountdownTime>(calculate(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculate(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return time;
}

function calculate(targetDate: string): CountdownTime {
  const diff = Math.max(0, new Date(targetDate).getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}
