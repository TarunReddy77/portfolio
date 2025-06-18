/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tarun Reddy",
  title: "Hey all, I'm Tarun",
  subTitle: emoji(
    "A driven Full Stack AI Engineer and Software Developer specializing in building intelligent web applications and GenAI solutions using Python, JavaScript, React, Node.js, and the latest AI frameworks. Experienced in developing production-grade LLM-powered chatbots, cloud-native applications, and end-to-end data science projects."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/TarunReddy77",
  linkedin: "https://www.linkedin.com/in/tarun-reddy/",
  gmail: "tarutornado@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@tarutornado",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "GENAI ENGINEER AND FULL STACK DEVELOPER BUILDING INTELLIGENT APPS WITH MODERN AI & CLOUD STACKS",
  skills: [
    emoji(
      "⚡ Design and develop end-to-end GenAI applications and intelligent chatbots powered by LLMs, Retrieval-Augmented Generation (RAG), and vector databases"
    ),
    emoji(
      "⚡ Build scalable full stack web apps with React, Node.js, FastAPI, and Python, integrating cutting-edge AI models and APIs"
    ),
    emoji(
      "⚡ Architect, deploy, and manage cloud-native applications on AWS, leveraging tools like Docker and CI/CD for robust, production-ready systems"
    ),
    emoji(
      "⚡ Collaborate across global teams to deliver seamless user experiences, integrating third-party APIs and modern frontend technologies"
    ),
    emoji(
      "⚡ Experienced with LangChain, Pinecone, OpenAI, Crew AI, and building multimodal, agentic AI workflows"
    )
  ],

  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node"},
    {skillName: "FastAPI", fontAwesomeClassname: "fas fa-bolt"}, // Custom icon
    {skillName: "LangChain", fontAwesomeClassname: "fas fa-link"}, // Custom icon
    {skillName: "OpenAI", fontAwesomeClassname: "fas fa-robot"}, // Custom icon
    {skillName: "Pinecone", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "SQL/NoSQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf"}, // Custom icon
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "CI/CD", fontAwesomeClassname: "fas fa-tools"} // Custom icon
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "Khoury College of Computer Sciences, Northeastern University",
      logo: require("./assets/images/northeasternLogo.png"),
      subHeader: "Master of Science in Artificial Intelligence (GPA 3.96/4)",
      duration: "January 2023 - May 2025",
      desc: "Graduate coursework and research focused on modern AI methods and applications.",
      descBullets: [
        "Courses: Large Language Models, AI for Human Computer Interaction, Deep Learning, Machine Learning, Reinforcement Learning, Natural Language Processing, Algorithms, Programming Design Paradigm",
        "Roles: Head Teaching Assistant for Graduate Level Natural Language Processing"
      ]
    },
    {
      schoolName: "National Institute of Technology",
      logo: require("./assets/images/nitLogo.jpg"),
      subHeader:
        "Bachelor of Technology in Electronics and Communication Engineering (Gold Medalist)",
      duration: "August 2016 - June 2020",
      desc: "Graduated with distinction; leadership roles and active participation in co-curricular activities.",
      descBullets: [
        "Courses: Soft Computing, Robotics, Computer Architecture, Database Management, VLSI Design",
        "Roles: Class Representative, Training and Placement Coordinator, Head of Electronics Club"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend (Vue, React, JavaScript, HTML/CSS)",
      progressPercentage: "60%"
    },
    {
      Stack: "Backend (Node.js, FastAPI, Python)",
      progressPercentage: "90%"
    },
    {
      Stack: "AI/ML & GenAI (LLMs, LangChain, RAG)",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud & DevOps (AWS, Docker, CI/CD)",
      progressPercentage: "75%"
    },
    {
      Stack: "Databases (PostgreSQL, MongoDB, Pinecone)",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming Languages (Python, Java, JavaScript, SQL)",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full-Stack AI Engineer Intern",
      company: "HerHeard",
      companylogo: require("./assets/images/herheardLogo.png"), // <-- Add your logo image
      date: "Sep 2024 – Dec 2024",
      desc: "MIT-based startup; built LLM-powered GenAI chatbot and core app features.",
      descBullets: [
        "Developed conversational chatbot using LLMs (RAG, knowledge graphs, agentic workflows), evaluated performance with advanced metrics, and integrated AI into production React apps.",
        "Contributed to design and implementation of a personalized daily journal and dynamic news feed dashboard, leveraging cloud APIs and scalable backend services.",
        "Enhanced user interaction through prompt engineering and LLM evaluation, deploying new features via CI/CD pipelines for a secure and global user base."
      ]
    },
    {
      role: "Head Teaching Assistant – Graduate Natural Language Processing",
      company: "Northeastern University",
      companylogo: require("./assets/images/northeasternUniversityNonTransparentLogo.jpg"), // <-- Add your logo image
      date: "Sep 2023 – May 2025",
      desc: "MS in AI; led course operations and mentorship for graduate NLP cohorts.",
      descBullets: [
        "Managed a team of TAs and coordinated instruction for 200+ graduate students across 4 semesters of CS 6120: NLP, enhancing course delivery and engagement.",
        "Designed and graded assignments on transformers, embeddings, and sequence models using Python, PyTorch, and Hugging Face; led interactive code walks and implemented automated grading workflows.",
        "Led recitations and office hours, offering technical guidance, project support, and mentorship, while collaborating with faculty on curriculum updates."
      ]
    },
    {
      role: "Specialist Programmer",
      company: "Infosys",
      companylogo: require("./assets/images/infosysLogo.jpg"),
      date: "Sep 2021 – Jan 2023",
      desc: "Full-stack development for Apple client in DevSecOps environment.",
      descBullets: [
        "Built REST APIs and microservices using Spring Boot, Flask, and Jenkins on AWS, automating deployments and enhancing system reliability for Apple DevSecOps Portal.",
        "Developed PostgreSQL-backed dashboards with Angular for deployment tracking; performed predictive reliability monitoring using statistical analysis.",
        "Collaborated with Apple teams in Agile sprints; integrated Jenkins, AWS Secrets Manager, and Microsoft 365 tools across cross-platform environments."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Srisys Inc.",
      companylogo: require("./assets/images/srisysLogo.jpeg"), // <-- Add your logo image
      date: "Mar 2021 – Aug 2021",
      desc: "ERP extensions and cloud app development.",
      descBullets: [
        "Developed ERP extensions and cloud-based apps using Java, Spring Boot, Angular, and PostgreSQL; built CI/CD pipelines with Jenkins and Puppet.",
        "Integrated AWS services for scalable backend solutions; delivered custom features for clients in manufacturing and healthcare sectors.",
        "Collaborated with cross-functional teams to ensure timely delivery of robust and maintainable solutions meeting client requirements."
      ]
    },
    {
      role: "Research Intern",
      company: "IIT Hyderabad (VIGIL Lab)",
      companylogo: require("./assets/images/iithLogo.png"), // <-- Add your logo image
      date: "Aug 2021 – Feb 2022",
      desc: "Computer Vision with Prof. Dr. Chalavadi Krishna Mohan.",
      descBullets: [
        "Conducted research on object detection, dilation, and attention networks using PyTorch, TensorFlow, Keras, and OpenCV; contributed to computer vision advancements.",
        "Built and evaluated ML pipelines for video data, enhancing model performance with advanced preprocessing and deep learning architectures.",
        "Validated results through rigorous testing and applied state-of-the-art techniques on academic datasets in collaboration with the VIGIL Lab."
      ]
    },
    {
      role: "Research Associate",
      company: "IIT Indore",
      companylogo: require("./assets/images/iitiLogo.png"), // <-- Add your logo image
      date: "Jul 2020 – Nov 2020",
      desc: "DSP hardware security research under Prof. Anirban Sengupta.",
      descBullets: [
        "Developed method for DSP hardware IP piracy prevention by generating palmprint biometrics-based digital signatures and embedding them in RTL design.",
        "Altered register allocation for enhanced security, resulting in a peer-reviewed IEEE Transactions on Consumer Electronics publication.",
        "Collaborated with interdisciplinary teams to validate novel hardware security solutions and document reproducible design methodologies."
      ]
    },
    {
      role: "Research Intern",
      company: "IIT Indore",
      companylogo: require("./assets/images/iitiLogo.png"), // <-- Add your logo image
      date: "May 2019 – Jul 2019",
      desc: "Fault tolerance & optimization in DSP cores (Prof. Anirban Sengupta).",
      descBullets: [
        "Worked on transient fault tolerance in DSP cores using compiler-driven transformations and simulated annealing for floorplanning optimization.",
        "Applied AI search methods such as hill climbing and particle swarm optimization to improve delay, area, and power metrics in VLSI systems.",
        "Documented improvements in DSP core reliability and efficiency, contributing to ongoing research in digital hardware design optimization."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "National Institute of Technology Institute Gold Medal",
      subtitle:
        "National Institute of Technology Institute Gold Medal for Bachelor of Technology in Electronics and Communication Engineering",
      image: require("./assets/images/nit-gold-medal-cert.png"),
      imageAlt: "University of Michigan Python Programming",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1MPCojvsjOr-sFqEqULGtcFuXrECpxARy/view?usp=sharing"
        }
      ]
    },
    {
      title: "Meta Frontend Development",
      subtitle:
        "Meta Frontend Development course completion certificate on Coursera",
      image: require("./assets/images/meta-intro-to-frontend-coursera-cert.png"),
      imageAlt: "Meta Frontend Development",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/verify/7L6Q2MHR17PP"
        }
      ]
    },
    {
      title: "Google Firebase Project",
      subtitle: "Google Firebase Project completion certificate on Coursera",
      image: require("./assets/images/google-firebase-project-coursera-cert.png"),
      imageAlt: "Google Firebase Project",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/verify/8DOUU07ROE02"
        }
      ]
    },
    {
      title: "AWS Cloud Technical Essentials",
      subtitle:
        "AWS Cloud Technical Essentials course completion certificate on Coursera",
      image: require("./assets/images/aws-cloud-technical-essentials-coursera-cert.png"),
      imageAlt: "AWS Cloud Technical Essentials",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/verify/D2Q5DYKK3NB6"
        }
      ]
    },
    {
      title: "Kaggle Machine Learning",
      subtitle: "Kaggle Machine Learning course completion certificate",
      image: require("./assets/images/kaggle-ml-cert.png"),
      imageAlt: "Kaggle Machine Learning",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1qh3W76pTNDZPlU8J3YRz_k6d6ohDNON4/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Kaggle Data Visualization",
      subtitle: "Kaggle Data Visualization course completion certificate",
      image: require("./assets/images/kaggle-data-viz-cert.png"),
      imageAlt: "Kaggle Data Visualization",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1e1CWVLMQB8uREiWbHwWqGcASvoKhOVdx/view?usp=sharing"
        }
      ]
    },
    {
      title: "Google Interacting with OS using Python",
      subtitle:
        "Google Interacting with OS using Python course completion certificate on Coursera",
      image: require("./assets/images/google-python-os-coursera-cert.png"),
      imageAlt: "Google Interacting with OS using Python",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/verify/VX3VD8HUVJ5C"
        }
      ]
    },
    {
      title: "University of Michigan Python Programming",
      subtitle:
        "University of Michigan Python Programming course completion certificate on Coursera",
      image: require("./assets/images/umich-python-coursera-cert.png"),
      imageAlt: "University of Michigan Python Programming",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/verify/7RHFJUUJLC4L"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@tarutornado/pytorch-functions-f8ad67c2779b",
      title: "5 cool PyTorch functions that are good to know!",
      description:
        "In the mood to explore some interesting builtin functions in PyTorch? Here, they are..."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-8576934743",
  email_address: "tarutornado@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
