import { Link } from "react-router-dom";
import { CheckCircle2, GraduationCap, Globe, HeartPulse, Users, Phone, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import useScrollReveal from "@/hooks/useScrollReveal";
import mbbsHero from "@/assets/mbbs-hero.jpg";

const mbbsCountries = [
  { name: "Kyrgyzstan", flag: "🇰🇬", highlight: "Affordable fees, NMC recognized" },
  { name: "Kazakhstan", flag: "🇰🇿", highlight: "Modern infrastructure, WHO listed" },
  { name: "Uzbekistan", flag: "🇺🇿", highlight: "Low cost of living, quality education" },
  { name: "Russia", flag: "🇷🇺", highlight: "Top medical universities, global recognition" },
  { name: "Georgia", flag: "🇬🇪", highlight: "European standards, English medium" },
  { name: "Serbia", flag: "🇷🇸", highlight: "EU-standard curriculum, affordable" },
  { name: "Bosnia", flag: "🇧🇦", highlight: "Growing medical hub, low tuition" },
];

const whyMBBS = [
  { icon: <HeartPulse className="w-6 h-6" />, title: "Affordable Fees", desc: "Significantly lower tuition compared to India's private medical colleges" },
  { icon: <Globe className="w-6 h-6" />, title: "WHO & NMC Recognized", desc: "Degrees accepted worldwide with proper licensing examinations" },
  { icon: <GraduationCap className="w-6 h-6" />, title: "English Medium", desc: "Complete medical education in English at top universities" },
  { icon: <Users className="w-6 h-6" />, title: "Global Exposure", desc: "Advanced infrastructure and international clinical training" },
];

const supportSteps = [
  "Free counseling & country selection",
  "University admission & documentation",
  "Visa processing & travel assistance",
  "Hostel & food arrangements",
  "Continuous student support till graduation",
];

const MBBS = () => {
  useScrollReveal();
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img src={mbbsHero} alt="Study MBBS Abroad" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-overlay-dark" />
        </div>
        <div className="container mx-auto px-4 text-center text-primary-foreground relative z-10">
          <span className="inline-block px-4 py-1.5 bg-card/20 text-sm font-medium rounded-full mb-4 backdrop-blur-sm" data-animate="fadeInDown">🩺 Medical Education Abroad</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4" data-animate="fadeInUp">Study MBBS Abroad</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8" data-animate="fadeInUp" data-delay="0.1s">
              Affordable, globally recognized medical education with complete support from Pravaas International
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 bg-card text-primary font-semibold rounded-xl hover:bg-background transition-colors text-lg shadow-elevated" data-animate="slideInLeft" data-delay="0.2s">
                Free Counseling
              </Link>
              <Link to="/contact" className="px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-xl hover:bg-primary-foreground/10 transition-colors text-lg" data-animate="slideInRight" data-delay="0.2s">
                Apply Now
              </Link>
            </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-animate="fadeInDown">Countries Offering MBBS</h2>
            <p className="text-muted-foreground max-w-xl mx-auto" data-animate="fadeInUp">Choose from top medical education destinations worldwide</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mbbsCountries.map((c, i) => (
              <div key={c.name} className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-elevated transition-all hover:-translate-y-1" data-animate="fadeInUp" data-delay={`${0.1 + i * 0.1}s`}>
                <span className="text-4xl mb-3 block">{c.flag}</span>
                <h3 className="font-heading text-lg font-bold mb-1">{c.name}</h3>
                <p className="text-sm text-muted-foreground">{c.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MBBS */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-animate="fadeInDown">Why Study MBBS Abroad with Pravaas?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyMBBS.map((item, i) => (
              <div key={i} className="bg-card rounded-2xl p-8 border border-border shadow-card text-center hover:shadow-soft transition-shadow" data-animate="slideInUp" data-delay={`${0.1 + i * 0.1}s`}>
                <div className="w-14 h-14 bg-hero-gradient rounded-xl flex items-center justify-center mx-auto mb-5 text-primary-foreground">
                  {item.icon}
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* End-to-End Support */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-animate="fadeInDown">Our End-to-End Student Support</h2>
              <p className="text-muted-foreground" data-animate="fadeInUp">We guide you at every step of your MBBS journey abroad</p>
            </div>
            <div className="space-y-4">
              {supportSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-4 bg-card rounded-xl p-5 border border-border shadow-card" data-animate="fadeInUp" data-delay={`${0.1 + i * 0.1}s`}>
                  <div className="w-10 h-10 bg-hero-gradient rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <p className="font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" data-animate="slideInUp" data-delay="0.1s">
        <div className="container mx-auto px-4">
          <div className="bg-hero-gradient rounded-3xl p-12 md:p-16 text-center text-primary-foreground">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-animate="fadeInDown">Start Your MBBS Journey Today</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg" data-animate="fadeInUp">Get expert guidance on the best MBBS programs abroad</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="px-10 py-4 bg-card text-primary font-bold rounded-xl hover:bg-background transition-colors text-lg shadow-elevated">
                  Free Counseling
                </Link>
                <Link to="/contact" className="px-10 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-bold rounded-xl hover:bg-primary-foreground/10 transition-colors text-lg">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
    </Layout>
  );
};

export default MBBS;
