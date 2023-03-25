import React from 'react'
import {Link} from "react-router-dom"
import "./LoginHover.css"

const MoreHover = () => {
  return (
    <div id='more-dropDown'>
        <div className='Btn-item'><Link to="">Notification Preferences</Link></div>
        <div className='Btn-item'><Link to="">24x7 Customer Care</Link></div>
        <div className='Btn-item'><Link to="">Advertise</Link></div>
        <div className='Btn-item'><Link to="">Download App</Link></div>
    </div>
  )
}

export default MoreHover