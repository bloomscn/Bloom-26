import { Building2, Handshake } from "lucide-react";
import { partnerCtaBlock, partnerTiers, partnersIntro } from "../../data/partners";
import { partnerCta, whatsappNumber } from "../../data/site";
import { Section, SectionIntro } from "../../components/common/Section";
import { Reveal } from "../../components/animations/Reveal";
import { AnchorButton } from "../../components/common/Button";
import { buildWhatsAppLink } from "../../utils/links";
import { scrollToSection } from "../../utils/scroll";

export function PartnersSection() {
  const partnerLink = buildWhatsAppLink(whatsappNumber, partnerCta.message);

  const handleScrollToCta = () => {
    scrollToSection("#partner-cta");
  };

  return (
    <Section id="partners" className="bg-bloom-cream">
      <SectionIntro intro={partnersIntro} align="center" />
      <div className="grid gap-5 lg:grid-cols-5">
        {partnerTiers.map((tier, index) => {
          // Check if there are any active partners (not "Partner Pending")
          const activePartners = tier.partners.filter((p) => p.name !== "Partner Pending");

          return (
            <Reveal key={tier.title} delay={index * 0.06}>
              <article className="flex h-full flex-col justify-between rounded-[1.75rem] bg-white p-5 shadow-[0_18px_60px_rgba(25,33,31,0.09)]">
                <div className="text-center">
                  <h3 className="font-display text-xl font-black text-bloom-ink">{tier.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-bloom-ink/62">{tier.description}</p>
                </div>
                <div className="mt-5">
                  {activePartners.length > 0 ? (
                    <div className="grid gap-3">
                      {activePartners.map((partner) => (
                        <div
                          key={`${tier.title}-${partner.logoText}`}
                          className="grid min-h-20 place-items-center rounded-2xl border border-bloom-ink/8 bg-bloom-cream/70 p-4 text-center"
                        >
                          <span className="font-display text-lg font-black text-bloom-forest">
                            {partner.logoText}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Display exactly ONE call-to-action button per tier instead of pending boxes */
                    <button
                      type="button"
                      onClick={handleScrollToCta}
                      className="group w-full grid min-h-20 place-items-center rounded-2xl border-2 border-dashed border-bloom-ink/15 bg-bloom-cream/25 hover:bg-bloom-gold/10 hover:border-bloom-gold hover:shadow-sm p-4 text-center transition duration-200 focus:outline-none focus:ring-2 focus:ring-bloom-gold/40"
                    >
                      <span className="font-display text-xs font-bold uppercase tracking-wider text-bloom-ink/54 group-hover:text-bloom-ink transition duration-200">
                        Become a Partner
                      </span>
                    </button>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <div id="partner-cta" className="mt-10">
        <Reveal className="rounded-4xl bg-bloom-forest p-8 text-white sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 grid size-12 place-items-center rounded-2xl bg-bloom-gold text-bloom-ink">
                <Building2 className="size-6" />
              </div>
              <h3 className="font-display text-3xl font-black">{partnerCtaBlock.heading}</h3>
              <p className="mt-3 leading-7 text-white/74">{partnerCtaBlock.description}</p>
            </div>
            <AnchorButton
              href={partnerLink}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              icon={Handshake}
              className="border-white/25 bg-white text-bloom-ink hover:bg-bloom-gold"
            >
              {partnerCta.label}
            </AnchorButton>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
