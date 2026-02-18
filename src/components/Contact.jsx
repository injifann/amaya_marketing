// Contact.jsx
export default function Contact() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Optional very subtle texture – keeps premium feel without being distracting */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,229,0.08)_0%,transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-24 lg:py-32">

        {/* Hero / Opening Statement */}
        <div className="text-center mb-20 lg:mb-28">
          <h1 className="
            text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight
            bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 
            bg-clip-text text-transparent leading-tight
          ">
            Let’s architect your next growth chapter.
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto font-light">
            We don’t chase trends. We build enduring advantage.
          </p>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Strategic clarity × disciplined execution = measurable market leadership.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">

          {/* Left column – brand voice & social links */}
          <div className="lg:col-span-7 space-y-12 lg:space-y-16">
            <div className="
              bg-white border border-gray-200 rounded-2xl p-10 lg:p-12 
              shadow-lg hover:shadow-xl transition-shadow duration-300
            ">
              <p className="text-lg lg:text-xl text-gray-800 leading-relaxed">
                Amaya exists for ambitious brands ready to move beyond incremental wins.
              </p>
              <p className="mt-6 text-gray-700 leading-relaxed">
                We partner with leaders who demand precision positioning, high-leverage creative, 
                and campaigns engineered for compounding returns — not vanity metrics.
              </p>
              <p className="mt-6 font-medium text-gray-800 italic">
                If you're building something worth talking about, we're already interested.
              </p>
            </div>

            {/* Social Presence */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Connect with us
              </h3>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                {/* Facebook */}
                <a
                  href="https://facebook.com/amayamarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group p-4 rounded-xl 
                    bg-indigo-50 hover:bg-indigo-100 
                    border border-indigo-200 
                    transition-all duration-300 hover:shadow-md hover:-translate-y-1
                  "
                >
                  <svg className="w-7 h-7 text-indigo-600 group-hover:text-indigo-700 transition" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5v1.8H17l-.4 2.9h-2.8v7A10 10 0 0022 12z"/>
                  </svg>
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/amayamarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group p-4 rounded-xl 
                    bg-indigo-50 hover:bg-indigo-100 
                    border border-indigo-200 
                    transition-all duration-300 hover:shadow-md hover:-translate-y-1
                  "
                >
                  <svg className="w-7 h-7 text-indigo-600 group-hover:text-indigo-700 transition" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.04 15.52l-.38 5.32c.54 0 .77-.23 1.04-.51l2.5-2.4 5.18 3.79c.95.52 1.62.25 1.88-.88l3.4-15.96h.01c.31-1.45-.52-2.02-1.44-1.68L1.71 9.34C.31 9.89.33 10.7 1.48 11.05l4.84 1.51L17.2 5.89c.52-.34 1-.15.61.19"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com/@amayamarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group p-4 rounded-xl 
                    bg-indigo-50 hover:bg-indigo-100 
                    border border-indigo-200 
                    transition-all duration-300 hover:shadow-md hover:-translate-y-1
                  "
                >
                  <svg className="w-7 h-7 text-indigo-600 group-hover:text-indigo-700 transition" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.75 2h2.5a5 5 0 004.75 4.75v2.5a7.5 7.5 0 01-4.75-1.7v7.45a6 6 0 11-6-6c.17 0 .34.01.5.03v2.54a3.5 3.5 0 103.5 3.43V2z"/>
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@amayamarketing.com"
                  className="
                    group p-4 rounded-xl 
                    bg-indigo-50 hover:bg-indigo-100 
                    border border-indigo-200 
                    transition-all duration-300 hover:shadow-md hover:-translate-y-1
                  "
                >
                  <svg className="w-7 h-7 text-indigo-600 group-hover:text-indigo-700 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right column – Contact methods */}
          <div className="lg:col-span-5">
            <div className="
              bg-white border border-gray-200 rounded-2xl 
              p-10 lg:p-12 shadow-lg sticky top-24
            ">
              <h2 className="
                text-3xl lg:text-4xl font-bold text-gray-900 mb-10
              ">
                Direct Access
              </h2>

              <div className="space-y-10">

                {/* Email */}
                <div className="group">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Principal Channel</h3>
                  <a
                    href="mailto:hello@amayamarketing.com"
                    className="
                      text-2xl font-medium text-indigo-700 
                      hover:text-indigo-800 transition-colors duration-300
                      group-hover:underline underline-offset-8 decoration-indigo-400/40
                    "
                  >
                    hello@amayamarketing.com
                  </a>
                  <p className="mt-2 text-gray-600 text-sm">
                    Expect reply within 24–48 hours (business days)
                  </p>
                </div>

                {/* Telegram */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Real-time Dialogue</h3>
                  <a
                    href="https://t.me/amayamarketing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-3 px-7 py-4 
                      bg-indigo-50 hover:bg-indigo-100 
                      border border-indigo-200 rounded-xl 
                      text-indigo-700 hover:text-indigo-800 
                      transition-all duration-300
                    "
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.36l-3.5 3.5c-.2.2-.51.2-.71 0l-1.79-1.79c-.2-.2-.51-.2-.71 0l-.71.71c-.2.2-.2.51 0 .71l2.5 2.5c.39.39 1.02.39 1.41 0l4.21-4.21c.2-.2.2-.51 0-.71l-.71-.71c-.2-.2-.51-.2-.71 0z"/>
                    </svg>
                    @amayamarketing
                  </a>
                </div>

                {/* Phone */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Direct Line</h3>
                  <a
                    href="tel:+251911234567"
                    className="
                      inline-flex items-center gap-4 px-8 py-5 
                      bg-indigo-600 hover:bg-indigo-700 
                      text-white font-semibold text-xl lg:text-2xl rounded-2xl 
                      shadow-md hover:shadow-lg hover:shadow-indigo-300/30 
                      transform hover:-translate-y-1 transition-all duration-300
                    "
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.77 15.77 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.22 11.11 11.11 0 003.45.55 1 1 0 011 1v3.5a1 1 0 01-1 1A18 18 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.11 11.11 0 00.55 3.45 1 1 0 01-.22 1.11l-2.2 2.2z"/>
                    </svg>
                    +251 911 234 567
                  </a>
                  <p className="mt-3 text-gray-600 text-sm">
                    Addis Ababa • Business hours 9:00–18:00 EAT
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Final closer */}
        <div className="mt-24 text-center text-gray-600 text-lg">
          <p>We look forward to understanding your ambitions.</p>
        </div>

      </div>
    </div>
  );
}