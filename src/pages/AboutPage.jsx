import React from 'react';
import Layout from '../components/Layout';
import { FaGithub, FaTelegramPlane, FaLinkedinIn  } from 'react-icons/fa';
import pakzad from '../img/pakzad1.png';
import mahmoud from '../img/mahmoudeslami1.jpg';
import Tilt from 'react-tilty';

function AboutPage() {
  return (
    <Layout>
      <div id="aboutPage">
        <div className="cardTitle">
          <h1>The Team</h1>
        </div>
        <section className='team'>
          <Tilt max={15} speed={400} className='tilt'> 
            <div className='teamCard'>
              <div className='cardContent'>
                <div className='imgBx'>
                  <img src={pakzad} alt="pakzad" />
                </div>
                <div className="contentBx">
                  <h3>Arya Pakzad<br /><span className='chngContent'>Founder, Music Producer</span></h3>
                </div>
              </div>

              <ul className="sci">
                <li>
                  <a href="https://github.com/pakzadmusic" target="_blank rel=noopener" >
                    <FaGithub/>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/PakzadMusic" target="_blank rel=noopener">
                    <FaTelegramPlane/>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/paakzad/" target="_blank rel=noopener">
                    <FaLinkedinIn/>
                  </a>
                </li>
              </ul>
            </div>
          </Tilt> 
          <Tilt  max={15} speed={400}>
            <div className='teamCard'>
              <div className='cardContent'>
                <div className='imgBx'>
                  <img src={mahmoud} alt="Mahmoud Eslami" />
                </div>
                <div className="contentBx">
                  <h3>Mahmoud Eslami<br /><span className='chngContent2'>Android & Flutter developer</span></h3>
                </div>
              </div>

              <ul className="sci">
                <li>
                  <a href="https://github.com/mahmoud-eslami" target="_blank ">
                    <FaGithub/>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/es_mahmoud" target="_blank rel=noopener">
                    <FaTelegramPlane/>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/mahmoud-eslami/" target="_blank rel=noopener">
                    <FaLinkedinIn/>
                  </a>
                </li>
              </ul>
            </div>
          </Tilt>  
        </section>
      </div>
    </Layout>
  )
}

export default AboutPage