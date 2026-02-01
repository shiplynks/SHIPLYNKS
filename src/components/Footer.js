import Link from "next/link";

const LOGO_URL =
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/930a03da-ee7c-4d38-bdee-a38c848307b2/New-Logo-resized-1767779254665.webp?width=8000&height=8000&resize=contain";

export default function Footer() {
  return (
    <footer className="bg-[#1a3c5e] text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src={LOGO_URL} alt="Shiplynks Logo" className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold">Shiplynks</span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Taking India to the World. Your trusted courier partner across India.
            Fast, reliable, and affordable shipping solutions for all your needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-base mb-3">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-300">
            {[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Track Shipment", href: "/tracking" },
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-white transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="font-semibold text-base mb-3">Our Services</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-300">
            {[
              "Express Delivery",
              "International Shipping",
              "Bulk Orders",
              "Corporate Solutions",
            ].map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Policies + Contact */}
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="font-semibold text-base mb-3">Policies</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-300">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms-conditions" },
                {
                  label: "Refunds & Cancellation Policy",
                  href: "/refund-cancellation",
                },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-base mb-3">Contact Us</h4>
            <ul className="flex flex-col gap-1 text-sm text-gray-300">
              <li>46, Ber Sarai, New Delhi, India - 110016</li>
              <li>
                <a href="tel:+918130347547" className="hover:text-white transition">
                  +91 81303 47547
                </a>
              </li>
              <li>
                <a href="mailto:shiplynks@gmail.com" className="hover:text-white transition">
                  shiplynks@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-4 mt-10 pt-4 border-t border-gray-600 text-center text-sm text-gray-400">
        © 2026 Shiplynks. All rights reserved.
      </div>
    </footer>
  );
}
