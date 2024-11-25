import React from 'react';
import "./Cell.css"

const Cell = ({cellIndex, isOn, toggleLight }) => {
    return(
     <button
        // className = {`cell ${isOn ? 'greenOn' : 'greenOff'}`}
        className={`cell ${isOn ? ' On' : 'off'}`}
        onClick={() => toggleLight(cellIndex)}
     ></button>
  );
};

export default Cell;
