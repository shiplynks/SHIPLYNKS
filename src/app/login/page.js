"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login functionality coming soon. Please contact support.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center py-16 px-4 bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-2xl font-bold text-[#1a3c5e] text-center mb-1">Welcome Back</h1>
          <p className="text-sm text-gray-400 text-center mb-6">Sign in to your Shiplynks account</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              <label className="block text-xs font-semibold text-[#1a3c5e] mb-1">Password</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3c5e]"
              />
            </div>
            <div className="text-right">
              <span className="text-xs text-[#e67e22] cursor-pointer hover:underline">Forgot password?</span>
            </div>
            <button
              type="submit"
              className="bg-[#e67e22] hover:bg-[#d35400] text-white font-semibold py-2.5 rounded-lg transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-6">
            Don't have an account?{" "}
            <Link href="/register" className="text-[#e67e22] hover:underline font-medium">Sign Up</Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
