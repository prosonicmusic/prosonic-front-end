import React from 'react'
import tracks from '../../trackssdata';
import Beat from './Beat';

function Allbeats() {
  return (
    <div className='beats'>
                       
              {tracks.map(beat=>{
                return <div className='beatsGrid'>
                  <div>
                    <Beat beat={beat}/>
                  </div>
                </div>
              })}
    
    </div>
  )
}

export default Allbeats;