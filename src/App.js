import React, {useState} from 'react';
import './App.css';

function App() {
  let [Lit, SetLit] = useState(true);
  let [Temp, SetTemp] = useState(22);
  let See = Lit? "lit" : "dark";
  let AWE = Lit? "ON" : "OFF";

  return (
    <div className = {`room ${See}`}>
          <h1><strong>This is the 4th react assignment</strong></h1>
      <br/><br/>
         <h1>Light is {AWE}</h1>
    <div className = "btn1">
        <button onClick = {()=> {
          SetLit(true);
        }}>ON</button>
        <button onClick = {()=> {
          SetLit(false);
        }}>OFF</button>
        </div>
        <br/>
         <h1>The temprature is : {Temp}</h1>
    <div className = "btn2">
        <button onClick = {()=> {
          SetTemp(++Temp);
        }}>+</button>
        <button onClick = {()=> {
          SetTemp(--Temp);
        }}>-</button>
    </div>
    </div>
  );
}

export default App;
