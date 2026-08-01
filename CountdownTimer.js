"use client";

import { useEffect, useState } from "react";

function getTimeLeft(targetDate) {
  const diff = new Date(targetDate).getTime() - Date.now();
  const clamped = Math.max(diff, 0);
  return {
    total: clamped,
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

export default function CountdownTimer({ targetDate, label }) {
  const [time, setTime] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units = [
    { value: time.days, name: "days" },
    { value: time.hours, name: "hrs" },
    { value: time.minutes, name: "min" },
    { value: time.seconds, name: "sec" },
  ];

  if (time.total <= 0) {
    return (
      <div className="text-center">
        <p className="cursor-blink font-mono text-3xl text-amber">
          {label} is out
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
      {units.map((u) => (
        <div
          key={u.name}
          className="flex w-20 flex-col items-center rounded border border-line bg-panel py-6"
        >
          <span className="font-mono text-4xl text-amber">
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="mt-2 font-mono text-xs uppercase tracking-widest text-fog">
            {u.name}
          </span>
        </div>
      ))}
    </div>
  );
}
