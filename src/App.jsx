import React from "react";
import DarkVeil from "./components/ui/Background";
import { FloatingDockDemo } from "./components/ui/FloatingDockDemo";

function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", width: "100%" }}>
      {/* Full-page background */}
      <DarkVeil
        hueShift={245}
        noiseIntensity={0}
        scanlineIntensity={0}
        scanlineFrequency={0}
        warpAmount={0.0}
        speed={1.2}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      />

      {/* Navbar Floating Dock */}
        
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1 }}>
        
        <FloatingDockDemo />
        </div>



    </div>
  );
}

export default App;
