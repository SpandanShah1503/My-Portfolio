import React from "react";
import { Routes, Route } from "react-router-dom";
import BackgroundWrapper from "./src/components/Background/BackgroundWrapper";
import Navbar from "./src/components/Navbar/Navbar";
import AboutPage from "./src/components/About/About";
import Experience from "./src/components/Experience/Experience";
import Work from "./src/components/Work/Work";
import Footer from "./src/components/Footer/Footer";
import "./App.css";
import { color } from "framer-motion";

const App = () => {
  return (
    <>
    {/*<BackgroundWrapper />*/}

    <Routes>
      {/* HOME ROUTE */}
        <Route path="/"
          element=
          {
            <div className="Background-color relative min-h-screen w-full">
            <div
              style=
              {
                {
                  position: "relative",
                  width: "100%",
                  minHeight: "100vh",
                }
              }
            >

            

            <div className="mb-8 py-2">
              <Navbar />
            </div>

            <div className="relative pt-20">
              <div className="pt-24">

              </div>

              <Experience />
              <Footer />
            </div>
          </div>
          </div>
        }
      />

      {/* ABOUT ROUTE */}
      <Route path="/about" 
      /* 
      This tells React Router: When the URL is https://yourwebsite.com/about ,Show this UI layout.
      */
          element=
          /* 
          element defines what JSX should be rendered for this route.Everything inside this <div> becomes the About page layout.
          */
          {
            <>
            
           
            <div
              style=
              {
                {
                  position: "relative",
                  width: "100%",
                  minHeight: "100vh",
            
                }
              }
            >
              
           <div className="Background-color">

           </div>

            <div className="Background-color border-white/10 relative w-full py-2">
              <Navbar />
              <div className="pt-20">
                    <AboutPage />
                </div>
            </div>

            
            </div>
            </>
            
          }
      />

      {/* Work ROUTE */}
      <Route path="/work"
          element=
          {
            <>
          
              <div style=
              {
                {
                  position: "relative",
                  width: "100%",
                  minHeight: "100vh",
                  backgroundColor: "black",
            
                }
              }>

              
              <div className="Background-color border-white/10 relative w-full py-2">
                <Navbar />
                <div className="pt-20">
                      
                  </div>
              </div>
              <Work />

              <div className="mt-6">
                <Footer />
              </div>

              </div>
            </>
          }
      />

    </Routes>

   </>
  );
};

export default App;
