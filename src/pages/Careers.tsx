import { useState } from "react";
import {
  Briefcase, TrendingUp, Heart, Award, DollarSign, Globe, Users, Star,
  Phone, Mail, MapPin, FileText, Send, ChevronDown, ChevronUp,
  ClipboardList, UserCheck, MessageSquare, CheckCircle2
} from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { StaggeredList, StaggeredItem } from "@/components/StaggeredList";
import careersHero from "@/assets/careers-hero.jpg";
import careersTeam from "@/assets/careers-team.jpg";
import careersCulture from "@/assets/careers-culture.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

const benefits = [
  { icon: <TrendingUp className="w-6 h-6" />, title: "Fast-Growing Consultancy", desc: "Be part of a rapidly expanding education consultancy with endless opportunities." },
  { icon: <Globe className="w-6 h-6" />, title: "International Exposure", desc: "Work with domestic & overseas admissions across multiple countries." },
  { icon: <Heart className="w-6 h-6" />, title: "Positive Work Culture", desc: "A supportive, collaborative environment where your contributions matter." },
  { icon: <Award className="w-6 h-6" />, title: "Career Growth", desc: "Clear progression paths with mentorship and skill development programs." },
  { icon: <DollarSign className="w-6 h-6" />, title: "Performance Incentives", desc: "Attractive bonuses and rewards linked to your achievements." },
  { icon: <Star className="w-6 h-6" />, title: "Impact Lives", desc: "Help students build successful futures in India and abroad." },
  { icon: <Users className="w-6 h-6" />, title: "Supportive Team", desc: "Professional and friendly team that grows together." },
];

const jobOpenings = [
  {
    title: "Telecallers / Student Support Executives",
    overview: "Handle student enquiries for domestic and overseas admissions, explain opportunities, and schedule counselling sessions.",
    responsibilities: [
      "Call and follow up with student leads",
      "Explain courses, universities, countries, and admission process",
      "Maintain call records and update lead status",
      "Coordinate appointments with counsellors",
    ],
    requirements: [
      "Good communication skills (Telugu, Hindi, English preferred)",
      "Basic computer knowledge",
      "Positive attitude and patience",
      "Freshers are welcome to apply",
    ],
    extra: "Performance-based bonuses linked to student admissions.",
  },
  {
    title: "B2B Partners / Education Associates",
    overview: "Collaborate with schools, colleges, institutions, and local consultants to refer students for domestic and international education.",
    responsibilities: [
      "Build partnerships with institutions and education networks",
      "Generate student referrals for UG, PG, and diploma programs",
      "Conduct awareness sessions, seminars, and counselling drives",
      "Maintain long-term professional relationships",
    ],
    requirements: [
      "Existing consultants, freelancers, or admission agents",
      "Teachers, trainers, or education advisors",
      "Individuals with strong local student network",
    ],
    extra: "Attractive commission-based earnings with long-term partnership opportunity and full counselling & marketing support.",
  },
  {
    title: "PRO (Public Relations Officer)",
    overview: "Promote domestic and overseas admission services through college visits, seminars, and local outreach activities.",
    responsibilities: [
      "Visit colleges, coaching centers, and institutions",
      "Organize seminars, education awareness programs, and events",
      "Build strong relationships with students, faculty, and communities",
      "Support offline marketing and admission campaigns",
    ],
    requirements: [
      "Strong presentation and communication skills",
      "Willingness to travel locally",
      "Passion for student guidance and public interaction",
    ],
  },
  {
    title: "Administrative Staff",
    overview: "Support day-to-day office operations for both domestic and international admission processes.",
    responsibilities: [
      "Maintain student records and documentation",
      "Handle coordination between students, counsellors, and management",
      "Assist in application processing, university communication, and visa files",
      "Manage emails, reports, and office scheduling",
    ],
    requirements: [
      "Basic computer and MS Office knowledge",
      "Organized and responsible working style",
      "Prior office experience preferred (freshers may apply)",
    ],
  },
];

const applicationSteps = [
  { icon: <ClipboardList className="w-6 h-6" />, step: "01", title: "Submit Resume", desc: "Send your updated resume via email or WhatsApp." },
  { icon: <UserCheck className="w-6 h-6" />, step: "02", title: "HR Screening", desc: "Our HR team reviews your profile and shortlists candidates." },
  { icon: <MessageSquare className="w-6 h-6" />, step: "03", title: "Interview Process", desc: "Selected candidates are invited for an interview round." },
  { icon: <CheckCircle2 className="w-6 h-6" />, step: "04", title: "Offer & Onboarding", desc: "Successful candidates receive offer letters and begin onboarding." },
];

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img src={careersHero} alt="Careers at Pravaas International" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-overlay-dark" />
        <div className="relative z-10 text-center px-4">
          <AnimatedSection>
            <h1 className="!text-4xl md:!text-5xl lg:!text-6xl !font-bold text-primary-foreground mb-4">
              Careers at Pravaas International
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="!text-lg md:!text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-6">
              Build Futures. Transform Lives. Grow With Us.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#openings" className="px-8 py-3 bg-hero-gradient text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                View Open Positions
              </a>
              <a href="#apply" className="px-8 py-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/20 transition-colors">
                Apply Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Working With Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">About Working With Us</span>
              <h2 className="!text-3xl md:!text-4xl !font-bold text-foreground mt-2 mb-6">
                Shape the Future of Education
              </h2>
              <p className="text-muted-foreground mb-6">
                At Pravaas International, we're on a mission to guide students toward the right education pathways — both in India and abroad. Our team is the driving force behind every success story, helping students navigate admissions, scholarships, and career decisions.
              </p>
              <div className="space-y-4">
                {[
                  "Impactful work helping students succeed",
                  "Growth-driven environment with clear career paths",
                  "Professional and supportive team culture",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-accent shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img src={careersTeam} alt="Pravaas International team collaboration" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Benefits</span>
            <h2 className="!text-3xl md:!text-4xl !font-bold text-foreground mt-2">Why Join Us?</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Discover the perks of being part of a team that's transforming education access.</p>
          </AnimatedSection>
          <StaggeredList className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" staggerDelay={0.08}>
            {benefits.map((b, i) => (
              <StaggeredItem key={i}>
                <div className="bg-card rounded-xl border border-border p-6 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent mb-4">
                    {b.icon}
                  </div>
                  <h3 className="!text-lg !font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-muted-foreground !text-sm">{b.desc}</p>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Current Openings */}
      <section id="openings" className="py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Opportunities</span>
            <h2 className="!text-3xl md:!text-4xl !font-bold text-foreground mt-2">Current Openings</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Explore roles that match your skills and passion for education.</p>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto space-y-5">
            {jobOpenings.map((job, i) => {
              const isOpen = expandedJob === i;
              return (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
                    <button
                      onClick={() => setExpandedJob(isOpen ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/30 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="!text-lg !font-semibold text-foreground">{job.title}</h3>
                          <p className="text-muted-foreground !text-sm mt-1">{job.overview}</p>
                        </div>
                      </div>
                      {isOpen ? <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 border-t border-border pt-4 space-y-5">
                        <div>
                          <h4 className="!text-base !font-semibold text-foreground mb-2">Key Responsibilities</h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((r, j) => (
                              <li key={j} className="flex items-start gap-2 text-muted-foreground !text-sm">
                                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="!text-base !font-semibold text-foreground mb-2">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((r, j) => (
                              <li key={j} className="flex items-start gap-2 text-muted-foreground !text-sm">
                                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {job.extra && (
                          <div className="bg-accent/10 rounded-lg p-4">
                            <p className="text-foreground !text-sm !font-medium">💡 {job.extra}</p>
                          </div>
                        )}
                        <a href="#apply" className="inline-block px-6 py-2.5 bg-hero-gradient text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity !text-sm">
                          Apply for this Role
                        </a>
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Culture */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Our Culture</span>
            <h2 className="!text-3xl md:!text-4xl !font-bold text-foreground mt-2">Life at Pravaas</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Join a team dedicated to shaping student futures.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <AnimatedSection direction="left">
              <div className="rounded-2xl overflow-hidden shadow-elevated h-72">
                <img src={careersTeam} alt="Team training session" className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="rounded-2xl overflow-hidden shadow-elevated h-72">
                <img src={careersCulture} alt="Counselling environment" className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Process</span>
            <h2 className="!text-3xl md:!text-4xl !font-bold text-foreground mt-2">Application Process</h2>
          </AnimatedSection>
          <StaggeredList className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto" staggerDelay={0.12}>
            {applicationSteps.map((s, i) => (
              <StaggeredItem key={i}>
                <div className="text-center relative">
                  <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-4 text-primary">
                    {s.icon}
                  </div>
                  <span className="absolute top-0 right-1/2 translate-x-[3.2rem] -translate-y-1 bg-accent text-accent-foreground text-xs font-bold px-2 py-0.5 rounded-full">{s.step}</span>
                  <h3 className="!text-lg !font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground !text-sm">{s.desc}</p>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* How to Apply */}
      <section id="apply" className="py-20 bg-secondary/30 scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="text-center mb-10">
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Get Started</span>
              <h2 className="!text-3xl md:!text-4xl !font-bold text-foreground mt-2">How to Apply</h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-card rounded-xl border border-border shadow-card p-8 space-y-6">
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center text-accent shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">Email</span>
                      <p className="!text-sm !font-medium text-foreground">careers@pravaasinternational.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center text-accent shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">WhatsApp</span>
                      <p className="!text-sm !font-medium text-foreground">+91 80082 49666</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center text-accent shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">Walk-in</span>
                      <p className="!text-sm !font-medium text-foreground">Our Office</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="!text-base !font-semibold text-foreground mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-accent" /> Documents Required
                  </h4>
                  <ul className="grid sm:grid-cols-3 gap-3">
                    {["Updated Resume", "Position Applied For", "Contact Details"].map((doc, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground !text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center pt-2">
                  <a
                    href="mailto:careers@pravaasinternational.com?subject=Job Application - Pravaas International"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-hero-gradient text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-4 h-4" /> Submit Your Application
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <img src={ctaBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-overlay-dark" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="!text-3xl md:!text-4xl !font-bold text-primary-foreground mb-4">Join Our Mission</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-primary-foreground/85 max-w-2xl mx-auto mb-8">
              Become part of a team helping students build successful futures in India and abroad. Your career starts here.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <a href="#apply" className="inline-block px-10 py-3.5 bg-hero-gradient text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Apply Today
            </a>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
