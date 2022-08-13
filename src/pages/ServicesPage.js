import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Layout from '../components/Layout'

function ServicesPage() {
  return (
    
    <Layout>
      <div className="header"></div >
      <div id='services'>
        <section className='services-container'>

            <div className='container__header-section'>
                <h2>Order a custom track</h2>
            </div>

            <ul className='custom'>
              <li>
                <span>Custom track</span>
                <div className="vertical-centering">
                  <span className='price'>1,000,000 T</span>
                  <button className='addService'> add </button>
                </div>
              </li>
              <li>
              <span>Mix / Mastering</span>
                <div className="vertical-centering">
                  <span className='price'>500,000 T</span>
                  <button className='addService'> add </button>
                </div>
              </li>
              <li>
              <span>Audio Editing</span>
                <div className="vertical-centering">
                  <span className='price'>100,000 T</span>
                  <button className='addService'> add </button>
                </div>
              </li>
              <li>
              <span>Stems</span>
                <div className="vertical-centering">
                  <span className='price'>500,000 T</span>
                  <button className='addService'> add </button>
                </div>
              </li>
              <br />
              {/* <hr /> */}
              <li className='all-in-one'>
              <span>All in one</span>
                <div className="vertical-centering">
                  <span className='price'>1,900,000 T</span>
                  <button className='addService'> add </button>
                </div>
              </li>
            </ul>
            
          </section>

      </div>
    </Layout>
  )
}

export default ServicesPage;