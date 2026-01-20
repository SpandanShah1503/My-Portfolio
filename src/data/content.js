export const person = {
  firstName: "Spandan",
  lastName: "Shah",
  role: "Student",
  avatar: "/images/avatar.jpg",
  location: "Ahmedabad, Gujarat, India",
  languages: ["English", "Hindi", "Gujarati"],
};

export const about = {
  intro: {
    title: "Introduction",
    description: `
Welcome to my Portfolio!

I’m Spandan, a passionate Computer Engineering student with interest in
IoT and Cybersecurity. I love building secure and scalable technology.

Feel free to explore my work and connect with me!
    `,
  },

  work: [
    {
      company: "FLY",
      role: "Senior Design Engineer",
      duration: "2022 – Present",
      points: [
        "Redesigned UI/UX with 20% engagement improvement",
        "Integrated AI tools for faster workflows",
      ],
    },
    {
      company: "Creativ3",
      role: "Lead Designer",
      duration: "2018 – 2022",
      points: [
        "Built unified design system",
        "Increased revenue by 15%",
      ],
    },
  ],

  studies: [
    "Gujarat Technological University – Computer Engineering",
    "Build the Future – Online Marketing",
  ],

  skills: [
    {
      name: "Web Application Firewall (WAF) Design",
      desc: "Designed adaptive firewall logic for real-time threat prevention",
      icon: "/Firewall.png"
    },
    {
      name: "AI-Based Threat Detection",
      desc: "Used AI models to detect abnormal and malicious traffic",
      icon: "/Ai-Based Threat Detection.png"
    },
    {
      name: "Adaptive Security Systems",
      desc: "Built systems that evolve with emerging cyber threats",
    },
     {
      name: "Zero Trust Architecture (ZTA)",
      desc: "Implemented ZTA principles to ensure secure access control",
    },
    {
      name: "Autonomous Cyber Defense",
      desc: "Developed autonomous systems to respond to threats without human intervention",
    },
    {
      name: "Cyber Immunity Systems",
      desc: "Designed systems that can self-heal and adapt to threats",
    },
    {
      name: "AI for Cybersecurity",
      desc: "Applied AI techniques to enhance threat detection and response",
    },
    {
      name: "Machine Learning Models",
      desc: "Built and trained ML models for anomaly detection",
    },
    {
      name: "Federated Learning",
      desc: "Implemented federated learning for secure model training",
    },
    {
      name: "Explainable AI (XAI)",
      desc: "Developed explainable AI models to provide transparency in decision-making",
    },
    {
      name: "Predictive Analytics",
      desc: "Used predictive analytics to forecast potential security threats",
    },
    {
      name: "Reinforcement Learning",
      desc: "Applied reinforcement learning for adaptive threat response",
    },
    {
      name: "AI Red Teaming",
      desc: "Conducted adversarial testing to identify vulnerabilities in AI systems",
    },
    {
      name: "Automated Penetration Testing",
      desc: "Built automated penetration testing tools to identify system vulnerabilities",
    },
    {
      name: "Vulnerability Scanning",
      desc: "Performed vulnerability scanning to identify system weaknesses",
    },
    {
      name: "Zero-Day Detection",
      desc: "Identified and mitigated zero-day threats in real-time",
    },
    {
      name: "Exploit Automation",
      desc: "Built automated exploit tools to test system vulnerabilities",
    },
    {
      name: "Threat Intelligence",
      desc: "Gathered and analyzed threat intelligence to inform security strategies",
    },
    {
      name: "OSINT Analysis",
      desc: "Conducted open-source intelligence analysis to gather actionable threat intelligence",
    },
    {
      name: "Dark Web Monitoring",
      desc: "Monitored dark web for potential threats and compromised data",
    },
    {
      name: "Threat Attribution",
      desc: "Identified and attributed cyber threats to specific threat actors or groups",
    },
    {
      name: "Deepfake Threat Detection",
      desc: "Detected and analyzed deepfake content used in cyber attacks",
    },
    {
      name: "Cryptographic Key Management",
      desc: "Managed cryptographic keys for secure communication and data protection",
    },
    {
      name: "Post-Quantum Cryptography",
      desc: "Implemented post-quantum cryptographic algorithms to protect against quantum computing threats",
    },
    {
      name: "Secure Identity Management",
      desc: "Implemented secure identity management systems to ensure access control and authentication",
    },
    {
      name: "Encryption Standards",
      desc: "Applied industry-standard encryption protocols to protect sensitive data",
    },
    {
      name: "Blockchain for Cybersecurity",
      desc: "Applied blockchain technology to enhance cybersecurity measures",
    },
    {
      name: "Decentralized AI Security (DASN)",
      desc: "Implemented decentralized AI security mechanisms to enhance threat detection and response",
    },
    {
      name: "Distributed Trust Systems",
      desc: "Implemented distributed trust systems to ensure secure and reliable interactions",
    },
    {
      name: "Tamper-Proof Logs",
      desc: "Implemented tamper-proof logging systems to ensure data integrity",
    },
    {
      name: "SOC Automation",
      desc: "Automated security operations center tasks for improved response times",
    },
    {
      name: "AI Security Co-Pilot",
      desc: "Developed an AI-powered co-pilot for cybersecurity operations",
    },
    {
      name: "Incident Response Automation",
      desc: "Automated incident response processes to improve response times",
    },
    {
      name: "Cyber Deception",
      desc: "Implemented cyber deception techniques to mislead attackers",
    },
    {
      name: "Honeytokens",
      desc: "Implemented honeytokens to detect and prevent unauthorized access",
    },
    {
      name: "Fake Data Injection",
      desc: "Injected fake data into systems to mislead attackers",
    },
    {
      name: "Ransomware Negotiation AI",
      desc: "Developed an AI-powered negotiation tool for ransomware incidents",
    },
    {
      name: "5G Security",
      desc: "Implemented security measures for 5G networks",
    },
    {
      name: "IoT Security",
      desc: "Implemented security measures for IoT devices and networks",
    },
    {
      name: "High-Traffic Load Handling",
      desc: "Designed and implemented systems to handle high-traffic loads efficiently",
    },
    {
      name: "Cloud-Native Security",
      desc: "Implemented security measures for cloud-native applications and infrastructure",
    },
    {
      name: "GDPR Compliance",
      desc: "Ensured compliance with GDPR regulations for data protection",
    },
    {
      name: "ISO 27001",
      desc: " Implemented ISO 27001 standards for information security management",
    },
    {
      name: "NIST Framework",
      desc: "Implemented NIST cybersecurity framework for comprehensive security management",
    },
    {
      name: "Security Policy Automation",
      desc: "Automated security policy enforcement and compliance checks",
    },
    {
      name: "Gamified Cybersecurity Training",
      desc: "Developed gamified cybersecurity training programs to enhance user awareness and engagement",
    },
    {
      name: "Human-in-the-Loop Security",
      desc: "Implemented human-in-the-loop security mechanisms to ensure oversight and control in automated systems",
    },
    {
      name: "Security Awareness Systems",
      desc: "Implemented security awareness systems to educate and train users on cybersecurity best practices",
    },
    {
      name: "False Positive & False Negative Optimization",
      desc: "Optimized detection logic to reduce alert fatigue while maintaining strong security coverage.",
    },
    {
      name: "Self-Healing System Design",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },
    {
      name: "",
      desc: "",
    },


  ],
};