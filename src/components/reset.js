import React from 'react'
import "./reset.css"


export const ResetButton=({resetScore})=>{
    return(
        <button className="reset" onClick={resetScore}>Reset</button>
    )
}
