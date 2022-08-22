import React from 'react';

import spinner from "../../assets/gif/spinner.gif"

const Loader = () => {
   return (
      <div className='loader'>
         <img src={spinner} alt="Loading"  className='loaderGIF'/>
         <h1>Loading ...</h1>
      </div>
   );
};

export default Loader;