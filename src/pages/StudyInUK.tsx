import { GraduationCap, Briefcase, Clock, BookOpen } from "lucide-react";
import CountryPage from "@/components/CountryPage";
import ukHero from "@/assets/uk-hero.jpg";

const StudyInUK = () => (
  <CountryPage
    country="United Kingdom"
    heroImage={ukHero}
    tagline="World-class education with globally recognized degrees and shorter course durations"
    description="The United Kingdom is home to some of the world's oldest and most prestigious universities. With shorter course durations, practical learning, and excellent post-study work opportunities, the UK remains a top choice for international students."
    benefits={[
      "Globally recognized degrees from prestigious universities",
      "Shorter course duration — 3-year UG, 1-year PG",
      "Practical & research-based learning approach",
      "Part-time work allowed during studies (20 hrs/week)",
      "2-year Post-Study Work Visa available",
    ]}
    highlights={[
      { icon: <Clock className="w-5 h-5" />, title: "Short Duration", description: "Complete your Masters in just 1 year" },
      { icon: <Briefcase className="w-5 h-5" />, title: "Work Options", description: "20 hrs/week during term, full-time in holidays" },
      { icon: <GraduationCap className="w-5 h-5" />, title: "Top Universities", description: "Oxford, Cambridge, Imperial College & more" },
      { icon: <BookOpen className="w-5 h-5" />, title: "Research Focus", description: "Strong emphasis on research-based learning" },
    ]}
    universities={[
      "University of Oxford", "University of Cambridge", "Imperial College London",
      "University College London", "University of Edinburgh", "University of Manchester",
    ]}
    intakes={["January", "May", "September"]}
    costItems={[
      { label: "Tuition Fees (per year)", value: "£15,000+" },
      { label: "Living & Accommodation", value: "£12,000/year" },
    ]}
  />
);

export default StudyInUK;
