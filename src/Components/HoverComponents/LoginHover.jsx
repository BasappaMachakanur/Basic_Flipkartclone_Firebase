import React from 'react'
import { Link } from "react-router-dom"
import "./LoginHover.css"

const LoginHover = ({data}) => {
  return (
    <div className='Btn-hover'>
      <div className='Btn-span'>
        <span>New Coustomer?</span>
        <span><Link onClick={data}>Sign Up</Link></span>
      </div>
      <div className='Btn-item'>
        <Link to="">My Profile</Link>
      </div>

      <div className='Btn-item'>
        <Link to="">Basappa Plus Zone</Link>
      </div>

      <div className='Btn-item'>
        <Link to="">Whishlist</Link>
      </div>

      <div className='Btn-item'>
        <Link to="">Rewards</Link>
      </div>

      <div className='Btn-item'>
        <Link to="">GiftCards</Link>
      </div>
    </div>
  )
}

export default LoginHover