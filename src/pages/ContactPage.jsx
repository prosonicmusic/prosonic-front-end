import React from 'react'
import Layout from '../components/Layout'

function ContactPage() {
  return (
    <Layout>
      <div className="header"></div >

      <div id='contactPage'>
            <header>
              <h1>Contact us</h1>
            </header>

            <div className='contactSlot'>
              <div id='setting'>
                <div className='label first'>Name</div>
                <div className='formInput'>
                  <input type="text"/>
                </div>

                <div className='label'>Email</div>
                <div className='formInput'>
                  <input type="email"/>
                </div>

                <div className='label'>Subject</div>
                <div className='formInput'>
                  <input type="text"/>
                </div>

                <div className='label'>Message</div>
                <div className='formText'>
                  <textarea style={{height:'150px'}} class></textarea>
                </div>

                <div className='captcha'>
                  <div></div>
                  <div>
                    <button id='subButton'>
                      <span className='sub-btn set-bg'>Submit</span>
                    </button>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
    </Layout>
  )
}

export default ContactPage;