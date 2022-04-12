import React from 'react'
import Layout from '../components/Layout'
import Allbeats from '../components/products/Allbeats';
import SocialMedia from '../components/SocialMedia';

function TracksPage() {
  return (
    <Layout>
      <SocialMedia></SocialMedia>
      <div className="tracksHeader"></div>
        <section id='tracksPage'>
          <header className='header-section'>
            <div className="left">
              <h1>Latest tracks</h1>
            </div>
            <div className="beatsMenu">
              <div className="dropdown-select">
                <select>
                  <option value="">Genres</option>
                  <option value="Ambient & Chill">Ambient & Chill</option>
                  <option value="Cinematic">Cinematic</option>
                  <option value="Disco">Disco</option>
                  <option value="Dubstep">Dubstep</option>
                  <option value="EDM">EDM</option>
                  <option value="Electro House">Electro House</option>
                  <option value="Folk">Folk</option>
                  <option value="Hause">Hause</option>
                  <option value="Hip hop">Hip hop</option>
                  <option value="Pop">Pop</option>
                  <option value="Rock">Rock</option>
                  <option value="Rnb">Rnb</option>
                  <option value="Trap">Trap</option>
                </select>
                <span className='caret'></span>
              </div>
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
              <div className="dropdown-select">
                <select>
                  <option value="">Daws</option>
                  <option value="cubase">Cubase</option>
                  <option value="flStudio">FL Studio</option>
                </select>
                <span className='caret'></span>
              </div>
            </div>
          </header>

          <Allbeats/>

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

export default TracksPage;