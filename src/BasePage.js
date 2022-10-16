import { useState } from 'react';
import './App.css';
import About from './Container/About';
import Profile from './Container/Profile';
import { Route, Routes, useNavigate } from 'react-router-dom'
import {AppContext} from './Container/AppContext'
import Questionnairre from './Container/Questionnairre';

function BasePage() {
  const [state, setState] = useState(true);
  const navigate = useNavigate()
  return (
    <div className='App' >
      <p><b><i>Are you serious about building your career ?</i></b></p>
      <p><b><i>What is career to you - an intermittent growth in a particular role or a life of joyful fullfilment and pride ?</i></b></p>
      <p><b><i>Are you anxious about your career?</i></b></p>
      <p><b><i>Are you willing to invest in yourself?</i></b></p>
      {state && <button className="yesButton" onClick={() => navigate('/cmp')}>Yes</button>}
      {state && <button className="noButton" onClick={() => navigate('/sorry')}>No</button>}<p></p>
      <AppContext.Provider value={{data:state}}>
        <Routes>
          <Route element={<About setState={setState} style={{ textAlign:'center'}}/>} path='/cmp/*' />
          <Route element={<Questionnairre style={{ width: 'auto', textAlign:'center'}}/>} path='/questionnairre/*' />
          <Route path='/sorry'
            element={<Profile></Profile>}>
          </Route>
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default BasePage;
