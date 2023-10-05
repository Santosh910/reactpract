import React, { useEffect, useState } from 'react'

const Effect4 = () => {
    const [counter1,setCounter1] = useState(0)
    const [counter2,setCounter2] = useState(0)

    useEffect(() =>{
        alert("hello")
    },[counter1,counter2])

    return(
        <div>
            <h1>counter {counter1}</h1>
            <button onClick={() =>setCounter1((san) =>san+1)}>+</button>
            <h1>counter {counter2}</h1>
            <button onClick={() =>setCounter2((san) =>san+1)}>+</button>
        </div>
    )
}

export default Effect4