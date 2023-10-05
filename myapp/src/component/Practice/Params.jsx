import React from 'react'
import { useNavigate } from 'react-router-dom'

const Params = () => {
 const router = useNavigate();

  return (
    <div>
        <button onClick={() => router('/singleProduct/123452')}>click to go to single product</button>
    </div>
  )
}

export default Params