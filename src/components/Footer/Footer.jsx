import React from 'react';
import { FaFacebookF , FaInstagram , FaTwitter } from "react-icons/fa"; 
const Footer = () => {
  return (
    <footer className = "bg-black px-4 md:px-16 lg:px-">
      <div className ="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
              
              
              
              <div>
                      <h2 className = 'text-white text-lg font-bold mb-4'>
                        About Me
                      </h2>
                      
              </div> 
              <div>
                      <h2 className = 'text-white text-lg font-bold mb-4'>
                        Quick Links
                          <ul>
                            <li>
                              <a href ="" className = "hover:underline text-gray-300">Home</a>
                            </li>
                            <li>
                              <a href ="" className = "hover:underline text-gray-300">About</a>
                            </li>
                            <li>
                              <a href ="" className = "hover:underline text-gray-300">Projects</a>
                            </li>
                            <li>
                              <a href ="" className = "hover:underline text-gray-300">Contact</a>
                            </li>
                          </ul>
                      </h2>
              </div>
              <div className = "pb-8">
                <h2 className = "text-white text-lg font-bold mb-4">Follow Me</h2>
                  <ul className = "flex space-x-4">
                            <li> <FaFacebookF className ="text-blue-500"/>
                            {""}
                              <a href ="" className = "hover:underline text-gray-300">Home</a>
                            </li>
                          
                            <li>
                              <FaTwitter className = "text-sky-500"/>
                              <a href ="" className = "hover:underline text-gray-300">Projectst</a>
                            </li>
                            <li>
                              <FaInstagram className = "text-orange-500" />
                               <a href ="" className = "hover:underline text-gray-300">Contact</a>
                            </li>
                          </ul>
              </div>
      </div>
    </footer>
  );
};

export default Footer;

// Shift Alt down to create duplicates 