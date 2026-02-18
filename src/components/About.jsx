// About.jsx
import founderImage from '../assets/Founder.png'; // ← Replace with actual founder photo

export default function About() {
  return (
    <section className="about-section bg-white text-gray-900 min-h-screen py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20 lg:space-y-32">

        {/* Hero / Intro */}
        <div className="text-center space-y-6 lg:space-y-8">
          <h1 className="
            text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight 
            bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 
            bg-clip-text text-transparent
          ">
            About Amaya Marketing
          </h1>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We are a results-driven social media marketing agency based in Addis Ababa, Ethiopia. 
            We help ambitious brands turn attention into revenue through strategic, creative, 
            and data-backed social media solutions.
          </p>
        </div>

        {/* Founder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Founder Image */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <img
              src={founderImage}
              alt="Founder of Amaya Marketing"
              className="w-full h-auto object-cover aspect-[4/5] lg:aspect-auto"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-t from-black/60 via-transparent to-transparent pt-16">
              <h3 className="text-3xl lg:text-4xl font-bold text-white drop-shadow-md">
                Ebba Digital
              </h3>
              <p className="text-xl text-indigo-200 mt-1 drop-shadow">
                Founder & CEO
              </p>
            </div>
          </div>

          {/* Founder Bio */}
          <div className="lg:col-span-7 space-y-8 lg:space-y-10">
            <h2 className="
              text-3xl lg:text-5xl font-bold tracking-tight 
              text-gray-900
            ">
              Visionary Leadership
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Ebba Digital founded Amaya Marketing with a clear mission: to bring world-class social media strategy 
              and execution to businesses in Ethiopia and beyond. With over [X] years of experience in digital marketing, 
              brand building, and performance advertising, he has helped dozens of brands grow their online presence 
              and achieve measurable ROI.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Passionate about clarity, creativity, and results, Ebba believes that great marketing isn't about 
              likes — it's about building lasting relationships and driving real business growth.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-10 pt-6">
              {[
                { number: "1+", label: "Years Experience" },
                { number: "50+", label: "Brands Elevated" },
                { number: "4.9", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl lg:text-5xl font-extrabold text-indigo-600">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 mt-2 text-sm lg:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Location & Map */}
        <div className="space-y-10 lg:space-y-16">
          <div className="text-center lg:text-left">
            <h2 className="
              text-3xl lg:text-5xl font-bold tracking-tight 
              text-gray-900
            ">
              Our Location
            </h2>
            <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto lg:mx-0">
              Proudly based in the vibrant Bole area of Addis Ababa, Ethiopia — where creativity meets opportunity in the heart of the city.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map Embed */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 aspect-[4/3] lg:aspect-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.427!2d38.763!3d9.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85c4b5e8e5f9%3A0x5e5e5e5e5e5e5e5e!2sBole%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1739799999999!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '450px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amaya Marketing - Bole, Addis Ababa"
              ></iframe>
            </div>

            {/* Location Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Amaya Marketing
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Bole Sub-City<br />
                  Addis Ababa, Ethiopia<br /><br />
                  Email: <a href="mailto:hello@amayamarketing.com" className="text-indigo-600 hover:text-indigo-800 transition-colors">hello@amayamarketing.com</a><br />
                  Phone: <a href="tel:+251911234567" className="text-indigo-600 hover:text-indigo-800 transition-colors">+251 9XX XXX XXX</a>
                </p>
              </div>

              <div className="pt-6">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Bole,+Addis+Ababa,+Ethiopia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-3 px-8 py-5 
                    bg-indigo-600 hover:bg-indigo-700 
                    text-white font-semibold text-lg rounded-2xl 
                    shadow-lg hover:shadow-xl hover:shadow-indigo-300/30 
                    transform hover:-translate-y-1 transition-all duration-300
                  "
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}