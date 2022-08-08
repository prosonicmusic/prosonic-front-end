import React from 'react'
import tracks from '../../trackssdata';
import Beat from './Beat';

const Allbeats = ({ tracks, loading }) => {
  if(loading) {
    // return <h2>Loading...</h2>;
  }

  return (
    <div className='beats'>

              {tracks.map(beat=>{
                return <div className='beatsGrid'>
                  <div key={beat.id}>
                    <Beat beat={beat}/>
                  </div>
                </div>
              })}
  
    </div>
  )
}

export default Allbeats;