import React from 'react'

const Info1 = () => {
    let name = "Biraj"
    let age = 20
    let b = <p>Hello</p>
  return (
    <div>
      <p>
        name:{name}
        <br />
        age:{age}
      </p>
      {b}
    </div>
  )
}

export default Info1
