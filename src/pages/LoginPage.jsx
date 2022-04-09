import React, {useState} from 'react'
import Layout from '../components/Layout';
import SocialMedia from '../components/SocialMedia';

function LoginPage() {
  const [move, setMove] = useState(false);

  return (
      <Layout>
        <SocialMedia></SocialMedia>
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
                      <input type="text" placeholder='Username'/>
                      <input type="password" placeholder='Password'/>
                      <input type="submit" value="Login"/>
                      <a href="#" className='forgot'>Forgot Password</a>
                    </form>
                  </div>

                  <div className='form signupForm'>
                    <form>
                      <h3>Sign Up</h3>
                      <input type="text" placeholder='Username'/>
                      <input type="email" placeholder='Email Address'/>
                      <input type="password" placeholder='Password'/>
                      <input type="password" placeholder='Confirm Password'/>
                      <input type="submit" value="Register"/>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </section>
      </Layout>
  )
}

export default LoginPage;