"use client";
import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import axios from "axios";

export default function TeamGrid() {
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/team`)
      .then(res => setMembers(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  if (loading) return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="w-8 h-8 border-4 border-[#1a237e] border-t-transparent rounded-full animate-spin mx-auto" />
      </div>
    </section>
  );

  if (members.length === 0) return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-400">No team members found.</p>
      </div>
    </section>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
              <div className="relative h-64">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#1a237e]/10 to-[#1a237e]/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-[#1a237e] flex items-center justify-center text-white text-4xl font-bold">
                      {member.name?.charAt(0)}
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">{member.name}</h3>
                    <p className="text-[#f9a825] text-sm font-medium">{member.role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin size={12} className="text-white/60" />
                      <span className="text-white/70 text-xs">{member.district}</span>
                    </div>
                  </div>
                </div>
              </div>
              {member.greeting && (
                <div className="p-5">
                  <div className="text-[#f9a825] text-3xl leading-none mb-2 font-serif">"</div>
                  <p className="text-gray-600 text-sm leading-relaxed italic">{member.greeting}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}