import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqIntro, faqItems } from "../../data/faq";
import { Section, SectionIntro } from "../../components/common/Section";
import { cn } from "../../utils/cn";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq" className="bg-bloom-mint">
      <SectionIntro intro={faqIntro} align="center" />
      <div className="mx-auto max-w-4xl">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={item.question} className="border-b border-bloom-ink/12">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-5 py-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-xl font-black text-bloom-ink">
                  {item.question}
                </span>
                <ChevronDown className={cn("size-5 shrink-0 transition", isOpen && "rotate-180")} />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300",
                  isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="max-w-3xl leading-8 text-bloom-ink/70">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
