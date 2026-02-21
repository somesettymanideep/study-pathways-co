import {
  BookOpen, Target, FileText, Shield, Award, Plane, Home, Briefcase,
} from "lucide-react";

export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  icon: React.ReactNode;
  description: string[];
  highlights: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

const serviceDetails: ServiceDetail[] = [
  {
    slug: "course-selection-guidance",
    title: "Course Selection Guidance",
    tagline: "Find the right course that aligns with your passion and career goals",
    icon: <BookOpen className="w-10 h-10" />,
    description: [
      "Choosing the right course is the foundation of a successful study abroad journey. Our expert counsellors analyse your academic background, interests, aptitude, and long-term career aspirations to recommend programs that are the best fit for you.",
      "We maintain updated knowledge of thousands of courses across leading universities worldwide — from traditional degrees to emerging interdisciplinary programs — so you never miss an opportunity that matches your profile.",
      "Whether you're deciding between Engineering and Data Science, or exploring niche fields like Biomedical Informatics or Sustainable Energy, we provide clarity and confidence in your decision.",
    ],
    highlights: [
      { title: "Personalised Assessment", desc: "In-depth profiling of your academic strengths, interests, and goals." },
      { title: "University Shortlisting", desc: "Curated list of universities ranked by fit, affordability, and outcomes." },
      { title: "Comparative Analysis", desc: "Side-by-side comparison of courses, fees, duration, and career prospects." },
      { title: "Ongoing Support", desc: "Guidance doesn't stop at selection — we help through the entire application." },
    ],
    faqs: [
      { question: "How do you determine which course is right for me?", answer: "We conduct a detailed profiling session covering your academics, entrance exam scores, interests, budget, and preferred countries. Our counsellors then match you with courses and universities that align with your profile." },
      { question: "Can I change my course choice after counselling?", answer: "Absolutely. Our recommendations are flexible. If your interests shift during the process, we will re-evaluate and suggest alternatives without any extra charge." },
      { question: "Do you cover all disciplines?", answer: "Yes — we guide students across Engineering, Business, Medicine, Arts, Sciences, Law, Design, Hospitality, and many more fields." },
      { question: "Is there a fee for course selection counselling?", answer: "Initial consultations are free. Detailed profiling and shortlisting are part of our comprehensive service packages." },
    ],
  },
  {
    slug: "career-counselling",
    title: "Career Counselling",
    tagline: "Align your education with your dream career path",
    icon: <Target className="w-10 h-10" />,
    description: [
      "Our career counselling goes beyond academics. We help you understand how your chosen course and university will impact your long-term career trajectory, whether you plan to work abroad or return home.",
      "Through one-on-one sessions, aptitude assessments, and industry insights, we map out a clear career roadmap tailored to your ambitions — from your first semester to your first job.",
      "We also connect students with mentors, alumni networks, and industry professionals to give you real-world perspectives on your chosen career path.",
    ],
    highlights: [
      { title: "Aptitude & Interest Testing", desc: "Psychometric assessments to uncover your strengths and ideal career fits." },
      { title: "Industry Insights", desc: "Up-to-date data on job markets, salaries, and demand across countries." },
      { title: "Career Roadmapping", desc: "Step-by-step plan from education to employment in your target field." },
      { title: "Alumni Mentorship", desc: "Connect with professionals who've walked the same path before you." },
    ],
    faqs: [
      { question: "How is career counselling different from course selection?", answer: "Course selection focuses on finding the right program, while career counselling looks at the bigger picture — your long-term professional goals, industry trends, and how to build a career strategy around your education." },
      { question: "Is career counselling only for undecided students?", answer: "Not at all. Even students with a clear goal benefit from understanding industry trends, alternative paths, and optimising their study plan for career outcomes." },
      { question: "Do you provide job placement assistance?", answer: "While career counselling focuses on planning, we also offer separate internship and job placement services to help you transition from education to employment." },
      { question: "Can parents join the counselling session?", answer: "Yes, we encourage parents to participate. Their insights and concerns are an important part of the decision-making process." },
    ],
  },
  {
    slug: "application-document-assistance",
    title: "Application & Document Assistance",
    tagline: "Craft compelling applications that stand out to admissions committees",
    icon: <FileText className="w-10 h-10" />,
    description: [
      "A strong application is your ticket to your dream university. Our team provides end-to-end support for every document — from drafting powerful Statements of Purpose (SOPs) and Letters of Recommendation (LORs) to filling out complex university application forms.",
      "We understand what top universities look for and tailor each application to highlight your unique strengths, achievements, and potential. Our editors ensure every essay is polished, authentic, and impactful.",
      "With our help, you'll submit applications that are not only complete and error-free but also genuinely compelling.",
    ],
    highlights: [
      { title: "SOP & Essay Writing", desc: "Expert-crafted statements that authentically represent your story and aspirations." },
      { title: "LOR Guidance", desc: "Templates and coaching for recommenders to write strong, specific letters." },
      { title: "Application Review", desc: "Thorough review of every form, ensuring accuracy and completeness." },
      { title: "Portfolio Support", desc: "Help with creative portfolios for design, architecture, and arts programs." },
    ],
    faqs: [
      { question: "Do you write the SOP for me?", answer: "We collaborate with you. Our experts help brainstorm, structure, draft, and refine your SOP, but the story and voice remain authentically yours. Multiple revision rounds are included." },
      { question: "How many universities can I apply to?", answer: "There's no limit. We help you create a balanced list of ambitious, moderate, and safe-choice universities and manage applications to all of them." },
      { question: "What documents are typically required?", answer: "Common requirements include transcripts, SOPs, LORs, CV/resume, language test scores (IELTS/TOEFL), and sometimes portfolios or work experience letters." },
      { question: "Can you help with scholarship essays too?", answer: "Yes — scholarship applications often require separate essays, and we provide dedicated support for those as well." },
    ],
  },
  {
    slug: "visa-processing-interview-prep",
    title: "Visa Processing & Interview Prep",
    tagline: "Navigate visa applications confidently with expert guidance",
    icon: <Shield className="w-10 h-10" />,
    description: [
      "Visa processing can be one of the most stressful parts of studying abroad. Our experienced visa counsellors simplify the entire process — from document preparation to submission and interview coaching.",
      "We stay current with the latest visa regulations, processing timelines, and embassy requirements for all major study destinations. Our high visa approval rate reflects our attention to detail and thorough preparation.",
      "Mock interview sessions prepare you for the real thing, building your confidence and helping you articulate your study plans clearly and convincingly.",
    ],
    highlights: [
      { title: "Document Checklist", desc: "Country-specific checklists to ensure nothing is missed in your application." },
      { title: "Financial Documentation", desc: "Guidance on bank statements, sponsorship letters, and loan documents." },
      { title: "Mock Interviews", desc: "Realistic practice sessions with feedback from experienced counsellors." },
      { title: "Application Tracking", desc: "Regular updates on your visa application status and next steps." },
    ],
    faqs: [
      { question: "What is your visa approval success rate?", answer: "We maintain a visa approval rate of over 99%. Our thorough preparation and attention to documentation contribute to this high success rate." },
      { question: "How early should I start the visa process?", answer: "We recommend starting at least 3-4 months before your intended departure date. Some countries may require even longer lead times, especially during peak seasons." },
      { question: "What if my visa gets rejected?", answer: "In the rare event of a rejection, we analyse the reasons, strengthen your application, and guide you through the re-application process at no additional cost." },
      { question: "Do you handle visa extensions and post-study work visas?", answer: "Yes, we assist with visa extensions, post-study work permits, and other immigration-related queries throughout your time abroad." },
    ],
  },
  {
    slug: "scholarship-financial-guidance",
    title: "Scholarship & Financial Guidance",
    tagline: "Unlock funding opportunities to make your education affordable",
    icon: <Award className="w-10 h-10" />,
    description: [
      "Financing your international education shouldn't be a barrier. We help you identify and apply for scholarships, grants, fellowships, and financial aid that can significantly reduce your education costs.",
      "Our database covers hundreds of scholarship opportunities — from merit-based and need-based awards to country-specific and university-specific funding. We match you with the opportunities best suited to your profile.",
      "Beyond scholarships, we provide guidance on education loans, part-time work regulations, and budgeting tips to help you manage finances effectively throughout your study abroad journey.",
    ],
    highlights: [
      { title: "Scholarship Matching", desc: "Personalised list of scholarships you're eligible for based on your profile." },
      { title: "Application Support", desc: "Help with scholarship essays, forms, and supporting documentation." },
      { title: "Loan Guidance", desc: "Assistance with education loan applications and financial planning." },
      { title: "Budget Planning", desc: "Cost-of-living guides and budgeting tools for your destination country." },
    ],
    faqs: [
      { question: "Can I get a full scholarship?", answer: "Full scholarships are competitive but achievable. We help you identify opportunities and build the strongest possible application. Many students secure partial scholarships that significantly reduce costs." },
      { question: "When should I start applying for scholarships?", answer: "As early as possible — ideally 12-18 months before your course start date. Many scholarship deadlines are earlier than university application deadlines." },
      { question: "Do you charge for scholarship guidance?", answer: "Scholarship guidance is included in our comprehensive service packages. We don't charge any percentage of the scholarship amount." },
      { question: "What education loan options are available?", answer: "We partner with leading banks and financial institutions to offer competitive education loan options covering tuition fees, living expenses, and other costs." },
    ],
  },
  {
    slug: "pre-departure-post-arrival-support",
    title: "Pre-Departure & Post-Arrival Support",
    tagline: "Seamless transition from home to your new campus life",
    icon: <Plane className="w-10 h-10" />,
    description: [
      "The journey doesn't end with your visa approval — it's just the beginning. Our pre-departure briefings cover everything you need to know before boarding your flight, from packing essentials to cultural etiquette.",
      "We coordinate airport pickups, temporary accommodation, and orientation assistance to ensure your first days in a new country are smooth and stress-free.",
      "Our post-arrival support continues as you settle in — helping with bank account setup, local SIM cards, transport passes, and connecting you with student communities.",
    ],
    highlights: [
      { title: "Travel Briefing", desc: "Comprehensive sessions covering travel tips, packing, and what to expect." },
      { title: "Airport Pickup", desc: "Coordinated pick-up service at your destination airport." },
      { title: "Orientation Support", desc: "Help navigating campus registration, ID cards, and local services." },
      { title: "Community Connect", desc: "Introduction to student groups, cultural associations, and local networks." },
    ],
    faqs: [
      { question: "What does the pre-departure briefing cover?", answer: "We cover travel documentation, packing tips, cultural dos and don'ts, weather preparation, money management, emergency contacts, and what to expect in your first week." },
      { question: "Is airport pickup available in all countries?", answer: "We arrange airport pickup services in all our major study destinations including the UK, USA, Australia, Canada, and Germany." },
      { question: "How long does post-arrival support last?", answer: "Our support continues throughout your first semester. After that, you can reach out to us anytime for guidance — we're always here for our students." },
      { question: "Can you help me find part-time work after arrival?", answer: "Yes, we guide you on work regulations in your country, help with CV preparation, and share part-time job resources near your campus." },
    ],
  },
  {
    slug: "accommodation-assistance",
    title: "Accommodation Assistance",
    tagline: "Find safe, comfortable, and affordable student housing",
    icon: <Home className="w-10 h-10" />,
    description: [
      "Finding the right place to live is crucial to your study abroad experience. We help you explore and secure accommodation that suits your budget, lifestyle, and proximity to campus.",
      "From university halls of residence to private rentals and homestay options, we provide verified listings and guide you through the booking process to avoid scams and last-minute hassles.",
      "Our team also advises on tenancy agreements, deposits, and your rights as a tenant in your destination country.",
    ],
    highlights: [
      { title: "Verified Listings", desc: "Pre-vetted accommodation options near your university campus." },
      { title: "Budget Matching", desc: "Options tailored to your budget, from shared rooms to private studios." },
      { title: "Booking Support", desc: "Help with applications, deposits, and tenancy agreement reviews." },
      { title: "Safety Guidance", desc: "Tips on neighbourhood safety, transport links, and local amenities." },
    ],
    faqs: [
      { question: "Should I book accommodation before arriving?", answer: "We strongly recommend securing accommodation before departure. We help you book verified options remotely so you have a confirmed place to stay when you arrive." },
      { question: "Is university accommodation better than private housing?", answer: "It depends on your preferences. University halls offer convenience and community, while private housing may offer more independence and sometimes better value. We help you weigh the pros and cons." },
      { question: "How much should I budget for accommodation?", answer: "Costs vary by country and city. We provide detailed cost-of-living guides for each destination so you can plan your budget accurately." },
      { question: "Can you help if I need to change accommodation?", answer: "Yes, our support continues after you arrive. If you need to relocate, we assist with finding new options and managing the transition." },
    ],
  },
  {
    slug: "internship-job-placement",
    title: "Internship & Job Placement",
    tagline: "Bridge the gap between education and your professional career",
    icon: <Briefcase className="w-10 h-10" />,
    description: [
      "Your degree is a stepping stone — we help you take the next step. Our internship and job placement services connect you with opportunities that align with your studies and career ambitions.",
      "We guide you through CV/resume building, interview preparation, LinkedIn optimisation, and networking strategies tailored to your destination country's job market.",
      "From part-time campus jobs during your studies to full-time roles after graduation, we support your professional journey every step of the way.",
    ],
    highlights: [
      { title: "CV & Resume Building", desc: "Professionally crafted CVs tailored to international job market standards." },
      { title: "Interview Coaching", desc: "Mock interviews and feedback to help you ace employer conversations." },
      { title: "Job Market Insights", desc: "Country-specific guidance on in-demand skills and hiring trends." },
      { title: "Networking Support", desc: "Help building professional networks through LinkedIn and industry events." },
    ],
    faqs: [
      { question: "Can I work while studying abroad?", answer: "Most countries allow international students to work part-time (usually 20 hours/week during term). We explain the specific regulations for your destination country." },
      { question: "Do you guarantee job placement?", answer: "While we can't guarantee specific outcomes, we significantly improve your chances through professional preparation, industry connections, and targeted guidance." },
      { question: "When should I start looking for internships?", answer: "We recommend starting at least one semester before you want to intern. Early preparation gives you the best chance of landing competitive positions." },
      { question: "Do you help with post-study work visas?", answer: "Yes, we guide you through post-study work visa applications (like the UK Graduate Route or Australia's Post-Study Work Stream) so you can stay and gain professional experience." },
    ],
  },
];

export default serviceDetails;
