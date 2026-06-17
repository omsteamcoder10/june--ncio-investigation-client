// components/contact/ContactForm.tsx
"use client";
import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm text-center">
        <CheckCircle size={40} className="text-green-500 mx-auto mb-3" />
        <h3 className="text-lg font-bold text-gray-800 mb-1">Message Sent!</h3>
        <p className="text-gray-500 text-xs">
          Thank you! We'll get back to you within 1-2 days.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-3">
        <h3 className="font-display text-lg font-bold text-[#1a237e] mb-3">
          Send a Message
        </h3>

        <div>
          <input
            type="text"
            required
            placeholder="Your Name *"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]/40 focus:border-[#1a237e] transition-colors"
          />
        </div>

        <div>
          <input
            type="tel"
            required
            placeholder="Phone Number *"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]/40 focus:border-[#1a237e] transition-colors"
          />
        </div>

        <div>
          <input
            type="email"
            required
            placeholder="Email Address *"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]/40 focus:border-[#1a237e] transition-colors"
          />
        </div>

        <div>
          <input
            type="text"
            required
            placeholder="Subject *"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]/40 focus:border-[#1a237e] transition-colors"
          />
        </div>

        <div>
          <textarea
            rows={3}
            required
            placeholder="Your Message *"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]/40 focus:border-[#1a237e] transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#1a237e] hover:bg-[#0d1440] disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
        >
          {loading ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : "Send Message"}
        </button>
      </form>
    </div>
  );
}