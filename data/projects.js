export const projectList = [
{
  title: "AlertX",
  slug: "alertx",
  description: "A real-time accident detection system that automatically notifies nearby hospitals and police with live location.",
  longDescription: "AlertX is a real-time AI-powered accident detection and emergency response platform that leverages mobile accelerometer data to automatically identify crash incidents and instantly notify nearby emergency services. Built with a WebSocket-based architecture, the system ensures ultra-fast communication by transmitting the user's live location to hospitals and police authorities within a 10km radius, enabling rapid intervention and reducing response time in critical situations. AlertX continuously monitors a user's motion using device sensors such as the accelerometer to detect sudden impacts or abnormal movement patterns that may indicate an accident. Upon detection, the system triggers an automated emergency workflow that sends real-time alerts to nearby authorities through a WebSocket-based infrastructure. The platform includes dual dashboards—one for users and another for emergency responders—allowing seamless tracking, live location visualization, and instant action. By combining sensor intelligence, geolocation, and real-time communication, AlertX aims to create a faster and more reliable emergency response ecosystem.",  
  image: "/images/Alertx.webp",
  github: "https://github.com/YUVRAJSINGH3112/accident-detection",
  live: "https://alertx.vercel.app",
  tags: [
    "AI",
    "Real-time",
    "WebSockets",
    "Geolocation",
    "Emergency Tech",
    "Sensor Data"
  ],
  
  features: [
    "Accident detection using mobile accelerometer and motion analysis",
    "Real-time alert system powered by WebSockets",
    "Automatic live location sharing with authorities",
    "10km radius-based smart emergency notification system",
    "Dual dashboard for users and emergency responders",
    "Instant emergency trigger without manual input",
    "Low-latency communication for faster response time"
  ],
  
  functionality: [
    "Continuously monitors user motion using accelerometer data",
    "Detects abnormal spikes or crash patterns",
    "Triggers an emergency event upon detection",
    "Sends real-time alerts via WebSocket to backend server",
    "Filters and notifies nearby hospitals and police within 10km radius",
    "Displays user’s live location on authority dashboard",
    "Enables responders to track and reach the user quickly"
  ],
  
  isFeatured: true,
  type: "personal"
},
{
  title: "FoodEase",
  slug: "foodease",
  description: "A scalable cloud-based food ordering platform with real-time order management, secure authentication, and AWS deployment.",
  
  longDescription:
    "FoodEase is a full-stack cloud-native food ordering platform inspired by modern food delivery applications. It enables users to browse restaurants, explore menus, place orders, and manage their profiles through a responsive and intuitive interface. The platform is built using a scalable microservice-ready architecture and deployed entirely on AWS cloud infrastructure to ensure high availability, reliability, and seamless performance. The application leverages Amazon EC2 for backend hosting, Amazon S3 for frontend hosting, Nginx as a reverse proxy, PM2 for process management, MongoDB Atlas for cloud database management, and GitHub Actions for automated CI/CD deployment. FoodEase incorporates JWT-based authentication, role-based access control, secure REST APIs, and optimized cloud deployment practices, making it production-ready and capable of handling large-scale traffic efficiently.",
  
  image: "/images/FoodEase.webp",
  
  github: "https://github.com/YUVRAJSINGH3112/foodease",
  live: "https://foodease.yourdomain.com",

  tags: [
    "AWS",
    "Cloud",
    "React",
    "Node.js",
    "MongoDB",
    "Express.js",
    "JWT",
    "CI/CD",
    "Scalable Architecture",
    "DevOps"
  ],

  features: [
    "Responsive Swiggy-inspired modern user interface",
    "Secure JWT authentication and authorization",
    "Restaurant and menu browsing system",
    "Cloud-hosted backend on Amazon EC2",
    "Frontend hosted using Amazon S3",
    "Automated deployment with GitHub Actions (CI/CD)",
    "Nginx reverse proxy with PM2 process management",
    "MongoDB Atlas cloud database integration",
    "RESTful API architecture",
    "Highly scalable cloud deployment on AWS"
  ],

  functionality: [
    "Allows users to register and securely log in",
    "Displays restaurants and categorized food menus",
    "Enables users to browse and place food orders",
    "Authenticates users using JWT-based security",
    "Processes client requests through Express REST APIs",
    "Stores application data in MongoDB Atlas",
    "Serves frontend from Amazon S3",
    "Hosts backend services on Amazon EC2",
    "Uses Nginx as a reverse proxy for efficient request routing",
    "Maintains backend processes using PM2",
    "Automatically deploys new code through GitHub Actions CI/CD pipeline",
    "Supports scalable cloud infrastructure for production workloads"
  ],

  skills: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB Atlas",
    "JWT Authentication",
    "REST APIs",
    "AWS EC2",
    "AWS S3",
    "Nginx",
    "PM2",
    "GitHub Actions",
    "CI/CD",
    "Cloud Deployment",
    "DevOps",
    "Scalable Architecture"
  ],

  isFeatured: true,
  type: "personal"
},
{
  title: "Voxera",
  slug: "voxera",
  description: "A plug-and-play platform to build AI chatbots and voice agents with agentic actions.",
  
  longDescription: "Voxera is a next-generation AI platform designed to simplify the creation of intelligent chatbots and voice agents. It eliminates the complexity of building bots from scratch by providing a plug-and-play solution where developers can deploy powerful AI agents with minimal setup. Voxera supports agentic AI bots capable of performing tool-based actions and RAG-powered bots that leverage custom knowledge bases for context-aware responses. The platform integrates both chatbots and voicebots into a unified system, allowing seamless management through a centralized dashboard. With features like one-click AI model switching, multi-bot management, and real-time analytics, Voxera reduces development time and infrastructure overhead. It also addresses the limitations of traditional IVR systems by introducing agentic voicebots that can handle peak loads efficiently, ensuring a smooth and scalable user experience. Powered by modern AI technologies, Voxera aims to make advanced conversational AI accessible, scalable, and easy to integrate into any application.",

  image: "/images/Voxera.png",
  github: "ttps://github.com/YUVRAJSINGH3112/voxera-frontend",
  live: "https://splendorous-blancmange-eaa8bd.netlify.app/",

  tags: [
    "AI",
    "Agentic AI",
    "RAG",
    "Voice AI",
    "Chatbots",
    "SaaS",
    "WebSockets",
    "Automation"
  ],

  features: [
    "Agentic AI chatbots with tool-based action capabilities",
    "Agentic AI voicebots as a scalable alternative to traditional IVR systems",
    "RAG-powered bots using custom knowledge bases",
    "Plug-and-play chatbot and voicebot integration",
    "One-click AI model switching without additional configuration",
    "Support for multiple AI models",
    "Unified dashboard for managing chat and voice bots",
    "Per-user conversation tracking and session history",
    "Advanced analytics and real-time monitoring",
    "Ability to create, deploy, and manage multiple bots simultaneously"
  ],

  functionality: [
    "Users create a bot using the Voxera platform dashboard",
    "Add a custom knowledge base to enable RAG-based responses",
    "Select or switch AI models with a single click",
    "Integrate the bot into applications using a simple component or API",
    "Chatbots and voicebots interact with users in real time",
    "Voice input is converted to text using speech recognition systems",
    "AI processes queries and generates context-aware responses",
    "Responses are delivered as text or converted into voice output",
    "All interactions are tracked and analyzed in the dashboard",
    "Supports scaling across multiple bots and high user traffic scenarios"
  ],

  isFeatured: true,
  type: "personal"
},
{
  title: "Developer Portfolio",
  slug: "developer-portfolio",
  description: "A modern developer portfolio showcasing projects, skills, and achievements with a sleek futuristic UI and smooth user experience.",

  longDescription: "Developer Portfolio is a fully responsive and visually engaging personal website designed to showcase projects, technical skills, and achievements in a modern and interactive way. Built with a focus on clean UI/UX and performance, the portfolio features a futuristic glassmorphism design with smooth animations and dynamic components. It serves as a centralized platform for presenting work, including detailed project pages, live demos, and GitHub integrations. The portfolio is optimized for all devices, ensuring a seamless experience across desktop and mobile. With reusable components, modular architecture, and scalable design, it allows easy updates and customization. The goal of this project is to create a strong personal brand presence while demonstrating frontend development expertise and design sensibility.",

  image: "/images/avatar.png",
  github: "",
  live: "",

  tags: [
    "Frontend",
    "React",
    "Portfolio",
    "UI/UX",
    "Responsive Design",
    "Animations",
    "Web Development"
  ],

  features: [
    "Modern futuristic glassmorphism UI design",
    "Fully responsive across all screen sizes",
    "Dynamic project showcase with detailed pages",
    "Smooth animations and transitions for better UX",
    "Reusable and modular component architecture",
    "Integrated GitHub and live project links",
    "Dark theme optimized for aesthetics and readability",
    "Fast loading and performance optimized",
    "Custom sections for skills, projects, and achievements"
  ],

  functionality: [
    "Displays developer information, skills, and experience",
    "Showcases projects with detailed descriptions and links",
    "Allows users to explore live demos and GitHub repositories",
    "Implements smooth scrolling and interactive UI elements",
    "Adapts layout dynamically for mobile and desktop devices",
    "Uses reusable components for scalability and maintainability",
    "Handles navigation between sections seamlessly",
    "Optimized for performance and quick loading",
    "Provides a visually engaging experience to visitors"
  ],

  isFeatured: false,
  type: "personal"
},
{
  title: "DonateHub",
  slug: "donatehub",
  description: "A secure and user-friendly donation platform with Razorpay integration for seamless online contributions.",

  longDescription: "DonateHub is a modern web-based donation platform designed to simplify the process of contributing to meaningful causes. It enables users to donate securely through an integrated payment gateway, ensuring fast and reliable transactions. The platform focuses on creating a seamless and trustworthy experience by offering a clean interface, transparent donation tracking, and instant payment confirmation. With Razorpay integration, users can donate using multiple payment methods including UPI, cards, and net banking. The system is built with scalability in mind, allowing organizations to manage campaigns, track contributions, and analyze donation trends. DonateHub aims to bridge the gap between donors and causes by providing a simple, secure, and efficient digital donation ecosystem.",

  image: "/images/DonateHub.png",
  github: "https://github.com/YUVRAJSINGH3112/Donation-Website-Project",
  live: "",

  tags: [
    "Web Development",
    "Payment Gateway",
    "Razorpay",
    "Full Stack",
    "FinTech",
    "Donations",
    "Secure Payments"
  ],

  features: [
    "Secure online donations using  integration",
    "Support for multiple payment methods (UPI, cards, net banking, wallets)",
    "Clean and user-friendly donation interface",
    "Real-time payment status and confirmation",
    "Donation history tracking for users",
    "Campaign-based donation system",
    "Responsive design for all devices",
    "Secure transaction handling and validation",
    "Scalable backend for managing donations and users"
  ],

  functionality: [
    "Users browse available donation campaigns",
    "Select a cause and enter donation amount",
    "Initiate payment through Razorpay checkout",
    "Process payment securely via Razorpay gateway",
    "Receive instant payment confirmation",
    "Store transaction details in backend database",
    "Allow users to view their donation history",
    "Enable admins to track and manage donations",
    "Provide analytics on total donations and campaign performance"
  ],

  isFeatured: false,
  type: "personal"
}
];