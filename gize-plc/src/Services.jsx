import { useMemo } from "react";
import "./Services.css";

import logo from "./images/gize_logo.png";
import iconLocation from "./icons/location.png";
import iconPhone from "./icons/telephone-call.png";
import iconMobile from "./icons/iphone.png";
import iconEmail from "./icons/email.png";
import iconTime from "./icons/time.png";

function SectionTitle({ title, subtitle, underline = true }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-extrabold uppercase tracking-wide text-slate-900 md:text-3xl">
        {title}
      </h2>
      {underline && <div className="mx-auto mt-2 h-1 w-16 bg-red-600" />}
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-xs text-slate-500">{subtitle}</p>}
    </div>
  );
}

export default function Services() {
  const serviceImages = useMemo(() => {
    const modules = import.meta.glob("./images/what-we-provide/*.{png,jpg,jpeg,svg,webp}", {
      eager: true,
      import: "default",
    });

    // Map by filename for stable pairing.
    const byName = Object.fromEntries(
      Object.entries(modules).map(([path, url]) => {
        const normalized = path.replace(/\\/g, "/");
        const filename = normalized.split("/").pop() || path;
        return [filename, url];
      }),
    );

    return {
      shipping: byName["Shipping_2.jpeg"],
      freight: byName["Freight_Forwarding.jpeg"],
      port: byName["Port_handling.jpeg"],
      warehouse: byName["Warehouse copy.jpeg"],
      transport: byName["Transportation2.jpeg"],
      customs: byName["Custom_clearance.jpg"],
    };
  }, []);

  const services = [
    {
      id: "shipping",
      title: "SHIPPING",
      desc: "solutions tailored to your business needs ensuring your cargo reaches its shipping seamless.",
      img: serviceImages.shipping,
    },
    {
      id: "freight",
      title: "FREIGHT FORWARDING",
      desc: "freight forwarding, from documentation to customs clearance, making international destination safely and on time.",
      img: serviceImages.freight,
    },
    {
      id: "port",
      title: "PORT HANDLING",
      desc: "We offer efficient port handling services to ensure smooth loading and unloading your cargo at ports worldwide.",
      img: serviceImages.port,
    },
    {
      id: "warehouse",
      title: "WAREHOUSING",
      desc: "Our secure warehousing facilities provide safe storage for your goods with inventory management and distribution services.",
      img: serviceImages.warehouse,
    },
    {
      id: "transport",
      title: "TRANSPORTATION",
      desc: "We provide reliable transportation for local and international cargo movement with real-time tracking.",
      img: serviceImages.transport,
    },
    {
      id: "customs",
      title: "CUSTOMS CLEARANCE",
      desc: "Our customs clearance services ensure your shipments comply with all regulations and pass through customs without delays.",
      img: serviceImages.customs,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-600">
      {/* NAVBAR */}
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
          <h1 className="text-2xl font-extrabold tracking-wide text-white md:text-3xl">Service</h1>
          <div className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-white/80">
            Home <span className="px-2">/</span> service
          </div>
        </div>
      </section>

      {/* OUR SERVICE */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            title="OUR SERVICE"
            subtitle="Comprehensive logistics solutions tailored to meet your specific needs"
          />

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative rounded-xl bg-white p-6 text-center shadow-lg transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-100/50"
              >
                {/* Shine effect overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 via-white/0 to-white/0 transition-all duration-700 group-hover:from-red-50/20 group-hover:via-white/0 group-hover:to-blue-50/20" />
                
                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-xl border border-transparent transition-all duration-500 group-hover:border-red-200/30" />
                
                {/* Content container */}
                <div className="relative z-10">
                  <div className="mx-auto h-40 w-full overflow-hidden rounded-lg bg-slate-100 transition-all duration-500 group-hover:scale-105">
                    {service.img ? (
                      <img
                        src={service.img}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-slate-200 to-slate-300" />
                    )}
                  </div>

                  <h3 className="mt-6 text-xs font-extrabold uppercase tracking-wide text-blue-800 transition-colors duration-300 group-hover:text-red-600">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[11px] leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-slate-700">
                    {service.desc}
                  </p>

                  <a
                    href="#"
                    className="mt-6 inline-flex items-center justify-center gap-1 text-[11px] font-bold text-red-600 transition-all duration-300 group-hover:gap-2 group-hover:text-red-700"
                  >
                    Learn More 
                    <span 
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT US */}
      <section className="bg-slate-50 pt-14 pb-32 md:pt-20 md:pb-52" id="contact">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold uppercase tracking-wide text-slate-900">CONTACT US</h2>
          </div>

          <div className="mx-auto mt-10 w-full max-w-md rounded-2xl bg-red-50/40 p-8 shadow-sm transition-all duration-500 hover:shadow-lg">
            <form className="space-y-4">
              <input
                className="w-full rounded bg-white px-4 py-2 text-xs text-slate-700 outline-none ring-1 ring-slate-200 transition-all duration-300 focus:scale-[1.02] focus:ring-2 focus:ring-red-200"
                placeholder="Name"
              />
              <input
                className="w-full rounded bg-white px-4 py-2 text-xs text-slate-700 outline-none ring-1 ring-slate-200 transition-all duration-300 focus:scale-[1.02] focus:ring-2 focus:ring-red-200"
                placeholder="Email"
              />
              <input
                className="w-full rounded bg-white px-4 py-2 text-xs text-slate-700 outline-none ring-1 ring-slate-200 transition-all duration-300 focus:scale-[1.02] focus:ring-2 focus:ring-red-200"
                placeholder="Phone No"
              />
              <select className="w-full rounded bg-white px-4 py-2 text-xs text-slate-500 outline-none ring-1 ring-slate-200 transition-all duration-300 focus:scale-[1.02] focus:ring-2 focus:ring-red-200">
                <option>Select Freight</option>
                <option>Shipping</option>
                <option>Freight Forwarding</option>
                <option>Port Handling</option>
                <option>Warehousing</option>
                <option>Transportation</option>
                <option>Customs clearance</option>
              </select>
              <textarea
                rows={5}
                className="w-full resize-none rounded bg-white px-4 py-2 text-xs text-slate-700 outline-none ring-1 ring-slate-200 transition-all duration-300 focus:scale-[1.02] focus:ring-2 focus:ring-red-200"
                placeholder="Message"
              />

              <button
                type="button"
                className="mx-auto mt-2 block w-40 rounded-full bg-red-600 py-2 text-xs font-extrabold uppercase tracking-wide text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER (same as Homepage) */}
      <footer id="contact" className="relative bg-[#EFEFEF] pb-8 text-sm text-slate-700 pt-0">
  {/* Top Banner */}
  <div className="relative z-30">
    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4">
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-xl shadow-xl shadow-red-200/60 
        py-8 px-8 md:px-12 flex flex-col md:flex-row justify-between items-center 
        border-2 border-white/20 backdrop-blur-sm overflow-hidden">

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/30 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/30 rounded-full blur-2xl"></div>
        </div>

        {/* Shimmer effect */}
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

    {/* Connector line */}
    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-6 w-1 h-20 
      bg-gradient-to-b from-red-600/60 to-transparent"></div>
  </div>

  {/* Main Footer Section */}
  <div className="relative pt-40 pb-6 px-4 md:px-12">
    <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">

      {/* Column 1: Company Info + Social Media */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/20 to-transparent 
          rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <img src={logo} alt="Gize PLC" className="relative mb-4 h-8 w-auto transition-all duration-300 
          hover:scale-105 hover:drop-shadow-lg" />
        <p className="relative text-xs leading-relaxed text-slate-500 mb-4">
          Gize Logistics and Transport is a Freight forwarding company managed by a team of
          professionals who are dedicated to responding promptly to customer demands. We offer
          comprehensive services customized to suit your needs
        </p>

        {/* Social Media Links */}
        <div className="mt-6 flex gap-2">
          {[
            { icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", label: "Facebook" },
            { icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z", label: "Twitter" },
            { icon: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z", label: "WhatsApp" },
          ].map((social, index) => (
            <a key={index} href="#" className="bg-black text-white p-2 rounded-full transition-all 
              duration-300 hover:bg-red-600 hover:text-white hover:scale-110" aria-label={social.label}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.icon} />
              </svg>
            </a>
          ))}
        </div>
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
              <img src={iconLocation} alt="" className="h-4 w-4 transition-all duration-300 
                group-hover/item:scale-110 group-hover/item:rotate-6" />
            </div>
            <span>Bole Rwanda Embassy road</span>
          </li>
          <li className="flex items-center gap-3 transition-all duration-300 hover:text-red-600 group/item">
            <img src={iconPhone} alt="" className="h-3 w-3 transition-all duration-300 
              group-hover/item:scale-110 group-hover/item:rotate-6" />
            <span>Tel: +251115 528080</span>
          </li>
          <li className="flex items-center gap-3 transition-all duration-300 hover:text-red-600 group/item">
            <img src={iconMobile} alt="" className="h-3 w-3 transition-all duration-300 
              group-hover/item:scale-110 group-hover/item:rotate-6" />
            <span>Mob: +251911 516478</span>
          </li>
          <li className="flex items-center gap-3 transition-all duration-300 hover:text-red-600 group/item">
            <img src={iconEmail} alt="" className="h-3 w-3 transition-all duration-300 
              group-hover/item:scale-110 group-hover/item:rotate-6" />
            <span>Email: gize@gizeplc.com</span>
          </li>
          <li className="flex items-center gap-3 transition-all duration-300 hover:text-red-600 group/item">
            <img src={iconTime} alt="" className="h-3 w-3 transition-all duration-300 
              group-hover/item:scale-110 group-hover/item:rotate-6" />
            <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
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
          <a href="#" className="hover:text-red-300 transition-colors duration-300 text-xs">Sitemap</a>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}