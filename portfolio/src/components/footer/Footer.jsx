import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white body-font">
      
      <div className="container px-5 py-10 mx-auto">

        
        <div 
          data-aos="fade-up" 
          data-aos-delay="300"
          className="flex flex-col md:flex-row justify-between items-center"
        >
          
          
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-wide">
              Portfolio
            </h1>
            <p className="text-sm text-blue-200 mt-2">
              Turning ideas into impactful digital experiences.
            </p>
          </div>

          
          <div 
            data-aos="fade-up" 
            data-aos-delay="500"
            className="flex space-x-6 text-xl"
          >

            <a href="#" className="hover:text-blue-400 hover:scale-110 transition duration-300">
              <FaFacebookF />
            </a>

            <a href="#" className="hover:text-blue-400 hover:scale-110 transition duration-300">
              <FaTwitter />
            </a>

            <a href="#" className="hover:text-pink-400 hover:scale-110 transition duration-300">
              <FaInstagram />
            </a>

            <a 
              href="https://www.linkedin.com/in/preyoshi-ghosh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 hover:scale-110 transition duration-300"
            >
              <FaLinkedinIn />
            </a>

          </div>
        </div>

        
        <div className="border-t border-blue-700 my-6"></div>

      
        <div 
          data-aos="fade-up" 
          data-aos-delay="700"
          className="text-center text-sm text-blue-200"
        >
          © {new Date().getFullYear()} Preyoshi Ghosh. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
