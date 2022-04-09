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

                </div>

              </div>
            </div>
          </section>
      </Layout>
  )
}

export default LoginPage;