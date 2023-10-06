
  import React,{useState} from "react";
import {Board} from "./components/board";
import './App.css';
import { ScoreBoard } from "./components/Scoreboard";
import { ResetButton } from "./components/reset";

// import './components/board';

function App() 
{
  const Win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  

  const[board,setboard]=useState(Array(9).fill(null));
  const[xPlay,setxPlay]=useState(true);
  const[score,setScores]=useState({xScore:0,oScore:0});
const[gameOver,setgameOver]=useState(false);
  const handleBoxClick=(boxIdx)=>{
    const updatedBoard=board.map((value,idx)=>
    {
      if(idx === boxIdx)
      {
        return xPlay===true ? "X":"O";
      }

      else{
        return value;
      }

    })

    const winner=checkWin(updatedBoard);
    if(winner){
      if(winner==="O"){
        let {oScore}=score;
        oScore+=1
        setScores({...score,oScore})
      }
      else{
        let {xScore}=score;
        xScore+=1;
        setScores({...score,xScore})
      }
    }

    // console.log(score)
    setboard(updatedBoard);
    setxPlay(!xPlay);
  }
  
  const checkWin=(board)=>{
    for(let i=0;i<Win.length;i++){
      const [x,y,z]=Win[i]; 
      if(board[x]&&board[x]===board[y] && 
        board[y]===board[z])
        {
        console.log(board[x]);
        setgameOver(true);
        return board[x];
      }
    }
  }

  const resetBoard=()=>{
    setgameOver(false);
    setboard(Array(9).fill(null))
  }
  const resetScore=()=>{
    // xScore=0;
    // oScore=0;
    resetBoard();
    setScores({xScore:0,oScore:0})
  }
  // 
  return (
    <div className="App">
      <ScoreBoard score={score} xPlay={xPlay}/>
      <Board board={board} onClick={gameOver?resetBoard:handleBoxClick}/>
      <ResetButton resetScore={resetScore} />
      {/* <ResetButton resetBoard={resetBoard}/> */}

  </div>
    
  );
}

export default App;
