import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
const[points,setPoints]=useState([]);
  return (
    <div className="main">
      <div className="component1">
        <div>
              <img src="icon1.png"/>
              <h1>Arrhythmia Disease Prediction</h1>
          </div>
          <p>fully AI integrated AI Website for arrhythmia prediction</p>
      </div>
      <input type="text" placeholder="Enter the points of ECG" onBlur={(e)=>setPoints(e.value)}/>
      <button className="button1" onClick={()=>console.log(points)}>Classify</button>
    </div>
  );
}

export default App;
