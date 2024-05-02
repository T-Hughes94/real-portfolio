import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
 // Update with the path to your profile picture

const AboutMe = () => {
  return (
    <div id="about-me" className="max-w-[1040px] mx-auto md:pl-20 p-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-[#001b5e]">About Me</h1> {/* Section heading */}

      {/* Introduction */}
      <p className="text-gray-700 text-lg my-4">
        Hi, I'm Terence Hughes, a passionate developer with a love for creating innovative solutions.
      </p>

      {/* More Details */}
      <p className="text-gray-600 my-4">
        I have a background in computer science and experience in full-stack development. 
        I enjoy building applications that solve real-world problems and exploring new technologies.
      </p>

      {/* Social Media Links */}
      <div className="flex justify-center gap-4 mt-4">
            <a href="mailto:terencehughes450@gmail.com" target="_blank" rel="noopener noreferrer">
              <AiOutlineMail className="cursor-pointer hover:scale-110 ease-in duration-150" size={20} />
            </a>
            <a href="https://www.linkedin.com/in/terence-hughes-27204128a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="cursor-pointer hover:scale-110 ease-in duration-150" size={20} />
            </a>
            <a href="https://github.com/T-Hughes94" target="_blank" rel="noopener noreferrer">
              <FaGithub className="cursor-pointer hover:scale-110 ease-in duration-150" size={20} />
            </a>
          </div>
    </div>
  );
};

export default AboutMe;
