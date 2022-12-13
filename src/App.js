import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import About from './Container/About';
import Profile from './Container/Profile';
import { Route, Routes } from 'react-router-dom'
import {AppContext} from './Container/AppContext'
import Questionnairre from './Container/Questionnairre';
import BasePage from './BasePage'
import RoleSelect from './Container/RoleSelect';

function App() {
  const [state, setState] = useState(true);
  return (
    <div className='App' >
      <AppContext.Provider value={{data:state}}>
        <Routes>
        <Route element={<BasePage setState={setState} style={{ textAlign:'center'}}/>} path='/react-pmx/*' />
          <Route element={<About setState={setState} style={{ textAlign:'center'}}/>} path='/cmp/*' />
          <Route element={<Questionnairre style={{ width: 'auto', textAlign:'center'}}/>} path='/questionnairre/*' />
          <Route element={<RoleSelect style={{ width: 'auto', textAlign:'center'}}/>} path='/roleselect/*' />
          <Route path='/sorry'
            element={<Profile></Profile>}>
          </Route>
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
