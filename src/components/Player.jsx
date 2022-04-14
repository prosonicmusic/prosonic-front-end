import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlay, Facirclex  } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

function Player() {
  return (
    <div id='player'>
      <div className='player-container'>
        <div className="container-layer">
          <button className='play-buttons'>
          <span><FaPlay/></span>
          </button>
          <div className='player'>
            <div className='titleUsername'>
              <span className='title'>Test</span>
            </div>
            <div>waveeeee</div>
          </div>
          <button className='closeBtn'>
          <span><AiOutlineClose/></span>
          </button>
          <Link to='' className='p-info'>info</Link>
          <button className='buy'>buy</button>
        </div>
      </div>
    </div>
  )
}

export default Player;