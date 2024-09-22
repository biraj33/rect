import React from 'react'

const CreateProduct = () => {
    let [name, setName] = React.useState('')
    let [stock, setStock] = React.useState('')
    let [review, setReview] = React.useState('')
  return (
    <div>
        <form onSubmit={(e) => {
        e.preventDefault()
        console.log("form submitted")
        let data = {
            name: name,
            stock: stock,
            review: review,
        };
        console.log(data)
        
      }}>
        <div>
      <h1>Create a product</h1>

        </div>
        <div>
            <button type="submit">Submit</button>
        </div>

      </form>
      
    </div>
  )
}

export default CreateProduct
