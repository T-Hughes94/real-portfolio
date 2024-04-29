import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Main = () => {
  return (
    <div id="main" className="relative w-full h-screen">
      <img
        className="w-full h-full object-cover object-left scale-x-[-1]"
        src="https://i.pinimg.com/736x/fb/85/f7/fb85f791386cbfb8cc08ccaac1bb6b28.jpg"
        alt="Background image"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-white/50 flex justify-center items-center">
        <div className="max-w-[700px] text-center">
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Terence Hughes</h1>
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
          <div className="flex justify-center gap-4 mt-4">
            <FaFacebookF className="cursor-pointer" size={20} />
            <FaLinkedinIn className="cursor-pointer" size={20} />
            <FaGithub className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
