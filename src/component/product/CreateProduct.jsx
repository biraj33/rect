import axios from 'axios'
import React from 'react'

const CreateProduct = () => {
    let [productName, setName] = React.useState('')
    let [price, setPrice] = React.useState('')
    let [quantity, setQuantity] = React.useState('')
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
            url: "https://66f4e14677b5e889709abc56.mockapi.io/product",
            method: "post",
            data: data
          })
          console.log(result)
        }catch(error){

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

export default CreateProduct
