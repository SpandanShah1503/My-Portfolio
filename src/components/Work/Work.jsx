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


    </main>



    <div className = "mt-6 ">
      <Footer />
    </div>
    
    </>
  );
};

export default Work;