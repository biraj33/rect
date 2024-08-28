import React from 'react'

const Form2 = () => {
    let [username, setUsername] = React.useState("")
    let [age, setAge] = React.useState(0)
    let [desc, setDesc] = React.useState("")



  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault()
        console.log(username)
        console.log(age)
        console.log(desc)
        
      }} action="">
<div>
      <label htmlFor="name">Name:</label>
      <input type="text" id = "name" onChange={(e)=>{
        setUsername(e.target.value)
      }}/>
</div>


<div>
      <label htmlFor="passw">Password:</label>
      <input type="text" id = "passw" onChange={(e)=>
        setAge(e.target.value)
      }/>
</div>

<div>
      <label htmlFor="desc">Description:</label>
      <input type="text" id = "desc" onChange={(e)=>
        setDesc(e.target.value)
      }/>
</div>

        <button>hi</button>
      </form>
    </div>
  )
}

export default Form2
