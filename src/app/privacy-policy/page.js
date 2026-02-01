import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-br from-[#1a3c5e] to-[#2a6496] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-gray-300 text-sm mt-1">Last updated: February 1, 2026</p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white flex-1">
        <div className="max-w-3xl mx-auto text-sm text-gray-600 space-y-6 leading-relaxed">
          <p>
            At Shiplynks, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our services.
          </p>

          <h2 className="text-lg font-bold text-[#1a3c5e] mt-6">Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, make a shipment, or contact us for support. This includes your name, email address, phone number, and shipping details.
          </p>

          <h2 className="text-lg font-bold text-[#1a3c5e] mt-6">How We Use Your Information</h2>
          <p>
            We use the information we collect to provide and improve our services, process shipments, communicate with you about your orders, send promotional communications (with your consent), and comply with legal obligations.
          </p>

          <h2 className="text-lg font-bold text-[#1a3c5e] mt-6">Sharing of Information</h2>
          <p>
            We may share your information with logistics partners and carriers necessary to fulfill your shipment, payment processors, and service providers who assist us in operating our business. We do not sell your personal information to third parties.
          </p>

          <h2 className="text-lg font-bold text-[#1a3c5e] mt-6">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or destruction. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2 className="text-lg font-bold text-[#1a3c5e] mt-6">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data at any time. You can also opt out of promotional communications. Please contact us at shiplynks@gmail.com to exercise these rights.
          </p>

          <h2 className="text-lg font-bold text-[#1a3c5e] mt-6">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
