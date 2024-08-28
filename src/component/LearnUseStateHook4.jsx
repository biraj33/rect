import React, { useState } from 'react'

const LearnUseStateHook4 = () => {
    let [count, setCount] = useState(0)
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>{
        setCount(count + 1)
      }}>+++++</button>
    </div>
  )
}

export default LearnUseStateHook4
