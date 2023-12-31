import { GitHubIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "LI, Yu Hong Harry",
  initials: "LI, YH Harry",
  location: "HKUST, Hong Kong SAR",
  locationLink: "https://maps.app.goo.gl/YZuY7rM4Mf9mvP9i8",
  about:
    "Enthusiastic software developer with experience in developing and maintaining websites and applications. Work hard; play hard.",
  summary:
    "Highly interested in Computer Science and passionate about learning new technologies through hands-on experience. Excellent team player with a strong ability to share knowledge and collaborate with others.",
  avatarUrl: "/avatar.jpg",
  contact: {
    email: "me@flandia.dev",
    tel: "+85284030974",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/FlandiaYingman",
        icon: GitHubIcon,
      },
    ],
  },
  education: [
    {
      school: "Hong Kong University of Science and Technology",
      degree:
        "Bachelor of Engineering with an Extended Major in AI (Discipline Undeclared)",
      start: "2023",
      end: "2027 (expected)",
    },
  ],
  award: [
    {
      time: "2022",
      name: "Outstanding Student Award",
      organization: "Shenzhen Fujing Foreign Language School",
    },
    {
      time: "2023",
      name: '"Fujing Star" Award',
      organization: "Shenzhen Fujing Foreign Language School",
    },
    {
      time: "2023",
      name: "First Prize Scholarship",
      organization: "Shenzhen Fujing Foreign Language School",
    },
    {
      time: "2023",
      name: "University Admissions Scholarship",
      organization: "Hong Kong University of Science and Technology",
    },
    {
      time: "2023",
      name: "Dean of Engineering Scholarship",
      organization: "Hong Kong University of Science and Technology",
    },
  ],
  work: [
    {
      company: "CSE, HKUST",
      link: "https://cse.hkust.edu.hk/",
      badges: ["Provisional", "UGTA"],
      title: "Undergraduate Teaching Assistant",
      time: "2024 Spring",
      description:
        "After taking the course COMP 2011 (Programming with C++) in HKUST in 2023 fall, an instructor invited me to become an UGTA. I accepted and will become an UGTA for this course in the next semester.",
    },
    {
      company: "USThing",
      link: "https://usthing.xyz/",
      badges: ["Volunteer"],
      title: "Backend Developer",
      time: "2023 Fall - Now",
      description:
        "USThing is a student-developed all-in-one App for HKUST. It is made up of passionate and talented students who work towards the continual betterment of the app and the HKUST student community.",
    },
  ],
  skills: [
    {
      title: "Programming Languages",
      badges: [
        "Java",
        "Kotlin",
        "Golang",
        "C / C++",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Python",
      ],
    },
    {
      title: "Libraries / Frameworks / DBMS",
      badges: [
        "Spring",
        "Vue",
        "React",
        "NumPy",
        "Keras",
        "TensorFlow",
        "PostgreSQL",
      ],
    },
    {
      title: "Misc",
      badges: [
        "Linux",
        "Microsoft Word",
        "Microsoft Excel",
        "LaTeX",
        "ChatGPT",
        "GenAI",
        "Video Games",
        "Mobile Games",
      ],
    },
  ],
  projects: [
    {
      title: "Arkwaifu",
      tags: [
        "Golang",
        "Python",
        "Vue",
        "Vuetify",
        "Material Design",
        "Docker",
        "Arknights (Mobile Game)",
      ],
      description:
        "A website arranging and providing almost all artworks extracted from Arknights (a mobile game).",
      status: "online",
      link: {
        label: "arkwaifu.cc",
        href: "https://arkwaifu.cc/",
      },
    },
    {
      title: "Chat @ UST",
      tags: [
        "Side Project",
        "Work in Progress",
        "TypeScript",
        "React",
        "Mui",
        "Material Design",
        "ChatGPT",
      ],
      description:
        "A website arranging and providing almost all artworks extracted from Arknights (a mobile game).",
      status: "wip",
      link: null,
    },
  ],
} as const;
