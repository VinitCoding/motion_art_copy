import React from 'react'

const Footer = () => {
  return (
    <section className='flex flex-wrap-reverse justify-center bgGradientFooter pb-[2px] px-[8%] '>
        <div className='xl:w-[50%] lg:w-[50%] md:w-auto sm:w-auto w-auto p-[10px] items-center'>
            <p className='textColorLight outfit text-[14px] font-normal pt-[3px]'>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
        </div>

        <div className='xl:w-[50%] lg:w-[50%] md:w-auto sm:w-auto w-auto items-center'>
            <ul className='flex justify-end gap-x-6 p-[10px]'>
                <li><a href="https://qodematrix.com/docs/motion-art-for-elementor/" target='_blank' className='textColorLight outfit text-[14px] font-normal hover:text-white hover:cursor-pointer transition-all ease-in duration-75'>Documentation</a></li>
                <li><a href="https://support.qodematrix.com/login" target='_blank' className='textColorLight outfit text-[14px] font-normal hover:text-white hover:cursor-pointer transition-all ease-in duration-75'>Support</a></li>
            </ul>
        </div>
    </section>
  )
}

export default Footer