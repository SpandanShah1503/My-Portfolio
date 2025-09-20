import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter ,FaLinkedin, FaDiscord } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="bg-transparent px-4 md:px-16 lg:px-32 py-8 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* About Me */}
        <div>
          <h2 className="text-white text-lg font-bold mb-4">About Me</h2>
          <p className="text-gray-300">I am a passionate developer building modern web apps.</p>
        </div> 
        
        {/* Quick Links */}
        <div>
          <h2 className="text-white text-lg font-bold mb-4">Quick Links</h2>
          <ul className="text-gray-300 space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Projects</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-white text-lg font-bold mb-4">Follow Me</h2>
          <ul className="flex space-x-7">
            <li>
              <a href="#" className="flex items-center space-x-2 text-blue-400 hover:text-blue-500">
                <FaFacebookF /> <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 text-blue-400 hover:text-sky-500">
                <FaTwitter /> <span>Twitter</span>
              </a>
            </li>
           <li>
              <a href="#" className="flex items-center space-x-2">
                <FaInstagram className="text-pink-500 " /> 
                <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent ">
                Instagram
                </span>
  </a>
</li>


             <li>
              <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-pink-500">
                <FaGithub/> <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 text-blue-400 hover:text-pink-500">
                <FaLinkedin className="text-blue-500 group-hover:text-pink-400"/> <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 text-blue-400 hover:text-pink-500">
                <FaDiscord className="text-blue-500 group-hover:text-pink-400"/> <span>Discord</span>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
