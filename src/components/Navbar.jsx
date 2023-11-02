import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  

  return (
    <div>
      <span style={{marginRight: 10}}> <Link to ='/'>HOME</Link></span>
      <span style={{marginRight: 10}}><Link to ='/about'>ABOUT</Link></span>
      <span><Link to ='/contact'>CONTACT</Link></span>
    </div>
  )
}

export default Navbar;