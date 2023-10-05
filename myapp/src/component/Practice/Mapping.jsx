import React from "react";

const Mapping = ({names}) => {
    console.log(names)

    return (
        <div>
            <h1>Mapping</h1>
            {names.map((name,i) => (
                <div>
                    <h3>Student Name- {name}</h3>
                    <h2>Student id- {i}</h2>
                </div>
            ))}
        </div>
    )
}

export default Mapping