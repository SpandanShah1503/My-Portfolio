import React from "react";
import Background from "../Background/Background";
import SocialLink from "../SocialLink/SocialLink";
import { person, about } from "../../data/content";
import LogoLoop from "../LogoLoop/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiKalilinux, SiN8N } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import "./About.css";



export default function AboutPage() {
  const fullName = `${person.firstName} ${person.lastName}`;

  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

  const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },

  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },

  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },

  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },

  { node: <FaNode />, title: "Node Js", href: "https://nodejs.org/en" },

  { node: <SiKalilinux />, title: "Kali Linux", href: "https://www.kali.org/" },

  { node: <SiN8N />, title: "N8n", href: "https://n8n.io/" },

  ];

  return (
    <div className="relative min-h-screen Background-color">
      {/* Background 
      <Background
        hueShift={251}
        noiseIntensity={0}
        scanlineIntensity={0}
        scanlineFrequency={0}
        warpAmount={0}
        speed={1.2}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -50,
        }}
      />*/}

      <main className="text-white max-w-4xl mx-auto px-6 py-24 space-y-16">

        {/* ================= SIDE NAVIGATION ================= */}
<div className="hidden md:block fixed left-8 top-1/2 -translate-y-1/2 space-y-4 z-50">
  <button
    onClick={() => scrollToSection("introduction")}
    className="block text-left text-white/70 hover:text-emerald-400 transition"
  >
    — Introduction
  </button>

  <button
    onClick={() => scrollToSection("work-experience")}
    className="block text-left text-white/70 hover:text-emerald-400 transition"
  >
    — Work Experience
  </button>

  <button
    onClick={() => scrollToSection("studies")}
    className="block text-left text-white/70 hover:text-emerald-400 transition"
  >
    — Studies
  </button>

  <button
    onClick={() => scrollToSection("skills")}
    className="block text-left text-white/70 hover:text-emerald-400 transition"
  >
    — Technical Skills
  </button>
</div>

        {/* ================= PROFILE HEADER ================= */}
        <section className="flex flex-col items-center text-center gap-4">

          {/* Profile Image */}
          <div className="relative">
            <img
              src={person.avatar}
              alt={fullName}
              className="w-36 h-36 rounded-full object-cover border-4 border-white/20 shadow-xl"
            />

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl -z-10"></div>
          </div>

          {/* Name */}
          <h1 className="text-4xl font-bold">{fullName}</h1>

          {/* Role */}
          <p className="text-lg opacity-80">{person.role}</p>

          {/* Location */}
          <p className="text-sm opacity-60">📍 {person.location}</p>

          {/* Languages */}
          <div className="flex gap-2 mt-2 flex-wrap justify-center">
            {person.languages.map((lang, i) => (
              
              <span
                key={i}
                className="relative overflow-hidden px-3 py-1 text-sm rounded-full bg-white/10 border border-white "
              >
                {lang}
              </span>
            ))}
          </div>
        </section>

        <div>
          <SocialLink />
        </div>

        {/* ================= ABOUT ================= */}
        <section id="introduction" className="scroll-mt-28">
          <h2 className="text-2xl font-semibold">{about.intro.title}</h2>

          <p className="mt-4 whitespace-pre-line opacity-90">
            {about.intro.description}
          </p>
        </section>

        {/* ================= WORK ================= */}
        <section id="work-experience" className="scroll-mt-28">
          <h2 className="text-2xl font-semibold">Work Experience</h2>

          {about.work.map((job, i) => (
            <div key={i} className="mt-6">
              <h3 className="font-semibold text-lg">
                {job.company} – {job.role}
              </h3>

              <p className="opacity-70">{job.duration}</p>

              <ul className="list-disc ml-6 mt-2 space-y-1">
                {job.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* ================= STUDIES ================= */}
        <section id="studies" className="scroll-mt-28">
          <h2 className="text-2xl font-semibold">Studies</h2>

          <ul className="list-disc ml-6 mt-3 space-y-1">
            {about.studies.map((study, i) => (
              <li key={i}>{study}</li>
            ))}
          </ul>
        </section>
        

        {/*Loop of Tech Logos*/}
        <div className="h-[250px] overflow-hidden">
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          fadeOut={false}
          fadeOutColor="#0b0b0b"  // 👈 MATCH BACKGROUND
          scaleOnHover
/>
        </div>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="scroll-mt-28">
          <h2 className="text-2xl font-semibold justify-center">Technical Skills</h2>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {about.skills.map((skill, i) => (
              <div
                key={i}
                className="p-4 border border-white/10 rounded-lg "
              >
                  <div className="flex justify-center gap-4">
                    <img 
                      src={skill.icon}
                      alt={skill.name}
                      className="w-40 h-40  object-cover">

                      </img>
                  </div>
                <h3 className="font-semibold">{skill.name}</h3>
                <p className="opacity-70">{skill.desc}</p>
              </div>
              
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
