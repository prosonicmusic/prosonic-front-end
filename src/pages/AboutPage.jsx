import React from 'react';
import Layout from '../components/Layout';
import { FaInstagram, FaTelegramPlane, FaLinkedinIn  } from 'react-icons/fa';
import pakzad from '../img/pakzad1.png';

function AboutPage() {
  return (
    <Layout>
      <div id="aboutPage">
        <div className="cardTitle">
          <h1>The Team</h1>
        </div>
        <section className='team'>    
          <div className='teamCard'>
            <div className='cardContent'>
              <div className='imgBx'>
                <img src={pakzad} alt="pakzad" />
              </div>
              <div className="contentBx">
                <h3>Arya Pakzad<br /><span >Founder, Music Producer,<br /> Front-end developer</span></h3>
              </div>
            </div>

            <ul className="sci">
              <li>
                <a href="https://www.instagram.com/paakzadmusic/" target="_blank">
                  <FaInstagram/>
                </a>
              </li>
              <li>
                <a href="https://t.me/PakzadMusic" target="_blank">
                  <FaTelegramPlane/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/paakzad/" target="_blank">
                  <FaLinkedinIn/>
                </a>
              </li>
            </ul>
          </div>


          <div className='teamCard'>
            <div className='cardContent'>
              <div className='imgBx'>
                <img src={pakzad} alt="Mahmoud Eslami" />
              </div>
              <div className="contentBx">
                <h3>Mahmoud Eslami<br /><span>Back-end developer</span></h3>
              </div>
            </div>

            <ul className="sci">
              <li>
                <a href="https://www.instagram.com/paakzadmusic/" target="_blank">
                  <FaInstagram/>
                </a>
              </li>
              <li>
                <a href="https://t.me/PakzadMusic" target="_blank">
                  <FaTelegramPlane/>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/paakzad/" target="_blank">
                  <FaLinkedinIn/>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default AboutPage