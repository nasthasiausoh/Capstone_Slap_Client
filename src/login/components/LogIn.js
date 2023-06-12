import React from 'react'
import { FaMailBulk, FaLock} from 'react-icons/fa'
// import slapLogo from './assets/slap-logo-no-bang.png'
import '../LogInStyles.css'

const LogIn = () => {
    return (
            <section className="login-form-section">

                <header className='login-form'>
                    <h1>Login to Slap</h1>
                </header>

                <div className='user-input-sections'> 
                    <section className='username-section'>
                        <h4> <FaMailBulk size={40} style={{color: 'black', marginRight: '2rem'}} /> </h4>
                        <input type='text' placeholder="Username" className='name'/>
                    </section>

                    <section className='password-section'>
                        <h4> <FaLock size={40} style={{color: 'black', marginRight: '2rem'}} /> </h4>
                        <input type='password' placeholder="Password" className='name'/>
                    </section>
                

                    <div className='login-button'>
                        <button>Login</button>
                    </div>

                    <div className='links'>
                        <p> <a href='#'>Forgot Password</a> or <a href='/signUp'>Sign Up</a> </p>
                    </div> 
                </div>
            </section>
    );
}

export default LogIn