import React from 'react'
import {useSelector,useDispatch} from "react-redux"

const Counter = () => {
    let data=useSelector(state=>state)
    let dispatch=useDispatch();
  return (

    <div>
        <h1>{data.ConterReducer}</h1>
        <button onClick={()=>dispatch({type:"increment",payload:10})}>Increment</button>
    </div>
  )
}

export default Counter