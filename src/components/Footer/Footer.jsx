import React from 'react';

const Footer = () => {
  return (
    <Footer className = "bg-gray-800 px-4 md:px=16 lg:px-28">
      <div className ="grid frid-cols-1 md:grid-cols-3">
              <div>
                      <h2 className = 'text-lg font-bold mb-4'>
                        About Me
                          <p className = 'text-gray-300'></p>
                      </h2>
              </div> 
              <div>
                      <h2 className = 'text-lg font-bold mb-4'>
                        Quick Links
                          <ul>
                            <li>
                              <a href ="" className = "hover:underline text-gray-300">Home</a>
                            </li>
                            <li>
                              <a href ="" className = "hover:underline text-gray-300">About</a>
                            </li>
                            <li>
                              <a href ="" className = "hover:underline text-gray-300">Projectst</a>
                            </li>
                            <li>
                              <a href ="" className = "hover:underline text-gray-300">Contact</a>
                            </li>
                          </ul>
                      </h2>
              </div>
              <div></div>
      </div>
    </Footer>
  );
};

export default Footer;

// Shift Alt down to create duplicates 