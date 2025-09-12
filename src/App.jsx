import DarkVeil from "./components/DarkVeil";

function App() {
  return (
    <>
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <DarkVeil 
        hueShift={245}
        noiseIntensity={0}
        scanlineIntensity={0.}
        scanlineFrequency={0}
        warpAmount={0.0}
        speed={1.2}
      />
      <h1 style={{
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        zIndex: 10
      }}>
       
      </h1>
    </div>
    </>
  );
}

export default App;