import React from "react";
import Background from "./components/Background/Background";
import { FloatingDockDemo } from "./components/Navbar/FloatingDockDemo";
import GradientText from "./components/WelcomeText/GradientText";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/Video1/Video1";
import LogoLoop from "./components/LoopLogo/LoopLogo";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

function App() {
  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
      
      {/* Full-page background */}
      <Background
        hueShift={245}
        noiseIntensity={0}
        scanlineIntensity={0}
        scanlineFrequency={0}
        warpAmount={0.0}
        speed={1.2}
        style={{
          position: "absolute", // absolute so it grows with content
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",       // match parent height
          zIndex: -10,          // behind everything
        }}
      />

      {/* Navbar Floating Dock */}
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 10 }}>
        <FloatingDockDemo />
      </div>

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 1, paddingTop: "100px", textAlign: "center" }}>
        <GradientText
          colors={["#FF0000", "#4079ff", "#EF00FF", "#FF007F", "#FF9A00"]}
          animationSpeed={10}
          showBorder={false}
          className="custom-class"
        >
          Welcome
        </GradientText>

        <div style={{ marginTop: "40px" }}>
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
        </div>

        <div style={{ marginTop: "40px" }}>
          <VideoPlayer />
        </div>

      </div>

      {/* Footer */}
      <div style={{ position: "relative", zIndex: 1, marginTop: "40px" }}>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
