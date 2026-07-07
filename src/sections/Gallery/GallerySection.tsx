import { galleryIntro, galleryItems } from "../../data/gallery";
import { GalleryCarousel } from "../../components/gallery/GalleryCarousel";
import { Section, SectionIntro } from "../../components/common/Section";
import { Reveal } from "../../components/animations/Reveal";

export function GallerySection() {
  const bloomItems = galleryItems.filter((item) => item.project === "bloom-25");

  return (
    <Section id="gallery" className="bg-bloom-sky/65">
      <SectionIntro intro={galleryIntro} align="center" />
      <Reveal>
        <GalleryCarousel items={bloomItems} />
      </Reveal>
    </Section>
  );
}
