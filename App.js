import { useState } from "react";

function Square({ value, onSquareClick }) {
  //This is a rendering of a single square.
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  //This is the board component, it maintains the state of the game.

  function handleClick(i) {
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice(); // Create a copy of the current state

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = ["0"];
    } // Update the clicked square - which turn is it?
    setSquares(nextSquares); // Update the state with the new array
    setXIsNext(!xIsNext);
  }
  //This function is called when a square it clicked.

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
    //This component renders the 3x3 grid. Each value is recorded by the array above.
  );
}
