import { useState } from "react"
import Window from "./window.jsx" 
import Button from "./menuButton.jsx"

function PrimaryMenu() {
  const[show, setShow] = useState(false)

  return (
    <>
      <Button show={show} setShow = {setShow}/>
      <Window show={show} setShow = {setShow}/>
    </>
  )
}

export default PrimaryMenu
