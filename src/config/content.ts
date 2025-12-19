// src/config/content.ts

export const portfolioData = {
    personal: {
        name: "Ajinkya Nagarkar",
        title: "Computer Science Graduate Student at USC",
        email: "ajinkyav@usc.edu",
        location: "Los Angeles, CA",
        socials: {
            github: "https://github.com/Ajinkya-Nagarkar", // Update if different
            linkedin: "www.linkedin.com/in/ajinkya-nagarkar-2063a2195", // Update if different
        },
        about: "I am a Computer Science graduate student at USC with a strong background in full-stack development, IoT, and data analytics. I enjoy building scalable systems and solving complex problems with code."
    },

    education: [
        {
            school: "University of Southern California",
            degree: "Master of Science in Computer Science",
            location: "Los Angeles, CA",
            date: "Aug 2025 - Present",
            description: "" // Add coursework if needed later
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
                "Developed a real-time data ingestion platform (Python/Angular) processing >100,000 data points/min for dynamic business analytics.",
                "Implemented predictive models (Scikit-learn/TensorFlow) reducing data processing time by 40% and yielded key business insights.",
                "Designed interactive dashboards (amCharts) increasing data visibility by 60% and improved data handling efficiency by 35%."
            ]
        },
        {
            company: "Asha Electronics",
            title: "IoT Application Developer Intern",
            location: "Pune, India",
            date: "July 2023 - June 2024",
            url: "#",
            description: [
                "Led full-stack IoT application development (Angular/Node.js), enabling real-time monitoring of over 500 sensors with <1 second data retrieval latency.",
                "Architected a data management system for offline functionality, ensuring 100% data integrity across synchronization.",
                "Integrated Firebase to support >500 active users and improve application load time by 25%."
            ]
        }
    ],

    projects: [
        {
            title: "Internship Management Portal",
            tech: ["React", "Python", "Automation"],
            description: "A comprehensive platform that automated university internship data processing. It eliminated manual evaluation steps and streamlined the assignment of students to faculty supervisors, significantly reducing administrative workload.",
            // In a real app, you would add an image path here, e.g., image: "/projects/internship.png"
            links: { github: "#", external: "#" }
        },
        {
            title: "Solar Power Prediction Model",
            tech: ["Python", "Random Forest", "LGBM", "Scikit-learn"],
            description: "Developed predictive machine learning models to forecast solar plant maintenance needs. The system analyzes environmental factors like dust levels and bird droppings to predict efficiency drops, enabling proactive maintenance scheduling.",
            links: { github: "#", external: "#" }
        }
    ],

    featuredProjects: [
        {
            title: "Honeypot System using ChatGPT",
            tech: ["Cybersecurity", "IoT", "IEEE Publication"],
            description: "Published paper: 'Engaging Attackers with a Highly Interactive Honeypot System Using ChatGPT'. Explored using AI to create dynamic decoys.",
            links: { github: "#", external: "#" }
        },
        {
            title: "Crypto Wallet for Farmers",
            tech: ["Blockchain", "Patent"],
            description: "Indian Patent Office registered innovation. A simplified crypto wallet interface designed specifically for agricultural use cases in emerging markets.",
            links: { github: "#", external: "#" }
        }
    ],

    skills: [
        "Python", "C++", "Java", "JavaScript", "TypeScript",
        "Angular", "React", "Node.js", "Firebase", "SQL",
        "Linux", "Git", "Docker"
    ]
};