import axios from 'axios'
import React, { useEffect } from 'react'


const ReadProduct = () => {
  
  let [product, setProduct] = React.useState([])

  const getData =  async() => {
    

try{
  let result = await axios({
    url: "https://66efb5b2f2a8bce81be3dd9f.mockapi.io/product",
    method: "get"
  })
  setProduct(result.data)
}catch(error){
    console.log(error)
  }
}

  useEffect(() => {
    getData()
  },[])



  return (
    <div>
        {product.map((value,i) =>{
        return(
          <div style={{border:"solid red 2px", margin : "30px"}}>
            
            <p>Product name :{value.productName}</p>
            <p>Price :{value.price}</p>
            <p>Quantity : {value.quantity}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ReadProduct
