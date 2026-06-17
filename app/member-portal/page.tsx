"use client";
import { useState, useRef } from "react";
import { Search, Download, CheckCircle, XCircle, Clock, User, CreditCard } from "lucide-react";
import axios from "axios";

export default function MemberPortalPage() {
  const [member, setMember] = useState<any>(null);
  const [mobile, setMobile] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!day || !month || !year) { setError("Please enter date of birth"); return; }
    setLoading(true);
    setError("");
    setMember(null);
    try {
      const dob = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
      const res = await axios.get("http://localhost:5000/api/members/search/public", {
        params: { mobile, dob },
      });
      setMember(res.data);
    } catch {
      setError("No member found. Please check your mobile number and date of birth.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!member || member.status !== "APPROVED") return;
    
    setDownloading(true);
    try {
      // Dynamically import required libraries
      const html2canvas = (await import("html2canvas")).default;
      const jsPDF = (await import("jspdf")).default;
      
      const card = cardRef.current;
      if (!card) {
        throw new Error("Card element not found");
      }

      // Ensure all images are loaded before capturing
      const images = card.querySelectorAll('img');
      await Promise.all(
        Array.from(images).map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );

      // Capture the card with high quality
      const canvas = await html2canvas(card, {
        scale: 4,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
        allowTaint: true,
        width: card.scrollWidth,
        height: card.scrollHeight,
      });

      // Create PDF with exact CR80 card size (85.6mm x 54mm)
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [85.6, 54],
      });

      // Add image to PDF
      const imgData = canvas.toDataURL("image/png", 1.0);
      pdf.addImage(imgData, "PNG", 0, 0, 85.6, 54);

      // Generate PDF as blob and download
      const pdfBlob = pdf.output("blob");
      const url = URL.createObjectURL(pdfBlob);
      
      // Create download link with proper filename
      const link = document.createElement("a");
      link.href = url;
      link.download = `NCIO_ID_${member.application_id || member.id_card_number || "CARD"}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Cleanup
      setTimeout(() => URL.revokeObjectURL(url), 100);
      
    } catch (error: any) {
      console.error("Download error:", error);
      alert("Failed to download ID card. Please try again.");
    } finally {
      setDownloading(false);
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

  const approvedDate = member?.approved_at
    ? new Date(member.approved_at).toLocaleDateString("en-IN") : "-";

  const selectClass = "flex-1 px-3 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0d1b5e 0%, #1a237e 100%)" }} className="text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white/30">
            <CreditCard size={26} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">NCIO Member Portal</h1>
          <p className="mt-2 text-blue-200 text-sm">Login to view your membership & download your ID card</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Login Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7">
            <h2 className="text-lg font-bold text-gray-800 mb-1">Member Login</h2>
            <p className="text-sm text-gray-400 mb-6">Enter your registered mobile & date of birth</p>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="10-digit mobile number"
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <div className="flex gap-2">
                  <select value={day} onChange={(e) => setDay(e.target.value)} required className={selectClass}>
                    <option value="">Day</option>
                    {days.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <select value={month} onChange={(e) => setMonth(e.target.value)} required className={selectClass}>
                    <option value="">Month</option>
                    {months.map((m, i) => <option key={m} value={String(i + 1)}>{m}</option>)}
                  </select>
                  <select value={year} onChange={(e) => setYear(e.target.value)} required className={selectClass}>
                    <option value="">Year</option>
                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-600 text-sm flex items-center gap-2">
                  <XCircle size={15} /> {error}
                </div>
              )}

              <button type="submit" disabled={loading}
                className="w-full bg-[#1a237e] hover:bg-[#0d1440] text-white py-3 rounded-lg font-semibold text-sm transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
                {loading
                  ? <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Searching...</>
                  : <><Search size={16} /> Login & View Membership</>}
              </button>
            </form>

            <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="text-xs font-semibold text-blue-900 mb-2">How to login:</p>
              <ul className="text-xs text-blue-700 space-y-1">
                <li>• Enter your registered mobile number</li>
                <li>• Enter your date of birth</li>
                <li>• Click Login to view your ID card</li>
              </ul>
            </div>
          </div>

          {/* Result */}
          {member ? (
            <div className="space-y-5">

              {/* Status */}
              <div className={`rounded-xl px-5 py-3 border text-sm font-medium flex items-center gap-2 ${statusColor[member.status]}`}>
                {member.status === "APPROVED" && <CheckCircle size={16} />}
                {member.status === "PENDING" && <Clock size={16} />}
                {member.status === "REJECTED" && <XCircle size={16} />}
                Status: <strong>{member.status}</strong>
                <span className={`ml-auto px-2 py-0.5 rounded-full text-xs font-bold border ${scheme.badge}`}>
                  {scheme.label}
                </span>
              </div>

              {/* Member Info */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <User size={14} /> Membership Details
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {[
                    ["Full Name", member.full_name],
                    ["Application ID", member.application_id],
                    ["District", member.district],
                    ["Zone", member.zone],
                    ["Membership Type", member.membership_type],
                    ["ID Card No", member.id_card_number || "-"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p className="text-gray-400 text-xs mb-0.5">{label}</p>
                      <p className="text-gray-800 font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ID Card */}
              {member.status === "APPROVED" && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">ID Card Preview</h3>

                  <div
                    ref={cardRef}
                    style={{
                      width: 342, height: 216,
                      borderRadius: 12, overflow: "hidden",
                      fontFamily: "Arial, sans-serif",
                      position: "relative",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                      backgroundColor: "#fff",
                      border: `3px solid ${scheme.primary}`,
                    }}
                  >
                    {/* Diagonal accent */}
                    <div style={{
                      position: "absolute", top: 0, right: 0,
                      width: 120, height: 216,
                      background: `linear-gradient(135deg, transparent 40%, ${scheme.primary}18 100%)`,
                      pointerEvents: "none",
                    }} />

                    {/* Header */}
                    <div style={{
                      background: `linear-gradient(135deg, ${scheme.primary} 0%, ${scheme.secondary} 100%)`,
                      padding: "10px 14px",
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{
                          width: 32, height: 32, borderRadius: "50%",
                          background: "rgba(255,255,255,0.2)",
                          border: "2px solid rgba(255,255,255,0.5)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: "white", fontWeight: 900, fontSize: 13,
                        }}>N</div>
                        <div>
                          <div style={{ color: "white", fontWeight: 900, fontSize: 13, letterSpacing: 1 }}>NCIO</div>
                          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 8, letterSpacing: 1 }}>OFFICIAL MEMBER</div>
                        </div>
                      </div>
                      <div style={{
                        background: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.4)",
                        borderRadius: 4, padding: "3px 8px",
                        color: "white", fontSize: 9, fontWeight: 700, letterSpacing: 1.5,
                      }}>{scheme.label}</div>
                    </div>

                    {/* Body */}
                    <div style={{ padding: "12px 14px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                      {/* Photo */}
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt="Member"
                          style={{
                            width: 70, height: 84, borderRadius: 6,
                            objectFit: "cover",
                            border: `3px solid ${scheme.primary}`,
                            flexShrink: 0,
                            display: "block",
                          }}
                          crossOrigin="anonymous"
                        />
                      ) : (
                        <div style={{
                          width: 70, height: 84, borderRadius: 6,
                          background: `linear-gradient(135deg, ${scheme.primary}22, ${scheme.secondary}44)`,
                          border: `3px solid ${scheme.primary}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0, flexDirection: "column", gap: 4,
                        }}>
                          <div style={{
                            width: 36, height: 36, borderRadius: "50%",
                            background: scheme.primary,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            color: "white", fontWeight: 900, fontSize: 16,
                          }}>
                            {member.full_name?.charAt(0).toUpperCase()}
                          </div>
                          <div style={{ fontSize: 8, color: scheme.primary, fontWeight: 600 }}>MEMBER</div>
                        </div>
                      )}

                      {/* Info */}
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 900, color: "#111827", fontSize: 13, marginBottom: 3 }}>
                          {member.full_name}
                        </div>
                        <div style={{ fontSize: 10, color: "#6b7280", marginBottom: 8 }}>
                          {member.membership_type} Member
                        </div>
                        {[
                          ["District", member.district],
                          ["Zone", member.zone],
                          ["Phone", mobile],
                        ].map(([label, value]) => (
                          <div key={label} style={{ display: "flex", gap: 4, fontSize: 9.5, marginBottom: 3 }}>
                            <span style={{ color: "#9ca3af", minWidth: 40 }}>{label}:</span>
                            <span style={{ color: "#1f2937", fontWeight: 600 }}>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div style={{
                      position: "absolute", bottom: 0, left: 0, right: 0,
                      background: `linear-gradient(90deg, ${scheme.primary} 0%, ${scheme.secondary} 100%)`,
                      padding: "6px 14px",
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                    }}>
                      <div style={{ fontFamily: "monospace", fontSize: 10, color: "white", fontWeight: 700, letterSpacing: 1 }}>
                        {member.id_card_number}
                      </div>
                      <div style={{ fontSize: 8.5, color: "rgba(255,255,255,0.75)" }}>
                        Valid: {approvedDate}
                      </div>
                      <div style={{ display: "flex", gap: 1, opacity: 0.5 }}>
                        {[3,1,2,3,1,2,1,3,2,1,3,1].map((h, i) => (
                          <div key={i} style={{ width: 1.5, height: h * 3, background: "white", borderRadius: 1 }} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={handleDownload} 
                    disabled={downloading}
                    className="w-full mt-4 bg-[#1a237e] hover:bg-[#0d1440] text-white py-3 rounded-xl font-semibold text-sm transition-colors disabled:opacity-60 flex items-center justify-center gap-2 shadow-md"
                  >
                    {downloading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Generating PDF...
                      </>
                    ) : (
                      <>
                        <Download size={16} />
                        Download ID Card (PDF)
                      </>
                    )}
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-2">CR80 standard card size · High quality PDF</p>
                </div>
              )}

              {member.status === "PENDING" && (
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 text-center">
                  <Clock size={32} className="text-orange-400 mx-auto mb-2" />
                  <p className="font-semibold text-orange-700">Application Under Review</p>
                  <p className="text-sm text-orange-500 mt-1">You will receive an email once approved.</p>
                </div>
              )}

              {member.status === "REJECTED" && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-center">
                  <XCircle size={32} className="text-red-400 mx-auto mb-2" />
                  <p className="font-semibold text-red-700">Application Rejected</p>
                  <p className="text-sm text-red-500 mt-1">Please contact NCIO for more information.</p>
                </div>
              )}

            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard size={28} className="text-gray-300" />
              </div>
              <p className="font-semibold text-gray-400">Your membership details will appear here</p>
              <p className="text-sm text-gray-300 mt-1">Login with your mobile & DOB</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}