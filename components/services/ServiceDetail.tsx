// components/services/ServiceDetail.tsx
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Handshake,
  ShieldCheck,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import type { Service } from "@/types";

export default function ServiceDetail({ service }: { service: Service }) {
  const activeIndex = SERVICES.findIndex((s) => s.id === service.id);
  const others = SERVICES.filter((s) => s.id !== service.id).slice(0, 4);
  const serviceNumber = String(activeIndex + 1).padStart(2, "0");
  const summary =
    service.shortDesc ||
    service.description[0]?.replace(/\.$/, "") ||
    "Citizen-first support from NCIO.";

  const process = [
    {
      title: "Listen",
      text: "We understand the concern, documents, timeline, and urgency.",
      icon: Handshake,
    },
    {
      title: "Guide",
      text: "Our volunteers explain the practical next steps clearly.",
      icon: FileCheck2,
    },
    {
      title: "Support",
      text: "We coordinate follow-ups until the service request moves forward.",
      icon: ShieldCheck,
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-[#f7f4ec] py-16 md:py-24">
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#06183d] to-transparent opacity-10" />
        <div className="absolute right-0 top-20 h-72 w-72 bg-[#d4af37]/20 blur-3xl" />
        <div className="absolute bottom-10 left-0 h-64 w-64 bg-[#06183d]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] border border-[#d4af37]/40 bg-[#06183d] shadow-[0_28px_70px_rgba(4,13,38,0.22)]">
              <Image
                src={service.photo}
                alt={service.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover brightness-[1.2] contrast-[1.08] saturate-[1.15]"
                style={{
                  filter: 'brightness(1.25) contrast(1.1) saturate(1.18)'
                }}
                priority
              />
              {/* Light reflection overlay for realistic look */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/15 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04122f] via-[#04122f]/20 to-transparent" />
              {/* Subtle vignette for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
            </div>

            <div className="flex flex-col justify-center rounded-[1.5rem] border border-[#d4af37]/35 bg-white p-6 shadow-[0_18px_55px_rgba(4,13,38,0.10)] md:p-8">
              <div className="mb-7 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#06183d] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f8e287]">
                  <CheckCircle2 size={15} />
                  Active Service
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#fff8df] px-4 py-2 text-sm font-semibold text-[#7a5c16]">
                  <Clock3 size={15} />
                  Volunteer coordinated
                </span>
              </div>

              <h3 className="font-display text-3xl font-bold leading-tight text-[#06183d] md:text-4xl">
                Premium support for {service.title.toLowerCase()}
              </h3>

              <div className="mt-6 space-y-4">
                {service.description.map((para, i) => (
                  <p
                    key={i}
                    className="border-l-2 border-[#d4af37]/40 pl-4 text-[15px] leading-7 text-slate-600"
                  >
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#06183d] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#06183d]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0a2459]"
                >
                  Contact Us
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/60 bg-gradient-to-r from-[#b8860b] via-[#fff0a3] to-[#b8860b] px-6 py-3 text-sm font-extrabold text-[#06183d] shadow-lg shadow-[#d4af37]/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Join NCIO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#06183d] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f8e287]">
              How NCIO handles requests
            </p>
            <h3 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
              Clear steps, respectful support, consistent follow-up.
            </h3>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#b8860b] via-[#fff1a8] to-[#b8860b] text-[#06183d]">
                      <Icon size={22} />
                    </span>
                    <span className="font-display text-4xl font-bold text-white/10">
                      0{index + 1}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white">{step.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#b8860b]">
                Explore more
              </p>
              <h3 className="mt-2 font-display text-3xl font-bold text-[#06183d]">
                Other Services
              </h3>
            </div>
            <Link
              href="/#services"
              className="inline-flex w-fit items-center gap-2 text-sm font-bold text-[#06183d] transition-colors hover:text-[#b8860b]"
            >
              View all services
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.id}`}
                className="group relative overflow-hidden rounded-[1.25rem] border border-[#d4af37]/30 bg-[#fbfaf7] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/70 hover:shadow-[0_18px_45px_rgba(4,13,38,0.12)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#b8860b] via-[#fff0a3] to-[#b8860b]" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#06183d] text-xl text-[#f8e287]">
                  {s.icon}
                </div>
                <h4 className="text-lg font-bold text-[#06183d] transition-colors group-hover:text-[#b8860b]">
                  {s.title}
                </h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {s.shortDesc ||
                    `${s.description?.[0]?.substring(0, 96) || ""}...`}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#b8860b]">
                  Open ID page
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}