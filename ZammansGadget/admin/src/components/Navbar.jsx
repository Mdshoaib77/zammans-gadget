// import React from 'react'
// import {assets} from '../assets/assets'

// const Navbar = ({setToken}) => {
//   return (
//     <div className='flex items-center py-2 px-[4%] justify-between'>
//         <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
//         <button onClick={()=>setToken('')} className='px-5 py-2 text-xs text-white bg-gray-600 rounded-full sm:px-7 sm:py-2 sm:text-sm'>Logout</button>
//     </div>
//   )
// }

// export default Navbar
import React from 'react';
import { assets } from '../assets/assets';

const Navbar = ({ setToken }) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      {/* Logo এর জায়গায় টেক্সট যুক্ত করা হয়েছে */}
      <div className='flex items-center space-x-2'>
        <h1 className='text-2xl font-semibold text-gray-800'>
          Md <span className='text-indigo-600'>Raifuzzaman</span>
        </h1>
      </div>

      <button
        onClick={() => setToken('')}
        className='px-5 py-2 text-xs text-white bg-gray-600 rounded-full sm:px-7 sm:py-2 sm:text-sm'>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
