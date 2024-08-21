import React from 'react'

const Ternary_Operator = () => {

    let age = 3;

    // let can_enter = (age >= 18)? "He can enter bar" : "he cant"
    // console.log(can_enter)

    // let ageEven = (age %2 == 0)? "Age is even" : "age is odd"
    // console.log(ageEven)

    let ages_chec = (age == 1)
    ? "he is one"
    : (age == 2)
    ? "he is 2"
    : (age == 3)
    ? "he is three"
    :"he is neither 1, 2, 3"
    console.log(ages_chec)
  return (
    <div>
      
    </div>
  )
}

export default Ternary_Operator
