import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Nipun Goyal",
  description: "AI Engineer | ML | LLMs | Physics-Informed AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased relative">

{/* AI Background Image */}
<div
className="fixed inset-0 -z-20 opacity-200 bg-cover bg-center blur-none"
style={{ backgroundImage: "url('/ai-bg.png')" }}
/>
{/* Dark overlay to soften image */}
<div className="fixed inset-0 -z-10 bg-black/40" />

{/* Gradient Glow Layer */}
<div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,255,200,0.08),transparent_40%),radial-gradient(circle_at_bottom,rgba(0,120,255,0.08),transparent_30%)]" />

<Navbar />
{children}
</body>

    </html>
  );
}
