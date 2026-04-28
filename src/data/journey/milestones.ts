import certSecondYear1 from "@/assets/journey/certificates/secondyear.png";
import certSecondYear2 from "@/assets/journey/certificates/secondyear (2).png";
import certSecondYear3 from "@/assets/journey/certificates/secondyear3.png";
import certSecondYear4 from "@/assets/journey/certificates/secondyear4.png";
import certSecondYear5 from "@/assets/journey/certificates/secondyear5.png";
import certThirdYear1 from "@/assets/journey/certificates/thirdyear.png";
import certThirdYear2 from "@/assets/journey/certificates/thirdyear (2).png";
import certThirdYear3 from "@/assets/journey/certificates/thirdyear (3).png";
import certFourthYear1 from "@/assets/journey/certificates/journey-cert-01-ai-agents.png";
import certFourthYear2 from "@/assets/journey/certificates/journey-cert-02-software-architecture-ddd.png";
import certFourthYear3 from "@/assets/journey/certificates/journey-cert-03-generative-ai.png";
import logoContentstack from "@/assets/contentstack_logo.jpeg";
import logoKv from "@/assets/kv_logo.jpg";

import type { JourneyMilestone } from "./types";

/** Remote logos (Wikimedia Commons / English Wikipedia). KV & Contentstack use `src/assets`. */
export const LOGO_APS =
  "https://upload.wikimedia.org/wikipedia/en/b/be/APS_Pune_logo.jpg";
export const LOGO_AIT =
  "https://upload.wikimedia.org/wikipedia/en/6/6a/AIT_Pune_logo.gif";

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: "born",
    title: "Born",
    period: "Port Blair",
    location: "Port Blair, Andaman and Nicobar Islands, India",
    description: "Where it started — then years of new schools, cities, and people across India.",
  },
  {
    id: "aps-chandimandir",
    title: "Initial schooling",
    period: "Standards 1–3",
    location: "Army Public School (APS), Chandimandir, Panchkula, Haryana, India",
    logoUrl: LOGO_APS,
    logoAlt: "Army Public School (India) logo",
    description: "Early years shaped by routine, discipline, and learning alongside peers.",
  },
  {
    id: "aps-lucknow",
    title: "APS Nehru Road",
    period: "Standards 4–5",
    location: "Army Public School, Nehru Road, Lucknow, Uttar Pradesh, India",
    logoUrl: LOGO_APS,
    logoAlt: "Army Public School (India) logo",
    description: "Continued building basics with a heavier tilt toward academics and steady habits.",
  },
  {
    id: "kv-thiruvananthapuram",
    title: "KV AFS Akkulam",
    period: "Standards 5–7",
    location: "Kendriya Vidyalaya, Air Force Station Akkulam, Thiruvananthapuram, Kerala, India",
    logoUrl: logoKv,
    logoAlt: "Kendriya Vidyalaya Sangathan logo",
    description: "Middle school in a new region — new peers, new syllabus, quick adaptation.",
  },
  {
    id: "kv-shillong",
    title: "KV Happy Valley",
    period: "Standards 7–9",
    location: "Kendriya Vidyalaya, Happy Valley, Shillong, Meghalaya, India",
    logoUrl: logoKv,
    logoAlt: "Kendriya Vidyalaya Sangathan logo",
    description: "Hill-town years — balancing classwork with growing curiosity about tech beyond textbooks.",
  },
  {
    id: "kv-lucknow-10",
    title: "KV Lucknow Cantt",
    period: "Class 10",
    location: "Kendriya Vidyalaya, Lucknow Cantt, Uttar Pradesh, India",
    logoUrl: logoKv,
    logoAlt: "Kendriya Vidyalaya Sangathan logo",
    marks: "94.6%",
    description: "Board year — solid footing before committing fully to the science stream.",
  },
  {
    id: "kv-lucknow-11",
    title: "KV Lucknow Cantt",
    period: "Class 11 · PCM",
    location: "Kendriya Vidyalaya, Lucknow Cantt, Uttar Pradesh, India",
    logoUrl: logoKv,
    logoAlt: "Kendriya Vidyalaya Sangathan logo",
    marks: "88%",
    description: "PCM year — drilling fundamentals for boards and engineering entrance prep.",
  },
  {
    id: "kv-lucknow-12",
    title: "KV Lucknow Cantt",
    period: "Class 12",
    location: "Kendriya Vidyalaya, Lucknow Cantt, Uttar Pradesh, India",
    logoUrl: logoKv,
    logoAlt: "Kendriya Vidyalaya Sangathan logo",
    marks: "95%",
    description: "Final school year — closing this chapter before undergrad engineering.",
  },
  {
    id: "ait-pune-y1",
    title: "1st year",
    period: "B.E. Computer Engineering · AIT Pune",
    location: "Army Institute of Technology (AIT), Alandi Road, Dighi Hills, Pune, Maharashtra, India",
    logoUrl: LOGO_AIT,
    logoAlt: "Army Institute of Technology, Pune logo",
    description:
      "First year — foundation courses, settling into the program, and early labs. Add what you studied, clubs joined, and first wins here.",
  },
  {
    id: "ait-pune-y2",
    title: "2nd year",
    period: "B.E. Computer Engineering · AIT Pune",
    location: "Army Institute of Technology (AIT), Alandi Road, Dighi Hills, Pune, Maharashtra, India",
    logoUrl: LOGO_AIT,
    logoAlt: "Army Institute of Technology, Pune logo",
    description:
      "Second year — core CS depth, bigger assignments, and side projects starting to take shape. Note achievements, internships prep, or competitions.",
    certificates: [
      {
        id: "y2-cert-1",
        alt: "Second year certificate 1",
        image: certSecondYear1,
      },
      {
        id: "y2-cert-2",
        alt: "Second year certificate 2",
        image: certSecondYear2,
      },
      {
        id: "y2-cert-3",
        alt: "Second year certificate 3",
        image: certSecondYear3,
      },
      {
        id: "y2-cert-4",
        alt: "Second year certificate 4",
        image: certSecondYear4,
      },
      {
        id: "y2-cert-5",
        alt: "Second year certificate 5",
        image: certSecondYear5,
      },
    ],
  },
  {
    id: "ait-pune-y3",
    title: "3rd year",
    period: "B.E. Computer Engineering · AIT Pune",
    location: "Army Institute of Technology (AIT), Alandi Road, Dighi Hills, Pune, Maharashtra, India",
    logoUrl: LOGO_AIT,
    logoAlt: "Army Institute of Technology, Pune logo",
    description:
      "Third year — advanced coursework, internships or research, and shipping more serious work. Summarize roles, tech stack, and standout outcomes.",
    certificates: [
      {
        id: "y3-cert-1",
        alt: "Third year certificate 1",
        image: certThirdYear1,
      },
      {
        id: "y3-cert-2",
        alt: "Third year certificate 2",
        image: certThirdYear2,
      },
      {
        id: "y3-cert-3",
        alt: "Third year certificate 3",
        image: certThirdYear3,
      },
    ],
  },
  {
    id: "ait-pune-y4",
    title: "4th Year",
    period: "B.E. Computer Engineering · AIT Pune",
    location: "Army Institute of Technology (AIT), Alandi Road, Dighi Hills, Pune, Maharashtra, India",
    logoUrl: LOGO_AIT,
    logoAlt: "Army Institute of Technology, Pune logo",
    cgpa: "8.65",
    description:
      "Final year — capstone, placements or higher studies, and consolidating the degree. Final CGPA shown below; add thesis, offers, and what you are most proud of.",
    certificates: [
      {
        id: "y4-cert-1",
        alt: "Certificate of completion: What Is Generative AI?",
        image: certFourthYear1,
      },
      {
        id: "y4-cert-2",
        alt: "Certificate of completion: Software Architecture: Domain-Driven Design",
        image: certFourthYear2,
      },
      {
        id: "y4-cert-3",
        alt: "Certificate of completion: AI Agents for Everyday Professionals",
        image: certFourthYear3,
      },
    ],
  },
  {
    id: "contentstack-intern",
    title: "Associate Software Engineering Intern",
    period: "Contentstack",
    location: "Contentstack — headless CMS & composable DXP (product company)",
    logoUrl: logoContentstack,
    logoAlt: "Contentstack",
    description:
      "Product engineering at a product-led org: a headless CMS and digital experience platform — shipping features, integrations, and customer-facing experiences.",
  },
];
