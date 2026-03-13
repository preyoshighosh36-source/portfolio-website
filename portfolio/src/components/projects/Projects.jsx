import React from "react";
import frontend from '../../assets/frontend.jpeg';
import frontend1 from '../../assets/frontend1.png';
import frontend3 from '../../assets/frontend3.webp';



const ProjectCard = ({ image, title, link }) => (
  <div className="p-4 md:w-1/3 mb-8">
    
    <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 group transform hover:-translate-y-3 hover:shadow-2xl transition duration-500">

      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover object-center h-full w-full group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition duration-500"></div>

      <div className="absolute bottom-0 p-6 w-full">
        <h2 className="text-xl font-semibold text-white tracking-wide">
          {title}
        </h2>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center text-blue-300 hover:text-white transition duration-300 cursor-pointer"
        >
          View Project
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14"></path>
            <path d="M13 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>

    </div>

  </div>
);



export default function Projects() {

  const projects = [
    { title: "Portfolio Website", image: frontend, link: "#" },
    { title: "E-Commerce Platform", image: frontend1, link: "#" },
    { 
      title: "Rasturent Application", 
      image: frontend3, 
      link: "https://github.com/preyoshighosh36-source/resturent-app"
    }
  ];

  return (
    <section
      id="projects"
      className="relative text-gray-300 body-font overflow-hidden"
    >

    
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 rounded-t-[100px] rounded-b-[100px] -z-10"></div>

      
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-700 opacity-20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl -z-10"></div>

      <div className="container px-5 py-20 mx-auto">

        
        <div 
          data-aos='fade-up' 
          data-aos-delay='300' 
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16"
        >

          <div className="max-w-2xl">
            <h1 className="text-white font-bold title-font text-3xl mb-3">
              My Projects
            </h1>

            <p className="leading-relaxed text-gray-300">
              A curated collection of real-world applications built using 
              React, Node.js, Express, and MongoDB — showcasing scalable 
              architecture and modern UI design.
            </p>
          </div>

          <div className="mt-6 sm:mt-0 sm:ml-6">
            <button
              type="button"
              className="text-blue-950 bg-white hover:bg-blue-300 transition duration-300 font-semibold rounded-full text-sm px-6 py-2 shadow-md hover:shadow-lg"
            >
              View All
            </button>
          </div>

        </div>

      
        <div 
          data-aos='fade-up' 
          data-aos-delay='400' 
          className="flex flex-wrap -m-4"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
}