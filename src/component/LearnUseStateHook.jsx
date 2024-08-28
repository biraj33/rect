import React, { useState } from 'react'

const LearnUseStateHook = () => {
    let [name, setName] = useState("Biraj")
    let[age, setAge] = useState(45)
  return (
    <div>
      {name}
      <button onClick={(e)=>{
        setName('biraj')
      }}>Hi</button>

      age:{age}
      <button onClick={(e)=>{
        setAge(18)
      }}>setAge</button>
    </div>
  )
}

export default LearnUseStateHook
