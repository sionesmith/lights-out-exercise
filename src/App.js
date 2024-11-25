import React from 'react';
import { useState } from 'react';
import './Cell.css';
import Cell from './Cell';


const App = () => {
  const [lights, setLights] = useState([
    { id: 0, isOn: true },
    { id: 1, isOn: false },
  ]);

  const toggleLight = (cellIndex) => {
    setLights((prevLights) => 
      prevLights.map((light, index) => 
        index === cellIndex ? { ...light, isOn: !light.isOn } : light
     )
    );
  }

  return (
    <div style={{ display: 'flex'}}>
      {lights.map((light) => (
        <Cell
        key={light.id}
        cellIndex={light.id}
        isOn={light.isOn}
        toggleLight={toggleLight}
        />     
       ))}
    </div>
   );
};
    
export default App