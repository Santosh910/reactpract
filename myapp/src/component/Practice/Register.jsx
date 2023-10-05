import React, { useState } from 'react'

const Register = () => {
    const [counter, setCounter] = useState(0)
    console.log(counter, "counter")

    const[liked, setLiked] = useState(false)
    console.log(liked, "Liked")

    function multiTask(){
        setLiked((flag) => !flag)
        // setCounter((prevValue) =>prevValue+1)
    }
  return (
    <div>
    <h1>Register {counter}</h1>
    <button onClick={() => setCounter((prevValue) => prevValue +1)}>Add counter</button>
    <button onClick={multiTask}>like ?</button>
    </div>

  )
}

export default Register