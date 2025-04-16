export default function Footer() {
    return (
      <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 px-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo + Tagline */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-white">MemoTag</h2>
            <p className="text-sm mt-1">An AI-wearable with cognitive health tracking &
            data analysis tool for dementia & elder caregiving.</p>
          </div>
  
          {/* Footer Links */}
          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            <a href="#home" className="hover:text-blue-600 transition">Home</a>
            <a href="#solution" className="hover:text-blue-600 transition">Solution</a>
            <a href="#traction" className="hover:text-blue-600 transition">Traction</a>
            <a href="#cta" className="hover:text-blue-600 transition">Waitlist</a>
          </div>
  
          {/* Social Icons (Add actual links if needed) */}
          <div className="flex gap-4">
            <a href="https://www.instagram.com/memotag.in/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.svg" alt="Instagram" className="h-15 w-15" />
            </a>
            <a href="https://www.linkedin.com/company/memotag/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-15 w-15" />
            </a>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} MemoTag. All rights reserved.
        </div>
      </footer>
    );
  }
  