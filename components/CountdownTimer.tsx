"use client";

import React, { useEffect, useState } from "react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 54,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex gap-4 justify-center items-center">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold font-mono bg-zinc-900 border border-zinc-800 px-3 py-2 rounded-lg">{format(timeLeft.hours)}</span>
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1">Hours</span>
      </div>
      <span className="text-2xl font-bold text-zinc-700">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold font-mono bg-zinc-900 border border-zinc-800 px-3 py-2 rounded-lg">{format(timeLeft.minutes)}</span>
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1">Mins</span>
      </div>
      <span className="text-2xl font-bold text-zinc-700">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold font-mono bg-zinc-900 border border-zinc-800 px-3 py-2 rounded-lg">{format(timeLeft.seconds)}</span>
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1">Secs</span>
      </div>
    </div>
  );
}
