
import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
     <nav>Get ready to complete goals</nav>
     <div className='header'>
     <Link to='/'>Home</Link>
     <Link to='/about'>About</Link>
     <Link to='/contact'>contact</Link>
     <Link to='/user/Harshal'>User</Link>

    </div>
    </>
  )
}

export default Header;

