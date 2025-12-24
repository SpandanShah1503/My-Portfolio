import React from "react";

import Navbar from "./src/components/Navbar/Navbar";
import About from "./src/components/About/About";
import Experience from "./src/components/Experience/Experience";
import Contact from "./src/components/Contact/Contact";
import Skills from "./src/components/Skills/Skills";
import Work from "./src/components/Work/Work";
import Background from "./src/components/Background/Background";
import Footer from "./src/components/Footer/Footer";

// import Navbar from "./src/components/Navbar/FloatingDockNav";
// import PortfolioNavbar from "./src/components/Navbar/PortfolioNavbar";

// import other components like VideoPlayer or LogoLoop if needed

const App = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Background
        hueShift={251}
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
          height: "100%", // match parent height
          zIndex: -10, // behind everything
        }}
      />
      <div className="mb-8">
      <Navbar />
      </div>

      <div className="relative pt-20">
        <div className="pt-24"></div>

        <About />
        <Experience />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
