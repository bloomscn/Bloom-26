import { CalendarDays } from "lucide-react";
import { countdown } from "../../data/content";
import { CountdownCards } from "../../components/countdown/CountdownCards";
import { Section } from "../../components/common/Section";
import { Reveal } from "../../components/animations/Reveal";

export function CountdownSection() {
  const formattedDate = new Intl.DateTimeFormat("en-LK", {
    dateStyle: "full",
    timeZone: "Asia/Colombo",
  }).format(new Date(countdown.eventDate));

  return (
    <Section id="countdown" className="bg-bloom-mint">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="mb-4 font-hand text-2xl text-bloom-clay">{countdown.label}</p>
          <h2 className="font-display text-4xl font-black leading-tight text-bloom-ink text-balance sm:text-5xl">
            {countdown.heading}
          </h2>
          <p className="mt-5 flex items-center gap-3 text-lg font-bold text-bloom-ink/70">
            <CalendarDays className="size-5 text-bloom-leaf" />
            {formattedDate}
          </p>
        </Reveal>
        <Reveal direction="right">
          <CountdownCards />
        </Reveal>
      </div>
    </Section>
  );
}
