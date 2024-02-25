import React, { useEffect, useState } from 'react'

function Using(props) {

    const [state,setState]= useState("");
    const [count,setCount] = useState(0);

    const handleContext=()=>{
        setState(state?"":props.OurData)
    }
    const handleCount=()=>{
        setCount(count=> count+1)
    }

    useEffect(()=>{
        alert("Content Button Clicked")
    },[state])

  return (
    <div>
        <h3>{state}</h3>
        <button onClick={handleContext}>Content</button>
        <h1>{count}</h1>
        <button onClick={handleCount}> Like </button>
        

    </div>
  )
}

export default Using