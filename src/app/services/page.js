import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const services = [
  {
    icon: "✈️",
    title: "International Shipping",
    desc: "Seamless door-to-door delivery to 220+ countries with full customs clearance and documentation support.",
    features: ["Priority & Economy options", "Customs clearance included", "Insurance covered", "Real-time tracking"],
  },
  {
    icon: "🚚",
    title: "Express Delivery",
    desc: "Lightning-fast domestic and express international deliveries for time-critical shipments.",
    features: ["Same-day & next-day options", "Priority handling", "SMS & email updates", "Signature confirmation"],
  },
  {
    icon: "📦",
    title: "Bulk Orders & Freight",
    desc: "Cost-effective bulk shipping solutions designed for businesses moving large volumes regularly.",
    features: ["Volume-based pricing", "Dedicated account manager", "Warehouse support", "Monthly billing"],
  },
  {
    icon: "💼",
    title: "Corporate Solutions",
    desc: "Tailored logistics packages for businesses of all sizes with SLA-backed delivery guarantees.",
    features: ["Custom SLA plans", "Priority support line", "Monthly analytics reports", "Dedicated logistics manager"],
  },
  {
    icon: "🏭",
    title: "E-Commerce Shipping",
    desc: "Integrated shipping solutions for online stores with automated label generation and tracking.",
    features: ["Platform integrations", "Automated labels", "Return management", "Branded tracking pages"],
  },
  {
    icon: "🛡️",
    title: "Secure & Fragile Handling",
    desc: "Specialized packaging and handling for fragile, high-value, or sensitive items across borders.",
    features: ["Custom packaging", "White-glove delivery", "Full insurance", "Temperature control options"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#1a3c5e] to-[#2a6496] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-3">Our Services</h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Complete logistics solutions for all your domestic and international shipping needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white flex-1">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:shadow-md transition flex flex-col"
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="text-lg font-bold text-[#1a3c5e] mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">{s.desc}</p>
              <ul className="text-sm text-gray-600 space-y-1 mt-auto">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-[#e67e22] mt-0.5">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a3c5e] text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Not sure which service fits?</h2>
          <p className="text-gray-300 mb-6">Our team will help you find the perfect solution.</p>
          <Link
            href="/contact"
            className="bg-[#e67e22] hover:bg-[#d35400] text-white font-semibold px-6 py-3 rounded-lg transition inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
