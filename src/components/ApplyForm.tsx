import { useState } from "react";

interface ApplyFormProps {
  country: string;
}

const ApplyForm = ({ country }: ApplyFormProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-4xl">🎉</span>
        </div>
        <h3 className="font-heading text-2xl font-bold mb-2">Application Received!</h3>
        <p className="text-muted-foreground">Our counsellors will contact you soon about studying in {country}.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <input type="text" placeholder="Full Name" required maxLength={100}
        className="px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
      <input type="email" placeholder="Email Address" required maxLength={255}
        className="px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
      <input type="tel" placeholder="Phone Number" required maxLength={20}
        className="px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
      <select required className="px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
        <option value="">Preferred Course</option>
        <option>Bachelors</option>
        <option>Masters</option>
        <option>MBA</option>
        <option>Medicine</option>
        <option>Engineering</option>
      </select>
      <textarea placeholder="Any additional message..." rows={3} maxLength={1000}
        className="md:col-span-2 px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
      <button type="submit"
        className="md:col-span-2 py-3 bg-hero-gradient text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
        Apply Now for {country}
      </button>
    </form>
  );
};

export default ApplyForm;
