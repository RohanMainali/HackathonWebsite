"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const interval = setInterval(callback, 1000);
  return () => clearInterval(interval);
}

export function CountdownTimer({ targetDate }: { targetDate: string }) {
  const now = useSyncExternalStore(
    subscribe,
    () => Date.now(),
    () => null
  );

  const target = new Date(targetDate).getTime();
  const difference = now !== null ? target - now : 0;
  const isExpired = difference <= 0 && now !== null;

  const days = Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = Math.max(0, Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = Math.max(0, Math.floor((difference % (1000 * 60)) / 1000));

  const pad = (num: number) => String(num).padStart(2, "0");
  const isClient = now !== null;

  return (
    <div className="countdown-block">
      <div className="countdown-block__meta">
        <p className="eyebrow">
          <span>01 /</span> LAUNCH COUNTDOWN · DECEMBER 11, 2026
        </p>
        <p className="countdown-block__status">
          {isExpired
            ? "Team registration & event brief are now live."
            : "Team registration and challenge brief release in:"}
        </p>
      </div>

      <div className="countdown-block__grid">
        <div className="countdown-block__cell">
          <span className="countdown-block__number">{isClient ? pad(days) : "--"}</span>
          <span className="countdown-block__label">Days</span>
        </div>
        <div className="countdown-block__cell">
          <span className="countdown-block__number">{isClient ? pad(hours) : "--"}</span>
          <span className="countdown-block__label">Hours</span>
        </div>
        <div className="countdown-block__cell">
          <span className="countdown-block__number">{isClient ? pad(minutes) : "--"}</span>
          <span className="countdown-block__label">Minutes</span>
        </div>
        <div className="countdown-block__cell">
          <span className="countdown-block__number">{isClient ? pad(seconds) : "--"}</span>
          <span className="countdown-block__label">Seconds</span>
        </div>
      </div>
    </div>
  );
}



