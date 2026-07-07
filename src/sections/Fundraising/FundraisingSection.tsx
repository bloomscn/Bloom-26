import { HandHeart } from "lucide-react";
import { fundraising } from "../../data/content";
import { donorCta, whatsappNumber } from "../../data/site";
import { ProgressMeter } from "../../components/fundraising/ProgressMeter";
import { Section, SectionIntro } from "../../components/common/Section";
import { Reveal } from "../../components/animations/Reveal";
import { AnchorButton } from "../../components/common/Button";
import { buildWhatsAppLink } from "../../utils/links";

export function FundraisingSection() {
  const donorLink = buildWhatsAppLink(whatsappNumber, donorCta.message);

  return (
    <Section id="fundraising" className="bg-bloom-cream">
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionIntro intro={fundraising.intro} className="mb-7" />
          <p className="mb-7 text-lg font-bold leading-8 text-bloom-ink/70">
            {fundraising.description}
          </p>
          <AnchorButton
            href={donorLink}
            target="_blank"
            rel="noreferrer"
            icon={HandHeart}
            className="bg-bloom-gold text-bloom-ink shadow-[0_18px_42px_rgba(255,210,31,0.24)] hover:bg-bloom-ink hover:text-white"
          >
            {donorCta.label}
          </AnchorButton>
        </div>
        <Reveal direction="scale">
          <ProgressMeter
            raised={fundraising.raised}
            goal={fundraising.goal}
            currency={fundraising.currency}
          />
        </Reveal>
      </div>
    </Section>
  );
}
