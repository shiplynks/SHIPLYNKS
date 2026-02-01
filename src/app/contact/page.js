"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, connect this to your backend / email service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-[#1a3c5e] to-[#2a6496] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-gray-200 text-lg">Get in touch — we'd love to help you with your shipping needs.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-white flex-1">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Form */}
          <div className="md:col-span-2">
            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6 text-sm">
                ✓ Thank you! Your message has been sent. We'll get back to you shortly.
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1a3c5e] mb-1">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1a3c5e] mb-1">Phone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXXXXXXX"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1a3c5e] mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@email.com"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1a3c5e] mb-1">Subject</label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e] bg-white"
                >
                  <option value="">Select a subject</option>
                  <option value="quote">Get a Quote</option>
                  <option value="tracking">Tracking Issue</option>
                  <option value="support">General Support</option>
                  <option value="corporate">Corporate Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1a3c5e] mb-1">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e] resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#e67e22] hover:bg-[#d35400] text-white font-semibold px-6 py-3 rounded-lg transition self-start"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Sidebar Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#1a3c5e] text-white rounded-xl p-6">
              <h3 className="font-bold text-base mb-4">Get in Touch</h3>
              <div className="flex flex-col gap-4 text-sm">
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Address</p>
                  <p>46, Ber Sarai, New Delhi, India - 110016</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Phone</p>
                  <a href="tel:+918130347547" className="hover:text-[#e67e22] transition">+91 81303 47547</a>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Email</p>
                  <a href="mailto:shiplynks@gmail.com" className="hover:text-[#e67e22] transition">shiplynks@gmail.com</a>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Support Hours</p>
                  <p>24 / 7 — We're always here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
