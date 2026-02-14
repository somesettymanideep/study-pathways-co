import { ReactNode } from "react";
import { Building2, Calendar, Coins, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import ApplyForm from "@/components/ApplyForm";
import AnimatedSection from "@/components/AnimatedSection";
import { StaggeredList, StaggeredItem } from "@/components/StaggeredList";

interface CountryPageProps {
  country: string;
  heroImage: string;
  tagline: string;
  description: string;
  benefits: string[];
  highlights: { icon: ReactNode; title: string; description: string }[];
  universities: string[];
  intakes: string[];
  costItems: { label: string; value: string }[];
}

const CountryPage = ({
  country,
  heroImage,
  tagline,
  description,
  benefits,
  highlights,
  universities,
  intakes,
  costItems,
}: CountryPageProps) => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <img src={heroImage} alt={`Study in ${country}`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-overlay-dark" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-4 animate-fade-in-up">
            Study in {country}
          </h1>
          <p className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            {tagline}
          </p>
        </div>
      </section>

      {/* Description + Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6">Why Study in {country}?</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">{description}</p>
                <ul className="space-y-3">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <StaggeredList className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.1}>
              {highlights.map((h, i) => (
                <StaggeredItem key={i}>
                  <div className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-elevated transition-shadow h-full">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mb-3 text-primary">
                      {h.icon}
                    </div>
                    <h3 className="font-heading font-semibold mb-1">{h.title}</h3>
                    <p className="text-sm text-muted-foreground">{h.description}</p>
                  </div>
                </StaggeredItem>
              ))}
            </StaggeredList>
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="py-16 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold text-center mb-10">Popular Universities</h2>
          </AnimatedSection>
          <StaggeredList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto" staggerDelay={0.08}>
            {universities.map((uni, i) => (
              <StaggeredItem key={i}>
                <div className="bg-card rounded-xl p-5 border border-border shadow-card flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">{uni}</span>
                </div>
              </StaggeredItem>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Intakes & Costs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <StaggeredList className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto" staggerDelay={0.15}>
            <StaggeredItem>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-primary" />
                  <h3 className="font-heading text-xl font-bold">Intakes</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {intakes.map((intake, i) => (
                    <span key={i} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">{intake}</span>
                  ))}
                </div>
              </div>
            </StaggeredItem>
            <StaggeredItem>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Coins className="w-6 h-6 text-primary" />
                  <h3 className="font-heading text-xl font-bold">Cost of Living</h3>
                </div>
                <div className="space-y-3">
                  {costItems.map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="text-muted-foreground text-sm">{item.label}</span>
                      <span className="font-semibold text-primary">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </StaggeredItem>
          </StaggeredList>
        </div>
      </section>

      {/* Apply Form */}
      <AnimatedSection>
        <section className="py-20 bg-warm-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-heading text-3xl font-bold text-center mb-3">Apply Now</h2>
              <p className="text-center text-muted-foreground mb-10">Take the first step towards your education in {country}</p>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-elevated">
                <ApplyForm country={country} />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </Layout>
  );
};

export default CountryPage;
