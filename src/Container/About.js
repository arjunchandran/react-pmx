import { React, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import TakeTest from './TakeTest'
import { AppContext } from './AppContext'
import MultiselectDropdown from './MultiselectDropdown'
import './About.css'

function About() {
  const navigate = useNavigate()
  const [open] = useState('')
  const handleClick = _event => {
    <button>Take Test</button>
    navigate('test');
    <AppContext.Provider value={{ data: open }}>
      <Routes>
        <Route element={<TakeTest ></TakeTest>} path='test' />
      </Routes>
    </AppContext.Provider>
  };

  return (
    <div className='aboutContent' >
      <div>
        <h1 style={{color:'#ffff'}}>CMP</h1>
        <h3>About CMP</h3>
        <p >CMP is a process tool to help you reflect yourself in a mirror with the global best practices in a particular field
          <br></br>It is a self - help reflective tool to identify your gaps vis-à-vis your expectations
          <br></br>Depending on your current portfolio, and your future expectations, you can choose each of the sub-specialised area or a generalist's role
          <br></br>It can be used by organisations to assess the talent pool of HR team and plan their development or succession</p></div>
      <div>
        <h3 style={{color:'#ffff'}}>Choose your primary and secondary roles !</h3>
        <h4 >Primary Role</h4>
        <MultiselectDropdown /><p></p>
        <h4>SecondaryRole Role</h4>
        <select onChange={handleClick} className='dropdown' style={{color:'white'}}>
          <option className='options' value="" disabled selected hidden>Select your secondary role</option>
          <option className='options' value="volvo">Entry Level</option>
          <option className='options' value="saab">Jr. Management</option>
          <option className='options' value="mercedes">Middle Management</option>
          <option className='options' value="mercedes">Senior Management</option>
        </select><p></p>
        <AppContext.Provider value={{ data: open }}>
      <Routes>
        <Route element={<TakeTest ></TakeTest>} path='test' />
      </Routes>
    </AppContext.Provider>
      </div>
    </div>
  )
}

export default About