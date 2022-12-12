import { React, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import RoleSelect from './RoleSelect'
import { AppContext } from './AppContext'
import './TakeTest.css'

function TakeTest () {
    const navigate = useNavigate()
    const [open] = useState('')
 return(
    <div>
        <h4>Proceed to select your Primary and Secondary Roles</h4>
        <div className='testButtonDiv'><br></br><button className='testButton' onClick={() => navigate('/roleselect')} >Select Roles</button><br></br><br></br>
        <AppContext.Provider value={{ data: open }}>
          <Routes>
            <Route element={<RoleSelect></RoleSelect>} path='/roleselect' />
          </Routes>
        </AppContext.Provider></div>
    </div>
 )
}

export default TakeTest