import React from 'react'

const Form2 = () => {
    let [username, setUsername] = React.useState("")
    let [age, setAge] = React.useState(0)
    let [desc, setDesc] = React.useState("")
    let [married, setMarried] = React.useState(true)
    let [country, setCountry] = React.useState("")



  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault()
        console.log(username)
        console.log(age)
        console.log(desc)
        console.log(married)
        console.log(country)
        
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

<div>
  <label htmlFor="Country">Country</label>
      <select name="" id="Country"
      value={country}
      onChange={(e)=>{
        setCountry(e.target.value)
      }}>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Australia">Australia</option>
      </select>
</div>

<div>
      <label htmlFor="chk">Is married:</label>
      <input type="checkbox" checked={married} id = "chk" onChange={(e)=>
        setMarried(e.target.checked)
      }/>
</div>
        <button>hi</button>
      </form>
    </div>





  )
}

export default Form2
