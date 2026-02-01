import "./globals.css";

export const metadata = {
  title: "Shiplynks - Courier Services Across India",
  description:
    "Shiplynks delivers your packages worldwide with care, speed, and precision. International shipping made simple.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  );
}
