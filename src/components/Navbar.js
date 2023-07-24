import React from 'react';
import  {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faXmark} from '@fortawesome/free-solid-svg-icons'

import logo from '../assets/donohh.png';

export default function Navbar() {

  const [toggle, setToggle] = useState(false);
  const handleClick = ()=> {
    setToggle(!toggle)
  }
  
  return (
      <div className="w-100 h-[90px] bg-white border-b">
            <div className='md:max-w-[1480px]  max-w-[600px] m-auto w-full h-full flex justify-between items-center'>
            <img src={logo} alt="logo" className="w-[200px] pt-10  " />

            <div className='hidden md:flex items-center'>
              <ul className='flex gap-4'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Blog</li>
                <li>Privacy</li>
              </ul>
            </div>
            <div className='hidden md:flex gap-2 '>
              <button  className='bg-transparent px-6 py-3 border-2 border-[#C32C31] text-[#C32C31] font-bold hover:bg-[#C32C31] hover:text-white rounded-md'>Sign in</button>
              <button className='bg-[#C32C31] px-6 py-3 border-2 text-white border-[#C32C31] font-bold hover:bg-transparent hover:text-[#C32C31] rounded-md'>Sign up</button>
            </div>
            <div className='md:hidden' onClick={handleClick}>
      <FontAwesomeIcon icon={toggle?faXmark:faBars} className="w-8 h-8" />
    </div>
         
            </div>
            <div className={toggle?`absolute z-10 p-4 w-full px-8 bg-white md:hidden`: 'hidden'}>
              <ul>
                 <li className='p-4 hover:bg-gray-100'>Home</li>
                <li className='p-4 hover:bg-gray-100'>About Us</li>
                <li className='p-4 hover:bg-gray-100'>Contact Us</li>
                <li className='p-4 hover:bg-gray-100'>Blog</li> 
                <li className='p-4 hover:bg-gray-100'>Privacy</li>
              </ul>
              <div className='flex flex-col my-4 gap-4'>
              <button  className='bg-transparent px-6 py-3 border-2 border-[#C32C31] text-[#C32C31] font-bold hover:bg-[#C32C31] hover:text-white rounded-md'>Sign in</button>
              <button className='bg-[#C32C31] px-6 py-3 border-2 text-white border-[#C32C31] font-bold hover:bg-transparent hover:text-[#C32C31] rounded-md'>Sign up</button>

              </div>
            </div>
       </div>
 
);
};
