import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Work = () => {
  return (
    <>
    
    <div className="">
      <Navbar />       
    </div>

    <main className="flex-1 px-4 sm::px-6 lg:px-8 mt-6"> 
      
      <section className="Description text-center ">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white ">
          Work & Projects
        </h1>
      </section>
      <section id="Work" className="mt-10 min-h-screen mb-40">
        <h2 className="text-2xl text-white">Work</h2>
        <p className="text-white">This is a collection of my professional work, highlighting hands-on experience, responsibilities, and contributions to real products in collaborative and production environments.</p>
      </section>

       <section id="Projects" className="mt-10 min-h-screen mb-40">
        <h2 className="text-2xl text-white">Projects</h2>
        <p className="text-white">This is a space for self-driven and academic projects that reflect my curiosity, problem-solving approach, and passion for building beyond formal work.</p>
      </section>

    </main>



    <div className = "mt-6 ">
      <Footer />
    </div>
    
    </>
  );
};

export default Work;