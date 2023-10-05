import React from 'react'
import styled from 'styled-components'

const StyleComponent = () => {
    const Button = styled.button`
    color : red;
    `
  return (
    <div>
        <Button>StyleComponent</Button>
    </div>
  ) 
}

export default StyleComponent