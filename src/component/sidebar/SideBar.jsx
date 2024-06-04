import React from 'react'
import { NavLink } from 'react-router-dom'

// style
import './style.css'

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className='sidebar-content'>
            <div className='user'>
                <p>Hey, User</p>
            </div>
                <p className='links'>
                    <ul>
                        <li>
                            <NavLink exact to="/">
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                <span>Create New Project</span>
                            </NavLink>
                        </li>
                    </ul>
                </p>
           
        </div>
    </div>
  )
}
