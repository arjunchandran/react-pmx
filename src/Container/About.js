import { React, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import TakeTest from './TakeTest'
import { AppContext } from './AppContext'
import './About.css'
import AccordionRoles from './AccordionRoles';


function About() {
  const navigate = useNavigate()
  const [open] = useState('')

  const handleClick = _event => {
    <button>Select Roles</button>
    var skillLevel = document.getElementById('skillLevel');
    var value = skillLevel.options[skillLevel.selectedIndex].value;
    localStorage.setItem("skillLevel",value);
    navigate('test');
  };
  
  return (
    <div className='aboutContent' >
      <div>
        <h1 style={{ color: '#0f3d6e' }}>CMP</h1>
        <h3>About CMP</h3>
        <p >CMP is a process tool to help you reflect yourself in a mirror with the global best practices in a particular field
          <br></br>It is a self - help reflective tool to identify your gaps vis-à-vis your expectations
          <br></br>Depending on your current portfolio, and your future expectations, you can choose each of the sub-specialised area or a generalist's role
          <br></br>It can be used by organisations to assess the talent pool of HR team and plan their development or succession</p></div>
      <div><br />
        <h3 style={{ color: '#0f3d6e' }}>Primary and Secondary roles</h3><br />
        <AccordionRoles /><br />
        <h4>Skill Level</h4>
        <select onChange={handleClick} className='dropdown' id="skillLevel" style={{ color: 'white' }}>
          <option className='options' value="" disabled selected hidden>Select your Skill Level</option>
          <option className='options' value="Entry Level">Entry Level</option>
          <option className='options' value="Jr. Management">Jr. Management</option>
          <option className='options' value="Middle Management">Middle Management</option>
          <option className='options' value="Senior Management">Senior Management</option>
        </select><br /><br />
        <AppContext.Provider value={{ data: open }}>
          <Routes>
            <Route element={<TakeTest ></TakeTest>} path='test/*' />
          </Routes>
        </AppContext.Provider>
      </div>
    </div>
  )
}

export default About