import React from "react";
import { InlineCode } from "../InlineCode/InlineCode";


export default function About() {
  const person = {
    firstName: "Spandan",
    lastName: "Shah",
    role: "Student",
    avatar: "/images/avatar.jpg",
    location: "Asia/Kolkata",
    languages: ["English", "Hindi", "Gujarati"],
  };

  const fullName = `${person.firstName} ${person.lastName}`;

  return (
    <main>
<div className="text-white max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* ================= HOME SECTION ================= */}
      <section id="home">
        <h1>{fullName}'s Portfolio</h1>
        <h2>Computer Engineer and Cybersecurity Professional</h2>

        <p>
          Hi, my name is <strong>{fullName}</strong> and I am a student of
          Computer Engineering at <InlineCode>GTU</InlineCode>.
        </p>
        <p>Welcome to my world!</p>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about">
        <h2>About Me</h2>

        <img src={person.avatar} alt={fullName} width={150} />

        <p>
          Welcome to my Portfolio! 🌟
        </p>

        <p>
          I’m Spandan, a passionate Computer Engineering student 💻 with a deep
          interest in Internet of Things (IoT) 🌐 and Cybersecurity 🔐.
          I love building technology that is powerful, secure, and sustainable.
        </p>

        <p>
          Feel free to explore my work and get in touch if you'd like to
          collaborate 🤝
        </p>
      </section>

      {/* ================= WORK EXPERIENCE ================= */}
      <section id="work-experience">
        <h2>Work Experience</h2>

        <div>
          <h3>FLY</h3>
          <p><strong>Senior Design Engineer</strong> (2022 – Present)</p>
          <ul>
            <li>
              Redesigned UI/UX resulting in 20% higher engagement and 30% faster
              load times.
            </li>
            <li>
              Integrated AI tools enabling 50% faster design iteration.
            </li>
          </ul>
        </div>

        <div>
          <h3>Creativ3</h3>
          <p><strong>Lead Designer</strong> (2018 – 2022)</p>
          <ul>
            <li>
              Built a unified design system improving consistency by 40%.
            </li>
            <li>
              Led a product launch increasing revenue by 15%.
            </li>
          </ul>
        </div>
      </section>

      {/* ================= STUDIES ================= */}
      <section id="studies">
        <h2>Studies</h2>

        <ul>
          <li>
            <strong>Gujarat Technological University</strong> – Computer Engineering
            & Minor in Cybersecurity
          </li>
          <li>
            <strong>Build the Future</strong> – Online Marketing & Personal Branding
          </li>
        </ul>
      </section>

      {/* ================= TECHNICAL SKILLS ================= */}
      <section id="skills">
        <h2>Technical Skills</h2>

        <div>
          <h3>Figma</h3>
          <p>Able to prototype in Figma with Once UI at extreme speed.</p>
        </div>

        <div>
          <h3>Next.js</h3>
          <p>Building next-gen apps using Next.js + Once UI + Supabase.</p>
        </div>
      </section>

      {/* ================= SOCIAL LINKS ================= */}
      <section id="social">
        <h2>Connect With Me</h2>
        <ul>
          <li>
            <a href="https://github.com/SpandanShah1503" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/spandan-shah-57b276296/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:example@gmail.com">Email</a>
          </li>
        </ul>
      </section>
</div>
    </main>
  );
}
