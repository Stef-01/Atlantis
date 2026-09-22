"use client";

import { useState } from "react";
import { faqs } from "@/content/site";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section bg-grey">
      <div className="container-l pad-x grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20">
        <div>
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="h2">Frequently asked questions.</h2>
          <p className="lead mt-4">Find answers to common questions about referrals, wait times and funding.</p>
        </div>
        <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button className="w-full flex items-center justify-between gap-6 py-6 text-left" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
                  <span className="text-[17px] md:text-[18px] font-medium">{f.q}</span>
                  <span className={`h-9 w-9 shrink-0 rounded-full bg-black/[0.04] flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} aria-hidden>+</span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="pb-6 text-[15px] leading-[1.6] text-black/64 max-w-[60ch]">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
