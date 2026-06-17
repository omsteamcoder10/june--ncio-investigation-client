// components/team/TeamGrid.tsx
import { MapPin } from "lucide-react";

// Team members data with photos directly in component
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "K. Rajendran",
    role: "State President",
    district: "Tirupur",
    photo: "/team/team1.webp",
    greeting: "Greetings from Tirupur! It is my honour to lead NCIO as State President. For over a decade, I have dedicated my life to ensuring justice reaches every corner of Tamil Nadu. Together, we can build a society where no citizen is denied their basic rights. I welcome you to join our growing family of change-makers.",
  },
  {
    id: 2,
    name: "S. Meenakshi",
    role: "State Secretary",
    district: "Chennai",
    photo: "/team/team1.webp",
    greeting: "Warm greetings from Chennai! As State Secretary, I coordinate NCIO activities across all districts of Tamil Nadu. My passion is legal literacy — every citizen deserves to know their rights. In my five years with NCIO, I have witnessed lives transformed through our free legal services. Join us and be part of this transformation.",
  },
  {
    id: 3,
    name: "M. Selvakumar",
    role: "District Coordinator",
    district: "Coimbatore",
    photo: "/team/team1.webp",
    greeting: "Greetings from Coimbatore! I have been serving as District Coordinator for three years. Our Coimbatore chapter has conducted over 50 blood donation camps and helped hundreds of families access free medical care. The work we do here changes lives every single day. I personally invite you to join our team.",
  },
  
];

export default function TeamGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
              {/* Photo — top 60% */}
              <div className="relative h-64">
                <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
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
              {/* Greeting — bottom 40% */}
              <div className="p-5">
                <div className="text-[#f9a825] text-3xl leading-none mb-2 font-serif">"</div>
                <p className="text-gray-600 text-sm leading-relaxed italic">{member.greeting}</p>
              </div>
            </div>
          ))}

          {/* Coming Soon placeholder */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border-2 border-dashed border-gray-200">
            <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-3">🌟</div>
                <p className="text-gray-500 font-medium">More districts</p>
                <p className="text-gray-400 text-sm">coming soon</p>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-gray-400 font-semibold mb-1">More Team Members</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We are expanding our district coordinator network. New team members from across Tamil Nadu will be featured here soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}