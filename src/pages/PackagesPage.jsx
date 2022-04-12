import React from 'react'
import Layout from '../components/Layout'
import Allpackages from '../components/products/Allpackages';
import SocialMedia from '../components/SocialMedia';

function PackagesPage() {
  return (
    <Layout>
      <SocialMedia></SocialMedia>
      <div className="tracksHeader"></div>

      <section id='tracksPage'>
          <header className='header-section'>
            <div className="left">
              <h1>Latest Packages</h1>
            </div>
            <div className="beatsMenu">
              <div className="dropdown-select">
                <select>
                  <option value="">Prices</option>
                  <option value="0,99">Up to 99€</option>
                  <option value="100,199">100€ to 199€</option>
                  <option value="200,299">200€ to 299€</option>
                  <option value="300,499">300€ to 399€</option>
                  <option value="500,99999">More than 500€</option>
                </select>
                <span className='caret'></span>
              </div>
            </div>
          </header>

          <Allpackages/>

          <div className='pagination'>
            <div className="prev"> Prev </div>
            <div className="numberContainer">
              <div className="paginationNumbers currentPage"> 1 </div>
              <div className="paginationNumbers"> 2 </div>
              <div className="paginationNumbers"> 3 </div>
              <div className="paginationNumbers"> 4 </div>
              <div className="paginationNumbers"> 5 </div>
              <div className="paginationNumbers"> 6 </div>
              <div className="paginationNumbers"> 7 </div>
            </div>
            <div className="next"> Next </div>
          </div>
        </section>
    </Layout>
  )
}

export default PackagesPage;