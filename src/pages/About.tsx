import { CheckCircle2, Target, Eye, Award, Users, Quote } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { StaggeredList, StaggeredItem } from "@/components/StaggeredList";
import { Link } from "react-router-dom";
import aboutHero from "@/assets/about-hero.jpg";
import founderPortrait from "@/assets/founder-portrait.jpg";

const values = [
  { icon: <Award className="w-6 h-6" />, title: "Expert Counsellors", desc: "Experienced education experts with deep knowledge of global universities" },
  { icon: <CheckCircle2 className="w-6 h-6" />, title: "Transparent Process", desc: "Honest, clear guidance with no hidden costs or misleading promises" },
  { icon: <Users className="w-6 h-6" />, title: "Personalized Approach", desc: "Tailored solutions based on each student's profile and aspirations" },
  { icon: <Target className="w-6 h-6" />, title: "End-to-End Support", desc: "From profile evaluation to pre-departure assistance, we're with you" },
];

const team = [
  { name: "Counsellor 1", role: "Senior Education Consultant", speciality: "UK & Australia" },
  { name: "Counsellor 2", role: "Visa & Immigration Expert", speciality: "Canada & Germany" },
  { name: "Counsellor 3", role: "Career Guidance Specialist", speciality: "Course Selection" },
];

const servicesList = [
  "Free profile evaluation and career counselling",
  "Course and university selection guidance",
  "Application and documentation support",
  "Visa guidance and interview preparation",
  "Pre-departure support and assistance",
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutHero} alt="About Pravaas International" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-overlay-dark" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-primary-foreground animate-fade-in-up">About Pravaas International</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            We are a trusted education consultancy dedicated to helping students achieve their dream of studying abroad with transparency and integrity.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <StaggeredList className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" staggerDelay={0.15}>
            <StaggeredItem>
              <div className="bg-card rounded-2xl p-10 border border-border shadow-card h-full">
                <div className="w-12 h-12 bg-hero-gradient rounded-xl flex items-center justify-center mb-5 text-primary-foreground">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="font-heading text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide honest, personalized, and end-to-end study abroad guidance, helping students make informed academic and career decisions.
                </p>
              </div>
            </StaggeredItem>
            <StaggeredItem>
              <div className="bg-card rounded-2xl p-10 border border-border shadow-card h-full">
                <div className="w-12 h-12 bg-hero-gradient rounded-xl flex items-center justify-center mb-5 text-primary-foreground">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="font-heading text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To guide students with transparency and integrity towards globally recognized education and successful international careers.
                </p>
              </div>
            </StaggeredItem>
          </StaggeredList>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-warm-gradient overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto">
              <div className="relative grid md:grid-cols-5 gap-0 items-stretch">
                {/* Image Column */}
                <div className="md:col-span-2 relative">
                  <div className="relative h-full min-h-[360px] md:min-h-[480px] rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden">
                    <img
                      src={founderPortrait}
                      alt="Founder of Pravaas International"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-foreground/10" />
                    {/* Name overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:hidden">
                      <h3 className="font-heading text-xl font-bold text-primary-foreground">Founder Name</h3>
                      <p className="text-sm text-primary-foreground/80">Founder & Managing Director</p>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="md:col-span-3 bg-card border border-border rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none p-8 md:p-10 flex flex-col justify-center relative">
                  <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6 rotate-180" />
                  
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">Founder's Message</span>
                  
                  <div className="hidden md:block mb-4">
                    <h3 className="font-heading text-2xl font-bold">Founder Name</h3>
                    <p className="text-sm text-muted-foreground">Founder & Managing Director</p>
                  </div>

                  <blockquote className="text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      "Every student deserves the right guidance to turn their international education dream into reality. At Pravaas International, we don't just process applications — we build futures."
                    </p>
                    <p>
                      "Having guided hundreds of students to top universities worldwide, I understand the hopes and concerns families have. Our promise is simple: honest advice, transparent processes, and unwavering support at every step of your journey."
                    </p>
                  </blockquote>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-border" />
                    <span className="text-xs text-muted-foreground tracking-wide">PRAVAAS INTERNATIONAL</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Pravaas?</h2>
          </AnimatedSection>
          <StaggeredList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
            {values.map((v, i) => (
              <StaggeredItem key={i}>
                <div className="bg-card rounded-2xl p-8 border border-border shadow-card text-center h-full">
                  <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-5 text-primary">
                    {v.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">What We Offer</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">Comprehensive support at every stage of your study abroad journey</p>
          </AnimatedSection>
          <StaggeredList className="max-w-3xl mx-auto space-y-4" staggerDelay={0.08}>
            {servicesList.map((s, i) => (
              <StaggeredItem key={i}>
                <div className="flex items-center gap-4 bg-card rounded-xl p-5 border border-border shadow-card">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium">{s}</span>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">Our Counsellors</h2>
          </AnimatedSection>
          <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" staggerDelay={0.15}>
            {team.map((member, i) => (
              <StaggeredItem key={i}>
                <div className="bg-card rounded-2xl p-8 border border-border shadow-card text-center">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-5">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.speciality}</p>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Book your free consultation and take the first step towards your global education.</p>
            <Link to="/contact" className="inline-block px-10 py-4 bg-hero-gradient text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-opacity text-lg">
              Contact Us Today
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </Layout>
  );
};

export default About;
