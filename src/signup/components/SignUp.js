import React from 'react'
import { FaMailBulk, FaLock } from 'react-icons/fa'

import '../SignUpStyles.css'

const SignUp = () => {
  return (
    <div>
        <section className="signin-form-section">

<header className='signin-form'>
    <h1>Sign up to The Slap</h1>
</header>

<div className='signin-user-input-sections'> 
    <section className='email-section'>
        <h4> <FaMailBulk size={40} style={{color: 'black', marginRight: '2rem'}} /> </h4>
        <input type='text' placeholder="Email Address" className='name'/>
    </section>
    
    <section className='username-section'>
        <h4> <FaMailBulk size={40} style={{color: 'black', marginRight: '2rem'}} /> </h4>
        <input type='text' placeholder="Username" className='name'/>
    </section>

    <section className='password-section'>
        <h4> <FaLock size={40} style={{color: 'black', marginRight: '2rem'}} /> </h4>
        <input type='password' placeholder="Password" className='name'/>
    </section>

    <section className='confirm-password-section'>
        <h4> <FaLock size={40} style={{color: 'black', marginRight: '2rem'}} /> </h4>
        <input type='password' placeholder="Confirm Password" className='name'/>
    </section>


    <div className='signin-button'>
        <button>Sign Up</button>
    </div>

    <div className='terms'>
        <p> Terms and Conditions </p>
    </div> 
</div>
</section>
    </div>
  )
}

export default SignUp