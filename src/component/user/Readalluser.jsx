import axios from 'axios'
import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Readalluser = () => {
  let [user, setUser] = React.useState([])
  let navigate = useNavigate()
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
            <button onClick={
              ()=>{navigate(`/user/view/${value.id}`)}
            }>View</button>
            <button onClick={()=>{
              navigate(`/user/edit/${value.id}`)
            }}   >Edit</button>
            <button onClick={async()=>{
              try{
              let result = await axios({
                url: `https://66efb5b2f2a8bce81be3dd9f.mockapi.io/user/${value.id}`,
                method: "delete"
              })
              toast.success("User Deleted Successfully")
              getData()
            }catch(error){
              toast.error("Something went wrong")  
            }}}>Delete</button>
          </div>

        )
      })}
    </div>
  )
}

export default Readalluser
