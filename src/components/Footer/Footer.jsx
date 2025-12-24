import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter ,FaLinkedin, FaDiscord } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="relative px-4 md:px-8 lg:px-16 mb-8 w-full overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* About Me */}
        <div>
          <h2 className="text-white text-lg font-bold mb-4">About Me</h2>
          <p className="text-gray-300">I am a passionate developer building modern web apps.</p>
        </div> 
        
        {/* Quick Links */}
        <div className = "ml-6">
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
          <ul className="flex flex-wrap gap-4">
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
            {/* Gradient icon using bg-clip-text + inline SVG coloring */}
            <FaInstagram className="text-orange-400" 
            style={{
            background: "linear-gradient(90deg, #f97316, #ec4899, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
            }} 
            />
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Instagram
            </span>
            </a>
            </li>
            <li>
              <a href="https://github.com/SpandanShah1503" className="flex items-center space-x-2 text-gray-300 hover:text-pink-500">
                <FaGithub/> <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/spandan-shah0312" className="flex items-center space-x-2 text-blue-400 hover:text-pink-500">
                <FaLinkedin /> <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 text-blue-400 hover:text-pink-500">
                <FaDiscord /> <span>Discord</span>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;


/*
FaInstagram is an SVG, so text-transparent alone will hide it.

Using background-clip: text and -webkit-text-fill-color: transparent allows the SVG to inherit a gradient visually, similar to text.

The span text still has your existing gradient.
*/