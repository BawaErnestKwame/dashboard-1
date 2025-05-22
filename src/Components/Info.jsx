import React from 'react'
import GradingIcon from '@mui/icons-material/Grading';
import FilterIcon from '@mui/icons-material/Filter';

const Info = ({title, subTitle}) => {
  return (
    <div className='flex flex-col md:flex-row md:items-center justify-between py-8'>

      <div className=" mb-6">
      <h1 className='text-4xl font-semibold text-black dark:text-gray-300 '>{title} </h1>
      <span className='text-gray-600 dark:text-gray-500'>{subTitle} </span>
      </div>

      <div className=" flex items-center gap-4 md:gap-10 2xl:gap-20">
        <div className="flex items-center gap-2 border border-gray-300 dark:text-gray-600 rounded-md p-2">
          <GradingIcon className='text-xl text-gray-600 dark:text-gray-500 '/>
          <input type="text"placeholder='Search now...'
          className='bg-transparent outline-none text-gray-700 dark:text-gray-500' />


        </div>

        <button className='flex items-center gap-2 bg-black dark:bg-violet-800 py-2 px-4 rounded text-white'>
          <FilterIcon size={24} />
          <span className='text-base'>Filter By</span>

        </button>
      </div>
    </div>
  )
}

export default Info