// Footer.jsx
import React from 'react';
import amayaLogo from '../assets/amaya_logo.jpg'; // ← reuse your logo

export default function Footer() {
  return (
    <footer className="
      bg-gray-700 border-t border-gray-200 text-gray-700
    ">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-16 pb-12">

        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 lg:gap-12">

          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <a href="/" className="inline-flex items-center gap-4 group">
              <div className="relative">
                <div className="
                  absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400/15 to-violet-400/10 
                  blur-lg scale-110 group-hover:scale-125 group-hover:blur-xl 
                  transition-all duration-700 opacity-50 group-hover:opacity-70
                "></div>
                
              </div>

              <div className="flex flex-col">
                <span className="
                  text-3xl sm:text-4xl font-extrabold tracking-tight
                  bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 
                  bg-clip-text text-transparent
                ">
                  Amaya Marketing
                </span>

              </div>
            </a>

            <p className="text-white text-base leading-relaxed max-w-md">
              Strategic brand growth partner focused on clarity, precision positioning, 
              and compounding results for ambitious Ethiopian and global brands.
            </p>

          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">

            <div>
              <h3 className="text-gray-700 font-semibold mb-5 uppercase tracking-wide text-sm">
                Company
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="/about" className="text-white underline decoration-blue-500">About Us</a></li>
                <li><a href="/team" className="text-white underline decoration-blue-500">Our Team</a></li>
                <li><a href="/careers" className="text-white underline decoration-blue-500">Careers</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-700 font-semibold mb-5 uppercase tracking-wide text-sm">
                Services
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="/brand-strategy" className="hover:text-indigo-700 transition">Brand Strategy</a></li>
                <li><a href="/digital-marketing" className="hover:text-indigo-700 transition">Digital Marketing</a></li>
                <li><a href="/motion-design" className="hover:text-indigo-700 transition">Motion & Video</a></li>
                <li><a href="/web-development" className="hover:text-indigo-700 transition">Web & UI/UX</a></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-gray-700 font-semibold mb-5 uppercase tracking-wide text-sm">
                Connect
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="mailto:hello@amayamarketing.com" className="hover:text-indigo-700 transition">Email Us</a></li>
                <li><a href="https://t.me/amayamarketing" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-700 transition">Telegram</a></li>
                <li><a href="tel:+251911234567" className="hover:text-indigo-700 transition">Call Us</a></li>
                <li><a href="/contact" className="hover:text-indigo-700 transition">Contact Page</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="
          mt-16 pt-10 border-t border-gray-200 
          flex flex-col sm:flex-row justify-between items-center gap-6 
          text-sm text-white
        ">
          <div>
            © {new Date().getFullYear()} Amaya Marketing. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-indigo-700 transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-indigo-700 transition">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}