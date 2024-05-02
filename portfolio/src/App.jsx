import React from 'react';
import './index.css';
import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import AboutMe from './components/AboutMe'
import TechnicalSkills from './components/TechnicalSkills'

function App() {

  return (
    <>
     <div>
      <Sidenav/>
      <Main/>
      <AboutMe/>
      <TechnicalSkills/>
      <Experience/>
      <Projects/>
      <Education/>
     </div>
    </>
  )
}

export default App
