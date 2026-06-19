// components/ServiceCTA.tsx
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ServiceCTA() {
  return (
    <section className="section-padding bg-[#041A4A] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#D4AF37]/5 blur-3xl"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Need <span className="gold-gradient-text">Help?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact NCIO Today and Let Us Support You
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership#apply" className="btn-gold text-center">
              Apply Now
            </Link>
            <Link href="/contact" className="btn-outline-gold text-center">
              Contact Us
            </Link>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-4 text-sm text-gray-400">
            <span>📞 Emergency: +91 1800-123-4567</span>
            <span className="w-px h-6 bg-gray-600"></span>
            <span>📧 info@ncio.gov.in</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
