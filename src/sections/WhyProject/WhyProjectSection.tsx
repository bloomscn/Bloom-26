import { whyBloom } from "../../data/content";
import { Section, SectionIntro } from "../../components/common/Section";
import { Reveal } from "../../components/animations/Reveal";

export function WhyProjectSection() {
  return (
    <Section id="why-bloom" className="bg-white">
      <SectionIntro intro={whyBloom} align="center" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whyBloom.points.map((point, index) => {
          const Icon = point.icon;

          return (
            <Reveal key={point.title} delay={index * 0.08}>
              <article className="h-full rounded-[1.75rem] border border-bloom-ink/8 bg-bloom-cream/75 p-6 shadow-[0_18px_60px_rgba(25,33,31,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(25,33,31,0.13)]">
                <div className="mb-6 grid size-14 place-items-center rounded-2xl bg-bloom-gold text-bloom-ink">
                  <Icon className="size-7" />
                </div>
                <h3 className="font-display text-2xl font-black text-bloom-ink">{point.title}</h3>
                <p className="mt-3 leading-7 text-bloom-ink/67">{point.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
