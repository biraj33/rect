import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const UpdateUser = () => {
    let params = useParams()
    let [fullname, setFullname] = React.useState("")
    let [email, setEmail] = React.useState("")
    let[number, setNumber] = React.useState("")
    let [password, setPassword] = React.useState("")

    let navigate = useNavigate()

    let getData = async() => {
    
        try{
            let result = await axios({
                url:`https://66efb5b2f2a8bce81be3dd9f.mockapi.io/user/${params.id}`,
                method:"GET"
            })
            let datas = result.data
            setFullname(datas.fullname)
            setEmail(datas.email)
            setNumber(datas.number)
            setPassword(datas.password)
        }catch(error){
            console.log(error)
        }

    }
    
    useEffect( () => {
        getData()
    },[])
  return (
    <div>
           <form onSubmit={async (e) => {
        e.preventDefault()
        console.log("form submitted")
        let data = {
            fullname: fullname,
            number: number,
            email: email,
            password: password
        };
        // console.log(data)
        try {
          let result = await axios({
            url:`https://66efb5b2f2a8bce81be3dd9f.mockapi.io/user/${params.id}`,
            method: "PUT",
            data:data
          }) 
          toast.success("User Update Successfully")
          navigate(`/user/view/${params.id}`)
        } catch (error) {
          toast.error("Something went wrong")
          console.log(error)
          
        }
        
      }}>

        <div>
          <input type="text" name="fullname" id="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="Fullname"/>
        </div>
        <div>
          <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
        </div>
        <div>
          <input type="number" name="number" id="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Number"/>
        </div>
        <div>
          <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
          </div>
        <div>
            <button type="submit">Submit</button>
        </div>

      </form>
    </div>
  )
}

export default UpdateUser
