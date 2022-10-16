import { React, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Questionnairre from './Questionnairre'
import { AppContext } from './AppContext'
import './TakeTest.css'

function TakeTest () {
    const navigate = useNavigate()
    const [open] = useState('')
 return(
    <div>
       <div className='testButtonDiv'><br></br><button className='testButton' onClick={() => navigate('/questionnairre')} >Take Test</button><br></br><br></br>
        <AppContext.Provider value={{ data: open }}>
          <Routes>
            <Route element={<Questionnairre></Questionnairre>} path='/questionnairre' />
          </Routes>
        </AppContext.Provider></div>
    </div>
 )
}

export default TakeTest