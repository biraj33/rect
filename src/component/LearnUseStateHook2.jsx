import React, { useState } from 'react'

const LearnUseStateHook2 = () => {
    let [count, setCount] = useState(12)
  return (
    <div>
      <h1>{count}</h1>

<center>
      <button onClick={()=>{
        setCount(count + 1)
      }}>Increment</button>
<br />
<button onClick={()=>{
        setCount(count - 1)
      }}>Decrement</button>

</center>
    </div>
  )
}

export default LearnUseStateHook2
