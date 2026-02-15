import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Globe, BookOpen, Users, Star, ArrowRight, CheckCircle2, MapPin, ChevronLeft, ChevronRight, Shield, CircleCheck, Handshake, HeartHandshake, HelpCircle, FileText, Target, Plane, Home, Award, Briefcase } from "lucide-react";
import Layout from "@/components/Layout";
import EnquiryPopup from "@/components/EnquiryPopup";
import AnimatedSection from "@/components/AnimatedSection";
import { StaggeredList, StaggeredItem } from "@/components/StaggeredList";
import { useCountUp } from "@/hooks/useCountUp";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ukHero from "@/assets/uk-hero.jpg";
import australiaHero from "@/assets/australia-hero.jpg";
import canadaHero from "@/assets/canada-hero.jpg";
import germanyHero from "@/assets/germany-hero.jpg";
import usaHero from "@/assets/usa-hero.jpg";
import mbbsSliderHero from "@/assets/mbbs-slider-hero.jpg";
import faqStudents from "@/assets/faq-students.jpg";
import servicesHero from "@/assets/services-hero.jpg";
import flagUk from "@/assets/flag-uk.webp";
import flagAustralia from "@/assets/flag-australia.webp";
import flagCanada from "@/assets/flag-canada.svg";
import flagGermany from "@/assets/flag-germany.png";
import flagUsa from "@/assets/flag-usa.svg";

const heroSlides = [
  {
    image: ukHero,
    country: "United Kingdom",
    tagline: "🇬🇧 Study in the UK",
    heading: "World-Class Education in the United Kingdom",
    description: "Home to Oxford, Cambridge & top Russell Group universities. Shorter course durations, post-study work visa & global recognition.",
    type: "country" as const,
  },
  {
    image: australiaHero,
    country: "Australia",
    tagline: "🇦🇺 Study in Australia",
    heading: "Discover Opportunities in Australia",
    description: "Student-friendly environment with globally ranked universities, part-time work rights & post-study PR pathways.",
    type: "country" as const,
  },
  {
    image: canadaHero,
    country: "Canada",
    tagline: "🇨🇦 Study in Canada",
    heading: "Build Your Future in Canada",
    description: "Affordable tuition, multicultural campuses, generous post-graduation work permits & permanent residency options.",
    type: "country" as const,
  },
  {
    image: germanyHero,
    country: "Germany",
    tagline: "🇩🇪 Study in Germany",
    heading: "Engineering Excellence in Germany",
    description: "Near-zero tuition at public universities, world-leading STEM programmes & Europe's strongest economy.",
    type: "country" as const,
  },
  {
    image: mbbsSliderHero,
    country: "MBBS Abroad",
    tagline: "🩺 MBBS Abroad",
    heading: "Pursue Your Medical Dream Abroad",
    description: "Affordable MBBS programs in top medical universities across Kyrgyzstan, Kazakhstan, Georgia, Russia & more. NMC/WHO recognized degrees with complete support.",
    type: "mbbs" as const,
  },
];

const destinations = [
  { name: "United Kingdom", image: ukHero, flag: flagUk, desc: "World-class degrees with shorter course duration" },
  { name: "Australia", image: australiaHero, flag: flagAustralia, desc: "Student-friendly environment with global recognition" },
  { name: "Canada", image: canadaHero, flag: flagCanada, desc: "Affordable education with PR opportunities" },
  { name: "Germany", image: germanyHero, flag: flagGermany, desc: "Low tuition fees with engineering excellence" },
  { name: "USA", image: usaHero, flag: flagUsa, desc: "Top-ranked universities with diverse career opportunities" },
];

const services = [
  { icon: <BookOpen className="w-7 h-7" />, title: "Course Selection Guidance", desc: "Personalized recommendations based on your academic background, interests, and career goals." },
  { icon: <Target className="w-7 h-7" />, title: "Career Counselling", desc: "One-on-one sessions to align your study abroad plans with long-term career aspirations." },
  { icon: <FileText className="w-7 h-7" />, title: "Application & Document Assistance", desc: "End-to-end help with SOPs, LORs, essays, and university application submissions." },
  { icon: <Shield className="w-7 h-7" />, title: "Visa Processing & Interview Prep", desc: "Complete visa application support with mock interview sessions for confident preparation." },
  { icon: <Award className="w-7 h-7" />, title: "Scholarship & Financial Guidance", desc: "Identify and apply for scholarships, education loans, and financial aid opportunities." },
  { icon: <Plane className="w-7 h-7" />, title: "Pre-Departure & Post-Arrival Support", desc: "Travel briefing, airport pickup coordination, and settling-in assistance abroad." },
  { icon: <Home className="w-7 h-7" />, title: "Accommodation Assistance", desc: "Help finding safe, affordable student housing near your university campus." },
  { icon: <Briefcase className="w-7 h-7" />, title: "Internship & Job Placement", desc: "Guidance on part-time work opportunities and post-study career placement support." },
];

const testimonials = [
  { name: "Ananya Sharma", country: "UK", text: "Pravaas made my dream of studying in London a reality. Their guidance was invaluable!", rating: 5, initials: "AS" },
  { name: "Rahul Patel", country: "Canada", text: "From course selection to visa approval, they handled everything professionally.", rating: 5, initials: "RP" },
  { name: "Priya Nair", country: "Australia", text: "The team was so supportive throughout the entire process. Highly recommend!", rating: 5, initials: "PN" },
  { name: "Vikram Singh", country: "Germany", text: "Thanks to Pravaas, I got admission in one of the top engineering universities in Germany!", rating: 5, initials: "VS" },
  { name: "Sneha Reddy", country: "UK", text: "The visa process was so smooth. I couldn't have done it without their expert guidance.", rating: 5, initials: "SR" },
  { name: "Arjun Mehta", country: "Australia", text: "Excellent support from start to finish. They truly care about each student's success.", rating: 5, initials: "AM" },
];

const whyChooseUs = [
  { icon: <Shield className="w-6 h-6" />, title: "10+ Years Experience", desc: "Over a decade of expertise in international education consulting with proven track record." },
  { icon: <CircleCheck className="w-6 h-6" />, title: "98% Visa Success Rate", desc: "Industry-leading visa approval rates backed by meticulous documentation and preparation." },
  { icon: <Handshake className="w-6 h-6" />, title: "50+ University Partners", desc: "Exclusive partnerships with top-ranked universities in UK, Australia, and other destinations." },
  { icon: <HeartHandshake className="w-6 h-6" />, title: "End-to-End Support", desc: "From university selection to post-arrival assistance, we're with you every step of the way." },
];

const stats = [
  { value: 5000, suffix: "+", label: "Students Placed", variant: "primary" as const },
  { value: 10, suffix: "+", label: "Years Experience", variant: "accent" as const },
  { value: 50, suffix: "+", label: "Partner Universities", variant: "accent" as const },
  { value: 98, suffix: "%", label: "Visa Success", variant: "primary" as const },
];

const faqs = [
  { q: "What are the basic requirements to study abroad?", a: "Requirements vary by country and university, but generally include academic transcripts, English proficiency tests (IELTS/TOEFL), a valid passport, statement of purpose, and letters of recommendation. Our counselors will guide you through the specific requirements for your chosen destination." },
  { q: "How long does the application process take?", a: "The entire process from initial consultation to receiving an offer letter typically takes 4-8 weeks. Visa processing adds another 2-6 weeks depending on the country. We recommend starting at least 6-8 months before your intended intake." },
  { q: "Can I work while studying abroad?", a: "Yes! Most popular study destinations allow international students to work part-time (typically 20 hours/week) during term and full-time during breaks. Countries like Australia, Canada, and the UK have generous post-study work visa options too." },
  { q: "What is the cost of studying abroad?", a: "Costs vary significantly by country and university. Germany offers near-zero tuition at public universities, while the UK and Australia range from £10,000–£30,000/year. We help you find scholarships and affordable options that fit your budget." },
  { q: "Do you help with scholarship applications?", a: "Absolutely! We assist students in identifying and applying for merit-based, need-based, and university-specific scholarships. Many of our students have received partial to full scholarships at top universities worldwide." },
  { q: "What support do you provide after I arrive?", a: "Our support doesn't end at the airport. We help with accommodation arrangements, airport pickup coordination, bank account setup, local SIM cards, and initial settlement guidance to ensure a smooth transition." },
];

type ProgramTab = "bachelors" | "masters";

const CountUpStat = ({ value, suffix, label, variant }: { value: number; suffix: string; label: string; variant: "primary" | "accent" }) => {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div
      ref={ref}
      className={`rounded-2xl p-8 text-center ${
        variant === "primary"
          ? "bg-primary text-primary-foreground"
          : "bg-accent text-primary-foreground"
      }`}
    >
      <p className="font-heading text-3xl md:text-4xl font-bold mb-1">{count}{suffix}</p>
      <p className="text-sm opacity-90">{label}</p>
    </div>
  );
};

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeTab, setActiveTab] = useState<ProgramTab>("bachelors");
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = heroSlides[currentSlide];
  const programPath = activeTab === "bachelors" ? "/bachelors" : "/masters";

  return (
    <Layout>
      <EnquiryPopup />

      {/* Hero Slider */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {heroSlides.map((s, i) => (
          <img
            key={i}
            src={s.image}
            alt={s.country}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-overlay-dark" />

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <span
              key={`tag-${currentSlide}`}
              className="inline-block px-4 py-1.5 bg-primary/20 text-primary-foreground text-sm font-medium rounded-full mb-6 backdrop-blur-sm border border-primary-foreground/20 animate-fade-in"
            >
              {slide.tagline}
            </span>
            <h1
              key={`h-${currentSlide}`}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 animate-fade-in"
            >
              {slide.heading}
            </h1>
            <p
              key={`p-${currentSlide}`}
              className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed animate-fade-in"
            >
              {slide.description}
            </p>
            <div key={`cta-${currentSlide}`} className="flex flex-wrap gap-4 animate-fade-in">
              {slide.type === "mbbs" ? (
                <Link to="/mbbs" className="px-8 py-4 bg-hero-gradient text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity text-lg">
                  MBBS
                </Link>
              ) : (
                <>
                  <Link to="/masters" className="px-8 py-4 bg-hero-gradient text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity text-lg">
                    Masters
                  </Link>
                  <Link to="/bachelors" className="px-8 py-4 bg-card text-primary font-semibold rounded-xl hover:bg-background transition-colors text-lg shadow-elevated">
                    Bachelors
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/20 backdrop-blur-sm text-background hidden md:flex items-center justify-center hover:bg-background/30 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/20 backdrop-blur-sm text-background hidden md:flex items-center justify-center hover:bg-background/30 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? "bg-primary w-8" : "bg-background/50 hover:bg-background/70"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <AnimatedSection>
              <div>
                <span className="text-accent font-bold text-sm tracking-widest uppercase mb-3 block">Why Choose Us</span>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Your Success is Our <span className="text-accent">Priority</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-10">
                  At Pravaas International, we don't just process applications – we build futures. Our dedicated team of counselors brings together expertise, empathy, and a genuine commitment to seeing every student succeed.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {whyChooseUs.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right Stats Grid */}
            <AnimatedSection>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <CountUpStat key={i} value={stat.value} suffix={stat.suffix} label={stat.label} variant={stat.variant} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Popular Destinations with Tabs */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">Choose from top study destinations around the world</p>
              
              {/* Tabs */}
              <div className="inline-flex bg-card rounded-xl border border-border shadow-card p-1.5 gap-1">
                <button
                  onClick={() => setActiveTab("bachelors")}
                  className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                    activeTab === "bachelors"
                      ? "bg-hero-gradient text-primary-foreground shadow-soft"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  Bachelors
                </button>
                <button
                  onClick={() => setActiveTab("masters")}
                  className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                    activeTab === "masters"
                      ? "bg-hero-gradient text-primary-foreground shadow-soft"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  Masters
                </button>
              </div>
            </div>
          </AnimatedSection>
          <StaggeredList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.12}>
            {destinations.map((dest) => (
              <StaggeredItem key={dest.name}>
                <Link to={programPath} className="group block bg-card rounded-xl border border-border shadow-card hover:shadow-elevated transition-all hover:-translate-y-1">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img src={dest.image} alt={dest.name} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="relative px-5 pb-5 pt-3">
                    <div className="absolute -top-6 right-4 w-12 h-12 rounded-full overflow-hidden border-4 border-card shadow-lg bg-card">
                      <img src={dest.flag} alt={`${dest.name} flag`} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-heading text-lg font-bold">{dest.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{dest.desc}</p>
                    <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Explore {activeTab === "bachelors" ? "Bachelors" : "Masters"} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </StaggeredItem>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-accent font-bold text-sm tracking-widest uppercase mb-3 block">What We Offer</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive support at every stage of your study abroad journey</p>
            </div>
          </AnimatedSection>
          <StaggeredList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" staggerDelay={0.08}>
            {services.map((service, i) => (
              <StaggeredItem key={i}>
                <div className="bg-card rounded-2xl border border-border shadow-card p-6 hover:shadow-elevated hover:-translate-y-1 transition-all group h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-primary-foreground transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-base font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{service.desc}</p>
                  <Link to="/services" className="text-primary text-sm font-semibold flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Student Testimonials</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Hear from students who achieved their dreams with Pravaas</p>
            </div>
          </AnimatedSection>
          <div className="max-w-5xl mx-auto relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${testimonialIndex * (100 / 3)}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="w-full md:w-1/3 flex-shrink-0 px-3">
                    <div className="bg-card rounded-2xl p-8 border border-border shadow-card h-full">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                          {t.initials}
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{t.name}</p>
                          <p className="text-xs text-muted-foreground">Studying in {t.country}</p>
                        </div>
                      </div>
                      <div className="flex gap-1 mb-3">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-foreground text-sm leading-relaxed">"{t.text}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Carousel Controls */}
            <div className="flex justify-center gap-3 mt-8">
              {Array.from({ length: testimonials.length - 2 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === testimonialIndex ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/50"}`}
                  aria-label={`Testimonial page ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <img src={servicesHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-overlay-dark" />
        <div className="relative container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6">
              Start Your Study Abroad Journey Today
            </h2>
            <p className="text-background/80 text-lg mb-8 max-w-xl mx-auto">
              Take the first step towards your dream education. Our expert counselors are ready to guide you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-hero-gradient text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity text-lg">
                Book Free Counselling
              </Link>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-card text-primary font-semibold rounded-xl hover:bg-background transition-colors text-lg shadow-elevated"
              >
                WhatsApp Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Image */}
            <AnimatedSection>
              <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                <img src={faqStudents} alt="Students studying abroad" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-5 border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary-foreground">
                        <HelpCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-heading font-bold text-sm">Have more questions?</p>
                        <p className="text-xs text-muted-foreground">Contact us for a free consultation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right FAQs */}
            <AnimatedSection delay={0.2}>
              <div>
                <span className="text-accent font-bold text-sm tracking-widest uppercase mb-3 block">FAQ</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 leading-tight">
                  Frequently Asked <span className="text-accent">Questions</span>
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-5 bg-card shadow-card data-[state=open]:shadow-soft transition-shadow">
                      <AccordionTrigger className="text-sm font-semibold hover:no-underline py-4 text-left">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
