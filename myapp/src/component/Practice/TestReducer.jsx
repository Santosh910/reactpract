import React, { useReducer } from 'react'


const initialState = { count : 10}

const reducer = (state, action) => {
    switch(action.type){
        case "INCREMENT":
            return{...state,count : state.count +1 };
        case "DECREMENT":
            return{...state,count : state.count -1};
        case "RESET":
            return{...state,count :0}
        default:
            return state;
    }
}

const TestReducer = () => {
    const[state,dispatch] = useReducer(reducer,initialState);

    function increment(){
        dispatch({ type:"INCREMENT"})
    }
    function decrement(){
        dispatch({ type:"DECREMENT"})
    }
    function reset(){
        dispatch({ type:"RESET"})
    }

  return (
    <div>
        <h1>counter : {state.count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default TestReducer