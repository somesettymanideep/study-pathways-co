import { CheckCircle2, Target, Eye, Award, Users } from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

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

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">About Pravaas International</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            We are a trusted education consultancy dedicated to helping students achieve their dream of studying abroad with transparency and integrity.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-10 border border-border shadow-card">
              <div className="w-12 h-12 bg-hero-gradient rounded-xl flex items-center justify-center mb-5 text-primary-foreground">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide honest, personalized, and end-to-end study abroad guidance, helping students make informed academic and career decisions.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-10 border border-border shadow-card">
              <div className="w-12 h-12 bg-hero-gradient rounded-xl flex items-center justify-center mb-5 text-primary-foreground">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To guide students with transparency and integrity towards globally recognized education and successful international careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Pravaas?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <div key={i} className="bg-card rounded-2xl p-8 border border-border shadow-card text-center">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-5 text-primary">
                  {v.icon}
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">What We Offer</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">Comprehensive support at every stage of your study abroad journey</p>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "Free profile evaluation and career counselling",
              "Course and university selection guidance",
              "Application and documentation support",
              "Visa guidance and interview preparation",
              "Pre-departure support and assistance",
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-4 bg-card rounded-xl p-5 border border-border shadow-card">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">Our Counsellors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="bg-card rounded-2xl p-8 border border-border shadow-card text-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-5">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-1">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.speciality}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">Book your free consultation and take the first step towards your global education.</p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-hero-gradient text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-opacity text-lg">
            Contact Us Today
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
