import React from 'react'

const Practice = () => {
    let sum = (a,b,c) => {
        return a + b + c
    }

    let iseven = (a) => {
        if(a % 2 == 0){
            return true
        }
        return false
    } 
     let clickk = () => {
        console.log("Buttom is clicked")
     }
    // let _sum = sum(1,2,3)
    // console.log(iseven(2))

  return (
    <>
      <button onClick={()=>{
        console.log("buttom clicked")
      }}>ok</button>
    </>
  )
}

export default Practice
