import "./Contact.css";

import logo from "./images/gize_logo.png";
import iconLocation from "./icons/location.png";
import iconPhone from "./icons/telephone-call.png";
import iconMobile from "./icons/iphone.png";
import iconEmail from "./icons/email.png";
import iconTime from "./icons/time.png";

function IconBox({ children }) {
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-red-600 text-white">
      {children}
    </span>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-600">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
          <img src={logo} alt="Gize PLC" className="h-12 w-auto" />

          <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-widest md:flex">
            {["Home", "Services", "About Us", "FAQ"].map((item) => (
              <a key={item} href="#" className="hover:text-red-600">
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded bg-red-500 px-6 py-2 text-xs font-bold uppercase text-white shadow-md hover:bg-red-600 md:inline-block"
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-[320px] bg-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d')] bg-cover bg-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/30" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4">
          <h1 className="text-3xl font-extrabold text-white">Contact Us</h1>
          <p className="mt-2 text-xs uppercase text-white/80">Home / Contact Us</p>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl border border-red-200 p-10">
            <div className="grid gap-10 md:grid-cols-2">
              {/* FORM */}
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900">Get in Touch</h2>

                <form className="mt-8 space-y-4">
                  {["Full Name", "Email Address", "Subject Line"].map((p) => (
                    <input
                      key={p}
                      placeholder={p}
                      className="w-full rounded border border-red-200 px-4 py-2 text-xs focus:ring-2 focus:ring-red-100"
                    />
                  ))}

                  <textarea
                    rows={7}
                    placeholder="Drop Your Message..."
                    className="w-full rounded border border-red-200 px-4 py-3 text-xs focus:ring-2 focus:ring-red-100"
                  />

                  <button className="rounded bg-red-600 px-8 py-2 text-xs font-bold uppercase text-white hover:bg-red-700">
                    Send Message
                  </button>
                </form>
              </div>

              {/* CONTACT INFO */}
              <div className="rounded-2xl bg-red-50 p-10">
                <h3 className="text-center text-lg font-extrabold">Contact Information</h3>

                <div className="mt-10 space-y-5">
                  <div className="flex items-center gap-4">
                    <IconBox>✉</IconBox>
                    <span className="text-xs font-semibold">gize@gizeplc.com</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <IconBox>📍</IconBox>
                    <span className="text-xs font-semibold">
                      Bole Rwanda Embassy Road
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <IconBox>📞</IconBox>
                    <span className="text-xs font-semibold">+251 911 516478</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FULL WIDTH MAP */}
          <div className="mt-16 mb-16">
            <div className="overflow-hidden rounded-2xl shadow-md">
              <iframe
                title="Gize PLC Location"
                src="https://www.google.com/maps?q=Bole%20Rwanda%20Embassy%20road%20Addis%20Ababa&output=embed"
                className="h-[400px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#EFEFEF] py-16 text-xs text-slate-600">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-4">
          <div>
            <img src={logo} className="mb-4 h-10" />
            <p>
              Gize Logistics and Transport is a professional freight forwarding
              company providing tailored solutions.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Our Services</h4>
            <ul className="space-y-2">
              {["Shipping", "Warehousing", "Transportation"].map((s) => (
                <li key={s}>‹ {s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Contact"].map((s) => (
                <li key={s}>‹ {s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <img src={iconLocation} className="h-4" />
                Bole Rwanda Embassy Road
              </li>
              <li className="flex gap-2">
                <img src={iconPhone} className="h-4" />
                +251115 528080
              </li>
              <li className="flex gap-2">
                <img src={iconEmail} className="h-4" />
                gize@gizeplc.com
              </li>
              <li className="flex gap-2">
                <img src={iconTime} className="h-4" />
                Mon–Fri 8:00–6:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 bg-slate-500 py-4 text-center text-white">
          All Rights Reserved by Gize PLC
        </div>
      </footer>
    </div>
  );
}
