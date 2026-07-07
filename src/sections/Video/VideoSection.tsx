import { featuredVideos, videoIntro } from "../../data/video";
import { Section, SectionIntro } from "../../components/common/Section";
import { VideoEmbed } from "../../components/common/VideoEmbed";
import { Reveal } from "../../components/animations/Reveal";

export function VideoSection() {
  const [video] = featuredVideos;

  return (
    <Section id="video" className="bg-white">
      <SectionIntro intro={videoIntro} align="center" />
      <Reveal direction="scale" className="mx-auto max-w-5xl">
        <VideoEmbed video={video} />
      </Reveal>
    </Section>
  );
}
