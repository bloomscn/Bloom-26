import { about } from "../../data/content";
import { Section, SectionIntro } from "../../components/common/Section";
import { Reveal } from "../../components/animations/Reveal";

export function AboutSection() {
  return (
    <Section id="about" className="bg-bloom-cream">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionIntro intro={about} />
        <Reveal className="grid gap-5">
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="rounded-[1.75rem] bg-white/72 p-6 text-lg leading-8 text-bloom-ink/72 shadow-[0_18px_60px_rgba(25,33,31,0.09)]"
            >
              {paragraph}
            </p>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
