import React from 'react';

const ProjectItem = ({ img, title, demoLink, githubLink }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover rounded-xl group-hover:opacity-10"
      />

      {/* Hover content */}
      <div className="absolute inset-0 hidden group-hover:block flex justify-center items-center text-center text-white">
        <h3 className="text-2xl font-bold tracking-wider">{title}</h3>
      </div>

      {/* Bottom-left button for Demo */}
      <div className="absolute bottom-2 left-2 hidden group-hover:block"> 
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <p className="p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer">Demo</p>
        </a>
      </div>

      {/* Bottom-right button for GitHub */}
      <div className="absolute bottom-2 right-2 hidden group-hover:block"> 
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <p className="p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer">GitHub</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
