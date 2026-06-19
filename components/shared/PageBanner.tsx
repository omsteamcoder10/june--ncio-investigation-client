// components/shared/PageBanner.tsx
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Breadcrumb {
  label: string
  href?: string
}

interface PageBannerProps {
  title: string
  subtitle?: string
  breadcrumbs: Breadcrumb[]
}

export default function PageBanner({ title, subtitle, breadcrumbs }: PageBannerProps) {
  return (
    <section className="relative flex min-h-[280px] items-center overflow-hidden bg-[#041A4A] pt-24 sm:min-h-[320px] lg:min-h-[360px]">
      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-3xl"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D4AF37]/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#D4AF37]/5 to-transparent"></div>
      </div>

      {/* Golden Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      <div className="absolute top-20 left-0 w-32 h-px bg-[#D4AF37]/30"></div>
      <div className="absolute bottom-20 right-0 w-32 h-px bg-[#D4AF37]/30"></div>
      
      {/* Decorative Circles */}
      <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-[#D4AF37]/50"></div>
      <div className="absolute bottom-10 left-10 w-3 h-3 rounded-full bg-[#D4AF37]/30"></div>
      
      <div className="container-custom relative z-10 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            <span className="gold-gradient-text">{title}</span>
          </h1>
          {subtitle && (
            <p className="mb-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              {subtitle}
            </p>
          )}
          
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300">
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#D4AF37] transition">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#D4AF37]">{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <span className="text-[#D4AF37]">&gt;</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
