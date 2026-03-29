export interface Experience {
  title: string;
  role: string;
  startDate: string;
  endDate: string;
  description?: string;
  website: string;
  logoPath: string;
  /** Separate logo for dark mode (if provided, used instead of invertInDark) */
  logoDarkPath?: string;
  /** If true, the logo will be inverted to white in dark mode via CSS filter */
  invertInDark?: boolean;
}

export const experiences: Experience[] = [
  {
    title: "Microsoft Visual Studio Copilot",
    role: "Software Engineer",
    startDate: "August 2025",
    endDate: "Present",
    website: "https://visualstudio.microsoft.com/github-copilot/",
    logoPath: "/assets/logos/visual-studio.png",
  },
  {
    title: "Microsoft Visual Studio Copilot",
    role: "Software Engineer Intern",
    startDate: "May 2024",
    endDate: "Aug 2024",
    website: "https://visualstudio.microsoft.com/github-copilot/",
    logoPath: "/assets/logos/visual-studio.png",
  },
  {
    title: "Ansys OpticStudio",
    role: "Software Engineer Intern",
    startDate: "Sep 2024",
    endDate: "Dec 2024",
    website: "https://www.ansys.com/products/optics/ansys-zemax-opticstudio",
    logoPath: "/assets/logos/ansys-black.svg",
    logoDarkPath: "/assets/logos/ansys-white.png",
  },
  {
    title: "Microsoft Azure SDK API",
    role: "Software Engineer Intern",
    startDate: "May 2023",
    endDate: "Aug 2023",
    website: "https://github.com/Azure/azure-sdk-tools",
    logoPath: "/assets/logos/azure.png",
  },
  {
    title: "Microsoft Azure SDK Engineering Systems",
    role: "Software Engineer & Program Manager Intern",
    startDate: "May 2022",
    endDate: "Aug 2022",
    website: "https://github.com/Azure/azure-sdk-tools",
    logoPath: "/assets/logos/azure.png",
  },
  {
    title: "UBC Computer Science",
    role: "Undergraduate Teaching Assistant",
    startDate: "Jan 2021",
    endDate: "Apr 2025",
    description: "Computer Vision · Applied ML · Software Construction",
    website: "https://www.cs.ubc.ca/",
    logoPath: "/assets/logos/ubc.png",
    invertInDark: true,
  },
  {
    title: "UBC SOCIUS Lab",
    role: "Undergraduate Research Assistant",
    startDate: "Jan 2025",
    endDate: "Apr 2025",
    description: "Human-Computer Interaction research",
    website: "https://www.cs.ubc.ca/labs/socius/",
    logoPath: "/assets/logos/ubc.png",
    invertInDark: true,
  },
];
