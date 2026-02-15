import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Have questions about studying abroad? Reach out to us and our expert counsellors will guide you.
          </p>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                  <h3 className="font-heading text-xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-primary shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a href="tel:+918008249666" className="font-medium hover:text-primary transition-colors">+91 80082 49666</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-primary shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a href="mailto:info@pravaasinternational.com" className="font-medium hover:text-primary transition-colors">info@pravaasinternational.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-primary shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Address</p>
                        <p className="font-medium">SS Complex, Above Hyundai Showroom, Vidya Nagar, Kothagudem</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[hsl(142,70%,45%)] rounded-lg flex items-center justify-center text-primary-foreground shrink-0">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">WhatsApp</p>
                        <a href="https://wa.me/918008249666" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">
                          Chat with us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-card h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.902!2d72.5714!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzIxLjAiTiA3MsKwMzQnMTcuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Our Location"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-elevated">
                  <h3 className="font-heading text-2xl font-bold mb-2">Send Us a Message</h3>
                  <p className="text-muted-foreground text-sm mb-8">Fill out the form and we'll get back to you within 24 hours</p>

                  {submitted ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-4xl">✉️</span>
                      </div>
                      <h3 className="font-heading text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">Thank you for reaching out. Our team will contact you shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium mb-2">Full Name</label>
                          <input type="text" required maxLength={100} placeholder="Your full name"
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone Number</label>
                          <input type="tel" required maxLength={20} placeholder="+91 XXXXX XXXXX"
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address</label>
                        <input type="email" required maxLength={255} placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium mb-2">Preferred Course</label>
                          <select required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                            <option value="">Select course</option>
                            <option>Bachelors</option>
                            <option>Masters</option>
                            <option>MBA</option>
                            <option>Medicine</option>
                            <option>Engineering</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Preferred Country</label>
                          <select required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                            <option value="">Select country</option>
                            <option>United Kingdom</option>
                            <option>Australia</option>
                            <option>Canada</option>
                            <option>Germany</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Message</label>
                        <textarea rows={4} maxLength={1000} placeholder="Tell us about your requirements..."
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                      </div>
                      <button type="submit"
                        className="w-full py-4 bg-hero-gradient text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-lg">
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </Layout>
  );
};

export default Contact;
