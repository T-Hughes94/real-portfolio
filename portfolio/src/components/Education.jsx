import React from 'react';
import certificateImg from '../assets/certificate.jpg'; // Adjust the path to your certificate photo

const Education = () => {
  return (
    <div id="education" className="max-w-[1040px] mx-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Education</h1>
      <div className="flex flex-col items-center mt-8">
        {/* Certificate Photo */}
        <img
          src={certificateImg}
          alt="Certificate"
          className="w-64 h-auto object-cover rounded-lg shadow-lg"
        />
        {/* Education Details */}
        <p className="text-center text-gray-700 mt-4">
          Bachelor of Science in Computer Science <br /> 
          University of Example, 2020
        </p>
      </div>
    </div>
  );
};

export default Education;
