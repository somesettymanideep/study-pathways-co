import { useState } from "react";
import { X } from "lucide-react";

const EnquiryPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Show popup after 5 seconds
  useState(() => {
    const shown = sessionStorage.getItem("enquiry-shown");
    if (!shown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("enquiry-shown", "true");
      }, 5000);
      return () => clearTimeout(timer);
    }
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-card rounded-2xl shadow-elevated max-w-md w-full mx-4 p-8 relative animate-fade-in-up">
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✓</span>
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">Thank You!</h3>
            <p className="text-muted-foreground text-sm">We'll get back to you shortly.</p>
          </div>
        ) : (
          <>
            <h3 className="font-heading text-2xl font-bold mb-2">Free Profile Evaluation</h3>
            <p className="text-muted-foreground text-sm mb-6">Get expert advice on your study abroad journey</p>

            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                maxLength={100}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                maxLength={255}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                maxLength={20}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <select
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value="">Preferred Country</option>
                <option>United Kingdom</option>
                <option>Australia</option>
                <option>Canada</option>
                <option>Germany</option>
              </select>
              <button
                type="submit"
                className="w-full py-3 bg-hero-gradient text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Get Free Evaluation
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default EnquiryPopup;
