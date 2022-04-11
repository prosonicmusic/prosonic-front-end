import React from 'react'
import { Link } from 'react-router-dom'
import cover2 from './../../img/cover2.jpg';
import playIcon from './../../icons/play-icon-1.svg';
import logo1 from './../../img/cubase_logo.png';
import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome';
import { faChevronRight } from  '@fortawesome/free-solid-svg-icons';

function Beat() {
  return (
    <div className='col'>
              <div className='beatItem hoverOnBeatItem beatItem__MoreInfoForDevices'>
                <div className='beatItem__top'>
                  <div className='cover'>
                    <img src={cover2} alt="cover" />
                    <span><img src={playIcon} alt="play" className='cover__playIcon'/></span>
                  </div>
                  <ul className='beatItem__labels'>
                      <li className='Premium'> PREMIUM </li>
                  </ul>
                  <div className="soldLayer">
                    <span> SOLD </span>
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
  )
}

export default Beat