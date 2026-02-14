import { GraduationCap, Briefcase, Shield, Sun } from "lucide-react";
import CountryPage from "@/components/CountryPage";
import australiaHero from "@/assets/australia-hero.jpg";

const StudyInAustralia = () => (
  <CountryPage
    country="Australia"
    heroImage={australiaHero}
    tagline="Globally recognized education in a safe, multicultural, student-friendly environment"
    description="Australia offers world-class education with globally recognized universities, practical and industry-focused learning, and excellent post-study work opportunities. Its safe and multicultural environment makes it an ideal destination for international students."
    benefits={[
      "Globally recognized education and universities",
      "Strong practical and industry-focused learning",
      "Part-time work (40 hrs/fortnight) and post-study work visa",
      "Safe, multicultural, student-friendly environment",
      "High quality of life and beautiful landscapes",
    ]}
    highlights={[
      { icon: <Shield className="w-5 h-5" />, title: "Student Visa", description: "Subclass 500 with work rights included" },
      { icon: <Briefcase className="w-5 h-5" />, title: "Work Rights", description: "40 hrs/fortnight during studies" },
      { icon: <Sun className="w-5 h-5" />, title: "Lifestyle", description: "Safe, multicultural & student-friendly" },
      { icon: <GraduationCap className="w-5 h-5" />, title: "Top Courses", description: "Business, IT, Engineering, Health Sciences" },
    ]}
    universities={[
      "University of Melbourne", "University of Sydney", "Monash University",
      "University of Queensland", "UNSW Sydney", "Australian National University",
    ]}
    intakes={["February", "July", "November"]}
    costItems={[
      { label: "Masters (per year)", value: "A$ 50,000+" },
      { label: "Bachelors (per year)", value: "A$ 80,000+" },
    ]}
  />
);

export default StudyInAustralia;
