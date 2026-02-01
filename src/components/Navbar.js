"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const LOGO_URL =
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/930a03da-ee7c-4d38-bdee-a38c848307b2/New-Logo-resized-1767779254665.webp?width=8000&height=8000&resize=contain";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Track Shipment", href: "/tracking" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1a3c5e] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src={LOGO_URL}
            alt="Shiplynks Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-bold tracking-tight">Shiplynks</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-200 hover:text-white hover:underline underline-offset-4 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-200 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-sm font-semibold bg-[#e67e22] hover:bg-[#d35400] text-white px-4 py-1.5 rounded transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#153354] px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-gray-600 my-1" />
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-gray-200 hover:text-white"
          >
            Login
          </Link>
          <Link
            href="/register"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-semibold bg-[#e67e22] hover:bg-[#d35400] text-white px-4 py-2 rounded text-center"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
