import IntroSection from "@/components/IntroSection";
import ResumeSummary from "@/components/ResumeSummary";
import Projects from "@/components/Projects";
import Experiences from "@/components/Experiences";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
      <>
          <IntroSection />

          <Reveal>
              <ResumeSummary />
          </Reveal>

          <Projects />

          <Reveal>
              <Experiences />
          </Reveal>

          <Reveal>
              <Contact />
          </Reveal>

          <Reveal>
              <Footer />
          </Reveal>
      </>
  );
}
