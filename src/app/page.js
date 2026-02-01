import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const LOGO_URL =
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/930a03da-ee7c-4d38-bdee-a38c848307b2/New-Logo-resized-1767779254665.webp?width=8000&height=8000&resize=contain";

const whyChoose = [
  {
    title: "Express Global Delivery",
    desc: "Fast and efficient worldwide delivery options for your time-sensitive shipments.",
    icon: "🚀",
  },
  {
    title: "Global Network",
    desc: "Reliable worldwide delivery with expert customs clearance support across 200+ countries.",
    icon: "🌍",
  },
  {
    title: "Real-Time Tracking",
    desc: "Track your international shipments 24/7 with live updates and notifications.",
    icon: "📍",
  },
  {
    title: "Secure Handling",
    desc: "Comprehensive insurance coverage and careful handling for all global packages.",
    icon: "🛡️",
  },
  {
    title: "Business Solutions",
    desc: "Specialized rates for cross-border e-commerce and bulk international shipments.",
    icon: "💼",
  },
  {
    title: "24/7 Global Support",
    desc: "Dedicated customer service team available around the clock to assist you.",
    icon: "📞",
  },
];

const stats = [
  { value: "220+", label: "Countries Served" },
  { value: "1M+", label: "Global Deliveries" },
  { value: "50K+", label: "Happy Customers" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a3c5e] via-[#1e4d78] to-[#2a6496] text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#e67e22] font-semibold text-sm uppercase tracking-widest mb-3">
            Taking India to the World
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Global Express Logistics & Shipping
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-8">
            Shiplynks delivers your packages worldwide with care, speed, and
            precision. International shipping made simple.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tracking"
              className="bg-[#e67e22] hover:bg-[#d35400] text-white font-semibold px-6 py-3 rounded-lg transition shadow-lg"
            >
              Track Your Shipment
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white hover:bg-white hover:text-[#1a3c5e] font-semibold px-6 py-3 rounded-lg transition"
            >
              Get Instant Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1a3c5e] mb-3">
            Why Choose Shiplynks?
          </h2>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
            We provide premium international courier solutions with unmatched
            reliability and customer service
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 hover:shadow-md transition rounded-xl p-6 border border-gray-100"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-base font-semibold text-[#1a3c5e] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our International Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1a3c5e] mb-3">
            Our International Services
          </h2>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
            Complete logistics solutions for all your global shipping needs
          </p>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#1a3c5e] mb-4">
                Worldwide Shipping
              </h3>
              <p className="text-gray-500 mb-4">
                We specialize in connecting your business to every corner of the
                globe with seamless logistics.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                <li>Delivery to 220+ countries and territories</li>
                <li>Expert customs documentation & clearance</li>
                <li>Priority & economy international options</li>
                <li>Specialized handling for fragile items</li>
              </ul>
              <Link
                href="/services"
                className="inline-block mt-6 text-[#e67e22] font-semibold hover:underline"
              >
                Explore All Services →
              </Link>
            </div>

            {/* Stats */}
            <div className="flex-shrink-0 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-[#1a3c5e]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[#1a3c5e] to-[#2a6496] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">
            Ready to Ship Internationally?
          </h2>
          <p className="text-gray-300 mb-8">
            Get started today and experience hassle-free global logistics
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#e67e22] hover:bg-[#d35400] text-white font-semibold px-6 py-3 rounded-lg transition shadow"
            >
              Get a Quote
            </Link>
            <Link
              href="/tracking"
              className="border border-white text-white hover:bg-white hover:text-[#1a3c5e] font-semibold px-6 py-3 rounded-lg transition"
            >
              Track Shipment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
