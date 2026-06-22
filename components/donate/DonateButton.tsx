"use client";
import { useState } from "react";
import { Heart, Loader2 } from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const AMOUNTS = [100, 500, 1000, 2500, 5000];

export default function DonateButton() {
  const [amount, setAmount] = useState(500);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const finalAmount = custom ? parseInt(custom) : amount;

  const loadRazorpay = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) { resolve(true); return; }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleDonate = async () => {
    if (!name || !email || !phone) {
      alert("Please fill your name, email and phone!");
      return;
    }
    if (finalAmount < 1) {
      alert("Please enter a valid amount!");
      return;
    }

    setLoading(true);
    const loaded = await loadRazorpay();
    if (!loaded) {
      alert("Razorpay failed to load. Check your internet connection.");
      setLoading(false);
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: finalAmount * 100,
      currency: "INR",
      name: "NCIO",
      description: "Donation to NCIO",
      image: "logo/1.png",
      handler: async function (response: any) {
        try {
          await fetch('http://localhost:5000/api/donations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              paymentId: response.razorpay_payment_id,
              donorName: name,
              email: email,
              phone: phone,
              amount: finalAmount,
            }),
          });
          alert(`✅ Thank you ${name}! Payment successful!\nPayment ID: ${response.razorpay_payment_id}`);
        } catch (err) {
          console.error('Save donation error:', err);
          alert(`✅ Thank you ${name}! Payment successful!`);
        }
      },
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
      notes: {
        donor_name: name,
      },
      theme: {
        color: "#1a237e",
      },
      modal: {
        ondismiss: () => {
          setLoading(false);
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (response: any) {
      alert("Payment failed: " + response.error.description);
      setLoading(false);
    });
    rzp.open();
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5 md:p-6 mt-4 sm:mt-6">
      <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 flex items-center gap-2">
        <Heart size={16} className="sm:w-[18px] sm:h-[18px] text-red-500" /> Make a Donation
      </h3>
      <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-5">100% secure payment via Razorpay</p>

      {/* Amount Selection */}
      <div className="mb-3 sm:mb-4">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Select Amount (₹)</label>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
          {AMOUNTS.map((a) => (
            <button
              key={a}
              onClick={() => { setAmount(a); setCustom(""); }}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold border transition-all ${
                amount === a && !custom
                  ? "bg-[#1a237e] text-white border-[#1a237e]"
                  : "bg-white text-gray-700 border-gray-200 hover:border-[#1a237e]"
              }`}
            >
              ₹{a.toLocaleString()}
            </button>
          ))}
        </div>
        <input
          type="number"
          placeholder="Enter custom amount"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]/30"
        />
      </div>

      {/* Donor Info */}
      <div className="space-y-2.5 sm:space-y-3 mb-4 sm:mb-5">
        <input
          type="text"
          placeholder="Your Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]/30"
        />
        <input
          type="email"
          placeholder="Email Address *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]/30"
        />
        <input
          type="tel"
          placeholder="Phone Number *"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
          className="w-full border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]/30"
        />
      </div>

      {/* Donate Button */}
      <button
        onClick={handleDonate}
        disabled={loading}
        className="w-full bg-[#1a237e] hover:bg-[#0d1440] text-white py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-colors disabled:opacity-60 flex items-center justify-center gap-2 shadow-md"
      >
        {loading
          ? <><Loader2 size={14} className="sm:w-4 sm:h-4 animate-spin" /> Processing...</>
          : <><Heart size={14} className="sm:w-4 sm:h-4" /> Donate ₹{finalAmount.toLocaleString()}</>}
      </button>

      <p className="text-[10px] sm:text-xs text-gray-400 text-center mt-2 sm:mt-3">
        🔒 Secured by Razorpay · UPI · Cards · NetBanking supported
      </p>
    </div>
  );
}