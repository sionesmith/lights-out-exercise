import React, { useState } from 'react'; 
import  '/Cell';
import './Board.css';


const Board = () =>{
  const initialGrid = Array(5)
  .fill(null)
  .map(() => Array(5).fill(false));

  const [grid, setGrid] = useState(initialGrid);

  const toggleLight = (row, col) => {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((r, rIndex) =>
      r.map((cell, cIndex) => (rIndex === row && cIndex === col ? !cell : cell))
    );
    return newGrid;
  });
};

return (
  <div className="board">
    {grid.map((row, rowIndex) =>
    row.map((isOn, colIndex) =>
    <Cell
      key={`${rowIndex}-${colIndex}`}
      cellIndex={`${rowIndex}-${colIndex}`}
      isOn={isOn}
      toggleLight={() => toggleLight(rowIndex, colIndex)}
      />
    ))
   }
   </div>
  );
};

export default Board;
