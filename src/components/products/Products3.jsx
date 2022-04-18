import React from 'react'
import Package from './Package';
import packages from '../../packagesdata';

function Products3() {
  return (
    <div className='beats'>
     
              {packages.map(packs=>{
                return <div className='beatsGrid'>
                  <div>
                    <Package packs={packs}/>
                  </div>
                </div>
              })}
    </div>
  )
}

export default Products3