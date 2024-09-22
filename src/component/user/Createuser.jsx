import React from 'react'

const Createuser = () => {
    let [fullname, setFullname] = React.useState("")
    let [email, setEmail] = React.useState("")
    let[number, setNumber] = React.useState("") 
    let [password, setPassword] = React.useState("")
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        console.log("form submitted")
        let data = {
            fullname: fullname,
            number: number,
            email: email,
            password: password
        };
        
      }}>

        <div></div>

        <div>
            <button type="submit">Submit</button>
        </div>

      </form>
    </div>
  )
}

export default Createuser
