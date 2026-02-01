"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = () => {
    if (!trackingNumber.trim()) return;
    setLoading(true);
    setStatus(null);
    // Simulated tracking response after 1.5s
    setTimeout(() => {
      setLoading(false);
      setStatus({
        number: trackingNumber.trim(),
        current: "In Transit",
        origin: "New Delhi, India",
        destination: "Mumbai, India",
        estimatedDelivery: "Feb 05, 2026",
        steps: [
          { label: "Order Picked Up", time: "Feb 02, 2026 – 9:00 AM", done: true },
          { label: "Processing at Warehouse", time: "Feb 02, 2026 – 11:30 AM", done: true },
          { label: "In Transit", time: "Feb 02, 2026 – 2:00 PM", done: true },
          { label: "Out for Delivery", time: "—", done: false },
          { label: "Delivered", time: "—", done: false },
        ],
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-[#1a3c5e] to-[#2a6496] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-3">Track Your Shipment</h1>
          <p className="text-gray-200 text-lg">
            Enter your tracking number to get real-time updates on your package
          </p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-12 px-4 bg-white flex-1">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
            <label className="block text-sm font-semibold text-[#1a3c5e] mb-2">
              Tracking Number
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleTrack()}
                placeholder="e.g. SL-1234567890"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e]"
              />
              <button
                onClick={handleTrack}
                className="bg-[#e67e22] hover:bg-[#d35400] text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                {loading ? "Tracking..." : "Track"}
              </button>
            </div>
          </div>

          {/* Result */}
          {status && (
            <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Tracking Number</p>
                  <p className="text-sm font-semibold text-[#1a3c5e]">{status.number}</p>
                </div>
                <span className="bg-[#e67e22] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {status.current}
                </span>
              </div>

              <div className="flex gap-6 text-sm text-gray-500 mb-6 flex-wrap">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">From</p>
                  <p className="font-medium text-gray-700">{status.origin}</p>
                </div>
                <span className="text-gray-300">→</span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">To</p>
                  <p className="font-medium text-gray-700">{status.destination}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">Est. Delivery</p>
                  <p className="font-medium text-gray-700">{status.estimatedDelivery}</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="flex flex-col gap-0">
                {status.steps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          step.done
                            ? "bg-[#e67e22] border-[#e67e22]"
                            : "bg-white border-gray-300"
                        }`}
                      />
                      {i < status.steps.length - 1 && (
                        <div
                          className={`w-0.5 h-8 ${
                            step.done ? "bg-[#e67e22]" : "bg-gray-200"
                          }`}
                        />
                      )}
                    </div>
                    <div className="pb-6">
                      <p
                        className={`text-sm font-medium ${
                          step.done ? "text-[#1a3c5e]" : "text-gray-400"
                        }`}
                      >
                        {step.label}
                      </p>
                      <p className="text-xs text-gray-400">{step.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
