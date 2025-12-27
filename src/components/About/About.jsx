import React from "react";
import Background from "../Background/Background";
import { InlineCode } from "../InlineCode/InlineCode";
import { person, about } from "../../data/content";


export default function AboutPage() {
  const fullName = `${person.firstName} ${person.lastName}`;

  return (
    <div className="relative min-h-screen">
      {/* Background */}
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
          zIndex: -10,
        }}
      />

      <main className="text-white max-w-4xl mx-auto px-6 py-24 space-y-16">

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

        {/* ================= ABOUT ================= */}
        <section>
          <h2 className="text-2xl font-semibold">{about.intro.title}</h2>

          <p className="mt-4 whitespace-pre-line opacity-90">
            {about.intro.description}
          </p>
        </section>

        {/* ================= WORK ================= */}
        <section>
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
        <section>
          <h2 className="text-2xl font-semibold">Studies</h2>

          <ul className="list-disc ml-6 mt-3 space-y-1">
            {about.studies.map((study, i) => (
              <li key={i}>{study}</li>
            ))}
          </ul>
        </section>

        {/* ================= SKILLS ================= */}
        <section>
          <h2 className="text-2xl font-semibold">Technical Skills</h2>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {about.skills.map((skill, i) => (
              <div
                key={i}
                className="p-4 border border-white/10 rounded-lg"
              >
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
