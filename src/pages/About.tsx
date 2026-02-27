import { useState, useEffect, useCallback } from "react";
import { CheckCircle2, Target, Eye, Award, Quote, UserCheck, BookOpen, FileText, Stamp, Plane, GraduationCap, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { StaggeredList, StaggeredItem } from "@/components/StaggeredList";
import { Link } from "react-router-dom";
import aboutHero from "@/assets/about-hero.jpg";
import founderPortrait from "@/assets/founder-portrait.jpg";
import { useCountUp } from "@/hooks/useCountUp";

const testimonials = [
  { name: "Ananya Sharma", country: "UK", text: "Pravaas made my dream of studying in London a reality. Their guidance was invaluable!", rating: 5, initials: "AS" },
  { name: "Rahul Patel", country: "Canada", text: "From course selection to visa approval, they handled everything professionally.", rating: 5, initials: "RP" },
  { name: "Priya Nair", country: "Australia", text: "The team was so supportive throughout the entire process. Highly recommend!", rating: 5, initials: "PN" },
  { name: "Vikram Singh", country: "Germany", text: "Thanks to Pravaas, I got admission in one of the top engineering universities in Germany!", rating: 5, initials: "VS" },
  { name: "Sneha Reddy", country: "UK", text: "The visa process was so smooth. I couldn't have done it without their expert guidance.", rating: 5, initials: "SR" },
  { name: "Arjun Mehta", country: "Australia", text: "Excellent support from start to finish. They truly care about each student's success.", rating: 5, initials: "AM" },
];

const journeySteps = [
  { icon: <UserCheck className="w-6 h-6" />, step: "01", title: "Free Profile Evaluation", desc: "We assess your academic background, career goals, and preferences to create a personalized study abroad roadmap." },
  { icon: <BookOpen className="w-6 h-6" />, step: "02", title: "Course & University Selection", desc: "Expert guidance to match you with the right courses and universities aligned with your aspirations and budget." },
  { icon: <FileText className="w-6 h-6" />, step: "03", title: "Application & Documentation", desc: "End-to-end support with applications, SOPs, LORs, and all required documentation for a strong profile." },
  { icon: <Stamp className="w-6 h-6" />, step: "04", title: "Visa Guidance & Interview Prep", desc: "Comprehensive visa application assistance and mock interview sessions to maximize your approval chances." },
  { icon: <Plane className="w-6 h-6" />, step: "05", title: "Pre-Departure Support", desc: "From travel arrangements to accommodation guidance, we ensure you're fully prepared for your journey abroad." },
];


const StatCircle = ({ end, suffix, label, icon }: { end: number; suffix: string; label: string; icon: React.ReactNode }) => {
  const { count, ref } = useCountUp(end, 2000);
  return (
    <div className="flex flex-col items-center" ref={ref}>
      <div className="relative w-36 h-36 md:w-44 md:h-44 mb-4">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-[3px] border-accent/30" />
        {/* Inner ring */}
        <div className="absolute inset-3 rounded-full border-[3px] border-accent" />
        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-heading text-3xl md:text-4xl font-bold text-accent">{count}{suffix}</span>
        </div>
        {/* Icon badge */}
        <div className="absolute -top-1 right-1 w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent">
          {icon}
        </div>
      </div>
      <span className="font-heading font-bold text-primary-foreground text-center">{label}</span>
    </div>
  );
};

const About = () => {
const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Autoplay testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden flex items-center">
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
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: 'hsl(43, 80%, 92%)' }}>
                  <Target className="w-7 h-7" style={{ color: 'hsl(43, 80%, 52%)' }} />
                </div>
                <h2 className="font-heading text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide honest, personalized, and end-to-end study abroad guidance, helping students make informed academic and career decisions.
                </p>
              </div>
            </StaggeredItem>
            <StaggeredItem>
              <div className="bg-card rounded-2xl p-10 border border-border shadow-card h-full">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: 'hsl(225, 55%, 92%)' }}>
                  <Eye className="w-7 h-7" style={{ color: 'hsl(225, 55%, 28%)' }} />
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

      {/* Why Choose Pravaas - Journey Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex flex-col items-center mb-16">
              <span className="block text-xs font-bold tracking-[0.2em] uppercase text-accent mb-3">Your Journey With Us</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">Why Choose <span className="text-accent">Pravaas?</span></h2>
              <p className="text-center text-muted-foreground max-w-xl mx-auto">
                A seamless five-step process designed to turn your study abroad dream into reality
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px hidden sm:block" />

            <StaggeredList className="space-y-8 md:space-y-12" staggerDelay={0.12}>
              {journeySteps.map((item, i) => (
                <StaggeredItem key={i}>
                  <div className={`relative flex flex-col sm:flex-row items-start gap-4 md:gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Step number circle on timeline */}
                    <div className="hidden sm:flex absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground items-center justify-center font-heading font-bold text-sm z-10 shadow-lg">
                      {item.step}
                    </div>

                    {/* Content card */}
                    <div className={`sm:pl-20 md:pl-0 md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:pr-0 md:text-right" : "md:pl-0 md:text-left"}`}>
                      <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card hover:shadow-lg transition-shadow group">
                        <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                          <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            {item.icon}
                          </div>
                          <span className="sm:hidden text-xs font-bold text-primary">STEP {item.step}</span>
                          <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                  </div>
                </StaggeredItem>
              ))}
            </StaggeredList>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-primary overflow-hidden relative">

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-primary-foreground">Our Achievements</h2>
            <p className="text-center text-primary-foreground/70 mb-16 max-w-xl mx-auto">Numbers that reflect our commitment to student success</p>
          </AnimatedSection>
          <StaggeredList className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto" staggerDelay={0.12}>
            {[
              { end: 500, suffix: "+", label: "Student Visa", icon: <Stamp className="w-6 h-6" /> },
              { end: 50, suffix: "+", label: "Universities", icon: <GraduationCap className="w-6 h-6" /> },
              { end: 6, suffix: "+", label: "Years of Experience", icon: <Award className="w-6 h-6" /> },
              { end: 99, suffix: "%", label: "Visa Success Rate", icon: <CheckCircle2 className="w-6 h-6" /> },
            ].map((stat, i) => (
              <StaggeredItem key={i}>
                <StatCircle end={stat.end} suffix={stat.suffix} label={stat.label} icon={stat.icon} />
              </StaggeredItem>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Student <span className="text-accent">Testimonials</span></h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Hear from students who achieved their dreams with Pravaas</p>
            </div>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-3">
                    <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-card text-center">
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                        {t.initials}
                      </div>
                      <div className="flex justify-center gap-1 mb-4">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
                      <h4 className="font-heading font-bold text-lg">{t.name}</h4>
                      <span className="text-sm text-muted-foreground">Studied in {t.country}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-card border border-border shadow-card flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-card border border-border shadow-card flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === testimonialIndex ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/50"}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
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
