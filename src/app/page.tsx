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
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-280 overflow-hidden">
              <div className="absolute top-22 left-[max(0px,calc(50%-32rem))] size-180 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(110_139_255/0.35),transparent_70%)]" />
              <div className="absolute top-200 right-[max(0px,calc(50%-30rem))] size-120 translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(90_214_192/0.15),transparent_70%)]" />
          </div>

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
