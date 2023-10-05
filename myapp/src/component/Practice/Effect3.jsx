import React, { useEffect, useState } from "react";

const Effect3 = () =>{
    const [counter,setCounter] = useState(0)


    useEffect(() =>{
        alert("hello")
    },[counter])

    return(
        <div>
            <h1>counter {counter}</h1>
            <button onClick={() =>setCounter((san) =>san+1)}>+</button>
        </div>
    )
}

export default Effect3