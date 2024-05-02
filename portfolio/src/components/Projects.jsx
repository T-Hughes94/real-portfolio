import React from 'react';
import ProjectItem from './ProjectItem';
import toonRaterImg from '../assets/2.png';
import pocketChefImg from '../assets/pocketChef.png';

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] mx-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
      <p className="text-center py-8">
       
      </p>
      <div className="grid sm:grid-cols-2 gap-16"> {/* Corrected typo: grid */}
        <ProjectItem 
          img={pocketChefImg} 
          title="Pocket Chef" 
          demoLink="https://example.com/demo-pocketchef" // Demo link
          githubLink="https://github.com/your-github/pocketchef" // GitHub link
        />
        <ProjectItem 
          img={toonRaterImg} 
          title="Toon Rater" 
          demoLink="https://www.loom.com/share/269cbaeaefc94ab0858f9f9af09ac168" 
          githubLink="https://github.com/T-Hughes94/Toon-Rater1" 
        />
      </div>
    </div>
  );
};

export default Projects;
