import React, { useRef, useState } from 'react'

function Practise() {
    const[input,setinput] = useState("")
    const[name,setname] = useState("")
    const inputref = useRef(null)
    console.log(name)
    console.log(input)
  function change(){
    setinput("")
    inputref.current.focus()
  }
 function reset(){
    setname("")
    setinput("")
 }
  return (
    // Create an input where the user enters their name.

// Display:
// Hello, Kashish!
// Buttons:
// Change Name
// Reset
// 👉 Think: Do you need one state or two?

    <>
    
    <input
    type='text'
    value={input}
    placeholder='Enter your name'
    ref={inputref}
    onChange={(e)=>setinput(e.target.value)}
    /><br/><br/>

    <button onClick={change}>Change Name</button><br/><br/>
    <button onClick={()=>setname(input)}>Show</button>
    <button onClick={reset}>Reset</button>
<br/><br/>
    <h2>hello , {name}</h2>

  
    </>
  )
}

export default Practise