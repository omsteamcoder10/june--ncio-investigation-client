// components/contact/ContactForm.tsx
// components/contact/ContactForm.tsx
"use client";
import { useState } from "react";
import { CheckCircle, Loader2, XCircle } from "lucide-react";
import axios from "axios";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, form);
      setLoading(false);
      setSubmitted(true);
    } catch (err: any) {
      setLoading(false);
      setError(
        err?.response?.data?.error || "Failed to send message. Please try again."
      );
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-sm text-center">
        <CheckCircle size={32} className="sm:w-9 sm:h-9 md:w-10 md:h-10 text-green-500 mx-auto mb-2 sm:mb-3" />
        <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1">Message Sent!</h3>
        <p className="text-gray-500 text-xs sm:text-sm">
          Thank you! We'll get back to you within 1-2 days.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-[#1a237e] mb-2 sm:mb-3">
          Send a Message
        </h3>

        <div>
          <input
            type="text"
            required
            placeholder="Your Name *"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]/40 focus:border-[#1a237e] transition-colors"
          />
        </div>

        <div>
          <input
            type="tel"
            required
            placeholder="Phone Number *"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]/40 focus:border-[#1a237e] transition-colors"
          />
        </div>

        <div>
          <input
            type="email"
            required
            placeholder="Email Address *"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]/40 focus:border-[#1a237e] transition-colors"
          />
        </div>

        <div>
          <input
            type="text"
            required
            placeholder="Subject *"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]/40 focus:border-[#1a237e] transition-colors"
          />
        </div>

       <div>
          <textarea
            rows={3}
            required
            placeholder="Your Message *"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]/40 focus:border-[#1a237e] transition-colors resize-none"
          />
        </div>

        {error && (
          <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-red-600 text-xs sm:text-sm">
            <XCircle size={14} className="flex-shrink-0" /> {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#1a237e] hover:bg-[#0d1440] disabled:opacity-60 text-white font-semibold py-2 sm:py-2.5 md:py-3 rounded-lg text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 size={15} className="sm:w-4 sm:h-4 animate-spin" /> 
              <span>Sending...</span>
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}