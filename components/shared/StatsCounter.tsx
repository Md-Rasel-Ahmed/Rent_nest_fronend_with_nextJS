"use client";

import CountUp from "react-countup";

interface StatsCounterProps {
  end: number;
  suffix?: string;
  title: string;
}

export default function StatsCounter({
  end,
  suffix = "",
  title,
}: StatsCounterProps) {
  return (
    <div className="text-center">
      <h2 className="text-5xl font-bold text-primary">
        <CountUp
          end={end}
          duration={2.5}
          separator=","
          enableScrollSpy
          scrollSpyOnce
        />
        {suffix}
      </h2>

      <p className="mt-2 text-muted-foreground">
        {title}
      </p>
    </div>
  );
}