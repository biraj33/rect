import React, { useState } from 'react'

const LearnUseStateHook3 = () => {
    let [state , setState] = useState(true)
  return (
    <div>
        {state === true? <p>Hi biraj</p>: <p></p>}
        
        <button onClick={()=>{

             let a=state===true?setState(false):setState(true)
            }}>
            {state === true? "hide" : "show"}</button>      
    
    </div>
  )
}

export default LearnUseStateHook3
