import { countdown } from "../../data/content";
import { useCountdown } from "../../hooks/useCountdown";

export function CountdownCards() {
  const time = useCountdown(countdown.eventDate);
  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="rounded-3xl border border-white/70 bg-white/78 p-5 text-center shadow-[0_18px_50px_rgba(25,33,31,0.1)] backdrop-blur"
        >
          <p className="font-display text-4xl font-black text-bloom-forest sm:text-5xl">
            {String(unit.value).padStart(2, "0")}
          </p>
          <p className="mt-2 text-sm font-black uppercase tracking-wide text-bloom-ink/55">
            {unit.label}
          </p>
        </div>
      ))}
    </div>
  );
}
