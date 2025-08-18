import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { CodeIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Florian Hoppe",
  initials: "FH",
  location: "Munich, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Munich",
  about:
    "Ambitious Computer Science student with a passion for backend development and optimizing system performance.",
  summary:
    "I'm a Computer Science student at the Technical University of Munich with experience in software engineering, specializing in backend development and system optimization. I've contributed to projects involving Python, Kotlin, and various web technologies, with a focus on enhancing performance and scalability.",
  avatarUrl: "https://avatars.githubusercontent.com/u/6844162?v=4",
  personalWebsiteUrl: "https://flohop.com",
  contact: {
    email: "hoppe.florian02@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/flohop",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/florian-hoppe-857a7a208/",
        icon: LinkedInIcon,
      },
      {
        name: "LeetCode",
        url: "https://leetcode.com/u/flohop/",
        icon: CodeIcon
      }
    ],
  },
  education: [
    {
      school: "Technical University of Munich (TUM)",
      degree: "Pursuing a Master's Degree in Computer Science",
      start: "2024",
      end: "2026",
    },
    {
      school: "Technical University of Munich (TUM)",
      degree: "Bachelor's Degree in Computer Science",
      start: "2020",
      end: "2024",
    },
  ],
  leadership : [
    {
      organization: "Google Developer Student Club Munich",
      label: "Core Team Member",
      start: "2022",
      end: null,
      description: "Organized events and workshops, enhancing technical and communication skills",
      href: "https://gdsc.community.dev/technical-university-of-munich-munich-germany/"
    },
    {
      organization: "JetBrains",
      label: "Campus Ambassador",
      start: "2023",
      end: null,
      description: "Led the planning and execution of events and workshops, fostering community engagement and developing strong organizational, technical, and communication skills",
      href: "https://www.jetbrains.com/education/university-relations/"
    },
    {
      organization: "StartMunich",
      label: "Member",
      start: "2021",
      end: null,
      description: "Participated in multiple events to help build the StartUP community in munich",
      href: "https://www.startmunich.de/"
    }
  ],
  work: [
    {
      company: "Palantir",
      link: "https://www.palantir.com/",
      badges: ["Java", "GraphQL", "React"],
      title: "Software Engineer Intern",
      logo: ConsultlyLogo,
      start: "May 2025",
      location: "London",
      end: "Aug 2025",
      description: "Developed end-to-end search and indexing functionality for Custom Widgets. This included indexing the metadata in ElasticSearch, creating a search endpoint in REST, a query in GraphQL and integrating the feature in the frontend.",
    },
    {
      company: "JetBrains",
      link: "https://www.jetbrains.com/",
      badges: ["Kotlin", "JVM"],
      title: "Software Engineer on Fleet Core Platform Team (Intern)",
      location: "Munich",
      logo: ConsultlyLogo,
      start: "Mar 2024",
      end: "Mar 2025",
      description: "Implemented high-performance data structures in Kotlin Multiplatform, optimizing memory usage and runtime efficiency. Adapted core Fleet Window Manager features to a new platform, delivering a robust API for other developers.",
    },
    {
      company: "Kertos",
      link: "https://kertos.io",
      badges: ["Python", "Backend", "Automation"],
      title: "Full Stack Developer (Working Student)",
      logo: ParabolLogo,
      location: "Munich",
      start: "Jan 2022",
      end: "Dec 2024",
      description:
        "Designed and developed a highly efficient microservice in Python for automating the deletion of user data on" +
        "third-party platforms, serving over 10,000 requests to date. \n" +
        "Contributed to the successful migration of the REST API to GraphQL, enhancing type safety and delivering a 25% improvement in read speed through the reduction of over-fetching."
    },
  ],
  skills: [
    "Java/JVM",
    "Python",
    "Kotlin",
    "TypeScript",
    "React",
    "Node.js",
    "GraphQL",
  ],
  projects: [
    {
      title: "Check24-holiday-challenge (scholarship application [accepted])",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
        "Docker",
      ],
      description:
        "Discover ideal holiday hotel from a vast database of over 100 millions offers in under 1 second",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/flohop/holiday-challenge",
      },
    },
    {
      title: "Group Status: Real Time Android App",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React Native",
        "Firebase",
      ],
      description:
        "Meet up when everyone is ready",
      logo: ParabolLogo,
      link: {
        label: "PlayStore",
        href: "https://play.google.com/store/apps/details?id=com.flohop.groupstatus",
      },
    },
    {
      title: "Family Dentistry",
      techStack: [
        "Javascript",
        "HTML",
        "CSS",
      ],
      description:
        "Build the website for the family dentistry and an online booking system",
      logo: ParabolLogo,
      link: {
        label: "Website",
        href: "https://zahnteamhoppe.de/",
      },
    },
    {
      title: "Color Harmony",
      techStack: [
        "Java",
        "Android",
      ],
      description:
        "Create a harmonious color palette from images based on color theory",
      logo: ParabolLogo,
      link: {
        label: "PlayStore",
        href: "https://play.google.com/store/apps/details?id=com.florian.colorharmony_theory_strategy",
      },
    },
  ],
} as const;
