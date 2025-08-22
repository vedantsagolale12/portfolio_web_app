export const mockData = {
  hero: {
    greeting: "Hello, I'm",
    name: "Vedant Sagolale",
    title: "Mobile Application Developer",
    description:
      "I’m a Mobile Application Developer with expertise in Native Android and cross-platform solutions. I craft scalable, high-performance apps using Flutter, Kotlin, Kotlin Multiplatform, and Swift, focusing on responsive and user-centric design. Passionate about Machine Learning and Generative AI, I strive to build innovative mobile solutions that blend cutting-edge technology with real business impact.",
    profileImage: process.env.PUBLIC_URL + "/assets/images/profile_picture.jpeg",
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/vedantsagolale12", icon: "Github" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/vedant1281/", icon: "Linkedin" },
      { platform: "Email", url: "vedantsagolale12@gmail.com", icon: "Mail" },
    ],
  },

  about: {
    title: "Developing Mobile Applications that solves real world problems",
    description: [
      "I specialize in both Native Android and cross-platform development, building scalable mobile applications that deliver seamless performance and reliability. My core expertise lies in frontend technologies such as Flutter, Kotlin, Kotlin Multiplatform, and Swift, enabling me to design responsive, user-centric, and visually compelling interfaces. ",
      "Beyond mobile development, I am deeply passionate about Machine Learning and Generative AI, where I focus on integrating intelligent features that elevate user experiences. Driven by innovation, I aim to craft end-to-end digital solutions that not only meet technical standards but also align with business goals and real user needs.",
    ],
    image: process.env.PUBLIC_URL + "/assets/images/dev.jpg",
    stats: {
      experience: "1+",
      projects: "11+",
    },
  },

  skills: {
    technical: [
      { name: "Flutter-Development", level: 95 },
      { name: "Native Android Development", level: 85 },
      { name: "IOS Development", level: 80 },
      { name: "Cross Platform Development", level: 85 },
      { name: "Kotlin Multi-platform", level: 80 },
      { name: "Machine Learning", level: 60 },
      { name: "Natural Language Processing", level: 60 },
      { name: "Digital Image Processing", level: 60 },
    ],
    categories: {
      frontend: ["Flutter", "Kotlin", "Dart", "Swift", "Javascript", "Typescript", "HTML5", "CSS3"],
      backend: ["Node.js", "Python", "Express.js", "Django", "FastAPI", "RESTful APIs", "GraphQL"],
      database: ["MongoDB", "Redis", "Google Cloud", "PostgreSQL", "MySQL"],
      tools: ["Git", "VS Code", "Figma", "Postman", "Gitlab", "Webpack", "Linux", "Agile"],
    },
    certifications: [
      { name: "Kotlin Developer Certification", issuer: "Coursera", date: "2025" },
      { name: "Kotlin Multi-platform Mobile Development", issuer: "Udemy", date: "2025" },
      { name: "Full Stack Web Development", issuer: "Udemy", date: "2023" },
      { name: "Mastering Clean architecture in flutter", issuer: "Udemy", date: "2023" },
      { name: "Machine Learning and Data Science ", issuer: "GeeksForGeeks", date: "2024" },
      { name: "Swift IOS development", issuer: "Udemy", date: "2025" },
    ],
  },

  projects: [
    {
      id: 1,
      title: "Blog Post Application",
      description:
        "It is cross platform application in flutter which specially build for android and ios .It uses clean architecture and bloc state-management alongisde all industry practices which are required to build an application.It is apllication where users can create , modify or even share their blogs to another platform.",
      image: process.env.PUBLIC_URL + "/assets/images/blogPostCover.png",
      technologies: ["Flutter", "Bloc-Cubit state management", "Database", "UI/UX", "Clean architecture"],
      demoUrl: "",
      githubUrl: "https://github.com/vedantsagolale12/blogPostApplication",
      featured: true,
    },

    {
      id: 2,
      title: "Photo Store Application",
      description:
        "A lightweight photo editing application built with Kotlin and Jetpack Compose, designed to let users quickly adjust brightness, contrast, saturation, and hue of an image — and save or share it instantly.",
      image:process.env.PUBLIC_URL + "/assets/images/PhotoStore.png",
      technologies: ["Kotlin", "Jetpack Compose", "Hilt", "Clean architecture", "UI/UX", "MVVM", "Room", "Digital Image Processing", "Color Matrix", "Color Filter"],
      demoUrl: "",
      githubUrl: "https://github.com/vedantsagolale12/PhotoStore",
      featured: true,
    },
    {
      id: 3,
      title: "Whispr",
      description:
        "Whispr is a minimal voice-powered To-Do list application built with Kotlin, Jetpack Compose, Clean Architecture, and Hilt (Dependency Injection).",
      image:process.env.PUBLIC_URL + "/assets/images/Voice.jpeg",
      technologies: ["kotlin", "Hilt", "Room", "Clean architecture", "State Management", "Jetpack Compose", "UI/UX", "MVVM", "Natural Language Processing"],
      demoUrl: "",
      githubUrl: "https://github.com/vedantsagolale12/VoiceTodoApp",
      featured: false,
    },
    {
      id: 4,
      title: "Vision",
      description:
        "It is cross platform mobile application in flutter which uses google ML kit package in flutter which provides services like text recognition,face detection,face mesh detection,pose detection ,object detection,and also segmentation",
      image: process.env.PUBLIC_URL + "/assets/images/shared-vision.png",
      technologies: ["Flutter", "Natural Language Processing", "Digital Image Processing", "Google ML Ki", "MVVM", "Go-Router", "Hive", "UI/UX"],
      demoUrl: null,
      githubUrl: "https://github.com/vedantsagolale12/vision",
      featured: false,
    },
    {
      id: 5,
      title: "Clean architecture Overview",
      description:
        "An Overview of Most used architecture at Enterprise-level app development in industry which also called as layered architecture or clean-architecture",
      image: process.env.PUBLIC_URL + "/assets/images/arch.png",
      technologies: ["Flutter", "Bloc", "Clean architecture"],
      demoUrl: null,
      githubUrl: "https://github.com/vedantsagolale12/flutter_layered_architecture",
      featured: false,
    },
    {
      id: 6,
      title: "Flutter Bloc essentials",
      description:
        "An Overview of Most used architecture at Enterprise-level app development in industry which also called as layered architecture or clean-architecture",
      image: process.env.PUBLIC_URL + "/assets/images/bloc.png",
      technologies: ["Flutter", "Bloc", "Cubit", "Navigation", "Best Practices"],
      demoUrl: null,
      githubUrl: "https://github.com/vedantsagolale12/bloc_essentials",
      featured: false,
    },
  ],

  experience: [
    {
      company: "DelaPlex Limited",
      position: "Software Specialist Trainee",
      duration: "May 2024 - October 2024",
      location: "Nagpur, Maharastra, India",
      description: [
        "Developed and deployed cross-platform mobile applications using Flutter.",
        "Integrated Firebase backend services (authentication, database, cloud functions) into mobile apps",
        "Built and maintained RESTful APIs using Python for backend development.",
        "Implemented Google APIs (Maps, Authentication, etc.) and ensured efficient version control with Git.",
        "Contributed to a live Flutter project, delivering a production-ready mobile application for end-users.",
      ],
      technologies: ["Flutter", "Google Cloud", "Python", "Firebase", "TypeScript", "Javascript", "SQL Server Management Studio"],
    },
    {
      company: "Quintessential Informatics Systems Pvt Ltd ",
      position: "Flutter Developer Intern",
      duration: "Jan 2024 - May 2024",
      location: "Nagpur, Maharastra, India",
      description: [
        "Developed and maintained mobile applications using Flutter, contributing to a live production project.",
        "Managed and optimized databases with Microsoft SQL Server, including writing and executing complex SQL queries.",
        "Assisted in backend development using Node.js and SQL, supporting data handling and application functionality",
      ],
      technologies: ["Flutter", "Firebase", "Python", "SQL Server Management Studio", "Machine Learning"],
    },
  ],

  contact: {
    email: "vedantsagolale12@gmail.com",
    phone: "+91 7768089377",
    location: "Nagpur,Maharastra,India",
    availability: "Available for new opportunities",
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/vedantsagolale12" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/vedant1281/" },
    ],
  },
};
