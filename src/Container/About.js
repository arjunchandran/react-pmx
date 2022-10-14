import { React, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Questionnairre from './Questionnairre'
import { AppContext } from './AppContext'
import './About.css'

function About() {
  const [state] = useState(100);
  const navigate = useNavigate()
  return (
    <div className='aboutContent' >
      <div>
        <h1>CMP</h1>
        <h3>About CMP</h3>
        <p>CMP is a process tool to help you reflect yourself in a mirror with the global best practices in a particular field
          <br></br>It is a self - help reflective tool to identify your gaps vis-à-vis your expectations
          <br></br>Depending on your current portfolio, and your future expectations, you can choose each of the sub-specialised area or a generalist's role
          <br></br>It can be used by organisations to assess the talent pool of HR team and plan their development or succession</p></div>
      <div className='testButtonDiv'><br></br><button className='questionnaireButton' onClick={() => navigate('test')} >Take Test</button><br></br><br></br>
        <AppContext.Provider value={{ data: state }}>
          <Routes>
            <Route element={<Questionnairre></Questionnairre>} path='test' />
          </Routes>
        </AppContext.Provider></div>

    </div>
  )
}

export default About