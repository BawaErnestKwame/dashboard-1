import React, { useState } from 'react'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import Avatar  from '../assets/pngwing.png';

const links = ["Dashboard", "Transaction", "Account", "Settings"];

const Navbar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <nav className="w-full flex items-center justify-between py-6">

      {/* Logo and Title */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-violet-700 rounded-xl">
          <CurrencyExchangeIcon className="text-white text-3xl hover:animate-spin" />
        </div>
        <span className="text-xl font-bold text-black dark:text-white">My-Finance</span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-4">
        <div className="flex gap-2">
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                setSelected(index);
              }}
              className={`px-6 py-2 rounded-full transition-colors duration-200 text-sm font-medium cursor-pointer ${
                index === selected
                  ? 'bg-black dark:bg-slate-800 text-white'
                  : 'text-gray-700 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-700'
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        <div className=' '>
        {/* themechanger */}

        <div className="flex items-center gap-2">
          <img src={Avatar} alt="" className='w-10 md:w-12 h-10 md:h-12 rounded-full object-cover' />
          <div className=" hidden md:block">
            <p className='text-lg font-medium text-black dark:text-gray-400'>John Doe</p>
            <span className='text-sm text-gray-700 dark:text-gray-500'>bawaernest@gmail.com</span>
          </div>
          <AirlineSeatReclineNormalIcon className=' hidden md:block text-2xl text-gray-700 dark:text-gray-300 cursor-pointer'/>


        </div>
      </div>
      </div>

      
    </nav>

  );
};

export default Navbar;
