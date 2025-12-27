import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';


const SocialLink = () => {
  return (
    <>
      <div className="flex gap-4 justify-center mt-4">
        
        {/* GitHub */}
      <a
        href="https://github.com/SpandanShah1503"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition text-2xl"
      >
        <FaGithub />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/spandan-shah0312/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 transition text-2xl"
      >
        <FaLinkedin />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/spandan_shah_04/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-pink-400 transition text-2xl"
      >
        <FaInstagram />
      </a>

      {/* Twitter / X */}
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-sky-400 transition text-2xl"
      >
        <FaTwitter />
      </a>


      </div>
    
    </>
  )
}

export default SocialLink

