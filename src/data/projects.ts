export interface Project {
  title: string;
  description: string;
  githubLink?: string;
  projectLink?: string;
  imagePaths: string[];
  embedPath?: string;
  tags: string[];
  category: "ai" | "hackathon" | "personal";
}

export const projects: Project[] = [
  {
    title: "Adversarial Attacks in Image Classification",
    description:
      "Explored the vulnerability of CNNs and DNNs to adversarial attacks using CIFAR-10 images. Demonstrated how small perturbations can fool state-of-the-art classifiers.",
    githubLink: "https://github.com/yeojunh/Adversarial-Examples-DNN",
    imagePaths: ["/assets/projects/adversarial-examples-DNN.png"],
    tags: ["Python", "PyTorch", "Computer Vision"],
    category: "ai",
  },
  {
    title: "WAiSTE: Intern Hackathon Winner",
    description:
      "AI waste management app that sorts items into trash, recyclable, or compostable bins. Won 1st place overall and sustainability category at Microsoft Intern Hackathon.",
    githubLink: "https://github.com/emmahuang03/trash-identifier",
    projectLink: "https://youtu.be/UVRtHoRf4_8?si=SZHf3vE6ljUjbSTG",
    imagePaths: ["/assets/projects/waiste.png"],
    tags: ["Python", "ML", "Few-shot Learning"],
    category: "hackathon",
  },
  {
    title: "AmplifAI: AI For Accessibility 2nd Place",
    description:
      "Real-time speech augmentation for people with dysarthria. Won 2nd of 32 teams across three judging rounds over three months.",
    githubLink: "https://github.com/yeojunh/amplifAI",
    projectLink:
      "https://technationcanada.ca/en/blog/driving-accessibility-innovation-through-technations-emerging-tech-challenges/",
    imagePaths: ["/assets/projects/amplifai.png"],
    tags: ["Python", "Speech ML", "Accessibility"],
    category: "hackathon",
  },
  {
    title: "Actually: Real-time Fact Checker",
    description:
      "Fact-checks livestreams in real-time. Built the core AI pipeline connecting Azure speech recognition with fine-tuned Gemini 1.5 Pro for structured fact-check results.",
    githubLink: "https://github.com/ArsalaanAli/Eavesdrop",
    projectLink: "https://devpost.com/software/aktually",
    imagePaths: ["/assets/projects/actually_logo.jpg", "/assets/projects/actually.jpg"],
    tags: ["TypeScript", "Azure", "Gemini", "React"],
    category: "hackathon",
  },
  {
    title: "Dishwatcher: Smart Kitchen Monitor",
    description:
      "Tracks who leaves dishes and who cleans them. Built Python/Flask backend with OpenCV and YOLO for reliable face and dish detection.",
    githubLink: "https://github.com/Lciappi/dishwatcher",
    projectLink: "https://devpost.com/software/dishwatcher",
    imagePaths: ["/assets/projects/dishwatcher_page.jpg"],
    tags: ["Python", "Flask", "YOLO", "OpenCV"],
    category: "hackathon",
  },
  {
    title: "Interactive 3D Rendering",
    description:
      "Realistic 3D helmet rendering with Three.js using physically based rendering (PBR) techniques. Interactive — rotate and zoom the camera.",
    githubLink:
      "https://github.com/yeojunh/yeojunh.github.io/tree/main/public/threejs-graphics-project",
    embedPath: "/threejs-graphics-project/index.html",
    imagePaths: [],
    tags: ["Three.js", "WebGL", "PBR"],
    category: "personal",
  },
];
