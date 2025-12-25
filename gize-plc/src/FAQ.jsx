import { useState } from "react";
import "./FAQ.css";

import logo from "./images/gize_logo.png";
import iconLocation from "./icons/location.png";
import iconPhone from "./icons/telephone-call.png";
import iconMobile from "./icons/iphone.png";
import iconEmail from "./icons/email.png";
import iconTime from "./icons/time.png";

function AccordionRow({ question, answer, isOpen, onClick }) {
  return (
    <div className="rounded-2xl bg-red-50/40 px-6 py-5">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <span className="text-[12px] font-semibold text-slate-700">{question}</span>
        <span className="mt-0.5 text-slate-500">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
            aria-hidden="true"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-[11px] leading-relaxed text-slate-500">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How can I track a shipment?",
      a: "Founded in Ethiopia's capital, Addis Ababa, over eighteen years ago, Gize PLC has established itself as a reputed leader in the transportation and logistics sector in the country and region at large.",
    },
    {
      q: "How can I track a shipment?",
      a: "You can track your shipment using our online tracking tool with your tracking number.",
    },
    {
      q: "What logistics services does Gize offer?",
      a: "We offer shipping, freight forwarding, port handling, warehousing, transportation, and customs clearance.",
    },
    {
      q: "What areas do you serve?",
      a: "We support local and international cargo movements, tailored to customer requirements and routes.",
    },
    {
      q: "How are shipping costs calculated?",
      a: "Costs are typically calculated based on cargo weight/volume, destination, service type, and any special handling requirements.",
    },
    {
      q: "How do you handle customs clearance?",
      a: "Our team manages documentation, compliance checks, and coordination with authorities to reduce delays.",
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
          <h1 className="text-2xl font-extrabold tracking-wide text-white md:text-3xl">FAQ</h1>
          <div className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-white/80">
            Home <span className="px-2">/</span> FAQS
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-slate-50 pt-14 pb-32 md:pt-20 md:pb-56">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="pt-6 md:pt-16">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                Frequently asked
              </h2>
              <div className="mt-1 text-3xl font-extrabold uppercase tracking-wide text-red-600 md:text-4xl">
                QUESTIONS
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((item, idx) => (
                <AccordionRow
                  key={`${item.q}-${idx}`}
                  question={item.q}
                  answer={item.a}
                  isOpen={openIndex === idx}
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <h3 className="text-lg font-extrabold text-slate-900 md:text-xl">Do you have more questions?</h3>
            <div className="mx-auto mt-6 max-w-xl text-[11px] leading-relaxed text-slate-500">
              Origin-to-destination freight movement and complete compliance management in a single,
              integrated platform. Meet the right team to help realize secure, timely deliveries
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-red-600 px-10 py-2 text-[11px] font-extrabold uppercase tracking-wide text-white shadow-sm transition hover:bg-red-700"
            >
              contact us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="relative bg-[#EFEFEF] pb-8 text-sm text-slate-700 pt-0">
              {/* Top Banner - Larger & Wider */}
              <div className="relative z-30">
                {/* Banner Container - Increased width */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4">
                  <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-xl shadow-xl shadow-red-200/60 
                    py-8 px-8 md:px-12 flex flex-col md:flex-row justify-between items-center 
                    border-2 border-white/20 backdrop-blur-sm overflow-hidden">
                    
                    {/* Background pattern - Larger */}
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
                    
                    <button className="relative z-10 bg-gradient-to-r from-[#EFEFEF] to-[#E0E0E0] text-slate-800 px-8 py-4 
                      font-bold text-base rounded-lg hover:from-[#E5E5E5] hover:to-[#D5D5D5] transition-all duration-300 
                      hover:scale-105 hover:shadow-xl hover:shadow-slate-900/20 active:scale-95
                      flex items-center gap-3 group mt-4 md:mt-0 border border-slate-300">
                      <span>Contact us</span>
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Connector line from banner to footer - Taller */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-6 w-1 h-20 
                  bg-gradient-to-b from-red-600/60 to-transparent"></div>
              </div>
      
              {/* Main Footer Section - Adjusted for larger banner */}
              <div className="relative pt-40 pb-6 px-4 md:px-12">
                <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
                  {/* Column 1: Company Info - Moved social media icons here */}
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
                    
                    {/* Social Media Links - Moved below logo and text */}
                    <div className="mt-6 flex gap-2">
                      {[
                        { icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", color: "bg-blue-600 hover:bg-blue-700", label: "Facebook" },
                        { icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z", color: "bg-sky-500 hover:bg-sky-600", label: "Twitter" },
                        { icon: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z", color: "bg-green-500 hover:bg-green-600", label: "WhatsApp" },
                      ].map((social, index) => (
                        <a key={index} href="#" className={`${social.color} text-white p-2 rounded-lg transition-all 
                          duration-300 hover:scale-110 hover:shadow-md`} aria-label={social.label}>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d={social.icon} />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
      
                  {/* Column 2: Our Services - Removed dot from heading */}
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
      
                  {/* Column 3: Quick Links - Removed dot from heading and removed CEO */}
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
                        "FAQ"
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
      
                  {/* Column 4: Contact Us - Removed dot from heading */}
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
                
                {/* Animated background */}
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
