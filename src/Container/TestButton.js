import { React, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { AppContext } from './AppContext'
import Questionnairre from './Questionnairre'

function TestButton() {
    const navigate = useNavigate()
    const [open] = useState('')
    return (
      <div>
        <button className='testButton' onClick={() => navigate('/questionnairre')}>Take Test</button>
        <AppContext.Provider value={{ data: open }}>
          <Routes>
            <Route element={<Questionnairre/>} path='/questionnairre' />
          </Routes>
        </AppContext.Provider>
      </div>
    );
  }

  export default TestButton