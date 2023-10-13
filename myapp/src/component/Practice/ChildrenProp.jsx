import React from 'react'

const ChildrenProp = () => {
    return (
        <>
            <H1>this is h1</H1>
            <Button >ChildrenProp</Button >
        </>

    )
}

const Button = ({ children }) => {
    return (
        <button>{children}</button>
    )
}

const H1 = ({ children }) => {
    return (
        <h1>{children}</h1>
    )
}

export default ChildrenProp