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

         {/* Name */}
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Terence Hughes</h1>

          {/* Type Animation */}
          <h2 className='justify-center flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            <TypeAnimation
              sequence={[
                'Developer',
                1000,
                'Foodie',
                1000,
                'Nature Lover',
                1000,
                'Flatiron Graduate',
                1000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
