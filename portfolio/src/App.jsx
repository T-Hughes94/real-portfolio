import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'

function App() {

  return (
    <>
     <div>
      <Sidenav/>
      <Main/>
      <Experience/>
      <Projects/>
      <Education/>
     </div>
    </>
  )
}

export default App
