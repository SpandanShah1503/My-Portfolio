import Background from "./Background/Background";
import { FloatingDockDemo } from "./components/Navbar/FloatingDockDemo";
import GradientText from "./components/WelcomeText/GradientText"


function App() {
  return (

    <div style=
    {
      { position: "relative", minHeight: "100vh", width: "100%" 

      }
    }
    >

      {/* Full-page background */}

      <Background
        hueShift={245}
        noiseIntensity={0}
        scanlineIntensity={0}
        scanlineFrequency={0}
        warpAmount={0.0}
        speed={1.2}
        style=
        {
          {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          }
        }
       />

      
      {/* Navbar Floating Dock */}
      <div
        style=
        {
          {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1,
          }
        }
      >
        
      
      </div>

      <FloatingDockDemo /> 

      <GradientText 
      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
      animationSpeed={3}
      showBorder={false}
      className="custom-class"
      >
        Welcome My Name is Spandan Shah
      </GradientText>

    </div>
  );
}

export default App;
