import { Link } from "react-router-dom";
import { GraduationCap, Calendar, Wallet, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import useScrollReveal from "@/hooks/useScrollReveal";
import ukHero from "@/assets/uk-hero.jpg";
import australiaHero from "@/assets/australia-hero.jpg";
import germanyHero from "@/assets/germany-hero.jpg";
import usaHero from "@/assets/usa-hero.jpg";
import bachelorsHero from "@/assets/bachelors-hero.jpg";
import { TypewriterText } from "@/components/TypewriterText";

const countries = [
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    image: ukHero,
    points: [
      "3-year bachelor's degrees at world-class universities",
      "Strong industry connections & placements",
      "Post-study work visa opportunities",
      "Globally recognized qualifications",
    ],
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    image: australiaHero,
    points: [
      "Practical, hands-on learning approach",
      "Safe, multicultural student cities",
      "Part-time work rights during study",
      "Pathway to PR after graduation",
    ],
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    image: germanyHero,
    points: [
      "Free or very low tuition at public universities",
      "Top engineering & technology programs",
      "Live and work in the heart of Europe",
      "Strong job market for graduates",
    ],
  },
  {
    name: "USA",
    flag: "🇺🇸",
    image: usaHero,
    points: [
      "World's top-ranked universities",
      "Flexible liberal arts curriculum",
      "Campus life & extracurricular opportunities",
      "OPT & CPT work programs",
    ],
  },
];

const popularCourses = [
  "Computer Science & IT",
  "Business Administration",
  "Engineering (Mechanical, Civil, Electrical)",
  "Data Science & Analytics",
  "Biomedical Sciences",
  "Architecture & Design",
  "Media & Communications",
  "Hospitality & Tourism Management",
];

const intakeMonths = [
  { country: "UK", primary: "September", secondary: "January" },
  { country: "Australia", primary: "February", secondary: "July" },
  { country: "Germany", primary: "October", secondary: "April" },
  { country: "USA", primary: "August/September", secondary: "January" },
];


const Bachelors = () => {
  useScrollReveal();
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img src={bachelorsHero} alt="Bachelors Programs" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-overlay-dark" />
        </div>
        <div className="container mx-auto px-4 text-center text-primary-foreground relative z-10">
          <span className="inline-block px-4 py-1.5 bg-card/20 text-sm font-medium rounded-full mb-4 backdrop-blur-sm" data-animate="fadeInDown">🎓 Undergraduate Programs</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <TypewriterText text="Bachelors Programs Abroad" speed={40} delay={0.2} highlightCount={2} highlightClassName="text-[#e8ad25]" />
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8" data-animate="fadeInUp" data-delay="0.1s">
            Launch your career with a world-class undergraduate degree from leading global universities
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

      {/* Country Sections */}
      {countries.map((country, i) => (
        <section key={country.name} className={`py-20 ${i % 2 === 1 ? "bg-warm-gradient" : ""}`} data-animate={i % 2 === 0 ? "slideInLeft" : "slideInRight"} data-delay={`${0.1 + i * 0.2}s`}>
          <div className="container mx-auto px-4">
            <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}>
              <div className="lg:w-1/2">
                {country.image ? (
                  <img src={country.image} alt={`Study in ${country.name}`} className="rounded-2xl shadow-elevated w-full h-72 lg:h-96 object-cover" />
                ) : (
                  <div className="rounded-2xl bg-secondary w-full h-72 lg:h-96 flex items-center justify-center">
                    <span className="text-8xl">{country.flag}</span>
                  </div>
                )}
              </div>
              <div className="lg:w-1/2">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
                  {country.flag} Study in {country.name}
                </h2>
                <p className="text-muted-foreground mb-6">Top undergraduate programs for international students</p>
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
          </div>
        </section>
      ))}

      {/* Popular Courses */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-animate="fadeInDown">Popular Undergraduate Courses</h2>
            <p className="text-muted-foreground max-w-xl mx-auto" data-animate="fadeInUp">Explore in-demand courses offered at top universities worldwide</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {popularCourses.map((course, i) => (
              <div key={i} className="bg-card rounded-xl p-5 border border-border shadow-card text-center hover:shadow-soft transition-shadow" data-animate="fadeInUp" data-delay={`${0.1 + i * 0.08}s`}>
                <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">{course}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intake Months */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-animate="fadeInDown">Intake Months</h2>
            <p className="text-muted-foreground max-w-xl mx-auto" data-animate="fadeInUp">Plan your application timeline</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {intakeMonths.map((item, i) => (
              <div key={item.country} className="bg-card rounded-2xl p-6 border border-border shadow-card text-center" data-animate="slideInUp" data-delay={`${0.1 + i * 0.1}s`}>
                <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading text-lg font-bold mb-3">{item.country}</h3>
                <p className="text-sm"><span className="font-semibold text-primary">Primary:</span> {item.primary}</p>
                <p className="text-sm mt-1"><span className="font-semibold text-muted-foreground">Secondary:</span> {item.secondary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-20" data-animate="slideInUp" data-delay="0.1s">
        <div className="container mx-auto px-4">
          <div className="bg-hero-gradient rounded-3xl p-12 md:p-16 text-center text-primary-foreground">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-animate="fadeInDown">Start Your Bachelors Journey Today</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg" data-animate="fadeInUp">Get expert guidance on the best undergraduate programs abroad</p>
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

export default Bachelors;
