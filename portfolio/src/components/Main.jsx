import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Main = () => {
  return (
    <div id="main" className="relative w-full h-screen">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover object-left scale-x-[-1]"
        src="https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?cs=srgb&dl=pexels-packermann-1666021.jpg&fm=jpg"
        alt="Background image"
      />

      {/* Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/50 flex justify-center items-center">
        <div className="max-w-[700px] text-center">

          {/* Profile Picture with External URL */}
          <img
            src="https://avatars.githubusercontent.com/u/133562544?v=4" // External image URL
            alt="Profile"
            className="w-64 h-64 rounded-full mx-auto mb-4 hover:scale-110 ease-in duration-200" // Circular and centered
          />

          {/* Name */}
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Terence Hughes</h1>

          {/* Type Animation */}
          <h2 className='justify-center flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            <TypeAnimation
              sequence={[
                'Developer',
                1000,
                'Creator',
                1000,
                'Tech Enthusiast',
                1000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>

          {/* Social Media Icons */}
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
      </div>
    </div>
  );
};

export default Main;
