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
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-xl font-bold text-[#1a237e] mb-4 flex items-center gap-2">
        🏦 Bank Details
      </h3>

      <div className="space-y-3">
        {bankDetails.map((detail) => (
          <div key={detail.label} className="flex items-center justify-between group">
            <div>
              <span className="text-green-600 font-medium text-sm">{detail.label}:</span>{" "}
              <span className="text-gray-700 text-sm">{detail.value}</span>
            </div>
            <button
              onClick={() => copyToClipboard(detail.value, detail.label)}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {copied && copiedText === detail.label ? (
                <Check size={16} className="text-green-600" />
              ) : (
                <Copy size={16} className="text-gray-400 hover:text-gray-600" />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* QR Code */}
      <div className="mt-6 flex flex-col items-center">
        <div className="border-4 border-red-500 p-2 rounded-lg bg-white">
          <Image
            src="/donate/qrcode.png"
            alt="Donation QR Code"
            width={180}
            height={180}
            className="rounded-md"
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">Scan to donate via UPI</p>
      </div>

      {/* Payment Methods - Single Image */}
      <div className="mt-6">
        <h4 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">
          Accepted Payment Methods
        </h4>
        <div className="flex justify-center">
          <Image
            src="/donate/qr-scan.png"
            alt="Accepted Payment Methods"
            width={300}
            height={60}
            className="object-contain"
          />
        </div>
      </div>

     
      
    </div>
  );
}