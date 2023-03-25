import React,{useState} from 'react'
import "./Auth.css"
import { Link } from "react-router-dom"
import ecommerce from "../../../images/ecommerce.jfif"
import { Auth } from "../../../Firebase/FirebaseApi"
import {createUserWithEmailAndPassword} from "firebase/auth"
import { toast } from 'react-toastify';

const Signup = ({ data }) => {
  let [Email, setEmail] = useState()
  let [password, setpassword] = useState();
  let [loading , setloading]=useState(false)

  let signuphandle = async (e) => {
    e.preventDefault();
    setloading(true)
    try {
        let user= await createUserWithEmailAndPassword(Auth,Email,password)
        console.log(user)
        toast.success("user created successfully Do login")
        setEmail("");
        setpassword("");
        setloading(false)
        data()
    } catch (error) {
       console.log(error)
    }
  }

  return (
    <div id='login-container'>
      <div id='login-left'>
        <h1>Looks like you're new here!</h1>
        <p>Sign up with your mobile number to get started</p>
        <div id='login-img'>
          <img src={ecommerce} alt="img" />
        </div>
      </div>
      <div id='login-right'>
        <form onSubmit={signuphandle}>
          <div className='login-items'>
            <input type="email" placeholder='Enter  Email/MobileNumber'value={Email} required onChange={e=>setEmail(e.target.value)}/>
            <input type="password" placeholder='Enter password' value={password} required onChange={e=>setpassword(e.target.value)}/>
            <span>By continuing, you agree to Flipkart's <Link>Terms of use</Link> and <Link>Privecy policy</Link></span>
            <button type='submit' style={{backgroundColor:loading?"blue":"orange"}}>
              {loading?"submiting":"submit"}
            </button>
          </div>
          <div className='signup-link'>
            <Link onClick={data}>old user? Login page</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup