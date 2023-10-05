import React, { useEffect, useState } from 'react'

const Effect2 = () => {

    const [counter, setCounter] = useState(0)

    useEffect(() =>{alert("Rendered...")},[])


  return (
    <div>
         <div>
        <h1>Counter - {counter}</h1>
        <button onClick={() =>setCounter((san) =>san+1)}>effect-1</button>
    </div>
    </div>
  )
}

export default Effect2