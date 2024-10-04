import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SpecificProduct = () => {
    let params = useParams()
    let [product, setProduct] = useState({})



    const getData = async ()=>{
        try{
        let result = await axios({
            url:`https://66efb5b2f2a8bce81be3dd9f.mockapi.io/product/${params.id}`,
            method: "GET"
        }
    )
    setProduct(result.data)
}catch(error){
            console.log(error)
        }
        
    }

    useEffect(()=>{
        getData()
    }, [])

  return (
    <div>
      <p>Product Name: {product.productName}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  )
}

export default SpecificProduct
