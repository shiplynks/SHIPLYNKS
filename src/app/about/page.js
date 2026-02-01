import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { icon: "🎯", title: "Mission", desc: "To make international shipping accessible, affordable, and effortless for every business and individual across India." },
  { icon: "👁️", title: "Vision", desc: "To become India's most trusted global logistics partner, connecting communities and commerce across borders." },
  { icon: "💎", title: "Values", desc: "Integrity, reliability, innovation, and customer-first thinking guide every decision we make." },
];

const team = [
  { name: "Rajesh Kumar", role: "Founder & CEO", emoji: "👨‍💼" },
  { name: "Priya Sharma", role: "Operations Director", emoji: "👩‍💼" },
  { name: "Ankit Mehta", role: "Head of Logistics", emoji: "👨‍🚛" },
  { name: "Sneha Patel", role: "Customer Success Lead", emoji: "👩‍💻" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-[#1a3c5e] to-[#2a6496] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-3">About Shiplynks</h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            We are India's growing global logistics partner, built on trust and powered by technology.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a3c5e] mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Shiplynks was founded with a simple belief — shipping across borders should not be complicated. We noticed that small businesses and individuals in India struggled to send packages internationally due to confusing processes, hidden fees, and unreliable services.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            So we built Shiplynks. A platform that simplifies international logistics, offers transparent pricing, and provides real-time visibility into every shipment. Today, we serve over 50,000 happy customers across India and beyond.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our team is dedicated to making global commerce accessible to everyone — from solo entrepreneurs to large enterprises. We believe that great logistics is the backbone of a connected world.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="text-lg font-bold text-[#1a3c5e] mb-2">{v.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-[#1a3c5e] mb-10">Meet the Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.name} className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-4xl mb-3">
                  {t.emoji}
                </div>
                <p className="font-semibold text-[#1a3c5e] text-sm">{t.name}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
