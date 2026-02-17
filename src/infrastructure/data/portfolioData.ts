import type { Portfolio } from "@domain/entities/portfolio";

export const portfolioData: Portfolio = {
  profile: {
    fullName: "Navraj Khanal",
    headline: "Full Stack Developer | Software Engineer",
    location: "Oklahoma City Metropolitan Area",
    industry: "Software Development",
    summary:
      "Experienced software developer with nearly 3 years of expertise in designing enterprise software across the full SDLC. Strong in Java, Python, React, Node.js, Angular, Spring Boot, RESTful services, and Agile/Scrum delivery.",
    socials: [
      { label: "Portfolio", href: "https://navrajkhanal.com.np/" },
      { label: "Blog", href: "https://navrajkhanal.medium.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/navrajkhanal/" },
      { label: "GitHub", href: "https://github.com/NavTheRaj" }
    ]
  },
  experiences: [
    {
      company: "Our Blood Institute",
      title: "Software Engineer II",
      location: "Oklahoma City, OK",
      startedOn: "Aug 2023",
      finishedOn: "Present",
      description:
        "Building and scaling production-grade software systems in a secure, high-availability environment."
    },
    {
      company: "Cedar Gate Technologies",
      title: "Associate Software Engineer",
      location: "Kathmandu, Nepal",
      startedOn: "Sep 2021",
      finishedOn: "Jul 2022",
      description:
        "Worked on analytics engine and big data workflows in healthcare and insurance. Built services with Java and Python, integrated Elasticsearch, and used AWS services in HIPAA-aligned systems."
    },
    {
      company: "Sunway International Business School",
      title: "Teaching Assistant",
      location: "Kathmandu, Nepal",
      startedOn: "Sep 2021",
      finishedOn: "Jul 2022",
      description:
        "Led practical sessions in Java and Python, taught AI using Python, and supported final-year project reviews and defenses."
    },
    {
      company: "PRISMASOFT",
      title: "Junior Software Developer",
      location: "Kathmandu, Nepal",
      startedOn: "Dec 2020",
      finishedOn: "May 2021",
      description:
        "Developed enterprise web and mobile features with React, Node.js, and React Native. Integrated Firebase and delivered APIs on Heroku."
    },
    {
      company: "Subisu Cablenet Pvt Ltd",
      title: "DevOps Internship",
      location: "Kathmandu, Nepal",
      startedOn: "Jan 2020",
      finishedOn: "Apr 2020",
      description:
        "Contributed to full-stack applications with PHP/JavaScript/MySQL and supported Linux administration, Python and Bash automation, and networking tasks."
    }
  ],
  educations: [
    {
      school: "Maharishi International University",
      degree: "Master's Degree",
      startDate: "Aug 2022",
      endDate: "Dec 2024",
      notes:
        "Coursework included Advanced Software Design, Algorithms, React + Spring Boot architecture, and Angular + Node/Express + MongoDB modern web apps."
    },
    {
      school: "Infrastructure University Kuala Lumpur (IUKL)",
      degree: "Bachelor's Degree",
      startDate: "2017",
      endDate: "2020",
      notes:
        "Built strong foundations in programming, software engineering, and project management."
    }
  ],
  projects: [
    {
      title: "NOC Ticketing System",
      startedOn: "Jan 2020",
      finishedOn: "Feb 2020",
      description:
        "Built a regulation and monitoring system for network devices to parse logs and surface ticketing data in a visual dashboard using Python/Bash, PHP, MySQL, and Bootstrap."
    },
    {
      title: "Room Finder Application",
      startedOn: "Aug 2020",
      finishedOn: "Sep 2020",
      url: "https://github.com/NavTheRaj/RoomfinderCopy",
      description:
        "Created an Android application connecting owners and renters with location-based room discovery and SQLite persistence."
    },
    {
      title: "SRNA Property Management System",
      startedOn: "Feb 2023",
      finishedOn: "Feb 2023",
      description:
        "Delivered a full-stack real-estate platform using React and Java/Spring stack with JWT auth, property workflows, and admin controls."
    },
    {
      title: "MIU Student Clubs Portal",
      startedOn: "Mar 2023",
      finishedOn: "Mar 2023",
      description:
        "Built a clubs and events platform using Angular, Node.js, Express, MongoDB, and Highcharts with token validation patterns and analytics dashboard."
    },
    {
      title: "Predictive Inventory Management System",
      startedOn: "Aug 2020",
      finishedOn: "Dec 2020",
      description:
        "Designed and implemented inventory and billing workflows with forecasting support using Prophet models, Flask APIs, and a PHP/MySQL web interface."
    }
  ],
  skills: [
    "Java",
    "Python",
    "Spring Boot",
    "Node.js",
    "Express.js",
    "React.js",
    "Angular",
    "TypeScript",
    "JavaScript",
    "REST APIs",
    "AWS",
    "Docker",
    "Redis",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Hadoop",
    "Elasticsearch",
    "CI/CD",
    "Linux",
    "Git",
    "Machine Learning",
    "Agile Methodologies"
  ],
  certifications: [
    {
      name: "Python (Basic)",
      authority: "HackerRank",
      startedOn: "Oct 2020",
      url: "https://www.hackerrank.com/certificates/9ff93fa2a37d"
    },
    {
      name: "REST API (Intermediate)",
      authority: "HackerRank",
      startedOn: "Oct 2020",
      url: "https://www.hackerrank.com/certificates/d0593e6f79cf"
    },
    {
      name: "SQL (Advanced) Certificate",
      authority: "HackerRank",
      startedOn: "May 2023",
      url: "https://www.hackerrank.com/certificates/ce5a62e31afb"
    },
    {
      name: "Java (Basic) Certificate",
      authority: "HackerRank",
      startedOn: "May 2023",
      url: "https://www.hackerrank.com/certificates/4190ec1e653f"
    },
    {
      name: "Learning Kubernetes",
      authority: "LinkedIn Learning",
      startedOn: "May 2023",
      url: "https://www.linkedin.com/learning/certificates/bf712fadc0f820efdb1b3d07c73666e5109994fc2d66a1dcfb4893316fd97f56"
    },
    {
      name: "Level Up: Advanced SQL",
      authority: "LinkedIn Learning",
      startedOn: "May 2023",
      url: "https://www.linkedin.com/learning/certificates/85f5fe5592b5a2af4774423fc3a87edc49bc92e5132625bd6d3bd285812f2260"
    }
  ],
  languages: [
    {
      name: "Nepali",
      proficiency: "Native or bilingual proficiency"
    },
    {
      name: "English",
      proficiency: "Professional working proficiency"
    }
  ],
  recommendations: [
    {
      recommender: "Shreya Sapkota",
      role: "Engineering Services Manager",
      company: "Maitri Services",
      creationDate: "May 2023",
      text: "Exceptional API engineering quality in Java/Python, strong documentation habits, and collaborative team impact."
    },
    {
      recommender: "Muhyieddin Al-Tarawneh",
      role: "Full Stack Engineer",
      company: "Guideline Central",
      creationDate: "May 2023",
      text: "Top-performing web architecture student with strong Spring Boot, React, and backend security fundamentals."
    },
    {
      recommender: "Pradip Acharya",
      role: "Java Developer",
      company: "Plexus Scientific",
      creationDate: "Apr 2023",
      text: "Highly skilled and dedicated full-stack developer with excellent fundamentals in programming and system design."
    },
    {
      recommender: "Arjun Gautam",
      role: "Creative Head",
      company: "Delmi Solutions Inc.",
      creationDate: "Jun 2022",
      text: "Fast learner and effective problem solver with commendable Python and Java capabilities."
    }
  ],
  communityStats: {
    connections: 1338,
    reactions: 425,
    comments: 13,
    shares: 10,
    certifications: 12,
    recommendations: 7
  }
};
