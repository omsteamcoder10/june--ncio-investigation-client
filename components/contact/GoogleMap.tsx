// components/contact/GoogleMap.tsx
"use client";

export default function GoogleMap() {
  return (
    <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-gray-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.786476071996!2d80.1533706!3d13.1708377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527d361181b537%3A0x3ae82ae4f5e60989!2sNational%20crime%20investigates%20organization%20%5BNcio%5D%E2%84%A2%EF%B8%8F!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="NCIO Office Location"
        className="w-full h-full"
      />
    </div>
  );
}