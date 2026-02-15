import { Phone, GraduationCap, Globe, Star, Plane } from "lucide-react";

const items = [
  { icon: Phone, text: "For Assistance Call Us: +91 00000 00000" },
  { icon: GraduationCap, text: "Study Abroad with Pravaas International" },
  { icon: Globe, text: "Admissions Open for 2025 Intake" },
  { icon: Star, text: "Expert Guidance for Masters, Bachelors & MBBS" },
  { icon: Plane, text: "UK • Australia • Canada • Germany • USA" },
];

const Marquee = () => {
  const repeated = [...items, ...items];

  return (
    <div className="bg-primary overflow-hidden py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center gap-2 mx-8 text-primary-foreground text-sm font-medium shrink-0">
            <item.icon className="w-4 h-4 text-accent" />
            <span>{item.text}</span>
            <span className="ml-6 text-accent">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
