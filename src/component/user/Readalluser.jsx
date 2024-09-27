import axios from 'axios'
import React, { useEffect } from 'react'

const Readalluser = () => {
  let [user, setUser] = React.useState([])

  const getData =  async() => {
    

try{
  let result = await axios({
    url: "https://66efb5b2f2a8bce81be3dd9f.mockapi.io/user",
    method: "get"
  })
  setUser(result.data)
}catch(error){
    console.log(error)
  }
}

  useEffect(() => {
    getData()
  },[])

  
  return (
    <div>
    {user.map((value,i) =>{
        return(
          <div style={{border:"solid red 2px", margin : "30px"}}>
            
            <p>Full Name :{value.fullname}</p>
            <p>Phone no :{value.number}</p>
            <p>Password : {value.password}</p>
            <p>Email : {value.email}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Readalluser
