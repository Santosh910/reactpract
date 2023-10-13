import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const router = useNavigate()

    useEffect(() =>{
        setTimeout(() =>{
            router('/')
        }, 5000);
    })
  return (
    <div>
       <h1>PageNotFound</h1> 
       <button onClick={() => router('/')}>go to homepage</button>
    </div>
  )
}

export default PageNotFound