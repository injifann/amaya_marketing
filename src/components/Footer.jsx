// Footer.jsx
import React from 'react';
import amayaLogo from '../assets/amaya_logo.jpg'; // ← reuse your logo

export default function Footer() {
  return (
    <footer className="
      bg-gray-50 border-t border-gray-200 text-gray-700
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
                <img
                  src={amayaLogo}
                  alt="Amaya Marketing"
                  className="
                    relative h-14 sm:h-16 object-contain rounded-2xl 
                    shadow-md transition-all duration-500 
                    group-hover:scale-105 group-hover:rotate-[1.5deg] 
                    group-hover:shadow-lg group-hover:shadow-indigo-200/30
                  "
                />
              </div>

              <div className="flex flex-col">
                <span className="
                  text-3xl sm:text-4xl font-extrabold tracking-tight
                  bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 
                  bg-clip-text text-transparent
                ">
                  Amaya
                </span>
                <span className="
                  text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mt-1
                  text-gray-500
                ">
                  Growth Through Clarity
                </span>
              </div>
            </a>

            <p className="text-gray-600 text-base leading-relaxed max-w-md">
              Strategic brand growth partner focused on clarity, precision positioning, 
              and compounding results for ambitious Ethiopian and global brands.
            </p>

            <div className="flex items-center gap-5 pt-4">
              {/* Replace hrefs with real social profiles */}
              {[
                { name: 'LinkedIn', icon: 'M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.7 9.8H6.3v8.4h2.4V9.8zM7.5 8.6a1.4 1.4 0 100-2.8 1.4 1.4 0 000 2.8zM17.7 9.8h-2.4v4.6c0 1.1-.2 2-1.6 2s-1.8-.9-1.8-2V9.8H9.5v8.4h2.4v-1.2c.5.8 1.4 1.4 2.3 1.4 2.4 0 2.8-1.6 2.8-3.7v-4.9z' },
                { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.228.228 2.695.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.156 4.358 2.623 6.825 6.981 6.981C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c4.358-.156 6.825-2.623 6.981-6.981.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.156-4.358-2.623-6.825-6.981-6.981C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z' },
                { name: 'Telegram', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.36l-3.5 3.5c-.2.2-.51.2-.71 0l-1.79-1.79c-.2-.2-.51-.2-.71 0l-.71.71c-.2.2-.2.51 0 .71l2.5 2.5c.39.39 1.02.39 1.41 0l4.21-4.21c.2-.2.2-.51 0-.71l-.71-.71c-.2-.2-.51-.2-.71 0z' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#" // ← replace with real URLs
                  aria-label={social.name}
                  className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">

            <div>
              <h3 className="text-gray-700 font-semibold mb-5 uppercase tracking-wide text-sm">
                Company
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="/about" className="hover:text-indigo-700 transition">About Us</a></li>
                <li><a href="/team" className="hover:text-indigo-700 transition">Our Team</a></li>
                <li><a href="/careers" className="hover:text-indigo-700 transition">Careers</a></li>
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
          text-sm text-gray-500
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