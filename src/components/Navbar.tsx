// 'use client';
import Link from 'next/link';


export default function Navbar() {


  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-xl font-bold text-blue-600 dark:text-white">MemoTag</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-6 text-gray-700 dark:text-gray-100 font-medium">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#solution" className="hover:text-blue-600">Solution</a>
          <a href="#traction" className="hover:text-blue-600">Traction</a>
          <a href="#cta" className="hover:text-blue-600">Waitlist</a>
        </nav>

      </div>
    </header>
  );
}
