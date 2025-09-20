import React from "react";
import Background from "./Background/Background";
import { FloatingDockDemo } from "./components/Navbar/FloatingDockDemo";
import GradientText from "./components/WelcomeText/GradientText";
import Footer from "./components/Footer/Footer";

function App() {
  return (
<>
<div
          style=
          {
            {
              position: "relative",
              minHeight: "100vh",
              width: "100%",
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

            <div>
                  <FloatingDockDemo />
            </div>
        
            
            
            <div>  
                  <GradientText
                        colors=
                        {
                          ["#FF0000", "#4079ff", "#EF00FF", "#FF007F", "#FF9A00"

                          ]
                        }
                            animationSpeed={10}
                              showBorder={false}
                                className="custom-class"
                >
                             Welcome
                   </GradientText>
              </div>

              <div>
                <Footer />
              </div>

      
</div>

</>
  );
}

export default App;
