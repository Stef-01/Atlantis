import type { Metadata } from "next";
import PhotoHero from "@/components/PhotoHero";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import { site, services } from "@/content/site";
import Link from "next/link";

export const metadata: Metadata = { title: "Contact", description: "Leave your details for a phone or face-to-face consult within 7 days." };

const details = [
  { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Fax", value: site.fax },
  { label: "Address", value: site.address, href: "https://maps.google.com/?q=1/25+Upton+St+Bundall+QLD+4217" },
];

export default function Contact() {
  return (
    <>
      <PhotoHero
        image="/images/underwater.jpg"
        eyebrow="Contact"
        title="Let's start the conversation."
        sub="Leave your details for a phone or face-to-face consult within 7 days. NDIS, private patients and referrals welcome."
        primary={{ label: "Book online", href: site.booking, external: true }}
        chips={["Low wait times", "Bundall, Gold Coast", "No referral required"]}
      />

      <section className="section">
        <div className="container-l pad-x grid lg:grid-cols-2 gap-12 lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-4">Our commitment to you</p>
            <h2 className="h2 max-w-[20ch]">Timely, effective and compassionate care from the moment you reach out.</h2>
            <p className="lead mt-5 max-w-[48ch]">We understand that when you are in pain, waiting for care is simply not an option. That's why Atlantis Recovery Centre is committed to servicing new clients quickly.</p>
            <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {details.map((d) => (
                <div key={d.label} className="hairline pt-5">
                  <p className="eyebrow mb-2">{d.label}</p>
                  {d.href ? <a href={d.href} className="inline-flex min-h-11 lg:min-h-0 items-center text-[17px] font-medium hover:opacity-70">{d.value}</a> : <p className="flex min-h-11 lg:min-h-0 items-center text-[17px] font-medium">{d.value}</p>}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="card p-7 md:p-10">
            <h3 className="h3">Request a callback</h3>
            <p className="text-[15px] text-black/64 mt-2">We'll be in touch within one business day.</p>
            <form className="mt-8 grid gap-4" action={`mailto:${site.email}`} method="post" encType="text/plain">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" autoComplete="name" />
                <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <Field label="Email" name="email" type="email" autoComplete="email" />
              <label className="grid gap-2 text-[14px] font-medium">
                Service
                <select name="service" className="h-12 w-full min-w-0 rounded-sm border border-black/10 bg-white px-4 text-[16px] font-normal">
                  {services.map((s) => <option key={s.slug}>{s.title}</option>)}
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="grid gap-2 text-[14px] font-medium">
                How can we help?
                <textarea name="message" rows={4} className="w-full min-w-0 rounded-sm border border-black/10 bg-white px-4 py-3 text-[16px] font-normal" />
              </label>
              <button type="submit" className="btn-black mt-2 w-full sm:w-auto">Send request</button>
              <p className="text-[13px] text-black/64">By submitting you agree to be contacted by Atlantis RC about your enquiry.</p>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="p-3">
        <div className="bg-offwhite rounded-hero px-6 py-16 md:py-20 text-center">
          <p className="eyebrow mb-4">Referrers</p>
          <h2 className="h2 max-w-[22ch] mx-auto">Accepting referrals now, with low wait times.</h2>
          <Link href="/refer" className="btn-black mt-8">Refer a patient</Link>
        </div>
      </section>

      <FAQ />
    </>
  );
}

// 16px text: iOS Safari zooms the page into any field smaller than that when it is tapped.
function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <label className="grid gap-2 text-[14px] font-medium">
      {label}
      <input name={name} type={type} autoComplete={autoComplete} required className="h-12 w-full min-w-0 rounded-sm border border-black/10 bg-white px-4 text-[16px] font-normal" />
    </label>
  );
}
