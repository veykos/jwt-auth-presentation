import { Link } from "react-router-dom";
import React from 'react'

function NavBar() {
  return (
    <div>
      <Link to={'login'}>Login</Link>
      <Link to={'secret'}>Secret page</Link>
      <Link to={'signup'}>Signup</Link>
      <button onClick={e => {}}>Logout and Clear cookie</button>
    </div>
  )
}

export default NavBar