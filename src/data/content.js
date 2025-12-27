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
      name: "Figma",
      desc: "Rapid UI/UX prototyping with Once UI",
    },
    {
      name: "Next.js",
      desc: "Building scalable modern web apps",
    },
  ],
};