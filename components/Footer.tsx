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

// On phones every row is a 44pt tap target (Apple's minimum); from lg up the lists keep their tighter desktop rhythm.
const row = "flex min-h-11 items-center lg:min-h-0 lg:block";
const link = `${row} text-white/80 hover:text-white`;
const list = "grid lg:gap-3 text-[15px]";
const heading = "eyebrow text-white/48 mb-2 lg:mb-5";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-offwhite mt-3">
      <Rings tone="teal" size={1100} className="absolute -right-[18%] -bottom-[45%] w-[80vw] max-w-[1100px] h-auto" />
      <div className="relative max-w-wide mx-auto pad-x pt-20 md:pt-28 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr] gap-x-6 gap-y-12 lg:gap-8">
          <div className="col-span-2 lg:col-span-1">
            <span className="relative block h-14 w-14 mb-8">
              <Image src="/images/logo-emblem.png" alt="Atlantis Recovery Centre" fill sizes="56px" className="object-contain" />
            </span>
            <p className="display text-[40px] md:text-[56px] leading-[1] max-w-[12ch]">Recovery is a team sport.</p>
            <div className="mt-10 grid lg:gap-2 text-[15px] text-white/72">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className={`${row} hover:text-white`}>{site.phone}</a>
              <a href={`mailto:${site.email}`} className={`${row} hover:text-white`}>{site.email}</a>
              <p className={row}>Fax {site.fax}</p>
              <p className={row}>{site.address}</p>
            </div>
          </div>
          <div>
            <p className={heading}>Services</p>
            <ul className={list}>
              {services.map((s) => <li key={s.slug}><Link href={`/${s.slug}`} className={link}>{s.title}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className={heading}>What we treat</p>
            <ul className={list}>
              {conditions.map((c) => <li key={c.slug}><Link href={`/${c.slug}`} className={link}>{c.title}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className={heading}>ARC's technology</p>
            <ul className={list}>
              <li><Link href="/technology" className={link}>Overview</Link></li>
              {technology.map((t) => <li key={t.slug}><Link href={`/${t.slug}`} className={link}>{t.title}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className={heading}>Company</p>
            <ul className={list}>
              {company.map((c) => <li key={c.href}><Link href={c.href} className={link}>{c.label}</Link></li>)}
              <li><a href={site.booking} target="_blank" rel="noreferrer" className={link}>Book a service</a></li>
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
