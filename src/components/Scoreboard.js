import React from 'react'
import "./Scoreboard.css"
export const ScoreBoard=({score,xPlay})=>{
    const {xScore,oScore} =score;
    return (
        <div className="scoreBoard">
            <span className={`score xScore ${!xPlay && "inactive"}`}>X-{xScore}</span>
            <span className={`score oScore ${xPlay && "inactive"}`}>O-{oScore}</span>
        </div>
    )
}