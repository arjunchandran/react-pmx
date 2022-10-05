import './App.css';
import About from './Container/About';
import Profile from './Container/Profile';
import { Route, Routes, useNavigate } from 'react-router-dom'
import {AppContext} from './Container/AppContext'

function App() {
  const navigate = useNavigate()
  return (
    <div className='App'>
      <p><b>Are you serious about building your career ?</b></p>
      <button className="yesButton" onClick={() => navigate('/cmp')}>Yes</button><p className="Button">   </p>
      <button className="noButton" onClick={() => navigate('/sorry')}>No</button>
      <AppContext.Provider value={{data:state}}>
        <Routes>
          <Route element={<About />} path='/cmp' />
          <Route path='/sorry'
            element={<Profile></Profile>}>
          </Route>
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
