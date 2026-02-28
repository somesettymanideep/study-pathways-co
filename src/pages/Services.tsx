import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen, GraduationCap, Globe, FileText, Shield, Plane, Home,
  Target, ArrowRight, Users, Briefcase, Award
} from "lucide-react";
import Layout from "@/components/Layout";
import useScrollReveal from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import servicesHero from "@/assets/services-hero.jpg";
import ukHero from "@/assets/uk-hero.jpg";
import australiaHero from "@/assets/australia-hero.jpg";
import canadaHero from "@/assets/canada-hero.jpg";
import germanyHero from "@/assets/germany-hero.jpg";
import usaHero from "@/assets/usa-hero.jpg";
import flagUk from "@/assets/flag-uk.webp";
import flagAustralia from "@/assets/flag-australia.webp";
import flagCanada from "@/assets/flag-canada.svg";
import flagGermany from "@/assets/flag-germany.png";
import flagUsa from "@/assets/flag-usa.svg";


const expertiseCards = [
  { title: "UK Education Specialist", desc: "Deep expertise in UK university admissions, visa procedures, and student life guidance.", icon: <Globe className="w-8 h-8" />, colorScheme: "yellow" as const },
  { title: "Master's Programs Guidance", desc: "Comprehensive support for postgraduate applications across top global universities.", icon: <GraduationCap className="w-8 h-8" />, colorScheme: "blue" as const },
  { title: "Bachelor's Programs Guidance", desc: "Expert counselling for undergraduate course selection and university placements.", icon: <BookOpen className="w-8 h-8" />, colorScheme: "yellow" as const },
];

const studyDestinations = [
  { name: "United Kingdom (UK)", image: ukHero, flag: flagUk, universities: "Oxford, Cambridge, Imperial College", courses: "Business, Engineering, Medicine" },
  { name: "United States (USA)", image: usaHero, flag: flagUsa, universities: "MIT, Stanford, Harvard", courses: "Computer Science, MBA, Law" },
  { name: "Australia", image: australiaHero, flag: flagAustralia, universities: "Melbourne, Sydney, ANU", courses: "Data Science, Nursing, Architecture" },
  { name: "Canada", image: canadaHero, flag: flagCanada, universities: "Toronto, UBC, McGill", courses: "Engineering, IT, Business" },
  { name: "Germany", image: germanyHero, flag: flagGermany, universities: "TU Munich, Heidelberg, RWTH Aachen", courses: "Mechanical Eng, Automotive, Research" },
  { name: "Finland & Europe", image: germanyHero, flag: flagGermany, universities: "Aalto, Helsinki, TU Delft", courses: "Design, Sustainability, Technology" },
];

const servicesList = [
  { icon: <BookOpen className="w-7 h-7" />, title: "Course Selection Guidance", desc: "Personalized recommendations based on your academic background, interests, and career goals.", slug: "course-selection-guidance" },
  { icon: <Target className="w-7 h-7" />, title: "Career Counselling", desc: "One-on-one sessions to align your study abroad plans with long-term career aspirations.", slug: "career-counselling" },
  { icon: <FileText className="w-7 h-7" />, title: "Application & Document Assistance", desc: "End-to-end help with SOPs, LORs, essays, and university application submissions.", slug: "application-document-assistance" },
  { icon: <Shield className="w-7 h-7" />, title: "Visa Processing & Interview Prep", desc: "Complete visa application support with mock interview sessions for confident preparation.", slug: "visa-processing-interview-prep" },
  { icon: <Award className="w-7 h-7" />, title: "Scholarship & Financial Guidance", desc: "Identify and apply for scholarships, education loans, and financial aid opportunities.", slug: "scholarship-financial-guidance" },
  { icon: <Plane className="w-7 h-7" />, title: "Pre-Departure & Post-Arrival Support", desc: "Travel briefing, airport pickup coordination, and settling-in assistance abroad.", slug: "pre-departure-post-arrival-support" },
  { icon: <Home className="w-7 h-7" />, title: "Accommodation Assistance", desc: "Help finding safe, affordable student housing near your university campus.", slug: "accommodation-assistance" },
  { icon: <Briefcase className="w-7 h-7" />, title: "Internship & Job Placement", desc: "Guidance on part-time work opportunities and post-study career placement support.", slug: "internship-job-placement" },
];

const achievements = [
  { value: 300, suffix: "+", label: "Visa Approved", icon: <Shield className="w-7 h-7" /> },
  { value: 12, suffix: "+", label: "Countries", icon: <Globe className="w-7 h-7" /> },
  { value: 99.5, suffix: "%", label: "Satisfied Clients", icon: <Users className="w-7 h-7" /> },
  { value: 3, suffix: "+", label: "Offices", icon: <Home className="w-7 h-7" /> },
];

const AchievementCounter = ({ value, suffix, label, icon }: { value: number; suffix: string; label: string; icon: React.ReactNode }) => {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="flex items-center gap-5">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent flex items-center justify-center text-primary-foreground shrink-0">{icon}</div>
      <div>
        <p className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">{count}{suffix}</p>
        <p className="text-primary-foreground/80 font-medium text-sm md:text-base">{label}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const [hoveredDest, setHoveredDest] = useState<number | null>(null);
  useScrollReveal();

  return (
    <Layout>
      {/* 1. Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <img src={servicesHero} alt="International students on campus" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-overlay-dark" />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 animate-fade-in">
            Study Abroad Consultancy Services
          </h1>
          <p className="text-lg md:text-xl text-background/80 mb-8 max-w-2xl mx-auto animate-fade-in">
            Your trusted partner for global education success
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
            <Link to="/contact" className="px-8 py-4 bg-hero-gradient text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity text-lg">
              Free Counselling
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-card text-primary font-semibold rounded-xl hover:bg-background transition-colors text-lg shadow-elevated">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Our Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-bold text-sm tracking-widest uppercase mb-3 block" data-animate="fadeInDown">What We Offer</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-animate="fadeInUp">Our Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto" data-animate="fadeInUp" data-delay="0.1s">Comprehensive support at every stage of your study abroad journey</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {servicesList.map((service, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border shadow-card p-6 hover:shadow-elevated hover:-translate-y-1 transition-all group h-full flex flex-col" data-animate="fadeInUp" data-delay={`${0.1 + i * 0.1}s`}>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-primary-foreground transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-body text-base font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{service.desc}</p>
                <Link to={`/services/${service.slug}`} className="text-primary text-sm font-semibold flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-bold text-sm tracking-widest uppercase mb-3 block" data-animate="fadeInDown">Our Expertise</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-animate="fadeInUp">What We Specialize In</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto" data-animate="fadeInUp" data-delay="0.1s">
              We specialize in guiding students to study in the United Kingdom with expert knowledge of admissions, universities, and visa procedures.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {expertiseCards.map((card, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border shadow-card p-8 text-center hover:shadow-elevated hover:-translate-y-1 transition-all" data-animate="slideInUp" data-delay={`${0.1 + i * 0.15}s`}>
                <div
                  className={`w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center ${
                    card.colorScheme === "yellow"
                      ? "bg-accent/15 text-accent"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {card.icon}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Achievements (moved above Study Destinations) */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <img src={servicesHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 max-w-5xl mx-auto">
            {achievements.map((a, i) => (
              <div key={i} data-animate="fadeInUp" data-delay={`${0.1 + i * 0.15}s`}>
                <AchievementCounter value={a.value} suffix={a.suffix} label={a.label} icon={a.icon} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Study Destinations */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-bold text-sm tracking-widest uppercase mb-3 block" data-animate="fadeInDown">Destinations</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-animate="fadeInUp">Study Destinations</h2>
            <p className="text-muted-foreground max-w-xl mx-auto" data-animate="fadeInUp" data-delay="0.1s">Explore top study destinations around the world</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {studyDestinations.map((dest, i) => (
              <div key={i}
                className="group bg-card rounded-2xl border border-border shadow-card overflow-hidden hover:shadow-elevated hover:-translate-y-1 transition-all cursor-pointer"
                onMouseEnter={() => setHoveredDest(i)}
                onMouseLeave={() => setHoveredDest(null)}
                data-animate="slideInUp" data-delay={`${0.1 + i * 0.12}s`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute inset-0 bg-primary/80 flex flex-col items-center justify-center text-primary-foreground p-4 transition-opacity duration-300 ${hoveredDest === i ? "opacity-100" : "opacity-0"}`}>
                    <p className="font-heading font-bold text-sm mb-2">🏛️ Top Universities</p>
                    <p className="text-xs text-center mb-3 opacity-90">{dest.universities}</p>
                    <p className="font-heading font-bold text-sm mb-2">📚 Popular Courses</p>
                    <p className="text-xs text-center opacity-90">{dest.courses}</p>
                  </div>
                </div>
                <div className="relative px-5 pb-5 pt-3">
                  <div className="absolute -top-6 right-4 w-12 h-12 rounded-full overflow-hidden border-4 border-card shadow-lg bg-card">
                    <img src={dest.flag} alt={`${dest.name} flag`} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-heading text-lg font-bold">{dest.name}</h3>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
