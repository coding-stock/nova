'use client'
import { useState  } from "react"
import Image from 'next/image'
import { createPortal } from "react-dom"
import menuicon from '../../public/assets/menu.png'
import Tabs from "./tabs"
function Menu() {
    const [active , setActive] = useState(false);
    
  return (
    <>
      <Image onClick={()=>{
        setActive(true);
      }} src={menuicon} alt='menu' width={40}/>
      {active && createPortal(
       <Tabs onClose={()=> setActive(false)}/>,
        document.body
      )}
      
    </>
    
  )
}

export default Menu