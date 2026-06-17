// DonationImpact.tsx - Accept className prop for external spacing control
interface DonationImpactProps {
  className?: string;
}

export default function DonationImpact({ className = "" }: DonationImpactProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-6 ${className}`}>
      <span className="text-[#f9a825] font-medium text-xs md:text-sm uppercase tracking-wider">
        Make a Difference
      </span>
      <h2 className="font-display text-xl md:text-2xl font-bold text-[#1a237e] mt-2 mb-3 md:mb-4">
        Why Donate to NCIO?
      </h2>
      <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4 md:mb-6">
        NCIO operates entirely on public donations. Every rupee you contribute goes directly 
        to our programs — free legal aid, medical camps, education support, food distribution, 
        and more.
      </p>
      
      <div className="space-y-2 md:space-y-2">
        {[
          { amount: "₹100", impact: "Provides stationery for one student" },
          { amount: "₹250", impact: "Covers medicines for one patient" },
          { amount: "₹500", impact: "Feeds 10 homeless individuals" },
          { amount: "₹1,000", impact: "Funds one RTI application" },
          { amount: "₹2,500", impact: "Sponsors blood donation camp" },
          { amount: "₹5,000", impact: "Plants 50 trees in rural areas" },
        ].map((d) => (
          <div key={d.amount} className="flex items-start gap-2 md:gap-3">
            <span className="bg-[#f9a825] text-[#1a237e] font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-lg text-xs md:text-sm flex-shrink-0">
              {d.amount}
            </span>
            <span className="text-gray-600 text-xs md:text-sm pt-0.5 md:pt-1">{d.impact}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-4 md:mt-6 bg-green-50 border border-green-200 rounded-lg p-3 md:p-4">
        <p className="text-green-700 font-medium text-xs md:text-sm">
          ✓ 80G Tax deduction available under Income Tax Act
        </p>
      </div>
    </div>
  );
}