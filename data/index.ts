export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Certifications", link: "#certifications" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "From theory to practice, ready to turn challenges into effective solutions!",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Driven, proactive, and team-oriented!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Inspired by innovation and committed to operational excellence!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Bayesian networks for evaluating the energy performance of ships and port systems",
    description: "Polytech R&D Project",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let’s discuss my final-year internship. Send me an email!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Rayociné – Movie Ticket Booking Web App",
    des: "Full-stack web app allowing users to search for movies, select seats, and securely manage online payments.",
    img: "/rayocini.png", // ajoute une image de ton projet
    iconLists: [
      "/java.png",
      "/jee.png",
      "/jpa.png",
      "/mysql.png",
      "/wildfly.png  ",
    ], // icônes des technos
    link: "/video1.mp4", // lien vers le projet ou démo
  },
  {
    id: 2,
    title: "Dawini Mobile App – Teleconsultation",
    des: "Mobile app for teleconsultation, featuring video calls, a medical chatbot, and secure prescriptions with electronic signature.",
    img: "/dawini.png", // ajoute un screenshot ou illustration du projet
    iconLists: [
      "/flutter.png",
      "/firebase.png",
      "/agora.png",
      "/dsa.png",
      "/botpress.png",
    ], // logos des technologies
    link: "/0505.mp4", // lien vers démo ou projet
  },
  {
    id: 3,
    title: "Mobile App – RNE",
    des: "mobile app to manage services already available on the RNE website, providing an intuitive interface and seamless integration with the backend.",
    duration: "06/2024 – 07/2024",
    role: "Intern",
    img: "/rne.png", // ajouter une illustration ou screenshot
    iconLists: ["/flutter.png", "/springboot.png", "/oracle.png"], // logos des technologies
    link: "/demo.mp4", // lien vers projet ou démo si disponible
  },
  {
    id: 4,
    title: "Wedding Planner Web App",
    des: "full-stack web app to help users plan and organize weddings efficiently, including guest management, event scheduling, and vendor coordination.",
    duration: "06/2024 – 08/2024", // adapter selon les dates
    role: "Developer",
    img: "/wedding.png", // screenshot ou illustration
    iconLists: [
      "/angular.png",
      "/mongodb.png",
      "/nodejs.png",
      "/express.png",
    ], // technologies principales
    link: "/weddingplanner.mp4", // lien vers le projet ou démo si disponible
  },
];
export const Certifications = [
  {
    quote: "Foundation of Cybersecurity - Google",
    name: "",
    title: "",
    img: "/1.png",
  },
  {
    quote: "AWS Cloud Technology and Services Concepts - datacamp",
    name: "",
    title: "",
    img: "/2.png",
  },
  {
    quote: "Understanding Cloud Computing - datacamp",
    name: "",
    title: "",
    img: "/3.png",
  },
  {
    quote: "AWS Security and Cost Management Concepts - datacamp",
    name: "",
    title: "",
    img: "/4.png",
  },
  {
    quote: "CCNA : Introduction to Networks course - Cisco Academy",
    name: "",
    title: "",
    img: "/5.png",
  },
  {
    quote: "AI Foundation - Simplilearn",
    name: "",
    title: "",
    img: "/6.png",
  },
  {
    quote: "CCNA : Introduction to Networks - Cisco Academy",
    name: "",
    title: "",
    img: "/7.png",
  },
];


export const companies = [
  {
    id: 1,
    name: "",
    img: "/angular.g", // logo technologie
    nameImg: "", // nom sous le logo (optionnel)
  },
  {
    id: 2,
    name: "",
    img: "/mongodb.g",
    nameImg: "/mongodbName.svg",
  },
  {
    id: 3,
    name: "",
    img: "/nodejs.psvg",
    nameImg: "/nodejsName.svg",
  },
  {
    id: 4,
    name: "",
    img: "/flutter.svg",
    nameImg: "/flutterName.svg",
  },
  {
    id: 5,
    name: "",
    img: "",
    nameImg: "",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Intern at National Business Register June 2025 – August 2025",
    desc: "Developed a mobile application to manage and provide access to the services available on the RNE website. The app features a Flutter front-end, a Spring Boot back-end, and an Oracle database for secure and efficient data management",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },

  {
    id: 2,
    title: "Intern at E-Tafakna June 2025 – July 2025",
    desc: "Developed a full-stack web application to display detailed information about employers. Built with a React front-end, Node.js and Express back-end, integrating APIs for data management, and MongoDB for the database",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/rihabtaboubi1",
  },
  {
    id: 2,
    img: "/gmail.png",
    link: "mailto:riheb.taboubi@etu.univ-nantes.fr",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/rihab-taboubi-86941a317",
  },
];
