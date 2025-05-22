import React, { useState } from 'react'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const links=["Dashboard", "Transaction", "Account", 
  "Settings"]

const Navbar = () => {

  const [selected, setSelected] = useState(0)
  return (
    <div className=' w-full flex items-center justify-between py-6'>
      <div className=' flex items-center gap-2 cursor-pointer'>
        <div className='w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-violet-700 rounded-xl'>
          <CurrencyExchangeIcon className='text-white text-3xl hover:animate-spin'/> 
          
          </div>
        <span className='text-xl font-bold text-black dark:text-white'>My-Finance</span>
      </div>

    </div>
  )
}

export default Navbar