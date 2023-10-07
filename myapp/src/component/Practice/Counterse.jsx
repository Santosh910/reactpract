import React, { useEffect, useState } from 'react'

const Counterse = () => {
    const[counter, setCounter] = useState(0);

    function udateCounter() {
      setCounter((prevValue) => prevValue+1);
    }
    useEffect(() =>{
      if(counter === 10) {
        alert("hii")
      }
    },[counter])
  return (
    <div>
          <h1>Counterse - {counter}</h1>
          <button onClick={udateCounter}>+</button>
          <button>Switch</button>
      </div>
  )
}

export default Counterse