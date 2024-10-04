import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'


const UpdateProduct = () => {
    let params = useParams()
    let navigate = useNavigate()
    let [productName, setName] = React.useState('')
    let [price, setPrice] = React.useState('')
    let [quantity, setQuantity] = React.useState('')
    const getData = async ()=>{
        try{
            let result = await axios({
                url:`https://66efb5b2f2a8bce81be3dd9f.mockapi.io/product/${params.id}`,
                method:"GET"
            })
            setName(result.data.productName)
            setPrice(result.data.price)
            setQuantity(result.data.quantity)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <div>
        <form onSubmit={async (e) => {
        e.preventDefault()
        console.log("form submitted")
        let data = {
          productName: productName,
          price: price,
          quantity: quantity,
        };

        try{
          let result = await axios({
            url: `https://66efb5b2f2a8bce81be3dd9f.mockapi.io/product/${params.id}`,
            method: "PUT",
            data: data
          })
          toast.success("Product Updated Successfully")
          navigate(`/product/view/${params.id}`)
        }catch(error){
          toast.error("Something went wrong")

          console.log(error)

        } 
        console.log(data)
        
      }}>
        <div>
      <h1>Create a product</h1>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={productName} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
        <label htmlFor="price">price</label>
        <input type="text" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
        </div>
        <div>
        <label htmlFor="quantity">Review</label>
        <input type="text" name="quantity" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>

      </form>
    </div>
  )
}

export default UpdateProduct
