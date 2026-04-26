import certAiAgents from "@/assets/journey/certificates/journey-cert-01-ai-agents.png";
import certSoftwareArch from "@/assets/journey/certificates/journey-cert-02-software-architecture-ddd.png";
import certGenAi from "@/assets/journey/certificates/journey-cert-03-generative-ai.png";
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
        id: "y4-cert-ai-agents",
        alt: "Certificate of completion: AI agents for everyday professionals",
        image: certAiAgents,
      },
      {
        id: "y4-cert-software-architecture-ddd",
        alt: "Certificate of completion: software architecture and domain-driven design",
        image: certSoftwareArch,
      },
      {
        id: "y4-cert-generative-ai",
        alt: "Certificate of completion: what is generative AI",
        image: certGenAi,
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
