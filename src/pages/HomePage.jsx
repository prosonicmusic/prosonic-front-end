import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import SocialMedia from '../components/SocialMedia';
import Products1 from '../components/products/Products1'
import Products2 from '../components/products/Products2'
import Products3 from '../components/products/Products3';

function HomePage() {
  return (
    <>
      <Header/>
      <Layout>
        <div className='homePage colorPage'>
          <section className='container'>

            <div className='container__header-section'>
                <h2>Latest Prosonic produced tracks</h2>
                <div className='container__browse'>
                  <Link to="/tracks" className='container__btn'><span><span>Browse more tracks</span></span></Link>
                </div>
            </div>
            
            <Products1/>
          </section>



          <section className='container'>
    
          <div className='container__header-section'>
              <h2>Premium Prosonic produced tracks</h2>
              <div className='container__browse'>
              <Link to="/tracks" className='container__btn'><span><span>Browse more tracks</span></span></Link>
              </div>
          </div>
    
            <Products2/>
          </section>




          <section className='container'>
    
          <div className='container__header-section'>
              <h2>Latest Prosonic Packages</h2>
              <div className='container__browse'>
              <Link to="/packages" className='container__btn'><span><span>Browse more tracks</span></span></Link>
              </div>
          </div>
    
            <Products3/>
          </section>
        </div>
      </Layout>
      </>
  )
}

export default HomePage;