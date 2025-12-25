import "./About.css";

import logo from "./images/gize_logo.png";
import ceoCutout from "./pages/ceo-image.png";
import ceoAlt from "./images/ceo_3.jpg";
import aboutCardImg from "./images/i5.jpg";
import iconLocation from "./icons/location.png";
import iconPhone from "./icons/telephone-call.png";
import iconMobile from "./icons/iphone.png";
import iconEmail from "./icons/email.png";
import iconTime from "./icons/time.png";

export default function About() {
  const team = [
    { id: 1, name: "Emily Johnson", role: "Supply Chain Analyst", img: ceoAlt },
    { id: 2, name: "Emily Johnson", role: "Supply Chain Analyst", img: ceoAlt },
    { id: 3, name: "Emily Johnson", role: "Supply Chain Analyst", img: ceoAlt },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-600">
      {/* NAVBAR (same style as Homepage) */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center">
            <img src={logo} alt="Gize PLC" className="h-12 w-auto" />
          </div>

          <nav className="hidden items-center gap-8 text-xs font-bold tracking-widest text-slate-800 uppercase md:flex">
            <a href="#" className="transition-colors hover:text-red-600">
              Home
            </a>
            <a href="#services" className="transition-colors hover:text-red-600">
              Services
            </a>
            <a href="#about" className="transition-colors hover:text-red-600">
              About Us
            </a>
            <a href="#faq" className="transition-colors hover:text-red-600">
              FAQ
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden rounded bg-red-500 px-6 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-red-600 md:inline-block"
          >
            contact us
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-[300px] w-full overflow-hidden bg-slate-900 md:h-[340px]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-slate-900/10" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 md:px-8">
          <h1 className="text-2xl font-extrabold tracking-wide text-white md:text-3xl">About Us</h1>
          <div className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-white/80">
            Home <span className="px-2">/</span> About Us
          </div>
        </div>
      </section>

      {/* ABOUT COMPANY CARD */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 rounded-3xl bg-red-50/30 px-6 py-10 md:grid-cols-2 md:items-center md:px-12 md:py-12">
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 md:text-2xl">
                We are a trusted <br className="hidden md:block" />
                logistics company since 2015
              </h2>

              <div className="mt-5 space-y-4 text-xs leading-relaxed text-slate-500">
                <p>
                  With over 10 years in logistics, we specialize in freight forwarding and supply chain
                  management, building a reputation as a trusted partner worldwide.
                </p>
                <p>
                  Our services include customs clearance and real-time shipment tracking for efficient
                  deliveries. We also provide private warehousing space tailored to your needs.
                </p>
                <p>
                  Our services include customs clearance and real-time shipment tracking for efficient
                  deliveries. We also provide private warehousing space tailored to your needs.
                </p>
              </div>

              <button className="mt-6 rounded-full bg-red-500 px-6 py-2 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-red-600">
                Other services
              </button>
            </div>

            <div className="md:justify-self-end">
              <div className="overflow-hidden rounded-xl bg-white shadow-sm">
                <img
                  src={aboutCardImg}
                  alt="Logistics"
                  className="h-[220px] w-full object-cover md:h-[260px] md:w-[420px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO SECTION */}
      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest text-red-600">
              Chief Executive Officer
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              GIZESHWORK <br />
              TESSEMA
            </h2>

            <div className="mt-6 space-y-4 text-xs leading-relaxed text-slate-500">
              <p>
                Gizeshwork Tessema, the CEO, leads with a vision that combines innovation and dedication,
                ensuring the successful delivery of solutions for both multinational corporations and
                smaller enterprises in international markets.
              </p>
              <p>
                Her passion for transforming ideas into impactful products and services has propelled the
                company to become a leading logistics provider in East Africa. Under her guidance, the
                team embraces challenges globally, continually seeking better, more efficient ways to meet
                customer needs while driving the business forward.
              </p>
            </div>

            <div className="mt-7 flex items-center gap-4 text-slate-400">
              <a href="#" aria-label="LinkedIn" className="transition hover:text-red-600">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0.5 8.25H4.5V23.5H0.5V8.25zM8.5 8.25H12.34V10.34H12.39C12.93 9.32 14.24 8.25 16.21 8.25C20.33 8.25 21.5 10.92 21.5 14.4V23.5H17.5V15.15C17.5 13.16 17.46 10.6 14.78 10.6C12.07 10.6 11.65 12.72 11.65 15.02V23.5H7.65V8.25H8.5z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="transition hover:text-red-600">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.2A4.8 4.8 0 1 0 16.8 12 4.81 4.81 0 0 0 12 7.2zm0 7.9A3.1 3.1 0 1 1 15.1 12 3.1 3.1 0 0 1 12 15.1zM17.5 6.2a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="transition hover:text-red-600">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12A10 10 0 1 0 10.4 21.9v-7H7.9v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2V8.6h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:justify-self-end">
            <div className="relative mx-auto h-[320px] w-[280px] md:h-[360px] md:w-[340px]">
              <img
                src={ceoCutout}
                alt="CEO"
                className="absolute inset-x-0 bottom-0 mx-auto h-[320px] w-auto object-contain md:h-[360px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TEAM MEMBERS */}
      <section className="bg-slate-50 pt-14 pb-32 md:pt-20 md:pb-56">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold uppercase tracking-wide text-slate-900">
              Our Expert Team <br /> Members
            </h2>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.id} className="text-center">
                <div className="mx-auto h-28 w-28 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-slate-100">
                  <img src={member.img} alt={member.name} className="h-full w-full object-cover" />
                </div>

                <div className="mx-auto mt-4 w-[230px] rounded-2xl bg-white px-6 py-4 shadow-sm">
                  <div className="text-xs font-bold text-slate-900">{member.name}</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                    {member.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER (same as Homepage) */}
      <footer id="contact" className="relative bg-[#EFEFEF] pb-8 text-sm text-slate-700 pt-0">
  {/* Top Banner - Larger & Wider */}
  <div className="relative z-30">
    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4">
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-xl shadow-xl shadow-red-200/60 
        py-8 px-8 md:px-12 flex flex-col md:flex-row justify-between items-center 
        border-2 border-white/20 backdrop-blur-sm overflow-hidden">

        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/30 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/30 rounded-full blur-2xl"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent 
          -translate-x-full animate-shimmer"></div>

        <div className="relative z-10 flex-1">
          <h2 className="text-white text-xl md:text-2xl font-bold text-center md:text-left mb-4 md:mb-0">
            <span className="block leading-tight">Looking For The Best</span>
            <span className="block leading-tight text-base md:text-xl lg:text-2xl bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent mt-1">
              Logistics Transport Services?
            </span>
          </h2>
        </div>

        <a href="#contact" className="relative z-10 bg-gradient-to-r from-[#EFEFEF] to-[#E0E0E0] text-slate-800 px-8 py-4 
          font-bold text-base rounded-lg hover:from-[#E5E5E5] hover:to-[#D5D5D5] transition-all duration-300 
          hover:scale-105 hover:shadow-xl hover:shadow-slate-900/20 active:scale-95
          flex items-center gap-3 group mt-4 md:mt-0 border border-slate-300">
          <span>Contact us</span>
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" 
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>

    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-6 w-1 h-20 
      bg-gradient-to-b from-red-600/60 to-transparent"></div>
  </div>

  {/* Main Footer Section */}
  <div className="relative pt-40 pb-6 px-4 md:px-12">
    <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
      
      {/* Column 1: Company Info */}
      <div className="relative group">
        <img src={logo} alt="Gize PLC" className="relative mb-4 h-8 w-auto transition-all duration-300 
          hover:scale-105 hover:drop-shadow-lg" />
        <p className="relative text-xs leading-relaxed text-slate-500 mb-4">
          Gize Logistics and Transport is a Freight forwarding company managed by a team of
          professionals who are dedicated to responding promptly to customer demands. We offer
          comprehensive services customized to suit your needs
        </p>
      </div>

      {/* Column 2: Our Services */}
      <div className="relative group">
        <h3 className="font-bold text-slate-900 mb-4 relative text-sm">
          Our Services
        </h3>
        <ul className="space-y-2 text-xs">
          {[
            "Shipping",
            "Freight Forwarding",
            "Port Handling",
            "Warehousing",
            "Transportation",
            "Customs Clearance"
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 transition-all duration-300 
              hover:translate-x-1 hover:text-red-600 cursor-pointer group/item">
              <span className="text-red-600 font-bold text-xs transition-transform duration-300 
                group-hover/item:translate-x-1">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3: Quick Links */}
      <div className="relative group">
        <h3 className="font-bold text-slate-900 mb-4 relative text-sm">
          Quick Links
        </h3>
        <ul className="space-y-2 text-xs">
          {[
            "Home",
            "Our Services",
            "About us",
            "Contact us",
            "FAQ",
            "CEO"
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 transition-all duration-300 
              hover:translate-x-1 hover:text-red-600 cursor-pointer group/item">
              <span className="text-red-600 font-bold text-xs transition-transform duration-300 
                group-hover/item:translate-x-1">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 4: Contact Us */}
      <div className="relative group">
        <h3 className="font-bold text-slate-900 mb-4 relative text-sm">
          Contact Us
        </h3>
        <ul className="space-y-3 text-xs">
          <li className="flex items-start gap-3 transition-all duration-300 hover:text-red-600 group/item">
            <div className="relative mt-0.5">
              <img src={iconLocation} alt="" className="h-4 w-4 text-white transition-all duration-300 
                group-hover/item:scale-110 group-hover/item:rotate-6" />
            </div>
            <span>Bole Rwanda Embassy road</span>
          </li>
          <li className="flex items-center gap-3 transition-all duration-300 hover:text-red-600 group/item">
            <img src={iconPhone} alt="" className="h-3 w-3 text-white transition-all duration-300 
              group-hover/item:scale-110 group-hover/item:rotate-6" />
            <span>Tel: +251115 528080</span>
          </li>
          <li className="flex items-center gap-3 transition-all duration-300 hover:text-red-600 group/item">
            <img src={iconMobile} alt="" className="h-3 w-3 text-white transition-all duration-300 
              group-hover/item:scale-110 group-hover/item:rotate-6" />
            <span>Mob: +251911 516478</span>
          </li>
          <li className="flex items-center gap-3 transition-all duration-300 hover:text-red-600 group/item">
            <img src={iconEmail} alt="" className="h-3 w-3 text-white transition-all duration-300 
              group-hover/item:scale-110 group-hover/item:rotate-6" />
            <span>Email: gize@gizeplc.com</span>
          </li>
          <li className="flex items-center gap-3 transition-all duration-300 hover:text-red-600 group/item">
            <img src={iconTime} alt="" className="h-3 w-3 text-white transition-all duration-300 
              group-hover/item:scale-110 group-hover/item:rotate-6" />
            <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
          </li>
          <li className="flex items-center gap-3 transition-all duration-300 hover:text-red-600 group/item">
            <span className="font-bold text-red-600 cursor-pointer hover:underline">Director</span>
          </li>
        </ul>
      </div>

    </div>
  </div>

  {/* Bottom Section */}
  <div className="mt-4 border-t border-slate-300 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 
    py-3 text-center text-xs text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
      -translate-x-full animate-shimmer"></div>

    <div className="relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4">
        <span>© {new Date().getFullYear()} Gize Plc. All Rights Reserved.</span>
        <div className="flex gap-4 mt-1 md:mt-0">
          <a href="#" className="hover:text-red-300 transition-colors duration-300 text-xs">Privacy Policy</a>
          <a href="#" className="hover:text-red-300 transition-colors duration-300 text-xs">Terms of Service</a>
        </div>
      </div>
    </div>
  </div>
</footer>


    </div>
  );
}