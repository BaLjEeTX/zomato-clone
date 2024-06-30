import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {
    const [currState, setCurState] = useState("Sign Up")
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='Your name' required/>}
            <input type="email" placeholder='Your email' required/>
            <input type="password" placeholder='password' required/>
        </div>
        <button>{currState === "Sign Up" ? "Create Account": "Login"}</button>
        <div className="login-pop-condition">
            <input type="checkbox" required/>
            <p>I agree to Zomato's <a href="https://www.zomato.com/policies/terms-of-service/">Terms of Service</a>, <a href="https://www.zomato.com/policies/privacy/">Privacy Policy</a> and <a href="https://www.zomato.com/policies/">Content Policies</a></p>
        </div>
        {currState==="Login"?
        <p>Create a new account? <span onClick={()=>setCurState("Sign Up")}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
