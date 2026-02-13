import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./src/components/Navbar/Navbar";
import AboutPage from "./src/components/About/About";
import Experience from "./src/components/Experience/Experience";
import Work from "./src/components/Work/Work";
import Footer from "./src/components/Footer/Footer";
import CyberLoader from "./src/components/CyberLoader/CyberLoader";

import "./App.css";

const App = () =>
{
    const [loaded, setLoaded] = useState(false);

    return (
        <>
            {
                !loaded &&
                (
                    <CyberLoader onFinish={() => setLoaded(true)} />
                )
            }

            {
                loaded &&
                (
                    <Routes>

                        {/* HOME */}
                        <Route
                            path="/"
                            element={
                                <div className="Background-color relative min-h-screen w-full">

                                    <div
                                        style={{
                                            position: "relative",
                                            width: "100%",
                                            minHeight: "100vh",
                                        }}
                                    >

                                        <Navbar />

                                        <Experience />
                                        <Footer />

                                    </div>

                                </div>
                            }
                        />

                        {/* ABOUT */}
                        <Route
                            path="/about"
                            element={
                                <div className="Background-color min-h-screen">

                                    <Navbar />

                                    <AboutPage />

                                </div>
                            }
                        />

                        {/* WORK */}
                        <Route
                            path="/work"
                            element={
                                <div className="Background-color min-h-screen">

                                    <Navbar />

                                    <Work />

                                </div>
                            }
                        />

                    </Routes>
                )
            }
        </>
    );
};

export default App;
