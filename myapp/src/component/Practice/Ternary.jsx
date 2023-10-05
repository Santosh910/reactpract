import React from 'react'

const Ternary = ({IsUserLoggedIn,setLoggedIn}) => {
  return (
    <div>
        <h1>Ternary Operator</h1>
        {IsUserLoggedIn? <h1 onClick={() =>setLoggedIn((prevValue) => !prevValue)}>welcome....</h1> 
        :
         <button onClick={() =>setLoggedIn((prevValue) => !prevValue)}>please login</button> }

    </div>
  )
}

export default Ternary