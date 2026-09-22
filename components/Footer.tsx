import Link from "next/link";
import Image from "next/image";
import Rings from "./Rings";
import { site, services, conditions, technology } from "@/content/site";

const company = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Services", href: "/services" },
  { label: "Refer to us", href: "/refer" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-offwhite mt-3">
      <Rings tone="teal" size={1100} className="absolute -right-[18%] -bottom-[45%] w-[80vw] max-w-[1100px] h-auto" />
      <div className="relative max-w-wide mx-auto pad-x pt-20 md:pt-28 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr] gap-12 lg:gap-8">
          <div>
            <span className="relative block h-14 w-14 mb-8">
              <Image src="/images/logo-emblem.png" alt="Atlantis Recovery Centre" fill sizes="56px" className="object-contain" />
            </span>
            <p className="display text-[40px] md:text-[56px] leading-[1] max-w-[12ch]">Recovery is a team sport.</p>
            <div className="mt-10 grid gap-2 text-[15px] text-white/72">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">{site.phone}</a>
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
              <p>Fax {site.fax}</p>
              <p>{site.address}</p>
            </div>
          </div>
          <div>
            <p className="eyebrow text-white/48 mb-5">Services</p>
            <ul className="grid gap-3 text-[15px]">
              {services.map((s) => <li key={s.slug}><Link href={`/${s.slug}`} className="text-white/80 hover:text-white">{s.title}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-white/48 mb-5">What we treat</p>
            <ul className="grid gap-3 text-[15px]">
              {conditions.map((c) => <li key={c.slug}><Link href={`/${c.slug}`} className="text-white/80 hover:text-white">{c.title}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-white/48 mb-5">ARC's technology</p>
            <ul className="grid gap-3 text-[15px]">
              <li><Link href="/technology" className="text-white/80 hover:text-white">Overview</Link></li>
              {technology.map((t) => <li key={t.slug}><Link href={`/${t.slug}`} className="text-white/80 hover:text-white">{t.title}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-white/48 mb-5">Company</p>
            <ul className="grid gap-3 text-[15px]">
              {company.map((c) => <li key={c.href}><Link href={c.href} className="text-white/80 hover:text-white">{c.label}</Link></li>)}
              <li><a href={site.booking} target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">Book a service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-[13px] text-white/48">
          <p>© {new Date().getFullYear()} Atlantis Recovery Centre · Bundall, Gold Coast QLD</p>
          <p>Allied health services. Speak with your GP about whether treatment is appropriate for you.</p>
        </div>
      </div>
    </footer>
  );
}
