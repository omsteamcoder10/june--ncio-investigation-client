"use client";
import { useState } from "react";
import { Search, CheckCircle, XCircle, Clock, User, CreditCard } from "lucide-react";
import axios from "axios";

export default function MemberPortalPage() {
  const [member, setMember] = useState<any>(null);
  const [mobile, setMobile] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!day || !month || !year) { setError("Please enter date of birth"); return; }
    setLoading(true);
    setError("");
    setMember(null);
    try {
      const dob = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/members/search/public`, {
        params: { mobile, dob },
      });
      setMember(res.data);
    } catch {
      setError("No member found. Please check your mobile number and date of birth.");
    } finally {
      setLoading(false);
    }
  };

  const days = Array.from({ length: 31 }, (_, i) => String(i + 1));
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const years = Array.from({ length: 80 }, (_, i) => String(new Date().getFullYear() - i));

  const isState = member?.membership_type?.toUpperCase() === "STATE";
  const isZonal = member?.membership_type?.toUpperCase() === "ZONAL";
  const scheme = isState
    ? { primary: "#7f0000", secondary: "#b71c1c", label: "STATE", badge: "bg-red-100 text-red-800 border-red-300" }
    : isZonal
    ? { primary: "#4a148c", secondary: "#7b1fa2", label: "ZONAL", badge: "bg-purple-100 text-purple-800 border-purple-300" }
    : { primary: "#0d1b5e", secondary: "#1a237e", label: "DISTRICT", badge: "bg-blue-100 text-blue-800 border-blue-300" };

  const statusColor: any = {
    APPROVED: "bg-green-50 border-green-200 text-green-700",
    PENDING: "bg-orange-50 border-orange-200 text-orange-700",
    REJECTED: "bg-red-50 border-red-200 text-red-700",
  };

  const selectClass = "flex-1 px-2 sm:px-3 py-2.5 sm:py-3 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0d1b5e 0%, #1a237e 100%)" }} className="text-white py-10 sm:py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="w-12 sm:w-14 h-12 sm:h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border-2 border-white/30">
            <CreditCard size={22} className="sm:w-6 sm:h-6 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">NCIO Member Portal</h1>
          <p className="mt-1 sm:mt-2 text-blue-200 text-xs sm:text-sm">Login to view your membership & download your ID card</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:py-10 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">

          {/* Login Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-7">
            <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-0.5 sm:mb-1">Member Login</h2>
            <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">Enter your registered mobile & date of birth</p>

            <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="10-digit mobile number"
                  required
                  className="w-full border border-gray-200 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <div className="flex gap-1.5 sm:gap-2">
                  <select value={day} onChange={(e) => setDay(e.target.value)} required className={selectClass}>
                    <option value="">Day</option>
                    {days.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <select value={month} onChange={(e) => setMonth(e.target.value)} required className={selectClass}>
                    <option value="">Month</option>
                    {months.map((m, i) => <option key={m} value={String(i + 1)}>{m.slice(0, 3)}</option>)}
                  </select>
                  <select value={year} onChange={(e) => setYear(e.target.value)} required className={selectClass}>
                    <option value="">Year</option>
                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-2.5 sm:p-3 text-red-600 text-xs sm:text-sm flex items-center gap-2">
                  <XCircle size={14} className="sm:w-4 sm:h-4 flex-shrink-0" /> {error}
                </div>
              )}

              <button type="submit" disabled={loading}
                className="w-full bg-[#1a237e] hover:bg-[#0d1440] text-white py-2.5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
                {loading
                  ? <><div className="w-3.5 sm:w-4 h-3.5 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Searching...</>
                  : <><Search size={15} className="sm:w-4 sm:h-4" /> Login & View Membership</>}
              </button>
            </form>

            <div className="mt-4 sm:mt-6 bg-blue-50 border border-blue-100 rounded-xl p-3 sm:p-4">
              <p className="text-[10px] sm:text-xs font-semibold text-blue-900 mb-1 sm:mb-2">How to login:</p>
              <ul className="text-[10px] sm:text-xs text-blue-700 space-y-0.5 sm:space-y-1">
                <li>• Enter your registered mobile number</li>
                <li>• Enter your date of birth</li>
                <li>• Click Login to view your ID card</li>
              </ul>
            </div>
          </div>

          {/* Result */}
          {member ? (
            <div className="space-y-4 sm:space-y-5">

              {/* Status */}
              {/* <div className={`rounded-xl px-3 sm:px-5 py-2.5 sm:py-3 border text-xs sm:text-sm font-medium flex items-center gap-2 flex-wrap ${statusColor[member.status]}`}>
                {member.status === "APPROVED" && <CheckCircle size={15} className="sm:w-4 sm:h-4 flex-shrink-0" />}
                {member.status === "PENDING" && <Clock size={15} className="sm:w-4 sm:h-4 flex-shrink-0" />}
                {member.status === "REJECTED" && <XCircle size={15} className="sm:w-4 sm:h-4 flex-shrink-0" />}
                Status: <strong>{member.status}</strong>
                <span className={`ml-auto px-2 py-0.5 rounded-full text-[9px] sm:text-xs font-bold border ${scheme.badge}`}>
                  {scheme.label}
                </span>
              </div> */}

              {/* Member Info */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5">
                <h3 className="text-[10px] sm:text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 sm:mb-4 flex items-center gap-2">
                  <User size={13} className="sm:w-3.5 sm:h-3.5" /> Membership Details
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                  {[
                    ["Full Name", member.full_name],
                    ["Application ID", member.application_id],
                    ["District", member.district],
                    ["Zone", member.zone],
                    ["Membership Type", member.membership_type],
                    ["ID Card No", member.id_card_number || "-"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p className="text-gray-400 text-[10px] sm:text-xs mb-0.5">{label}</p>
                      <p className="text-gray-800 font-semibold text-xs sm:text-sm break-words">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ✅ ID Card Preview — HIDDEN */}
              {/* APPROVED: card preview & download button removed */}

              {member.status === "PENDING" && (
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 sm:p-5 text-center">
                  <Clock size={28} className="sm:w-8 sm:h-8 text-orange-400 mx-auto mb-2" />
                  <p className="font-semibold text-orange-700 text-sm sm:text-base">Application Under Review</p>
                  <p className="text-xs sm:text-sm text-orange-500 mt-1">You will receive an email once approved.</p>
                </div>
              )}

              {member.status === "REJECTED" && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-5 text-center">
                  <XCircle size={28} className="sm:w-8 sm:h-8 text-red-400 mx-auto mb-2" />
                  <p className="font-semibold text-red-700 text-sm sm:text-base">Application Rejected</p>
                  <p className="text-xs sm:text-sm text-red-500 mt-1">Please contact NCIO for more information.</p>
                </div>
              )}

            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10 text-center">
              <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <CreditCard size={24} className="sm:w-7 sm:h-7 text-gray-300" />
              </div>
              <p className="font-semibold text-gray-400 text-sm sm:text-base">Your membership details will appear here</p>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">Login with your mobile & DOB</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
