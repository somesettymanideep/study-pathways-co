import { Link } from "react-router-dom";
import { GraduationCap, Briefcase, Globe, BookOpen, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { StaggeredList, StaggeredItem } from "@/components/StaggeredList";
import ukHero from "@/assets/uk-hero.jpg";
import australiaHero from "@/assets/australia-hero.jpg";
import germanyHero from "@/assets/germany-hero.jpg";

const countries = [
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    image: ukHero,
    points: [
      "Globally recognized degrees from Russell Group universities",
      "Shorter course duration (1 year for most Masters)",
      "Part-time work rights during study",
      "2-year post-study work visa",
    ],
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    image: australiaHero,
    points: [
      "Industry-focused education with practical training",
      "Safe multicultural environment",
      "Part-time & post-study work opportunities",
      "Pathway to permanent residency",
    ],
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    image: germanyHero,
    points: [
      "Low or no tuition fees at public universities",
      "Strong engineering & STEM education",
      "18-month post-study job seeker visa",
      "Job opportunities across Europe",
    ],
  },
  {
    name: "USA",
    flag: "🇺🇸",
    image: null,
    points: [
      "Top-ranked universities worldwide",
      "Research & innovation focus",
      "Flexible course structures & electives",
      "OPT work opportunities after graduation",
    ],
  },
];

const Masters = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-card/20 text-sm font-medium rounded-full mb-4 backdrop-blur-sm">🎓 Postgraduate Programs</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Masters Programs Abroad</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Advance your career with globally recognized postgraduate degrees from top universities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 bg-card text-primary font-semibold rounded-xl hover:bg-background transition-colors text-lg shadow-elevated">
                Free Counseling
              </Link>
              <Link to="/contact" className="px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-xl hover:bg-primary-foreground/10 transition-colors text-lg">
                Apply Now
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Country Sections */}
      {countries.map((country, i) => (
        <section key={country.name} className={`py-20 ${i % 2 === 1 ? "bg-warm-gradient" : ""}`}>
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}>
                {/* Image */}
                <div className="lg:w-1/2">
                  {country.image ? (
                    <img src={country.image} alt={`Study in ${country.name}`} className="rounded-2xl shadow-elevated w-full h-72 lg:h-96 object-cover" />
                  ) : (
                    <div className="rounded-2xl bg-secondary w-full h-72 lg:h-96 flex items-center justify-center">
                      <span className="text-8xl">{country.flag}</span>
                    </div>
                  )}
                </div>
                {/* Content */}
                <div className="lg:w-1/2">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
                    {country.flag} Study in {country.name}
                  </h2>
                  <p className="text-muted-foreground mb-6">Top Masters programs with world-class education</p>
                  <ul className="space-y-3">
                    {country.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <GraduationCap className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-hero-gradient text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity">
                    Enquire Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      {/* CTA */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-hero-gradient rounded-3xl p-12 md:p-16 text-center text-primary-foreground">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Start Your Masters Journey Today</h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">Get expert guidance on the best postgraduate programs abroad</p>
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
      </AnimatedSection>
    </Layout>
  );
};

export default Masters;
