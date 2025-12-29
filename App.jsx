import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./src/components/Navbar/Navbar";
import AboutPage from "./src/components/About/About";
import Experience from "./src/components/Experience/Experience";
import Contact from "./src/components/Contact/Contact";
import Skills from "./src/components/Skills/Skills";
import Work from "./src/components/Work/Work";
import Background from "./src/components/Background/Background";
import Footer from "./src/components/Footer/Footer";

const App = () => {
  return (
    <Routes>

      {/* HOME ROUTE */}
      <Route
        path="/"
        element={
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
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -10,
              }}
            />

            <div className="mb-8">
              <Navbar />
            </div>

            <div className="relative pt-20">
              <div className="pt-24"></div>

              <Experience />
              <Skills />
              <Work />
              <Contact />
              <Footer />
            </div>
          </div>
        }
      />

      {/* ABOUT ROUTE */}
      <Route
        path="/about"
        element={
          <div
            style={{
              position: "relative",
              width: "100%",
              minHeight: "100vh",
            }}
          >
           

            <div className="mb-8">
              <Navbar />
            </div>

            <div className="relative pt-20">
              <div className="pt-24"></div>

              {/* ONLY ABOUT CONTENT */}
              <AboutPage />
            </div>
          </div>
        }
      />

    </Routes>
  );
};

export default App;
