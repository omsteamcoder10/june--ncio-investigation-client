"use client";
import Image from "next/image";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function DonateInfo() {
  const [copied, setCopied] = useState(false);
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const bankDetails = [
    { label: "Account Name", value: "National Crime Investigates Organization" },
    { label: "Account No", value: "155105013577" },
    { label: "IFSC", value: "ICIC0001551" },
    { label: "Bank Name", value: "ICICI Bank" },
    { label: "Branch", value: "Palladam" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5 md:p-6">
      <h3 className="text-lg sm:text-xl font-bold text-[#1a237e] mb-3 sm:mb-4 flex items-center gap-2">
        🏦 Bank Details
      </h3>

      <div className="space-y-2.5 sm:space-y-3">
        {bankDetails.map((detail) => (
          <div key={detail.label} className="flex items-center justify-between group flex-wrap gap-1">
            <div className="flex-1 min-w-[120px]">
              <span className="text-green-600 font-medium text-xs sm:text-sm">{detail.label}:</span>{" "}
              <span className="text-gray-700 text-xs sm:text-sm break-words">{detail.value}</span>
            </div>
            <button
              onClick={() => copyToClipboard(detail.value, detail.label)}
              className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex-shrink-0"
            >
              {copied && copiedText === detail.label ? (
                <Check size={14} className="sm:w-4 sm:h-4 text-green-600" />
              ) : (
                <Copy size={14} className="sm:w-4 sm:h-4 text-gray-400 hover:text-gray-600" />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* QR Code */}
      <div className="mt-5 sm:mt-6 flex flex-col items-center">
        <div className="border-4 border-red-500 p-1.5 sm:p-2 rounded-lg bg-white">
          <Image
            src={`${process.env.NEXT_PUBLIC_R2_URL}/donate/qrcode.png`}
            alt="Donation QR Code"
            width={180}
            height={180}
            className="rounded-md w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px]"
          />
        </div>
        <p className="text-[10px] sm:text-xs text-gray-500 mt-1.5 sm:mt-2">Scan to donate via UPI</p>
      </div>

      {/* Payment Methods - Single Image */}
      <div className="mt-5 sm:mt-6">
        <h4 className="text-[10px] sm:text-xs font-semibold text-gray-500 mb-2 sm:mb-3 uppercase tracking-wider">
          Accepted Payment Methods
        </h4>
        <div className="flex justify-center">
          <Image
            src={`${process.env.NEXT_PUBLIC_R2_URL}/donate/qr-scan.png`}
            alt="Accepted Payment Methods"
            width={300}
            height={60}
            className="object-contain w-full max-w-[280px] sm:max-w-[300px]"
          />
        </div>
      </div>
    </div>
  );
}