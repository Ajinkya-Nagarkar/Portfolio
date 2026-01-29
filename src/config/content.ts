export const portfolioData = {
    personal: {
        name: "Ajinkya Nagarkar",
        title: "Computer Science Graduate Student at USC",
        email: "ajinkyav@usc.edu",
        location: "Los Angeles, CA",
        socials: {
            github: "https://github.com/Ajinkya-Nagarkar", // Update if different
            linkedin: "https://www.linkedin.com/in/ajinkya-nagarkar-2063a2195", // Update if different
        },
        about: "I am a Computer Science graduate student at USC with a strong background in full-stack development, IoT, and data analytics. I enjoy building scalable systems and solving complex problems with code."
    },

    education: [
        {
            school: "University of Southern California",
            degree: "Master of Science in Computer Science",
            location: "Los Angeles, CA",
            date: "Aug 2025 - Present",
            // gpa?"":"",
        },
        {
            school: "Dr. Vishwanath Karad MIT World Peace University",
            degree: "Bachelor of Technology (Computer Science and Engineering)",
            location: "Pune, India",
            date: "July 2019 - May 2023",
            gpa: "9.56/10",
        }
    ],

    experience: [
        {
            company: "Capgemini Technology Services India",
            title: "Analyst",
            location: "Mumbai, India",
            date: "Dec 2024 - July 2025",
            url: "https://www.capgemini.com",
            description: [
                "Built a Python-based real-time data ingestion service to process high-volume event data for internal analytics workflows.",
                "Developed Angular-based dashboards backed by REST APIs to visualize operational metrics and trends for internal business users.",
                "Implemented feature engineering and baseline machine learning models using scikit-learn to support downstream analytics and reporting.",
            ]
        },
        {
            company: "Asha Electronics",
            title: "IoT Application Developer Intern",
            location: "Pune, India",
            date: "July 2023 - June 2024",
            url: "#",
            description: [
                "Developed a full-stack IoT web application using Angular and Node.js to support real-time monitoring of sensor data for internal operations.",
                "Implemented offline-first data synchronization logic to handle intermittent connectivity and ensure reliable data consistency.",
                "Integrated Firebase for authentication and data storage, supporting multi-user access and improving application responsiveness."
            ]
        }
    ],

    projects: [
        {
            title: "Internship Management Portal",
            tech: ["React", "Python", "REST APIs", "SQL"],
            description: "Built a full-stack web application using React and Python to manage university internship data and workflows. Designed backend APIs to handle student submissions, faculty assignments, and approval flows, reducing manual coordination. Implemented role-based access for students and faculty, enabling streamlined tracking of internship status.",
            // In a real app, you would add an image path here, e.g., image: "/projects/internship.png"
            links: { github: "#", external: "#" }
        },
        {
            title: "Solar Power Plant Maintenance Prediction",
            tech: ["Python", "Random Forest", "LGBM", "Scikit-learn"],
            description: "Built a data preprocessing and evaluation pipeline in Python to analyze historical sensor and environmental data from solar plants. Trained and compared baseline machine learning models to assess maintenance prediction feasibility. Analyzed feature importance to identify environmental factors impacting system performance.",
            links: { github: "#", external: "#" }
        }
    ],

    featuredProjects: [
        {
            title: "Honeypot System using ChatGPT",
            tech: ["Cybersecurity", "IoT", "IEEE Publication"],
            description: "Published paper: 'Engaging Attackers with a Highly Interactive Honeypot System Using ChatGPT'. Explored using AI to create dynamic decoys.",
            links: { github: "#", external: "https://ieeexplore.ieee.org/document/10392228" },
            image: "/Honeypot.png",
        },
        {
            title: "Crypto Wallet for Farmers",
            tech: ["Blockchain", "Patent"],
            description: "Indian Patent Office registered innovation. A simplified crypto wallet interface designed specifically for agricultural use cases in emerging markets.",
            links: { github: "#", external: "https://patentscope.wipo.int/search/en/detail.jsf?docId=IN438211516" },
            image: "/Wallet.png",
        }
    ],

    skills: [
        {
            title: "Programming Languages",
            tech: ["Python", "JavaScript", "TypeScript", "C++"],
        },
        {
            title: "Frameworks & Libraries",
            tech: ["React", "Angular", "Node.js"],
        },
        {
            title: "Databases",
            tech: ["SQL", "Firebase"],
        },
        {
            title: "Tools & Platforms",
            tech: ["Git", "Linux", "Docker"],
        },
    ]
};