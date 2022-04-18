import React from 'react';
import { Link } from 'react-router-dom';
import cover2 from './../../img/cover1.jpg';
import playIcon from './../../icons/play-icon-1.svg';
import logo1 from './../../img/cubase_logo.png';
import logo2 from './../../img/Fl-logo.png';
import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome';
import { faChevronRight } from  '@fortawesome/free-solid-svg-icons';

export default function Beat({beat}) {
  return (
    <div className='col'>
      <div className='beatItem hoverOnBeatItem beatItem__MoreInfoForDevices'>
        <div className='beatItem__top'>
          <div className='cover'>
            <img src={cover2} alt="cover" />
            <span><img src={playIcon} alt="play" className='cover__playIcon'/></span>
          </div>
          <ul className='labels'>
            <div className={beat.tag}>
              <li className='Prem'> PREMIUM </li>
            </div>
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
              <a href="#" className='name'>{beat.title}</a><br />
              <a href="#" className='username'>{beat.author}</a>
            </div>
            <div className='beatItem__lineData'>
              <span className='price'> {beat.price} T</span>
              <div id='daw'>
                <div  className={beat.daw}>
                  <img src={logo2} alt="FL Studio" className='FL'/>
                  <img src={logo1} alt="Cubase" className='CU'/>
                </div>  
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