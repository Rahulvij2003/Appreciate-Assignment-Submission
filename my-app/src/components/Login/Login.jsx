import React from 'react'
import './Login.css'
import email from '../../Images/mail.png'
import lock from '../../Images/lock.png'
import fb from '../../Images/facebook 1.png'
import insta from '../../Images/instagram 1.png'
import linked from '../../Images/linkedin 1.png'
import pinterest from '../../Images/pinterest 1.png'
import finger from '../../Images/fingerprint 1.png'

const Login = () => {
  return (
    <div className='login'>

        <p className='txt'>Login</p>

        <p className='text'>By signing in you are agreeing our Term and privacy policy</p>

        <div>
            <a href="" className="login1">Login</a>
            <a href="" className="register">Register</a>
        </div>
        

        <div>
            <img className='epic' src={email} alt="" />
            <input className='email' type="text" name="email" placeholder="Email Address"></input>
            
        </div>
        <div className="line"></div>
        

        <div>
            <img className='lockpic' src={lock} alt="" />
            <input className='pass' type="password" name="password" placeholder="Password" ></input>
            
        </div>
        <div className="line2"></div>

        <div className='group'>
            <input className='check' type="checkbox"/> <p className='remember'>Remember password</p>
            
        </div>
        <a href="" className="forgot">Forgot passowrd</a>

        <div className="frame">
            <div className='rectangle'>
                <a href="" className="lg">Login</a>
            </div>
        </div>


        <p className="connect"> or connect with</p>
        
        <div className="logos">
            <img className='fb' src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={linked} alt="" />
            <img src={pinterest} alt="" />
        </div>

        <div className="fingerprint">
            <img className='finger' src={finger} alt="" />

        </div>
      
    </div>
  )
}

export default Login
