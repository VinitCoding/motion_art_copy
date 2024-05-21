import React from 'react'
import { PiArrowRight } from "react-icons/pi";
import magic from '../assets/images/magic.png'
import view_page from '../assets/images/view_page.png'
import view_section from '../assets/images/view_section.png'
import browsers from '../assets/images/browsers.png'

const ApplyPart = () => {
    return (
        <section className='textColor'>

            {/* Magic Wand */}
            <div className='mt-[130px] flex flex-wrap justify-around gap-5 xl:justify-between lg:justify-between md:justify-center sm:justify-center'>
                <div className='p-[10px] xl:w-[748px] lg:w-[748px] md:w-auto'>
                    <h2 className='textColor xl:text-[40px] lg:text-[40px] md:text-[35px] sm:text-[25px] text-[25px] font-medium xl:leading-[60px] lg:leading-[60px] md:leading-[55px] sm:leading-[50px] leading-[45px] sora mb-[10px]'>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h2>
                    <p className='mt-[5px] text-[18px] font-light leading-[30px] outfit textColorLight mb-[20px]'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
                    <button className='flex xl:mx-0 lg:mx-0 md:mx-0 sm:mx-auto mx-auto xl:gap-x-5 lg:gap-x-5 md:gap-x-5 sm:gap-x-3 gap-x-3 bgGradient xl:py-[20px] lg:py-[20px] md:py-[10px] sm:py-[10px] py-[10px] xl:px-[35px] lg:px-[35px] md:px-[25px] sm:px-[25px] px-[25px] rounded-[20px] items-center sora text-[20px] font-light mt-[30px]'>Purchase From Envato <PiArrowRight className='font-normal' />  </button>
                </div>
                <div>
                    <img src={magic} alt="magic" />
                </div>
            </div>

            {/* Apply Part */}
            <div className='pt-[100px] '>
                <div className='xl:w-[693px] lg:w-auto md:w-auto sm:w-auto w-auto mx-auto text-center'>
                    <h1 className='textColor mb-[10px] sora text-[40px] font-medium leading-[60px]'>Apply On Any Section Or Enable For Whole Page</h1>
               </div>
                <div className='flex xl:flex-row lg:flex-row md:flex-col flex-col mt-[60px]'>
                    <div className='xl:w-[50%] lg:w-[50%] md:w-auto w-auto text-center h-fit bgCard border-2 border-[#FFFFFF10] mx-[10px] mt-[10px] xl:mb-[130px] lg:mb-[130px] p-[30px] rounded-3xl'>
                        <h2 className='textColor mb-[10px] sora text-[25px] font-medium leading-[45px]' >Apply On Section</h2>
                        <p className='textColorLight outfit text-[18px] font-light leading-[30px] '>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
                        <img src={view_section} alt="section_content" className='w-full mt-[30px]'/>
                    </div>
                    <div className='xl:w-[50%] lg:w-[50%] md:w-auto w-auto text-center h-fit bgCard border-2 border-[#FFFFFF10] mx-[10px] mt-[80px] mb-[130px] p-[30px] rounded-3xl'>
                        <h2 className='textColor mb-[10px] sora text-[25px] font-medium leading-[45px]'>Apply On Page</h2>
                        <p className='textColorLight outfit text-[18px] font-light leading-[30px] '>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
                        <img src={ view_page} alt="page_content" className='w-full mt-[30px]'/>
                    </div>
                </div>

                <div className='py-[50px] px-[30px] m-[20px] text-center bgCard border-2 border-[#FFFFFF10] rounded-3xl'>
                    <h2 className='textColor sora text-[25px] font-medium'>Supported by All Popular Browsers</h2>
                    <p className='my-[20px] xl:w-[458px] lg:w-[458px] md:w-auto w-auto text-center textColorLight outfit text-[18px] font-light leading-[30px] mx-auto'>Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
                    <img src={browsers} alt="browser_image" className='mx-auto'/>
                </div>
            </div>
        </section>
    )
}

export default ApplyPart