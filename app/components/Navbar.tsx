import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 border-b border-white/10 backdrop-blur">
      <span className="text-lg font-semibold tracking-widest text-cyan-400">
        NIPUN.GOYAL
      </span>

      <div className="space-x-8 text-sm text-gray-200">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  );
}
