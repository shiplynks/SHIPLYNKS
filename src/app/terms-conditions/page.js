import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-br from-[#1a3c5e] to-[#2a6496] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold">Terms & Conditions</h1>
          <p className="text-gray-300 text-sm mt-1">Last updated: February 1, 2026</p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white flex-1">
        <div className="max-w-3xl mx-auto text-sm text-gray-600 space-y-6 leading-relaxed">
          <p>
            By using Shiplynks services, you agree to be bound by these Terms & Conditions. Please read them carefully before using our platform.
          </p>

          <h2 className="text-lg font-bold text-[#1a3c5e] mt-6">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our services, you accept and agree to be bound by these terms. If you do not agree, please do not use our services.
          </p>

          <h2 className="text-lg font-bold text-[#1a3c5e] mt-6">2. Services</h2>
          <p>
            Shiplynks provides domestic and international shipping and logistics services. We reserve the right to modify or discontinue any service at any time without prior notice.
          </p>

          <h2 className="text-lg font-bold text-[#1a3c5e] mt-6">3. User Accounts</h2>
          <p>
            You are responsible for maintaining the security of your account. You must not share your credentials or allow others to access your account. We reserve the right to terminate accounts at our discretion.
          </p>

          <h2 className="text-lg font-bold text-[#1a3c5e] mt-6">4. Shipment Restrictions</h2>
          <p>
            You must not ship prohibited or restricted items as defined by Indian customs law or the destination country's regulations. Shiplynks is not liable for any customs seizures or penalties related to non-compliant shipments.
          </p>

          <h2 className="text-lg font-bold text-[#1a3c5e] mt-6">5. Liability</h2>
          <p>
            Shiplynks shall not be liable for any indirect, incidental, or consequential damages. Our liability is limited to the value of the shipment as declared and insured.
          </p>

          <h2 className="text-lg font-bold text-[#1a3c5e] mt-6">6. Governing Law</h2>
          <p>
            These terms are governed by the laws of India. Any disputes will be resolved in the courts of New Delhi, India.
          </p>

          <h2 className="text-lg font-bold text-[#1a3c5e] mt-6">7. Contact</h2>
          <p>
            If you have questions about these terms, please contact us at shiplynks@gmail.com or call +91 81303 47547.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
