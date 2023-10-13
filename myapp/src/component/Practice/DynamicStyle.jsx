import React, { useState } from 'react'
import './DynamicStyle.css'

const DynamicStyle = () => {
    const [isButtonActive,setIsButtonActive] = useState (false );
    const handleButtonClick = () => {
        setIsButtonActive(!isButtonActive)
    }
    const buttonClassname = isButtonActive ? 'Active-Button' : 'Inactive-Button' ;
    console.log(buttonClassname)
  return (
    <div>
        <h1>Dynamic Styles</h1>
        <button className={buttonClassname} onClick={handleButtonClick}>
            {isButtonActive ? "Active" : "Inactive"}
        </button>
    </div>
  )
}

export default DynamicStyle