import Reveal from "./Reveal";
import { testimonials } from "@/content/site";

// NOTE: placeholder quotes. Replace with real, consented patient testimonials before shipping (AHPRA).
export default function Testimonials() {
  return (
    <section className="section bg-white">
      <div className="container-l pad-x">
        <Reveal className="max-w-[46ch]">
          <p className="eyebrow mb-4">Patient stories</p>
          <h2 className="h2">What personalised care looks like.</h2>
          <p className="lead mt-4">Real stories from people who decided to take a closer look at their recovery, and what they found when they did.</p>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.headline} delay={i * 100} className="card p-8 md:p-10 flex flex-col justify-between min-h-[360px]">
              <div>
                <p className="display text-[26px] md:text-[30px] leading-[1.1]">{t.headline}</p>
                <p className="mt-6 text-[15px] leading-[1.6] text-black/64">{t.quote}</p>
              </div>
              <div className="mt-10 flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-black/[0.06]" aria-hidden />
                <div>
                  <p className="text-[15px] font-medium">{t.name}</p>
                  <p className="text-[13px] text-black/64">{t.meta}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
