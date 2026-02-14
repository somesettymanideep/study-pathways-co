import { Link } from "react-router-dom";
import { GraduationCap, Globe, BookOpen, Users, Star, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import EnquiryPopup from "@/components/EnquiryPopup";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-students.jpg";
import ukHero from "@/assets/uk-hero.jpg";
import australiaHero from "@/assets/australia-hero.jpg";
import canadaHero from "@/assets/canada-hero.jpg";
import germanyHero from "@/assets/germany-hero.jpg";

const destinations = [
  { name: "United Kingdom", image: ukHero, path: "/study-in-uk", desc: "World-class degrees with shorter course duration" },
  { name: "Australia", image: australiaHero, path: "/study-in-australia", desc: "Student-friendly environment with global recognition" },
  { name: "Canada", image: canadaHero, path: "/study-in-canada", desc: "Affordable education with PR opportunities" },
  { name: "Germany", image: germanyHero, path: "/study-in-germany", desc: "Low tuition fees with engineering excellence" },
];

const services = [
  { icon: <BookOpen className="w-6 h-6" />, title: "Course Selection", desc: "Expert guidance on choosing the right course and university" },
  { icon: <GraduationCap className="w-6 h-6" />, title: "Application Support", desc: "End-to-end application and documentation assistance" },
  { icon: <Globe className="w-6 h-6" />, title: "Visa Guidance", desc: "Complete visa application support and interview prep" },
  { icon: <Users className="w-6 h-6" />, title: "Pre-Departure Help", desc: "Accommodation, travel, and settlement guidance" },
];

const testimonials = [
  { name: "Ananya Sharma", country: "UK", text: "Pravaas made my dream of studying in London a reality. Their guidance was invaluable!", rating: 5 },
  { name: "Rahul Patel", country: "Canada", text: "From course selection to visa approval, they handled everything professionally.", rating: 5 },
  { name: "Priya Nair", country: "Australia", text: "The team was so supportive throughout the entire process. Highly recommend!", rating: 5 },
];

const whyStudyAbroad = [
  "Globally recognized education",
  "Practical & industry-focused learning",
  "Global exposure & confidence",
  "Part-time & post-study work options",
  "Better career opportunities",
];

const Index = () => {
  return (
    <Layout>
      <EnquiryPopup />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <img src={heroImage} alt="Start your global education journey" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-overlay-dark" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary-foreground text-sm font-medium rounded-full mb-6 animate-fade-in-up backdrop-blur-sm border border-primary-foreground/20">
              🎓 Trusted by 1000+ Students
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Start Your Global Education Journey
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Expert guidance for studying in the UK, Australia, Canada & Germany. Free counselling for your dream university.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact" className="px-8 py-4 bg-hero-gradient text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity text-lg">
                Book Free Consultation
              </Link>
              <Link to="/about" className="px-8 py-4 border-2 border-background/30 text-background font-semibold rounded-xl hover:bg-background/10 transition-colors text-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study Abroad */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Why Study Abroad?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Studying abroad opens doors to world-class education and international career opportunities.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {whyStudyAbroad.map((item, i) => (
                <div key={i} className="bg-card rounded-xl p-6 border border-border shadow-card text-center hover:shadow-soft transition-shadow">
                  <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Popular Destinations */}
      <AnimatedSection>
        <section className="py-20 bg-warm-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Choose from top study destinations around the world</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {destinations.map((dest) => (
                <Link key={dest.path} to={dest.path} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-elevated transition-all hover:-translate-y-1">
                  <div className="h-48 overflow-hidden">
                    <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <h3 className="font-heading text-lg font-bold">{dest.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{dest.desc}</p>
                    <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive support at every step of your study abroad journey</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, i) => (
                <div key={i} className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-soft transition-shadow text-center">
                  <div className="w-14 h-14 bg-hero-gradient rounded-xl flex items-center justify-center mx-auto mb-5 text-primary-foreground">
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection>
        <section className="py-20 bg-warm-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Student Testimonials</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Hear from students who achieved their dreams with Pravaas</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-card rounded-2xl p-8 border border-border shadow-card">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">"{t.text}"</p>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">Studying in {t.country}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-hero-gradient rounded-3xl p-12 md:p-16 text-center text-primary-foreground">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
                Book a free consultation with our expert counsellors today
              </p>
              <Link to="/contact" className="inline-block px-10 py-4 bg-card text-primary font-bold rounded-xl hover:bg-background transition-colors text-lg shadow-elevated">
                Book Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </Layout>
  );
};

export default Index;
