import React, { useContext } from 'react'
import { theme } from '../App'
import Using from './Using'



function ChildComp() {
    const data = useContext(theme)
    let themeStyle={
        backgroundColor : data?"black": "red",
        color: data?"white":"yellow",
        padding: "2vw",
        height: "100vh"
    }
    

    const content = `It's working . 😊`
  return (
    <div style={themeStyle}>
        <Using OurData={content}/>
    </div>
  )
}

export default ChildComp