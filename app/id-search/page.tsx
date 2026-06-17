"use client";
import { useState } from "react";
import { Search, CheckCircle, XCircle, Clock, MapPin, User, CreditCard } from "lucide-react";
import axios from "axios";

export default function IDSearchPage() {
  const [mobile, setMobile] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!day || !month || !year) {
      setError("Please enter a valid date of birth");
      return;
    }
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const formattedDob = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
      const res = await axios.get("http://localhost:5000/api/members/search/public", {
        params: { mobile, dob: formattedDob },
      });
      setResult(res.data);
    } catch (err) {
      setError("No member found with this Mobile & Date of Birth.");
    } finally {
      setLoading(false);
    }
  };

  const statusIcon: any = {
    APPROVED: <CheckCircle className="text-green-500" size={20} />,
    PENDING: <Clock className="text-orange-500" size={20} />,
    REJECTED: <XCircle className="text-red-500" size={20} />,
  };

  const statusColor: any = {
    APPROVED: "bg-green-50 border-green-200 text-green-700",
    PENDING: "bg-orange-50 border-orange-200 text-orange-700",
    REJECTED: "bg-red-50 border-red-200 text-red-700",
  };

  const membershipColor: any = {
    DISTRICT: "bg-blue-100 text-blue-800 border-blue-300",
    STATE: "bg-red-100 text-red-800 border-red-300",
    ZONAL: "bg-purple-100 text-purple-800 border-purple-300",
  };

  const days = Array.from({ length: 31 }, (_, i) => String(i + 1));
  const months = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 80 }, (_, i) => String(currentYear - i));

  const selectClass = "flex-1 px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]/40 bg-white";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a237e] to-[#283593] flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">

        {/* Header */}
        <div className="text-center text-white">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search size={28} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold">NCIO Member Search</h1>
          <p className="text-blue-200 text-sm mt-1">Verify your membership status</p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-4">
          <form onSubmit={handleSearch} className="space-y-4">

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number *
              </label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                placeholder="Enter 10-digit mobile number"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]/40"
              />
            </div>

            {/* Date of Birth - 3 dropdowns */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth *
              </label>
              <div className="flex gap-2">
                <select
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  required
                  className={selectClass}
                >
                  <option value="">Day</option>
                  {days.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  required
                  className={selectClass}
                >
                  <option value="">Month</option>
                  {months.map((m) => (
                    <option key={m.value} value={m.value}>{m.label}</option>
                  ))}
                </select>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                  className={selectClass}
                >
                  <option value="">Year</option>
                  {years.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1a237e] hover:bg-[#0d1440] text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5" />
              ) : (
                <><Search size={18} /> Search Member</>
              )}
            </button>
          </form>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-600 text-sm flex items-center gap-2">
              <XCircle size={16} /> {error}
            </div>
          )}
        </div>

        {/* Result Card */}
        {result && (
          <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-4">
            <h2 className="text-base font-bold text-gray-800 border-b pb-2 flex items-center gap-2">
              <CheckCircle size={18} className="text-green-500" /> Member Found
            </h2>

            {/* Status */}
            <div className={`flex items-center gap-2 px-4 py-3 rounded-lg border text-sm font-medium ${statusColor[result.status]}`}>
              {statusIcon[result.status]}
              Status: <span className="font-bold">{result.status}</span>
            </div>

            {/* Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#1a237e]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <User size={16} className="text-[#1a237e]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Full Name</p>
                  <p className="font-semibold text-gray-800">{result.full_name}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#1a237e]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-[#1a237e]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Area</p>
                  <p className="font-semibold text-gray-800">
                    {result.district} District, {result.zone} Zone
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#1a237e]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CreditCard size={16} className="text-[#1a237e]" />
                </div>
                <div className="flex-1 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400">Application ID</p>
                    <p className="font-mono font-bold text-[#1a237e]">{result.application_id}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${membershipColor[result.membership_type]}`}>
                    {result.membership_type}
                  </span>
                </div>
              </div>

              {result.id_card_number && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                  <p className="text-xs text-green-600 mb-1">🎉 ID Card Number</p>
                  <p className="font-mono font-bold text-green-800 text-xl tracking-widest">
                    {result.id_card_number}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}