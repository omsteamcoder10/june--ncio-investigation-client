// components/shared/PageBanner.tsx
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb { label: string; href?: string; }

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}

export default function PageBanner({ title, subtitle, breadcrumbs }: PageBannerProps) {
  return (
    <section className="bg-gradient-to-br from-[#1a237e] to-[#0d1440] py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full border-2 border-white translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full border border-white -translate-x-1/3 translate-y-1/3" />
      </div>
      <div className="max-w-7xl mx-auto px-4 relative">
        <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-2">{title}</h1>
        {subtitle && <p className="text-white/70 text-lg mb-3">{subtitle}</p>}
        {breadcrumbs && (
          <div className="flex flex-wrap items-center gap-1 text-sm text-white/50 mt-3">
            {breadcrumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronRight size={14} />}
                {c.href
                  ? <Link href={c.href} className="hover:text-[#f9a825] transition-colors">{c.label}</Link>
                  : <span className="text-[#f9a825]">{c.label}</span>
                }
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}