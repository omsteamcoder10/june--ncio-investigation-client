"use client";
import { useState } from "react";
import { Search, CheckCircle, XCircle, Loader2, ShieldCheck, MapPin, Phone, Mail, Calendar, CreditCard, User } from "lucide-react";
import PageBanner from "@/components/shared/PageBanner";
import { MOCK_APPLICATIONS } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

type VerifyStatus = "idle" | "loading" | "found" | "not-found";

interface MemberResult {
  fullName: string;
  memberId: string;
  membershipType: string;
  district: string;
  zone: string;
  state: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  approvedAt: string;
  photoUrl?: string;
  gender: string;
}

export default function VerifyIDPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<VerifyStatus>("idle");
  const [member, setMember] = useState<MemberResult | null>(null);

  const handleVerify = async () => {
    if (!query.trim()) return;
    setStatus("loading");
    setMember(null);

    // Simulate network delay
    await new Promise((r) => setTimeout(r, 1000));

    const found = MOCK_APPLICATIONS.find(
      (m) =>
        m.status === "APPROVED" &&
        m.memberId?.toLowerCase() === query.trim().toLowerCase()
    );

    if (found) {
      setMember({
        fullName: found.fullName,
        memberId: found.memberId!,
        membershipType: found.membershipType,
        district: found.district,
        zone: found.zone,
        state: found.state,
        phone: found.phone,
        email: found.email,
        dateOfBirth: found.dateOfBirth,
        approvedAt: found.approvedAt || new Date().toISOString(),
        photoUrl: found.photoUrl,
        gender: found.gender,
      });
      setStatus("found");
    } else {
      setStatus("not-found");
    }
  };

  const cardColor =
    member?.membershipType === "STATE" || member?.membershipType === "ZONAL"
      ? "#c62828"
      : "#1a237e";

  const cardLabel =
    member?.membershipType === "STATE"
      ? "State Member"
      : member?.membershipType === "ZONAL"
      ? "Zonal Member"
      : "District Member";

  return (
    <>
      {/* Page Banner */}
      <PageBanner
        title="Verify NCIO Membership"
        subtitle="Enter a Member ID below to instantly verify whether someone is a genuine NCIO member."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Verify ID" }
        ]}
      />

      <section className="py-14 bg-gray-50 min-h-[60vh]">
        <div className="max-w-xl mx-auto px-4 space-y-8">
          {/* Search box */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Enter Member ID
            </label>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <CreditCard size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setStatus("idle"); setMember(null); }}
                  onKeyDown={(e) => e.key === "Enter" && handleVerify()}
                  placeholder="e.g. NCIO-TN-WZ-CBE-0525-0001"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#1a237e]/40 focus:border-[#1a237e] transition-colors"
                />
              </div>
              <button
                onClick={handleVerify}
                disabled={!query.trim() || status === "loading"}
                className="bg-[#1a237e] hover:bg-[#0d1440] disabled:opacity-50 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-colors flex items-center gap-2 flex-shrink-0"
              >
                {status === "loading"
                  ? <><Loader2 size={16} className="animate-spin" /> Checking...</>
                  : <><Search size={16} /> Verify</>
                }
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Member IDs follow the format: NCIO-TN-[ZONE]-[DISTRICT]-[MMYY]-[SEQ]
            </p>
          </div>

          {/* NOT FOUND */}
          {status === "not-found" && (
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center">
              <XCircle size={52} className="text-red-400 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-red-800 mb-2">Member Not Found</h2>
              <p className="text-red-600 text-sm leading-relaxed">
                No approved NCIO member was found with ID{" "}
                <span className="font-mono font-bold">{query}</span>.
              </p>
              <p className="text-red-400 text-xs mt-3">
                Please double-check the ID. If you believe this is an error, contact{" "}
                <a href="mailto:ncioindia@gmail.com" className="underline">ncioindia@gmail.com</a>.
              </p>
            </div>
          )}

          {/* FOUND */}
          {status === "found" && member && (
            <div className="space-y-4">
              {/* Verified badge */}
              <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-5 flex items-center gap-4">
                <CheckCircle size={40} className="text-green-500 flex-shrink-0" />
                <div>
                  <h2 className="text-lg font-bold text-green-800">Verified NCIO Member ✓</h2>
                  <p className="text-green-600 text-sm">
                    This is a genuine, approved member of the National Crime Investigates Organization.
                  </p>
                </div>
              </div>

              {/* Member card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Card header */}
                <div className="flex items-center gap-4 p-5" style={{ background: cardColor }}>
                  <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-white/30 flex-shrink-0">
                    {member.photoUrl ? (
                      <img src={member.photoUrl} alt={member.fullName} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-white/20 flex items-center justify-center text-white font-bold text-xl">
                        {member.fullName.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-lg leading-tight">{member.fullName}</h3>
                    <p className="text-white/70 text-sm font-mono">{member.memberId}</p>
                    <span
                      className="inline-block mt-1 text-xs font-bold px-2.5 py-0.5 rounded-full"
                      style={{ background: "#f9a825", color: cardColor }}
                    >
                      {cardLabel}
                    </span>
                  </div>
                </div>

                {/* Details grid */}
                <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: <User size={16} className="text-[#f9a825]" />,
                      label: "Gender",
                      value: member.gender,
                    },
                    {
                      icon: <Calendar size={16} className="text-[#f9a825]" />,
                      label: "Date of Birth",
                      value: formatDate(member.dateOfBirth),
                    },
                    {
                      icon: <Phone size={16} className="text-[#f9a825]" />,
                      label: "Phone",
                      value: member.phone,
                    },
                    {
                      icon: <Mail size={16} className="text-[#f9a825]" />,
                      label: "Email",
                      value: member.email,
                    },
                    {
                      icon: <MapPin size={16} className="text-[#f9a825]" />,
                      label: "District",
                      value: member.district,
                    },
                    {
                      icon: <MapPin size={16} className="text-[#f9a825]" />,
                      label: "Zone",
                      value: member.zone,
                    },
                    {
                      icon: <ShieldCheck size={16} className="text-[#f9a825]" />,
                      label: "Membership Type",
                      value: cardLabel,
                    },
                    {
                      icon: <CheckCircle size={16} className="text-[#f9a825]" />,
                      label: "Member Since",
                      value: formatDate(member.approvedAt),
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#1a237e]/08 rounded-lg flex items-center justify-center flex-shrink-0 bg-gray-50 border border-gray-100">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{item.label}</p>
                        <p className="text-sm text-gray-800 font-semibold mt-0.5">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                  <p className="text-xs text-gray-400">
                    Verified by NCIO official database
                  </p>
                  <div className="flex items-center gap-1 text-green-600 text-xs font-semibold">
                    <CheckCircle size={13} /> Active Member
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-gray-400 text-center">
                This verification is provided by the National Crime Investigates Organization.
                For disputes or concerns, contact{" "}
                <a href="mailto:ncioindia@gmail.com" className="text-[#1a237e] underline">
                  ncioindia@gmail.com
                </a>
              </p>
            </div>
          )}

          {/* Idle state hint */}
          {status === "idle" && (
            <div className="text-center py-10 text-gray-300">
              <ShieldCheck size={52} className="mx-auto mb-3" />
              <p className="text-gray-400 text-sm">Enter a Member ID above to verify</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}