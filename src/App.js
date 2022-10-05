import React from 'react';
import { useNavigate } from "react-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p><b>Are you serious about building your career ?</b></p>
      </header>
      <button onClick={event=> window.location.href="/cmp"} className="yesButton">Yes</button>
      <p className="inline">   </p>
      <button className="noButton">No</button>
    </div>
  );
}

export default App;
