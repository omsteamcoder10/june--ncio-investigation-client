// components/about/MissionVision.tsx
export default function MissionVision() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-display text-2xl font-bold text-[#1a237e] mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              To create a society where every individual, irrespective of caste, creed, religion, or economic status,
              has access to fundamental rights including justice, healthcare, education, and clean water.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We achieve this through direct service programs, legal advocacy, awareness campaigns, and community
              mobilization — all delivered through our network of trained volunteers and district coordinators.
            </p>
          </div>
          <div className="bg-[#1a237e] rounded-2xl p-8 shadow-sm">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              A Tamil Nadu — and eventually an India — where no citizen is denied justice because they cannot afford
              a lawyer, where no child misses school because their family is poor, and where no patient goes untreated
              because they live in a remote village.
            </p>
            <p className="text-white/80 leading-relaxed">
              We envision NCIO as a permanent institution — a people's organization that serves Tamil Nadu's citizens
              for generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}