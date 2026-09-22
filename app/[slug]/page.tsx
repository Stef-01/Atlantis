import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PhotoHero from "@/components/PhotoHero";
import FundingMarquee from "@/components/FundingMarquee";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import { RenderBlock } from "@/components/Blocks";
import { pages, getPage } from "@/content/pages";
import { site } from "@/content/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = getPage(params.slug);
  if (!page) return {};
  return { title: page.metaTitle ?? page.title, description: page.sub };
}

export default function Page({ params }: { params: { slug: string } }) {
  const page = getPage(params.slug);
  if (!page) notFound();
  return (
    <>
      <PhotoHero
        image={page.image}
        eyebrow={page.eyebrow}
        title={page.headline}
        sub={page.sub}
        primary={{ label: "Get in touch", href: "/contact" }}
        secondary={{ label: "Book a service", href: site.booking }}
        chips={page.chips}
      />
      <FundingMarquee />
      {page.blocks.map((b, i) => <RenderBlock key={i} b={b} />)}
      <FAQ />
      <CTA />
    </>
  );
}
