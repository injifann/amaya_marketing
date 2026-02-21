// Services.jsx
import ServiceCard from "../cards/ServiceCards";
import { Link } from "react-router-dom";

const services = [
  {
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
    title: "Social Media Strategy",
    description: "Custom-tailored strategies that align with your brand voice and business goals across all major platforms."
  },
  {
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
    title: "Content Creation",
    description: "High-performing visuals, videos, carousels, reels, and copy that drive engagement and conversions."
  },
  {
    img: "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=800",
    title: "Paid Advertising",
    description: "Targeted Meta, TikTok, LinkedIn & Google campaigns optimized for ROAS and lead generation."
  },
  {
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    title: "Community Management",
    description: "Proactive engagement, comment & DM handling, crisis management, and relationship building."
  },
];

export default function Services() {
  return (
    <section className="services-section bg-gray-50 min-h-screen py-10 lg:py-20">
      <div className="services-container max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* Left side - Hero Quote / Visual Statement */}
        <div className="lg:col-span-6 relative overflow-hidden rounded-3xl shadow-xl">

          {/* Background image with very light overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1557682268-e3955ed5d83f?auto=format&fit=crop&q=90&w=2400')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-gray-50/60 to-white/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-10 lg:p-16 flex flex-col h-full justify-center text-white bg-gradient-to-br from-indigo-950 via-violet-950 to-purple-950">
  <div className="absolute -left-8 -top-10 text-[10rem] lg:text-[14rem] font-black text-indigo-900/30 select-none pointer-events-none hidden lg:block tracking-tighter leading-none">
    01
  </div>

  <blockquote className="relative">
    <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
      “Your brand deserves more than just posts.<br className="hidden sm:block" />
      It deserves{" "}
      <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
        strategy.
      </span>”
    </p>
    <footer className="mt-8 text-2xl font-medium text-indigo-200 tracking-wide">
      — Amaya Marketing Team
    </footer>
  </blockquote>

  <div className="mt-12 lg:mt-16">
    <button
      className="
        group relative inline-flex items-center gap-3 px-10 py-6
        bg-white hover:bg-gray-100
        text-indigo-950 font-semibold text-xl rounded-2xl
        shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20
        transform hover:-translate-y-1 transition-all duration-300
      "
    >
      <span className="flex items-center gap-3">
        <Link to="/contact">
        Start Growing Today
        </Link>
        <svg className="w-7 h-7 group-hover:rotate-12 group-hover:scale-110 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
    </button>
  </div>
</div>
        </div>

        {/* Right side - Services intro + cards */}
        <div className="lg:col-span-6 space-y-10 lg:space-y-12">
          {/* Intro heading */}
          <div className="text-center lg:text-left">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              We Provide <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Results-Driven</span> Services
            </h3>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              From strategy to execution — everything your brand needs to dominate social media in 2026 and beyond.
            </p>
          </div>

          {/* Cards grid */}
          <div className="services-grid grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                img={service.img}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}