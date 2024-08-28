import React from 'react'

const Form2 = () => {
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault()
        console.log("Form Submitted")
      }} action="">

        <button>hi</button>
      </form>
    </div>
  )
}

export default Form2
