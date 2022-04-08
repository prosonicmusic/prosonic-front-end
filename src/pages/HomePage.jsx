import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import cover1 from '../img/cover1.jpg'
import cover2 from '../img/cover2.jpg';
import playIcon from '../icons/play-icon-1.svg';
import logo1 from '../img/cubase_logo.png';
import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome';
import { faChevronRight } from  '@fortawesome/free-solid-svg-icons';
import SocialMedia from '../components/SocialMedia';

function HomePage() {
  return (
    <>
      <Header/>
      <SocialMedia></SocialMedia>
      <Layout>
        <div className='homePage'>
          <section className='container'>

            <div className='container__header-section'>
                <h2>Latest Prosonic produced tracks</h2>
                <div className='container__browse'>
                  <a href="#" className='container__btn'><span><span>Browse more tracks</span></span></a>
                </div>
            </div>

            <div className='container__grid-5'>


                <div className='col'>
                  <div className='beatItem hoverOnBeatItem beatItem__MoreInfoForDevices'>
                    <div className='beatItem__top'>
                      <div className='cover'>
                        <img src={cover2} alt="cover" />
                        <span><img src={playIcon} alt="play" className='cover__playIcon'/></span>
                      </div>
                    </div>

                    <div className='beatItem__bottomWrapper bottom-part'>
                      <div className='moreInfoIcon'>
                          <a href="#"></a>
                          <FontAwesomeIcon icon={faChevronRight} className="rightIcon"></FontAwesomeIcon>
                      </div>

                      <div>
                        <div className='beatItem__nameAndUsername'>
                          <a href="#" className='name'>Trailer Tension</a><br />
                          <a href="#" className='username'>Prosonic</a>
                        </div>
                        <div className='beatItem__lineData'>
                          <span className='price'> 300,000 T</span>

                          <div className='daw'>
                              <img src={logo1} alt="Cubase" />
                          </div>
                        </div>
                        <div className='beatItem__buttons'>
                          <a href="#" className='info'> More Info </a>
                          <button className='set-bg'> Add to cart </button>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                <div className='col'>
                  <div className='beatItem hoverOnBeatItem beatItem__MoreInfoForDevices'>
                    <div className='beatItem__top'>
                      <div className='cover'>
                        <img src={cover2} alt="cover" />
                        <span><img src={playIcon} alt="play" className='cover__playIcon'/></span>
                      </div>
                    </div>

                    <div className='beatItem__bottomWrapper bottom-part'>
                      <div>
                      <div className='moreInfoIcon'>
                          <a href="#"></a>
                          <FontAwesomeIcon icon={faChevronRight} className="rightIcon"></FontAwesomeIcon>
                      </div>

                        <div className='beatItem__nameAndUsername'>
                          <a href="#" className='name'>Trailer Tension</a><br />
                          <a href="#" className='username'>Prosonic</a>
                        </div>
                        <div className='beatItem__lineData'>
                          <span className='price'> 300,000 T</span>

                          <div className='daw'>
                              <img src={logo1} alt="Cubase" />
                          </div>
                        </div>
                        <div className='beatItem__buttons'>
                          <a href="#" className='info'> More Info </a>
                          <button className='set-bg'> Add to cart </button>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                <div className='col'>
                  <div className='beatItem hoverOnBeatItem beatItem__MoreInfoForDevices'>
                    <div className='beatItem__top'>
                      <div className='cover'>
                        <img src={cover2} alt="cover" />
                        <span><img src={playIcon} alt="play" className='cover__playIcon'/></span>
                      </div>
                    </div>

                    <div className='beatItem__bottomWrapper bottom-part'>
                      <div>
                      <div className='moreInfoIcon'>
                          <a href="#"></a>
                          <FontAwesomeIcon icon={faChevronRight} className="rightIcon"></FontAwesomeIcon>
                      </div>

                        <div className='beatItem__nameAndUsername'>
                          <a href="#" className='name'>Trailer Tension</a><br />
                          <a href="#" className='username'>Prosonic</a>
                        </div>
                        <div className='beatItem__lineData'>
                          <span className='price'> 300,000 T</span>

                          <div className='daw'>
                              <img src={logo1} alt="Cubase" />
                          </div>
                        </div>
                        <div className='beatItem__buttons'>
                          <a href="#" className='info'> More Info </a>
                          <button className='set-bg'> Add to cart </button>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                <div className='col'>
                  <div className='beatItem hoverOnBeatItem beatItem__MoreInfoForDevices'>
                    <div className='beatItem__top'>
                      <div className='cover'>
                        <img src={cover2} alt="cover" />
                        <span><img src={playIcon} alt="play" className='cover__playIcon'/></span>
                      </div>
                    </div>

                    <div className='beatItem__bottomWrapper bottom-part'>
                      <div>

                      <div className='moreInfoIcon'>
                          <a href="#"></a>
                          <FontAwesomeIcon icon={faChevronRight} className="rightIcon"></FontAwesomeIcon>
                      </div>
                        <div className='beatItem__nameAndUsername'>
                          <a href="#" className='name'>Trailer Tension</a><br />
                          <a href="#" className='username'>Prosonic</a>
                        </div>
                        <div className='beatItem__lineData'>
                          <span className='price'> 300,000 T</span>

                          <div className='daw'>
                              <img src={logo1} alt="Cubase" />
                          </div>
                        </div>
                        <div className='beatItem__buttons'>
                          <a href="#" className='info'> More Info </a>
                          <button className='set-bg'> Add to cart </button>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                <div className='col'>
                  <div className='beatItem hoverOnBeatItem beatItem__MoreInfoForDevices'>
                    <div className='beatItem__top'>
                      <div className='cover'>
                        <img src={cover2} alt="cover" />
                        <span><img src={playIcon} alt="play" className='cover__playIcon'/></span>
                      </div>
                    </div>

                    <div className='beatItem__bottomWrapper bottom-part'>
                      <div>
                      <div className='moreInfoIcon'>
                          <a href="#"></a>
                          <FontAwesomeIcon icon={faChevronRight} className="rightIcon"></FontAwesomeIcon>
                      </div>
                        
                        <div className='beatItem__nameAndUsername'>
                          <a href="#" className='name'>Trailer Tension</a><br />
                          <a href="#" className='username'>Prosonic</a>
                        </div>
                        <div className='beatItem__lineData'>
                          <span className='price'> 300,000 T</span>

                          <div className='daw'>
                              <img src={logo1} alt="Cubase" />
                          </div>
                        </div>
                        <div className='beatItem__buttons'>
                          <a href="#" className='info'> More Info </a>
                          <button className='set-bg'> Add to cart </button>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </section>



          <section className='container'>
    
          <div className='container__header-section'>
              <h2>Premium Prosonic produced tracks</h2>
              <div className='container__browse'>
                <a href="#" className='container__btn'><span>Browse more tracks</span></a>
              </div>
          </div>
    
          <div className='container__grid-5'>
    
    
              <div className='col'>
                <div className='beatItem hoverOnBeatItem beatItem__MoreInfoForDevices'>
                  <div className='beatItem__top'>
                    <div className='cover'>
                      <img src={cover1} alt="cover" />
                      <span><img src={playIcon} alt="play" className='cover__playIcon'/ ></span>
                    </div>
                    <ul className='beatItem__labels'>
    
                      <li className='Premium'> PREMIUM </li>
                    </ul>
                  </div>
    
                  <div className='beatItem__bottomWrapper bottom-part'>
                    <div>

                    <div className='moreInfoIcon'>
                          <a href="#"></a>
                          <FontAwesomeIcon icon={faChevronRight} className="rightIcon"></FontAwesomeIcon>
                      </div>
                      <div className='beatItem__nameAndUsername'>
                        <a href="#" className='name'>Trailer Tension</a><br />
                        <a href="#" className='username'>Prosonic</a>
                      </div>
                      <div className='beatItem__lineData'>
                        <span className='price'> 500,000 T</span>
    
                        <div className='daw'>
                            <img src={logo1} alt="Cubase" />
                        </div>
                      </div>
                      <div className='beatItem__buttons'>
                        <a href="#" className='info'> More Info </a>
                        <button className='set-bg'> Add to cart </button>
    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
    
    
              <div className='col'>
                <div className='beatItem hoverOnBeatItem beatItem__MoreInfoForDevices'>
                  <div className='beatItem__top'>
                    <div className='cover'>
                      <img src={cover1} alt="cover" />
                      <span><img src={playIcon} alt="play" className='cover__playIcon'/ ></span>
                    </div>
                    <ul className='beatItem__labels'>
    
                      <li className='Premium'> PREMIUM </li>
                    </ul>
                  </div>
    
                  <div className='beatItem__bottomWrapper bottom-part'>

                    <div>

                    <div className='moreInfoIcon'>
                          <a href="#"></a>
                          <FontAwesomeIcon icon={faChevronRight} className="rightIcon"></FontAwesomeIcon>
                      </div>
                      <div className='beatItem__nameAndUsername'>
                        <a href="#" className='name'>Trailer Tension</a><br />
                        <a href="#" className='username'>Prosonic</a>
                      </div>
                      <div className='beatItem__lineData'>
                        <span className='price'> 500,000 T</span>
    
                        <div className='daw'>
                            <img src={logo1} alt="Cubase" />
                        </div>
                      </div>
                      <div className='beatItem__buttons'>
                        <a href="#" className='info'> More Info </a>
                        <button className='set-bg'> Add to cart </button>
    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
    
    
              <div className='col'>
                <div className='beatItem hoverOnBeatItem beatItem__MoreInfoForDevices'>
                  <div className='beatItem__top'>
                    <div className='cover'>
                      <img src={cover1} alt="cover" />
                      <span><img src={playIcon} alt="play" className='cover__playIcon'/ ></span>
                    </div>
                    <ul className='beatItem__labels'>
    
                      <li className='Premium'> PREMIUM </li>
                    </ul>
                  </div>
    
                  <div className='beatItem__bottomWrapper bottom-part'>
                    <div>

                    <div className='moreInfoIcon'>
                          <a href="#"></a>
                          <FontAwesomeIcon icon={faChevronRight} className="rightIcon"></FontAwesomeIcon>
                      </div>
                      <div className='beatItem__nameAndUsername'>
                        <a href="#" className='name'>Trailer Tension</a><br />
                        <a href="#" className='username'>Prosonic</a>
                      </div>
                      <div className='beatItem__lineData'>
                        <span className='price'> 500,000 T</span>
    
                        <div className='daw'>
                            <img src={logo1} alt="Cubase" />
                        </div>
                      </div>
                      <div className='beatItem__buttons'>
                        <a href="#" className='info'> More Info </a>
                        <button className='set-bg'> Add to cart </button>
    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
    
    
              <div className='col'>
                <div className='beatItem hoverOnBeatItem beatItem__MoreInfoForDevices'>
                  <div className='beatItem__top'>
                    <div className='cover'>
                      <img src={cover1} alt="cover" />
                      <span><img src={playIcon} alt="play" className='cover__playIcon'/ ></span>
                    </div>
                    <ul className='beatItem__labels'>
    
                      <li className='Premium'> PREMIUM </li>
                    </ul>
                  </div>
    
                  <div className='beatItem__bottomWrapper bottom-part'>
                    <div>

                    <div className='moreInfoIcon'>
                          <a href="#"></a>
                          <FontAwesomeIcon icon={faChevronRight} className="rightIcon"></FontAwesomeIcon>
                      </div>
                      <div className='beatItem__nameAndUsername'>
                        <a href="#" className='name'>Trailer Tension</a><br />
                        <a href="#" className='username'>Prosonic</a>
                      </div>
                      <div className='beatItem__lineData'>
                        <span className='price'> 500,000 T</span>
    
                        <div className='daw'>
                            <img src={logo1} alt="Cubase" />
                        </div>
                      </div>
                      <div className='beatItem__buttons'>
                        <a href="#" className='info'> More Info </a>
                        <button className='set-bg'> Add to cart </button>
    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
    
    
              <div className='col'>
                <div className='beatItem hoverOnBeatItem beatItem__MoreInfoForDevices'>
                  <div className='beatItem__top'>
                    <div className='cover'>
                      <img src={cover1} alt="cover" />
                      <span><img src={playIcon} alt="play" className='cover__playIcon'/ ></span>
                    </div>
                    <ul className='beatItem__labels'>
    
                      <li className='Premium'> PREMIUM </li>
                    </ul>
                  </div>
    
                  <div className='beatItem__bottomWrapper bottom-part'>
                    <div>

                    <div className='moreInfoIcon'>
                          <a href="#"></a>
                          <FontAwesomeIcon icon={faChevronRight} className="rightIcon"></FontAwesomeIcon>
                      </div>
                      <div className='beatItem__nameAndUsername'>
                        <a href="#" className='name'>Trailer Tension</a><br />
                        <a href="#" className='username'>Prosonic</a>
                      </div>
                      <div className='beatItem__lineData'>
                        <span className='price'> 500,000 T</span>
    
                        <div className='daw'>
                            <img src={logo1} alt="Cubase" />
                        </div>
                      </div>
                      <div className='beatItem__buttons'>
                        <a href="#" className='info'> More Info </a>
                        <button className='set-bg'> Add to cart </button>
    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
    
    
              </div>
            </section>
        </div>
      </Layout>
      </>
  )
}

export default HomePage;