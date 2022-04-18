import React from 'react'
import Beat from './Beat'
import tracks from '../../trackssdata';

function Products2() {
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

export default Products2;