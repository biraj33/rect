import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SpecificUser = () => {
    let params = useParams()
    let[user, setUser] = React.useState({})

   
    const getData = async() => {
        // try{
            let result = await axios({
                url:`https://66efb5b2f2a8bce81be3dd9f.mockapi.io/user/${params.id}`,
                method: "get"
            })
            setUser(result.data)

            console.log(result)
            // console.log(`https://66efb5b2f2a8bce81be3dd9f.mockapi.io/user/${params.id}`)

        // }catch(error){
        //     console.log(error)
        // }
        
    }

    useEffect(() => {
        getData()
    },[])
    
  return (
    <div>
      <p>Full Name :{user.fullname}</p>
        <p>Phone no :{user.number}</p>
        <p>Password : {user.password}</p>
        <p>Email : {user.email}</p>
    </div>
  )
}

export default SpecificUser
