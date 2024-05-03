import React from 'react'
import './input.css'

const Input=(props)=>{
    return(

        <input onChange={(event)=>props.setValue(event.target.value)} 
            className='input_'
            value={props.value} 
            type={props.type}/>
    )
}

export default Input;