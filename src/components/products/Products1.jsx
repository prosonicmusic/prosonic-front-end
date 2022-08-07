import React from 'react'
import Beat from './Beat';
import tracks from '../../trackssdata';

const Products1 = ({ tracks, loading }) => {
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

export default Products1