import React, {useState} from 'react'
import PhoneNav from './PhoneNav';



const Burger = () => {
  const [status, setStatus] = useState('close');
  const [open, setOpen] = useState(false);

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
      <PhoneNav open={open}/>
    </nav>  
    </>
  )
}

export default Burger;