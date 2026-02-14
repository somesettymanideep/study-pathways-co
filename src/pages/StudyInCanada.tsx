import { GraduationCap, Briefcase, Home, Users } from "lucide-react";
import CountryPage from "@/components/CountryPage";
import canadaHero from "@/assets/canada-hero.jpg";

const StudyInCanada = () => (
  <CountryPage
    country="Canada"
    heroImage={canadaHero}
    tagline="Quality education at affordable cost with excellent PR opportunities"
    description="Canada offers quality education at affordable costs with practical, career-focused learning. Its generous post-graduation work permits and pathways to permanent residency make it one of the most popular destinations for international students."
    benefits={[
      "Quality education at affordable cost",
      "Practical and career-focused learning",
      "Part-time work (20 hrs/week) and post-study work options",
      "Safe and multicultural environment",
      "Pathway to Permanent Residency (PR)",
    ]}
    highlights={[
      { icon: <Home className="w-5 h-5" />, title: "PR Pathway", description: "Post-Graduation Work Permit leading to PR" },
      { icon: <Briefcase className="w-5 h-5" />, title: "Work Permits", description: "20 hrs/week during studies, full-time after" },
      { icon: <Users className="w-5 h-5" />, title: "Multicultural", description: "Welcoming and diverse communities" },
      { icon: <GraduationCap className="w-5 h-5" />, title: "Top Colleges", description: "Universities and colleges across all provinces" },
    ]}
    universities={[
      "University of Toronto", "McGill University", "University of British Columbia",
      "University of Alberta", "University of Waterloo", "Conestoga College",
    ]}
    intakes={["January", "May", "September"]}
    costItems={[
      { label: "Masters (per year)", value: "CAD 30,000+" },
      { label: "Bachelors (per year)", value: "CAD 60,000+" },
    ]}
  />
);

export default StudyInCanada;
