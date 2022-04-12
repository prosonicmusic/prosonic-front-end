import React from 'react'
import Layout from '../components/Layout'
import SocialMedia from '../components/SocialMedia';


function ContactPage() {
  return (
    
    <Layout>
      <SocialMedia></SocialMedia>

      <div className="header"></div >
        <div id='contactPage' className=''>
              <header>
                <h1>Contact us</h1>

              </header>

              <div className='contactSlot'>
                <form id='setting'>
                  <div className='label first'>Name</div>
                  <div className='formInput'>
                    <input type="text"/>
                  </div>

                  <div className='label'>Email</div>
                  <div className='formInput'>
                    <input type="tel"/>
                  </div>

                  <div className='label'>Phone Number</div>
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
                      <button type='submit' id='subButton'>
                        <span className='sub-btn set-bg'>Submit</span>
                      </button>
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </Layout>
  )
}

export default ContactPage;