import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RefundPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-br from-[#1a3c5e] to-[#2a6496] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold">Refunds & Cancellation Policy</h1>
          <p className="text-gray-300 text-sm mt-1">Last updated: February 1, 2026</p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white flex-1">
        <div className="max-w-3xl mx-auto text-sm text-gray-600 space-y-6 leading-relaxed">
          <p>
            We understand that plans change. This policy outlines how cancellations and refunds are handled at Shiplynks.
          </p>

          <h2 className="text-lg font-bold text-[#1a3c5e] mt-6">Cancellation Policy</h2>
          <p>
            You may cancel a shipment before it has been picked up by our logistics partner. Once a shipment is in transit, it cannot be cancelled. To cancel, please contact us as soon as possible via email or phone.
          </p>

          <h2 className="text-lg font-bold text-[#1a3c5e] mt-6">Refund Eligibility</h2>
          <p>
            Refunds are available in the following cases: shipments cancelled before pickup, shipments that are lost or damaged due to our handling, and overcharged shipments where a billing error has occurred. Refunds are not available for shipments delayed due to customs or external factors beyond our control.
          </p>

          <h2 className="text-lg font-bold text-[#1a3c5e] mt-6">Refund Process</h2>
          <p>
            Once a refund is approved, it will be processed within 5–7 business days to your original payment method. You will receive an email confirmation once the refund has been initiated.
          </p>

          <h2 className="text-lg font-bold text-[#1a3c5e] mt-6">How to Request a Refund</h2>
          <p>
            To request a refund, please email shiplynks@gmail.com with your tracking number and a brief description of the issue. You can also call us at +91 81303 47547 for immediate assistance.
          </p>

          <h2 className="text-lg font-bold text-[#1a3c5e] mt-6">Exceptions</h2>
          <p>
            Refunds will not be issued for shipments containing prohibited items, shipments where incorrect delivery details were provided by the sender, or requests made after 30 days from the date of shipment.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
