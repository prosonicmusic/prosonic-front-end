import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';

function LoginPage() {
  const [move, setMove] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(password !== password2) {
      toast.error('Passwords do not match')
    }
  }
  return (
    <>
        <Navbar/>
          <section id='loginPageHeader'>
            <div id='loginSec' >
              <div className='loginContainer'>
                <div id='bgOne' className={`oneBgColor ${move ? "active" : ""}`}>
                  <div className='loginBox signin'>
                    <h2>Already Have an Account ?</h2>
                    <button className='loginBtn'
                      onClick={() => setMove(!move)}
                      >Sign in
                    </button>
                  </div>
                  <div className='loginBox signup'>
                    <h2>Don't Have an Account ?</h2>
                    <button className='signupBtn'
                      onClick={() => setMove(!move)}
                      >Sign up
                    </button>
                  </div>
                </div>

                <div className={`hide ${move ? "active" : ""}`} id='formBx'>
                  <div className='form signinForm'>
                    <form>
                      <h3>Sign In</h3>
                      <input 
                        type="email" 
                        placeholder='Email'
                        id='email' 
                        name='email' 
                        value={email} 
                        onChange={onChange} 
                        required
                      />
                      <input 
                        type="password" 
                        placeholder='Password'
                        id='password' 
                        name='password' 
                        value={password} 
                        onChange={onChange} 
                        required
                      />
                      <input type="submit" value="Login"/>
                      <a href="#" className='forgot'>Forgot Password</a>
                    </form>
                  </div>

                  <div className='form signupForm'>
                    <form onSubmit={onSubmit}>
                      <h3>Sign Up</h3>
                      <div className='formGroup'>
                        <input 
                          type="text" 
                          placeholder='Name' 
                          id='name' 
                          name='name' 
                          value={name} 
                          onChange={onChange} 
                          required/>
                        <input 
                          type="email" 
                          placeholder='Email Address' 
                          id='email' 
                          name='email' 
                          value={email} 
                          onChange={onChange} 
                          required/>
                        <input 
                          type="password" 
                          placeholder='Password' 
                          id='password' 
                          name='password' 
                          value={password} 
                          onChange={onChange} 
                          required/>
                        <input 
                          type="password" 
                          placeholder='Confirm Password' 
                          id='password2' 
                          name='password2' 
                          value={password2} 
                          onChange={onChange} 
                          required/>
                        <input type="submit" value="Register"/>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </>
  )
}

export default LoginPage;