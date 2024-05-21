import React from 'react'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
      <div className='flex justify-between pt-[30px]'>
          <img src={ logo} alt="logo" className='w-[220px] h-[52px] '/>
          <button className='px-[35px] py-[14px] outfit bg-white rounded-md text-[18px] font-normal hover:bg-transparent hover:text-white hover:outline hover:outline-1 transition-all ease-linear duration-100 xl:inline-block lg:hidden md:hidden sm:hidden hidden'>Purchase Now</button>
    </div>
  )
}

export default Navbar