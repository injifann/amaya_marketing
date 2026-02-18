// WhyUs.jsx
import React from 'react';

export default function WhyUs() {
  const challenges = [
    {
      problem: "Your content gets lost in the scroll",
      solution: "We engineer attention-grabbing formats and timing strategies that dramatically increase view-through and engagement rates.",
    },
    {
      problem: "Ads burn budget without delivering results",
      solution: "Precision targeting + creative testing + ROAS-first optimization — we treat your ad spend like our own investment.",
    },
    {
      problem: "Brand voice feels inconsistent or generic",
      solution: "We build comprehensive brand playbooks (tone, visuals, messaging pillars) so every post reinforces your unique identity.",
    },
    {
      problem: "No clear path from follower → customer",
      solution: "Full-funnel strategy: awareness → consideration → conversion — with clear CTAs and retargeting sequences that actually convert.",
    },
    {
      problem: "Community management drains your time and energy",
      solution: "Dedicated team handles comments, DMs, reviews and crises — professionally, 24/7 where needed, protecting reputation while you focus on the business.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ============================================= */}
      {/*                HERO SECTION                  */}
      {/* ============================================= */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with subtle movement */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
            alt="Modern creative workspace – marketing agency vibe"
            className="w-full h-full object-cover scale-105 brightness-[0.82] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/75" />
        </div>

        {/* Main content – centered, floating feel */}
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 text-center text-white">
          {/* Very large headline */}
          <h1 className="
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl 
            font-black tracking-tight leading-none mb-6 md:mb-10
            drop-shadow-2xl
          ">
            <span className="block">Most agencies</span>
            <span className="
              bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 
              bg-clip-text text-transparent
            ">
              deliver posts.
            </span>
          </h1>

          {/* Powerful subheadline */}
          <p className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
            font-bold tracking-tight mb-12 md:mb-16
            text-white/95 drop-shadow-lg
          ">
            We deliver <span className="text-indigo-300">growth.</span>
          </p>

          {/* Floating challenge cards – glassmorphism style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-9 max-w-5xl mx-auto">
            {challenges.map((item, index) => (
              <div
                key={index}
                className="
                  group relative bg-white/10 backdrop-blur-xl 
                  border border-white/15 rounded-2xl 
                  px-6 py-7 md:px-8 md:py-9 
                  transition-all duration-400 
                  hover:bg-white/20 hover:border-white/25 
                  hover:shadow-2xl hover:-translate-y-2
                "
              >
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-sm font-bold text-white/90 backdrop-blur-sm border border-white/20">
                  {index + 1}
                </div>

                <p className="text-lg md:text-xl font-medium leading-tight">
                  {item.problem}
                </p>
              </div>
            ))}
          </div>

          {/* Bridge statement – large & centered */}
          <div className="mt-16 md:mt-24">
            <p className="
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
              font-extrabold tracking-tight text-white
              drop-shadow-2xl
            ">
              We solve <span className="text-indigo-300">all</span> of them.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/*             HOW WE SOLVE – CARDS             */}
      {/* ============================================= */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              How We Turn Challenges Into Advantage
            </h2>
            <p className="mt-5 text-xl text-gray-600 max-w-3xl mx-auto">
              Each problem your brand faces is an opportunity — when approached with the right strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {challenges.map((item, index) => (
              <div
                key={index}
                className="
                  group bg-white border border-gray-200 rounded-2xl 
                  p-8 lg:p-10 shadow-md hover:shadow-2xl 
                  hover:border-indigo-200 transition-all duration-300 
                  hover:-translate-y-2
                "
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="
                    flex-shrink-0 w-14 h-14 rounded-2xl bg-indigo-100 
                    flex items-center justify-center text-indigo-700 
                    font-bold text-2xl shadow-sm
                  ">
                    {index + 1}
                  </div>

                  <h3 className="
                    text-2xl lg:text-3xl font-bold text-gray-900 
                    group-hover:text-indigo-700 transition-colors
                  ">
                    {item.problem}
                  </h3>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  {item.solution}
                </p>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="mt-20 lg:mt-28 text-center">
            <a
              href="#contact"
              className="
                inline-flex items-center gap-4 px-10 py-6 
                bg-gradient-to-r from-indigo-600 to-indigo-700 
                hover:from-indigo-700 hover:to-indigo-800
                text-white font-bold text-xl rounded-2xl 
                shadow-xl hover:shadow-2xl hover:shadow-indigo-300/40 
                transform hover:-translate-y-1 transition-all duration-300
              "
            >
              Ready to stop surviving and start dominating?
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}