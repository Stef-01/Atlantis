import Link from "next/link";
import PhotoHero from "@/components/PhotoHero";
import FundingMarquee from "@/components/FundingMarquee";
import PillMarquee from "@/components/PillMarquee";
import ServiceCards from "@/components/ServiceCards";
import StatsSticky from "@/components/StatsSticky";
import StackingCards from "@/components/StackingCards";
import TextureBand from "@/components/TextureBand";
import TeamSlider from "@/components/TeamSlider";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { site } from "@/content/site";
import { technologyCards } from "@/content/pages";
import { CardsBlock } from "@/components/Blocks";

const steps = [
  {
    step: "01 · Get started",
    title: "Reach out and share your goals.",
    body: "Tell us what's brought you in: pain, injury, mental health or performance. We match you with the right discipline, or a combined team. No referral required.",
    points: ["Phone or face-to-face consult within 7 days", "Medicare, NDIS, DVA, Workcover and private health", "No referral required to get started"],
    image: "/images/team-sport.jpg",
  },
  {
    step: "02 · Assess",
    title: "Meet your practitioner.",
    body: "A thorough assessment of your history, goals and current function, with complete body scans for precise, objective baselines.",
    points: ["Objective baselines from advanced technology", "A plan tailored to your condition, not a generic program", "Combined care where it helps"],
    image: "/images/chronic-pain.jpg",
  },
  {
    step: "03 · Treat",
    title: "Begin your program.",
    body: "Activity-based psychotherapy, Aquatread hydrotherapy, infrared sauna, REAXING lights and treadmill. Sessions coordinated across disciplines.",
    points: ["Australia's only Aquatread underwater treadmill", "Cognitive and proprioceptive training", "Movement-based psychology"],
    image: "/images/tech-17.jpg",
  },
  {
    step: "04 · Track",
    title: "Progress, measured.",
    body: "Outcome-driven tracking so you can see real progress over time, with milestone updates and plans adjusted as your results come in.",
    points: ["Milestone body scans", "Plans adjusted as results come in", "Clear next steps at every stage"],
    image: "/images/tech-18.jpg",
  },
];

export default function Home() {
  return (
    <>
      <PhotoHero
        tall
        image="/images/home-hero.jpg"
        eyebrow="Bundall, Gold Coast"
        title="The new home for your recovery."
        sub="Psychology, physiotherapy, exercise physiology and hydrotherapy, in one purpose-built centre."
        primary={{ label: "Get in touch", href: "/contact" }}
        secondary={{ label: "Explore services", href: "/services" }}
        chips={["Whole-person care", "Outcome tracked", "Advanced technology"]}
      />

      <FundingMarquee />

      {/* Services */}
      <section className="p-3">
        <div className="bg-ink text-white rounded-hero section pt-16 md:pt-20 overflow-hidden">
          <div className="container-l pad-x">
            <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-[44ch]">
                <h2 className="h2 text-white">Care built around you, not a single discipline.</h2>
                <p className="lead mt-4 text-white/72">From hands-on physiotherapy to movement-based psychology, we connect you to the right care under one roof in Bundall.</p>
              </div>
              <Link href="/services" className="btn-white shrink-0">Get started today</Link>
            </Reveal>
            <div className="mt-12"><ServiceCards /></div>
          </div>
          <div className="mt-16 md:mt-20"><PillMarquee dark /></div>
        </div>
      </section>

      <StatsSticky />

      {/* How it works: sticky stacking cards over the stats section */}
      <section className="relative z-10 bg-white section rounded-t-hero">
        <div className="container-l pad-x">
          <Reveal className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-12">
            <div className="max-w-[40ch]">
              <p className="eyebrow mb-4">How it works</p>
              <h2 className="h2">This is how integrated recovery works.</h2>
              <p className="lead mt-4">Care grounded in evidence, advanced technology and one coordinated team, tailored to your goals.</p>
            </div>
            <Link href="/contact" className="btn-black">Start your journey</Link>
          </Reveal>
          <StackingCards cards={steps} />
        </div>
      </section>

      <TextureBand image="/images/physiotherapy.jpg" quote="When you're in pain, waiting for care is not an option." attribution="Our commitment to you" />

      <div className="relative z-10 bg-white rounded-t-hero">
        {/* Patient / referrer split */}
        <section className="section">
          <div className="container-l pad-x grid md:grid-cols-2 gap-4">
            <Reveal className="card p-8 md:p-12 min-h-[380px] flex flex-col justify-between">
              <div>
                <p className="eyebrow mb-5">For patients</p>
                <h3 className="h2">I am a patient.</h3>
                <p className="lead mt-4 max-w-[40ch]">Talk to us about how you can take advantage of psychology, physiotherapy, exercise physiology and hydrotherapy.</p>
              </div>
              <div className="mt-10 flex gap-3 flex-wrap">
                <Link href="/contact" className="btn-black">Get in touch</Link>
                <a href={site.booking} target="_blank" rel="noreferrer" className="btn-outline">Book online</a>
              </div>
            </Reveal>
            <Reveal delay={100} className="bg-black text-offwhite rounded-card p-8 md:p-12 min-h-[380px] flex flex-col justify-between">
              <div className="relative">
                <p className="eyebrow text-white/48 mb-5">For referrers</p>
                <h3 className="h2">I am a doctor.</h3>
                <p className="mt-4 max-w-[40ch] text-white/72 text-[17px] md:text-[18px] leading-[1.5]">We are currently taking on new referrals across our full range of allied health disciplines, with low wait times.</p>
              </div>
              <div className="mt-10 relative"><Link href="/refer" className="btn-white">Refer a patient</Link></div>
            </Reveal>
          </div>
        </section>

        <CardsBlock b={technologyCards} />
        <TeamSlider />
        <FAQ />
        <CTA />
      </div>
    </>
  );
}
