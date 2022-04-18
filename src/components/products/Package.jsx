import React from 'react'
import { Link } from 'react-router-dom'
import pack3 from './../../img/pack3.png';
import playIcon from './../../icons/play-icon-1.svg';
import logo1 from './../../img/cubase_logo.png';
import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome';
import { faChevronRight } from  '@fortawesome/free-solid-svg-icons';


export default function Package({packs}) {
  return (
    <div className='col'>
      <div className='beatItem hoverOnBeatItem beatItem__MoreInfoForDevices'>
          <div className='beatItem__top'>
            <div className='cover'>
              <img src={pack3} alt="cover" />
              <span><img src={playIcon} alt="play" className='cover__playIcon'/></span>
            </div>
            <ul className='labels'>
              <div className={packs.tag}>
                <li className='Prem'> PREMIUM </li>
              </div>
            </ul>
            <div className="soldLayer">
              <span> SOLD </span>
            </div>
          </div>
          <div className='beatItem__bottomWrapper bottom-part'>
            <div className='moreInfoIcon'>
                <Link to=''></Link>
                <FontAwesomeIcon icon={faChevronRight} className="rightIcon"></FontAwesomeIcon>
            </div>
            <div>
              <div className='beatItem__nameAndUsername'>
                <a href="#" className='name'>{packs.title}</a><br />
                <a href="#" className='username'>{packs.package_type}</a>
              </div>
              <div className='beatItem__lineData'>
                <span className='price'> {packs.product_price} T</span>
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