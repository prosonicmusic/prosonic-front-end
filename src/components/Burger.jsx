import React, {useState} from 'react'
import PhoneNav from './PhoneNav';


const Burger = () => {
  const [status, setStatus] = useState('close');

  return (
    <>
    <nav>
      <div className='burger'
      role="button"
      onClick={() => setStatus(status === 'open' ? 'close' : 'open')}
      >
        <i className={status}></i>
        <i className={status}></i>
        <i className={status}></i>
      </div>

      <PhoneNav/>
    </nav>  
    </>
  )
}

export default Burger;