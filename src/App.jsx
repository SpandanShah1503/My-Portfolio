import DarkVeil from "./components/DarkVeil"

function App() 
{

  return 
  (
    <>

       <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <DarkVeil 
        hueShift={0}
        noiseIntensity={0.15}
        scanlineIntensity={0.2}
        scanlineFrequency={2}
        warpAmount={0.1}
        speed={0.7}
      />
      <h1 style={{
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        zIndex: 10
      }}>
        🚀 My Portfolio
      </h1>
    </div>

  
     
     <DarkVeil />
    </>
  )
}

export default App
