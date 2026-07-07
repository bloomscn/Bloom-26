import { useEffect, useState } from "react";

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

function getCountdown(targetDate: string): CountdownTime {
  const target = new Date(targetDate).getTime();
  const now = Date.now();
  const distance = target - now;
  const safeDistance = Math.max(distance, 0);

  return {
    days: Math.floor(safeDistance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((safeDistance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((safeDistance / (1000 * 60)) % 60),
    seconds: Math.floor((safeDistance / 1000) % 60),
    isPast: distance <= 0,
  };
}

export function useCountdown(targetDate: string) {
  const [time, setTime] = useState(() => getCountdown(targetDate));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(getCountdown(targetDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [targetDate]);

  return time;
}
