import React, {useState} from 'react';
import './App.css';
import Block from './components/Block'; 

const App : React.FC = () => {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");

  const checkWinner = (state : any[]) => {
    const win = [
      [0,1,2], [3,4,5], [6,7,8], //rows
      [0,3,6], [1,4,7], [2,5,8], //columns
      [0,4,8], [2,4,6] //diagonals
    ];
    for(let i = 0; i < win.length; i++){
      const [a,b,c] = win[i];
      if(state[a] != null && state[a] === state[b] && state[a] === state[c]){
        return true;
      }
    }
    return false;
  }

  const handleBlockClick = (index : number) => {
    const newBoard = [...board];

    //if the block is already filled, return
    if(newBoard[index] != null){
      return;
    }

    newBoard[index] = player;
    
    //check if there is a winner
    const win = checkWinner(newBoard);

    if(win){
      alert(`${player} has won!`);
    }

    setBoard(newBoard);
    setPlayer(player === "X" ? "O" : "X");
  }

  return (
    <div className="board">
      <div className="row">
        <Block onClick = {() => handleBlockClick(0)} value={board[0]}/>
        <Block onClick = {() => handleBlockClick(1)} value={board[1]}/>
        <Block onClick = {() => handleBlockClick(2)} value={board[2]}/>
      </div>
      <div className="row">
        <Block onClick = {() => handleBlockClick(3)} value={board[3]}/>
        <Block onClick = {() => handleBlockClick(4)} value={board[4]}/>
        <Block onClick = {() => handleBlockClick(5)}value={board[5]}/>
      </div>     
      <div className="row">
        <Block onClick = {() => handleBlockClick(6)} value={board[6]}/>
        <Block onClick = {() => handleBlockClick(7)} value={board[7]}/>
        <Block onClick = {() => handleBlockClick(8)} value={board[8]}/>
      </div>
    </div>
  );
}

export default App;
