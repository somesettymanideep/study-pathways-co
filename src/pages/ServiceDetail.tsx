import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { StaggeredList, StaggeredItem } from "@/components/StaggeredList";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import serviceDetails from "@/data/serviceDetails";
import servicesHero from "@/assets/services-hero.jpg";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = serviceDetails.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <img src={servicesHero} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-overlay-dark" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-background/70 mb-4">
            <Link to="/" className="hover:text-background transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-background transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-background">{service.title}</span>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-background mx-auto mb-5">
            {service.icon}
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">
            {service.title}
          </h1>
          <p className="text-lg text-background/80 max-w-2xl mx-auto">{service.tagline}</p>
        </div>
      </section>

      {/* Description */}
      <AnimatedSection>
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="text-accent font-bold text-sm tracking-widest uppercase mb-3 block">Overview</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8">What We Offer</h2>
            <div className="space-y-5">
              {service.description.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed text-base md:text-lg">{para}</p>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Highlights */}
      <AnimatedSection>
        <section className="py-16 md:py-20 bg-warm-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-accent font-bold text-sm tracking-widest uppercase mb-3 block">Key Highlights</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold">Why Choose This Service</h2>
            </div>
            <StaggeredList className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" staggerDelay={0.1}>
              {service.highlights.map((h, i) => (
                <StaggeredItem key={i}>
                  <div className="bg-card rounded-2xl border border-border shadow-card p-6 hover:shadow-elevated hover:-translate-y-1 transition-all h-full">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 font-heading font-bold text-lg">
                      {i + 1}
                    </div>
                    <h3 className="font-body text-base font-bold mb-2">{h.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </StaggeredItem>
              ))}
            </StaggeredList>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection>
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <span className="text-accent font-bold text-sm tracking-widest uppercase mb-3 block">FAQ</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {service.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 shadow-card">
                  <AccordionTrigger className="text-left font-body font-semibold text-sm md:text-base py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <img src={servicesHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Book a free consultation with our experts and take the first step toward your study abroad dream.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-hero-gradient text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity text-lg"
          >
            Free Counselling <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
