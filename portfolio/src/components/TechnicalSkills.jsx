import React from 'react';
import jsLogo from '../assets/js-logo.png'; // Adjust the path to your language logos
import pythonLogo from '../assets/python-logo.png';
import reactLogo from '../assets/react-logo.png';
import sqlLogo from '../assets/sql-logo.png';
import htmlLogo from '../assets/html-logo.png';
import cssLogo from '../assets/css-logo.png';
import sqlaLogo from '../assets/sqla-logo.png';
import tlwndLogo from '../assets/tlwnd-logo.png';
import flaskLogo from '../assets/flask-logo.png';


const TechnicalSkills = () => {
  return (
    <div id="technical" className="max-w-[1040px] mx-auto md:pl-20 p-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-[#001b5e]">Technical Skills</h1>

      <p className="text-gray-700 text-lg my-4">Languages I have used. Click on the links for tutorials & documentation.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-8"> {/* Responsive grid layout */}
        
        {/* JavaScript */}
        <div className="flex flex-col items-center">
          <img src={jsLogo} alt="JavaScript" className="w-16 h-16" />
          <a
            href="https://www.javascript.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Learn JavaScript
          </a>
        </div>
        
        {/* Python */}
        <div className="flex flex-col items-center">
          <img src={pythonLogo} alt="Python" className="w-16 h-16" />
          <a
            href="https://www.python.org"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Learn Python
          </a>
        </div>

        {/* React */}
        <div className="flex flex-col items-center">
          <img src={reactLogo} alt="React" className="w-16 h-16" />
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Learn React
          </a>
        </div>
        {/* SQL */}
        <div className="flex flex-col items-center">
          <img src={sqlLogo} alt="Sql" className="w-16 h-16" />
          <a
            href="https://www.freecodecamp.org/news/sql-and-databases-full-course/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Learn SQL
          </a>
        </div>
        {/* HTML */}
        <div className="flex flex-col items-center">
          <img src={htmlLogo} alt="html" className="w-16 h-16" />
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Learn HTML
          </a>
        </div>
        {/* CSS */}
        <div className="flex flex-col items-center">
          <img src={cssLogo} alt="html" className="w-16 h-16" />
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Learn CSS
          </a>
        </div>
        {/* SQLalchemy */}
        <div className="flex flex-col items-center">
          <img src={sqlaLogo} alt="html" className="w-16 h-16" />
          <a
            href="https://www.sqlalchemy.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Learn SQLalchemy
          </a>
        </div>
        {/* Tailwind */}
        <div className="flex flex-col items-center">
          <img src={tlwndLogo} alt="html" className="w-16 h-16" />
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Learn Tailwind
          </a>
        </div>
        {/* Flask */}
        <div className="flex flex-col items-center">
          <img src={flaskLogo} alt="html" className="w-16 h-16" />
          <a
            href="https://flask.palletsprojects.com/en/3.0.x/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Learn FLask
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default TechnicalSkills;
