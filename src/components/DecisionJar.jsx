import React, { useEffect, useRef, useState } from 'react'

function DecisionJar() {
    const[option,setOption] = useState([])
    const[input,setInput] = useState("")
    const inputRef = useRef(null)

    function AddOption(){
        setOption([...option,input])
        setInput("")
    }

    function remove(){
         setOption([])   
    }

    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
<>
    <label> Enter your Query:- </label><br/><br/>

    <input type='text'
    ref={inputRef}
    placeholder='Enter...'
    value={input}
    onChange={(e)=>setInput(e.target.value)}></input>


    <button onClick={AddOption} >Add +</button>
    <button onClick={remove}>remove -</button><br/><br/>

    <h1>Options : </h1><br/><br/>
    <h2>
        <ul>
          {option.map((item)=>(
                <li>{item} </li>
         ))}
        </ul> </h2>
</>  )
}

export default DecisionJar