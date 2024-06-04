import React from 'react'

import { Link }from 'react-router-dom'

// style
import './style.css'

export default function Navigation() {
  return (
    <div className='nav'>
        <ul>
            <Link to="project">Create project</Link>
            <Link to="signup">Signup</Link>
            <Link to="login">Login</Link>
            <Link to="stripe">Test Stripe</Link>
        </ul>
    </div>
  )
}
