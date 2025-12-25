import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import "./Homepage.css";
import logo from "./images/gize_logo.png";
import heroI2 from "./images/i2.jpeg";
import heroI3 from "./images/i3.jpeg";
import carIcon from "./images/car.svg";
import timeIcon from "./images/time.png";
import globalIcon from "./images/global.svg";
import testimonialImg from "./images/Jessica-James.png";
import iconLocation from "./icons/location.png";
import iconPhone from "./icons/telephone-call.png";
import iconMobile from "./icons/iphone.png";
import iconEmail from "./icons/email.png";
import iconTime from "./icons/time.png";

// Helper for accordion
function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-sm font-medium text-slate-700">{question}</span>
        <span className={`ml-4 transform transition-transform ${isOpen ? "rotate-180" : ""}`}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z" fill="#94A3B8"/>
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4 text-sm text-slate-500">{answer}</div>
      </div>
    </div>
  );
}

function SectionTitle({ title, subtitle, underline = false }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 uppercase tracking-wide">
        {title}
      </h2>
      {underline && <div className="mx-auto mt-2 h-1 w-16 bg-red-600"></div>}
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Custom hook for intersection observer
function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
}

// Updated Testimonial Carousel Component
const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      role: "CEO, TechCorp Inc.",
      img: testimonialImg,
      quote: "Gize Logistics has transformed our supply chain operations. Their efficient services and dedicated team ensured our products reached global markets seamlessly."
    },
    {
      id: 2,
      name: "Jessica James",
      role: "Operations Manager, Global Imports",
      img: testimonialImg,
      quote: "Working with Gize has been a game-changer. Their attention to detail and reliable delivery schedules have significantly reduced our logistics costs."
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Supply Chain Director",
      img: testimonialImg,
      quote: "The team's expertise in customs clearance and international shipping saved us countless hours and headaches. Highly recommended for global logistics."
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Logistics Coordinator",
      img: testimonialImg,
      quote: "From warehousing to last-mile delivery, Gize provides comprehensive solutions. Their real-time tracking system gives us complete visibility."
    },
  ];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning, testimonials.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning, testimonials.length]);

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Get 3 items centered around the currentIndex
  const getVisibleTestimonials = () => {
    const total = testimonials.length;
    const prev = (currentIndex - 1 + total) % total;
    const next = (currentIndex + 1) % total;
    return [
      { ...testimonials[prev], pos: 'left' },
      { ...testimonials[currentIndex], pos: 'center' },
      { ...testimonials[next], pos: 'right' }
    ];
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="bg-slate-50 py-5 md:py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-2">
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 uppercase tracking-tight">
            WHAT OUR CLIENTS SAY
          </h2>
          <div className="flex justify-center">
            <div className="h-1.5 w-20 bg-red-600"></div>
          </div>
        </div>

        <div className="relative h-[400px] flex items-center justify-center">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-10 z-40 bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-10 z-40 bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Cards Slider Area */}
          <div className="relative w-full max-w-5xl flex items-center justify-center h-full">
            {visibleTestimonials.map((testimonial) => {
              const isCenter = testimonial.pos === 'center';
              const isLeft = testimonial.pos === 'left';
              const isRight = testimonial.pos === 'right';
              
              return (
                <div
                  key={`${testimonial.id}`}
                  className={`
                    absolute transition-all duration-800 ease-in-out bg-[#EFEFEF] rounded-2xl p-8 md:p-10 shadow-xl
                    w-[85%] md:w-[450px] border border-slate-100
                    ${isCenter 
                      ? 'z-30 opacity-100 scale-110 translate-x-0 shadow-red-200/50 border-red-100' 
                      : 'z-10 opacity-80 blur-[0.5px] grayscale-[0.5]'
                    }
                    ${isLeft ? '-translate-x-[60%] md:-translate-x-[110%] scale-90' : ''}
                    ${isRight ? 'translate-x-[60%] md:translate-x-[110%] scale-90' : ''}
                  `}
                >
                  <div className="relative">
                    {/* Quote Icon */}
                    <div className="absolute -top-6 -left-4 text-7xl text-red-500/10 font-serif leading-none">“</div>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`h-16 w-16 rounded-full overflow-hidden border-2 transition-all duration-500 ${
                        isCenter ? 'border-red-500 shadow-md' : 'border-slate-200'
                      }`}>
                        <img 
                          src={testimonial.img} 
                          alt={testimonial.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className={`font-bold transition-all duration-500 ${
                          isCenter ? 'text-slate-900 text-lg' : 'text-slate-500 text-base'
                        }`}>
                          {testimonial.name}
                        </h3>
                        <p className={`uppercase tracking-widest font-semibold transition-all duration-500 ${
                          isCenter ? 'text-red-600 text-xs' : 'text-slate-400 text-[10px]'
                        }`}>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    
                    <p className={`italic leading-relaxed transition-all duration-500 ${
                      isCenter ? 'text-slate-700 text-base' : 'text-slate-400 text-sm line-clamp-3'
                    }`}>
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group focus:outline-none py-2"
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <div className={`
                h-2 rounded-full transition-all duration-500 
                ${index === currentIndex 
                  ? 'bg-red-600 w-10 shadow-lg shadow-red-200' 
                  : 'bg-slate-300 w-2 group-hover:bg-slate-400'
                }
              `} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

/* CountUp Component */
function CountUp({ end, suffix = "", isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1200;
    const step = Math.ceil(end / (duration / 16));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, isVisible]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

/* StatsSection Component */
const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { target: 15, suffix: "+", label: "Years Experience" },
    { target: 1000, suffix: "+", label: "Clients Worldwide" },
    { target: 50, suffix: "+", label: "Countries Served" },
    { target: 24, suffix: "/7", label: "Customer Support" },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="
                bg-white p-6 text-center
                shadow-md shadow-red-300/40
                rounded-xl
                transition-all duration-300
                hover:shadow-red-500/60 hover:-translate-y-2
              "
            >
              <div className="text-4xl font-bold text-red-600 mb-2">
                <CountUp
                  end={stat.target}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>
              <p className="text-xs font-medium text-slate-500 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




export default function Homepage() {
  const heroSlides = useMemo(
    () => [
      {
        id: "global-logistics-service",
        image: heroI2,
        title: "GLOBAL LOGISTICS SERVICE",
        desc: "Reliable, end-to-end logistics support—planned routes, proactive updates, and service you can trust across borders and cities.",
      },
      {
        id: "door-to-door",
        image: heroI2,
        title: "DOOR TO DOOR YOUR CARGO MATTERS",
        desc: "From pickup to final delivery, we handle every step with clear communication, careful handling, and dependable timelines.",
      },
      {
        id: "shipping-solution",
        image: heroI3,
        title: "COMPLETE SHIPING SOLUTION",
        desc: "End-to-end logistics—freight forwarding, documentation, customs clearance, warehousing, and last-mile delivery—built around your schedule.",
      },
    ],
    []
  );
  // ... after the TestimonialCarousel component

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { target: 15, suffix: "+", label: "Years Experience" },
    { target: 1000, suffix: "+", label: "Clients Worldwide" },
    { target: 50, suffix: "+", label: "Countries Served" },
    { target: 24, suffix: "/7", label: "Customer Support" },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="rounded bg-white p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg border-l-4 border-red-600"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="text-4xl font-bold text-red-600">
                <CountUp end={stat.target} suffix={stat.suffix} isVisible={isVisible} />
              </div>
              <div className="mt-2 h-1 w-12 bg-red-600 mx-auto mb-4 rounded-full transition-all duration-300" />
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wide leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ... then the Homepage component

  const [heroIndex, setHeroIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  
  // Refs for animation
  const whyChooseRef = useRef(null);
  const cardRefs = useRef([]);
  const isWhyChooseVisible = useIsVisible(whyChooseRef);

  // Fix: Use useRef for interval to clear properly
  const slideInterval = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    handleChange();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    // Clear any existing interval
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    
    if (prefersReducedMotion) return;
    
    // Fix: Set faster interval (6000ms instead of 10000ms)
    slideInterval.current = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 6000);
    
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [prefersReducedMotion, heroSlides.length]);

  // Fix: Make arrow functions more robust
  const goPrevHero = (e) => {
    if (e) e.preventDefault();
    setHeroIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  };
  
  const goNextHero = (e) => {
    if (e) e.preventDefault();
    setHeroIndex((current) => (current + 1) % heroSlides.length);
  };
  
  const goToHero = (index) => {
    setHeroIndex(index);
  };

  // Load images
  const provideImages = useMemo(() => {
    const modules = import.meta.glob("./images/what-we-provide/*.{png,jpg,jpeg,svg,webp}", {
      eager: true,
      import: "default",
    });
    return Object.values(modules);
  }, []);

  const partnerLogos = useMemo(() => {
    const modules = import.meta.glob("./images/partners/*.{png,jpg,jpeg,svg,webp}", {
      eager: true,
      import: "default",
    });
    return Object.values(modules);
  }, []);

  const [openFaq, setOpenFaq] = useState(0);

  const whyChoose = [
    {
      id: "global",
      icon: globalIcon,
      title: "Global Network",
      desc: "Access to our extensive network of partners worldwide helping us provide seamless door-to-door service for all your cargo needs.",
    },
    {
      id: "diversified",
      icon: carIcon,
      title: "Diversified Services",
      desc: "From shipping and freight forwarding to customs clearance and warehousing, we offer comprehensive solutions tailored to your business requirements.",
    },
    {
      id: "timely",
      icon: timeIcon,
      title: "Fast & Timely Delivery",
      desc: "We pride ourselves on providing fast and timely door-to-door services that meet your schedule constraints.",
    },
  ];

  const provideCards = [
    { id: "ship", title: "SHIPPING", desc: "solutions tailored to your business needs ensuring your cargo reaches its shipping seamless.", imgIndex: 0 },
    { id: "freight", title: "FREIGHT FORWARDING", desc: "freight forwarding, from documentation to customs clearance, making international destination safely and on time.", imgIndex: 1 },
    { id: "port", title: "PORT HANDLING", desc: "We offer efficient port handling services to ensure smooth loading and unloading your cargo at ports worldwide.", imgIndex: 2 },
    { id: "warehouse", title: "WAREHOUSING", desc: "Our secure warehousing facilities provide safe storage for your goods with inventory management and distribution services.", imgIndex: 3 },
    { id: "transport", title: "TRANSPORTATION", desc: "We provide reliable transportation for local and international cargo movement with real-time tracking.", imgIndex: 4 },
    { id: "customs", title: "CUSTOMS CLEARANCE", desc: "Our customs clearance services ensure your shipments comply with all regulations and pass through customs without delays.", imgIndex: 5 },
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "1000+", label: "Clients Worldwide" },
    { value: "50+", label: "Countries Served" },
    { value: "24/7", label: "Customer Support" },
  ];

  const faqs = [
    { q: "How can I track a shipment?", a: "Founded in Ethiopia's capital, Addis Ababa, over eighteen years ago, Gize PLC has established itself as a reputed leader in the transportation and logistics sector in the country and region at large." },
    { q: "How can I track a shipment?", a: "You can track your shipment using our online tracking tool with your tracking number." },
    { q: "What logistics services does Gize offer?", a: "We offer shipping, freight forwarding, warehousing, and customs clearance services." },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-600">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center">
            <img src={logo} alt="Gize PLC" className="h-12 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest text-slate-800 uppercase">
            <a href="#" className="hover:text-red-600 transition-colors">Home</a>
            <a href="#services" className="hover:text-red-600 transition-colors">Services</a>
            <a href="#about" className="hover:text-red-600 transition-colors">About Us</a>
            <a href="#faq" className="hover:text-red-600 transition-colors">FAQ</a>
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-block rounded bg-red-500 px-6 py-2 text-xs font-bold text-white uppercase tracking-wide shadow-md transition hover:bg-red-600"
          >
            contact us
          </a>
        </div>
      </header>

      {/* HERO SECTION - FIXED ARROWS AND FASTER TRANSITIONS */}
      <section className="relative h-[500px] w-full overflow-hidden bg-slate-900">
        {/* Slideshow Background */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, idx) => {
            const isActive = idx === heroIndex;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
                aria-hidden={!isActive}
              >
                <img
                  src={slide.image}
                  alt=""
                  className={`h-full w-full object-cover opacity-60 ${
                    !prefersReducedMotion && isActive ? "animate-heroKenburns" : ""
                  }`}
                />
              </div>
            );
          })}

          {/* Overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/40 to-slate-950/70 z-20" />
        </div>
        
        {/* Overlay Content */}
        <div className="relative z-30 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <div key={heroSlides[heroIndex].id} className="max-w-3xl">
            <h1
              className={`${prefersReducedMotion ? "" : "animate-heroIn"} text-3xl md:text-5xl font-extrabold uppercase tracking-wider drop-shadow-md`}
            >
              {heroSlides[heroIndex].title}
            </h1>
            <p
              className={`${prefersReducedMotion ? "" : "animate-heroIn"} mt-4 max-w-2xl mx-auto text-sm md:text-base font-light text-slate-100`}
              style={prefersReducedMotion ? undefined : { animationDelay: "140ms" }}
            >
              {heroSlides[heroIndex].desc}
            </p>

            <div
              className={`${prefersReducedMotion ? "" : "animate-heroIn"} mt-8 flex flex-col sm:flex-row items-center justify-center gap-4`}
              style={prefersReducedMotion ? undefined : { animationDelay: "260ms" }}
            >
              <a
                href="#services"
                className="rounded bg-red-600 px-8 py-3 text-xs font-bold uppercase tracking-wide text-white shadow-lg transition hover:bg-red-700"
              >
                Learn More
              </a>
              <a
                href="#contact"
                className="rounded border border-white bg-transparent px-8 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-slate-900"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-8 flex gap-2 z-30">
            {heroSlides.map((slide, idx) => {
              const isActive = idx === heroIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToHero(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={isActive ? "true" : "false"}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    isActive ? "bg-red-600 scale-110" : "bg-white/60 hover:bg-white"
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Floating Badges */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 space-y-4 hidden md:block z-30">
           <div className="flex items-center gap-3 rounded-full bg-red-500 px-4 py-2 text-white shadow-lg animate-floaty">
             <div className="text-[10px] font-bold leading-tight">
               Call Us Now<br/><span className="font-normal opacity-80">24/7 Support</span>
             </div>
           </div>
           <div className="flex items-center gap-3 rounded-full bg-green-500 px-4 py-2 text-white shadow-lg animate-floaty" style={{animationDelay: '1s'}}>
             <div className="text-[10px] font-bold leading-tight">
               Chat With Us<br/><span className="font-normal opacity-80">We're online now</span>
             </div>
           </div>
        </div>

        {/* FIXED ARROWS - Added z-40 and pointer-events-auto */}
        <button
          type="button"
          onClick={goPrevHero}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm flex items-center justify-center transition hover:bg-white/20 z-40 pointer-events-auto cursor-pointer"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={goNextHero}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm flex items-center justify-center transition hover:bg-white/20 z-40 pointer-events-auto cursor-pointer"
        >
          ›
        </button>
      </section>

      {/* WHY CHOOSE SECTION - UPDATED WITH ANIMATIONS */}
      <section ref={whyChooseRef} className="py-16 md:py-20 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle 
            title="WHY CHOOSE GIZE PLC" 
            subtitle="Gize Logistics and Transport is managed by a team of professionals dedicated to responding promptly to customer demands"
          />

          <div className="grid gap-8 md:grid-cols-3">
            {whyChoose.map((item, index) => (
              <div 
                key={item.id} 
                ref={el => cardRefs.current[index] = el}
                className={`group relative rounded bg-white p-8 text-center shadow-lg transition-all duration-500 hover:-translate-y-1 border-t-4 border-red-500
                  ${isWhyChooseVisible ? 'animate-slideFromTop opacity-100' : 'opacity-0 translate-y-[-50px]'}`}
                style={{
                  animationDelay: isWhyChooseVisible ? `${index * 150}ms` : '0ms',
                  animationFillMode: 'forwards'
                }}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(null)}
                onTouchStart={() => setActiveCard(item.id)}
                onTouchEnd={() => setActiveCard(null)}
              >
                {/* Red Overlay Animation */}
                <div className={`absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/5 to-red-500/10 
                  transition-all duration-300 ease-out rounded
                  ${activeCard === item.id ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}></div>
                
                <div className="relative z-10">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 
                    transition-all duration-300 group-hover:scale-110 group-hover:bg-red-100">
                    <img 
                      src={item.icon} 
                      alt={item.title} 
                      className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" 
                    />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-slate-900 transition-colors duration-300 
                    group-hover:text-red-600">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE PROVIDE SECTION */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle title="WHAT WE PROVIDE" underline />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {provideCards.map((card, idx) => (
              <div 
                key={card.id} 
                className="group bg-white shadow-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-300/50 active:scale-95 animate-slideFromTop"
                style={{
                  animationDelay: `${idx * 0.2}s`,
                  animationFillMode: 'both'
                }}
                onClick={(e) => {
                  // Add bounce effect on click/touch
                  e.currentTarget.classList.add('animate-bounce-once');
                  setTimeout(() => {
                    e.currentTarget.classList.remove('animate-bounce-once');
                  }, 300);
                }}
              >
                <div className="h-48 overflow-hidden">
                  {provideImages[card.imgIndex] ? (
                    <img 
                      src={provideImages[card.imgIndex]} 
                      alt={card.title} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="h-full w-full bg-slate-200"></div>
                  )}
                </div>
                <div className="p-6 text-center">
                  <h3 className="mb-3 text-sm font-bold uppercase text-slate-800">{card.title}</h3>
                  <p className="mb-4 text-xs text-slate-500 leading-relaxed">{card.desc}</p>
                  <a href="#" className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center justify-center gap-1 group/arrow">
                    Learn More 
                    <span className="transition-transform duration-300 group-hover/arrow:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION - UPDATED WITH ROTATING CAROUSEL */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <SectionTitle title="OUR PARTNERS" underline />
          
          <div className="mt-12 relative overflow-hidden">
            {/* Carousel container with duplicated content for seamless loop */}
            <div className="flex animate-partnerScroll">
              {/* Original partner logos */}
              {partnerLogos.length > 0 ? (
                <>
                  {partnerLogos.map((logo, i) => (
                    <div key={i} className="flex-shrink-0 mx-6">
                      <img 
                        src={logo} 
                        alt="Partner" 
                        className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 filter hover:drop-shadow-lg hover:brightness-110"
                      />
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {partnerLogos.map((logo, i) => (
                    <div key={`dup-${i}`} className="flex-shrink-0 mx-6">
                      <img 
                        src={logo} 
                        alt="Partner" 
                        className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 filter hover:drop-shadow-lg hover:brightness-110"
                      />
                    </div>
                  ))}
                </>
              ) : (
                // Colorful placeholder partners
                <>
                  {[
                    { name: "HAE", color: "text-blue-500 hover:text-blue-600" },
                    { name: "IATA", color: "text-green-500 hover:text-green-600" },
                    { name: "DHL", color: "text-yellow-500 hover:text-yellow-600" },
                    { name: "FedEx", color: "text-purple-500 hover:text-purple-600" },
                    { name: "UPS", color: "text-brown-500 hover:text-brown-600" },
                    { name: "Maersk", color: "text-red-500 hover:text-red-600" },
                    { name: "CMA CGM", color: "text-indigo-500 hover:text-indigo-600" },
                  ].map((partner, i) => (
                    <div key={i} className="flex-shrink-0 mx-6">
                      <div className={`text-2xl font-bold ${partner.color} transition-all duration-300 hover:scale-110`}>
                        {partner.name}
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {[
                    { name: "HAE", color: "text-blue-500 hover:text-blue-600" },
                    { name: "IATA", color: "text-green-500 hover:text-green-600" },
                    { name: "DHL", color: "text-yellow-500 hover:text-yellow-600" },
                    { name: "FedEx", color: "text-purple-500 hover:text-purple-600" },
                    { name: "UPS", color: "text-brown-500 hover:text-brown-600" },
                    { name: "Maersk", color: "text-red-500 hover:text-red-600" },
                    { name: "CMA CGM", color: "text-indigo-500 hover:text-indigo-600" },
                  ].map((partner, i) => (
                    <div key={`dup-${i}`} className="flex-shrink-0 mx-6">
                      <div className={`text-2xl font-bold ${partner.color} transition-all duration-300 hover:scale-110`}>
                        {partner.name}
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION - UPDATED WITH CAROUSEL */}
      <TestimonialCarousel />

      {/* STATS SECTION */}
      <StatsSection />


      {/* FAQ SECTION */}
      <section className="bg-slate-50 pt-16 md:pt-20 pb-40 md:pb-60">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Frequently asked <span className="text-red-600">QUESTIONS</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_auto]">
            <div className="rounded-xl bg-red-50/50 p-6 md:p-8">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openFaq === i}
                  onClick={() => setOpenFaq(i === openFaq ? -1 : i)}
                />
              ))}
            </div>
            <div className="flex items-end justify-center md:justify-start">
              <div className="flex items-end justify-center md:justify-start">
                <a 
                  href="#contact" 
                  className="rounded bg-red-600 px-8 py-3 text-xs font-bold text-white uppercase shadow-lg hover:bg-red-700"
                >
                  Ask More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* FOOTER - LANDINGFOLIO INSPIRED */}
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