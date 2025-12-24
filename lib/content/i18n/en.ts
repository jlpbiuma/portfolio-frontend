import { lazy } from 'react';


export const en = {
  hero: {
    name: "José Luis Pordomingo",
    role: "Software and Data Engineer 🧑🏻‍💻📊 | Industrial Engineer in Electronics and Automation ⚡⚙️ | Fullstack and IoT Dev 🖥️",
    welcome: "Hello!! My name is José Luis. I am an Industrial Electronics and Automation Engineer with a Master's in Applied Electronics and Telecommunications. Later, I completed a FullStack Developer course that allowed me to expand my knowledge and cover the OSI levels. I am a hardworking person, always willing to learn new technologies. Additionally, I am curious and proactive, and I enjoy working on my own projects. If you’ve made it this far, feel free to contact me (jlpordomingobrito@gmail.com) or send me a message through my profile.",
    download: "Download CV"
  },
  nav: {
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    skills: "Skills",
    viewProject: "View Project",
    viewMore: "View More"
  },
  experience: {
    title: "Professional Experience",
    items: [
      {
        role: "Data and Software Engineer",
        company: "University Foundation of Las Palmas de Gran Canaria",
        period: "2023 - Present",
        location: "Las Palmas de Gran Canaria, Spain",
        description: "Developing alongside the systems department",
        achievements: [
          "Creation of web and mobile applications",
          "API development",
          "RAG Architecture Advanced",
          "Ollama and LLM models",
          "Deployment of containerized FullStack applications and system management",
          "Data mining, ETL, pattern searches",
          "Classification models",
          "Training and testing of CNN and RNN",
          "Recommendation system"
        ],
        image: "/images/fulp.png"
      },
    ]
  },
  education: {
    title: "Education",
    items: [
      {
        degree: "Master's in IoT",
        institution: "UNIR - International University of La Rioja",
        period: "2023 - 2024",
        location: "Las Palmas, Spain",
        achievements: [
          "Thesis: IoT Platform for Air Quality Monitoring in Measurement Stations",
        ],
        image: "/images/unir.jpeg"
      },
      {
        degree: "FullStack Web Developer",
        institution: "Reboot Academy",
        period: "2022",
        location: "Las Palmas, Spain",
        achievements: [],
        image: "/images/reboot-academy.jpeg"
      },
      {
        degree: "Master's in Applied Electronics and Telecommunications",
        institution: "University of Las Palmas de Gran Canaria",
        period: "2021 - 2022",
        location: "Las Palmas, Spain",
        achievements: [
          "Thesis: Spectral and Spatial Characterization of Hyperspectral Acquisition System for Medical Applications",
        ],
        image: "/images/ulpgc.jpeg"
      },
      {
        degree: "Bachelor's in Industrial Electronics and Automation Engineering",
        institution: "University of Las Palmas de Gran Canaria",
        period: "2017 - 2021",
        location: "Las Palmas, Spain",
        achievements: [
          "Thesis: Control Software for Hyperspectral Camera and System Characterization"
        ],
        image: "/images/ulpgc.jpeg"
      },
    ]
  },
  skills: {
    title: "Skills and Technologies",
    categories: [
      {
        name: "Programming Languages",
        items: ["Python", "TypeScript", "Java", "JavaScript", "C", "C++", "C#", "PHP", "Dart", "R"]
      },
      {
        name: "Frontend",
        items: ["Next.js", "React", "Vue.js", "Axios", "Tailwind CSS", "shadcn/ui", "Flutter"]
      },
      {
        name: "Backend",
        items: ["Laravel", "SpringBoot", "FastAPI", "Flask", "Django", "Node.js", ".NET"]
      },
      {
        name: "Databases",
        items: ["MongoDB", "Firebase", "MySQL", "PostgreSQL", "Oracle"]
      },
      {
        name: "AI & Data",
        items: ["PaddleOCR", "Keras", "PyTorch", "Hugging Face", "TensorFlow", "Matlab", "RStudio", "Power BI", "Scikit-Learn"]
      },
      {
        name: "LLMs & Automation",
        items: ["N8N", "OpenRouter", "Ollama", "LangGraph", "LangChain"]
      },
      {
        name: "DevOps",
        items: ["Docker", "Docker Compose", "Jenkins", "GitHub Actions", "Pytest"]
      },
      {
        name: "Cloud",
        items: ["AWS", "Azure", "GCP"]
      },
      {
        name: "Engineering",
        items: ["AutoCAD", "Wireshark", "Wokwi"]
      },
      {
        name: "Hardware",
        items: ["Raspberry Pi", "Arduino", "ESP32", "Proteus", "LTspice"]
      },
      {
        name: "Version Control",
        items: ["Git", "GitHub", "BitBucket"]
      },
      {
        name: "Office Suite",
        items: ["Word", "Excel", "Power Point", "OneDrive", "Google Drive"]
      },
      {
        name: "IDEs",
        items: ["Cursor", "Visual Studio Code", "Google Antigravity", "Android Studio"]
      }
    ]
  },
  projects: {
    title: "Featured Projects",
    items: [
      {
        title: "Portfolio Website",
        description: "A personal portfolio built with Next.js and shadcn/ui components",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "JavaScript"],
        link: "https://github.com/jlpbiuma/portfolio"
      },
      {
        title: "Air Quality Monitoring Platform",
        description: "Web application for monitoring air quality in measurement stations",
        technologies: ["React", "JavaScript", "Tailwind CSS", "Recharts", "Docker", "Python", "Flask", "MongoDB", "MySQL", "Arduino", "Raspberry Pi"],
        link: "https://github.com/jlpbiuma/TFM-AQ"
      },
      {
        title: "OupApp",
        description: "Web application to monitor and support elderly people",
        technologies: ["Vue.js", "JavaScript", "Tailwind CSS", "MongoDB", "Express", "Node.js"],
        link: "https://github.com/jlpbiuma/P4-OupApp-Front"
      },
      {
        title: "JvJ Repairs",
        description: "Application to manage and administer a repair workshop",
        technologies: ["Vue.js", "JavaScript", "Tailwind CSS", "MongoDB", "Express", "Node.js"],
        link: "https://github.com/jlpbiuma/P3-Reparaciones-Front"
      },
    ]
  },
  contact: {
    title: "Contact Information",
    items: [
      {
        type: "email",
        label: "Email",
        value: "jlpordomingobrito@gmail.com",
        link: "mailto:jlpordomingobrito@gmail.com"
      },
      {
        type: "linkedin",
        label: "LinkedIn",
        value: "José Luis Pordomingo Brito",
        link: "https://www.linkedin.com/in/jlpordomingo/"
      },
      {
        type: "github",
        label: "GitHub",
        value: "github.com/jlpbiuma",
        link: "https://github.com/jlpbiuma"
      },
      {
        type: "location",
        label: "Location",
        value: "Las Palmas de Gran Canaria, Spain",
        link: "https://maps.google.com/?q=Las+Palmas+de+Gran+Canaria+Spain"
      }
    ]
  },
  experiment: {
    title: "Experiments",
    items: [
      {
        title: "Real time data graph",
        description: "Real time data graph using Socket.IO and Recharts",
        component: lazy(() => import("@/components/subcomponents/sensor-data-component"))
      }
    ]
  }
};
