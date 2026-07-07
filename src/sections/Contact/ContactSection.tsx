import { Mail, Phone, MessageCircle, Send, MapPin } from "lucide-react";
import { contactInfo, contactIntro } from "../../data/contact";
import { whatsappNumber, donorCta } from "../../data/site";
import { Section, SectionIntro } from "../../components/common/Section";
import { ContactForm } from "../../components/forms/ContactForm";
import { AnchorButton } from "../../components/common/Button";
import { Reveal } from "../../components/animations/Reveal";
import { buildWhatsAppLink } from "../../utils/links";

export function ContactSection() {
  const donorLink = buildWhatsAppLink(whatsappNumber, donorCta.message);
  const contactCards = [
    { label: "WhatsApp", value: contactInfo.whatsapp, icon: MessageCircle, href: donorLink },
    { label: "Email", value: contactInfo.email, icon: Mail, href: `mailto:${contactInfo.email}` },
    { label: "Phone", value: contactInfo.phone, icon: Phone, href: `tel:${contactInfo.phone}` },
    {
      label: "Location",
      value: contactInfo.location,
      icon: MapPin,
      href: contactInfo.locationLink,
    },
  ];

  return (
    <Section id="contact" className="bg-bloom-cream">
      <SectionIntro intro={contactIntro} align="center" className="mb-16" />

      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 items-start">
        <div>
          <div className="grid gap-4">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <a
                  key={card.label}
                  href={card.href}
                  target={
                    card.label === "WhatsApp" || card.label === "Location" ? "_blank" : undefined
                  }
                  rel={
                    card.label === "WhatsApp" || card.label === "Location"
                      ? "noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-[0_14px_50px_rgba(25,33,31,0.08)] transition hover:-translate-y-0.5"
                >
                  <span className="grid size-12 place-items-center rounded-2xl bg-bloom-gold text-bloom-ink">
                    <Icon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-black uppercase tracking-wide text-bloom-ink/52">
                      {card.label}
                    </span>
                    <span className="font-bold text-bloom-ink">{card.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
          <AnchorButton
            href={donorLink}
            target="_blank"
            rel="noreferrer"
            icon={Send}
            className="mt-8 w-full bg-bloom-gold text-bloom-ink shadow-[0_18px_42px_rgba(255,210,31,0.24)] hover:bg-bloom-ink hover:text-white"
          >
            {contactInfo.whatsappButtonLabel}
          </AnchorButton>
        </div>
        <Reveal direction="right" className="h-full">
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
