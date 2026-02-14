import { GraduationCap, Briefcase, Cpu, Coins } from "lucide-react";
import CountryPage from "@/components/CountryPage";
import germanyHero from "@/assets/germany-hero.jpg";

const StudyInGermany = () => (
  <CountryPage
    country="Germany"
    heroImage={germanyHero}
    tagline="High-quality education with low or no tuition fees at public universities"
    description="Germany is a great option for students because many universities offer high-quality education with very low or no tuition fees. It is especially good for engineering and technology studies and provides strong job opportunities after graduation across Europe."
    benefits={[
      "Low or no tuition fees at public universities",
      "Strong education in engineering and technology",
      "Practical learning with industry exposure",
      "Good career and job opportunities in Europe",
      "Rich culture and high quality of life",
    ]}
    highlights={[
      { icon: <Coins className="w-5 h-5" />, title: "Low Fees", description: "Public universities charge minimal tuition" },
      { icon: <Cpu className="w-5 h-5" />, title: "Tech Focus", description: "Leading in engineering & technology education" },
      { icon: <Briefcase className="w-5 h-5" />, title: "Job Market", description: "Strong career opportunities across Europe" },
      { icon: <GraduationCap className="w-5 h-5" />, title: "Programs", description: "Bachelors & Masters in English available" },
    ]}
    universities={[
      "Technical University of Munich", "LMU Munich", "RWTH Aachen University",
      "Heidelberg University", "Humboldt University Berlin", "University of Stuttgart",
    ]}
    intakes={["April", "September"]}
    costItems={[
      { label: "Masters (total)", value: "€28,800" },
      { label: "Bachelors (total)", value: "€43,000" },
    ]}
  />
);

export default StudyInGermany;
