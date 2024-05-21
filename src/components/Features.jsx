import React from 'react'
import thunder_img from '../assets/images/thunder.png'
import like_img from '../assets/images/like.png'
import moon_img from '../assets/images/moon.png'

const Features = () => {
  return (
    <section className='py-[100px]'>
        <div className='xl:w-[693px] lg:w-[693px] md:w-auto sm:w-auto w-auto xl:mx-auto lg:mx-auto md:mx-0 sm:mx-0 mx-0 md:text-center sm:text-center text-center'>
            <h2 className='textColor sora xl:text-[40px] lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] font-medium xl:leading-[60px] lg:leading-[60px] md:leading-[55px] sm:leading-[50px] leading-[45px] text-center mb-[10px] '>An All-Round Plugin With Powerful Features</h2>
            <p className='mx-[30px] textColorLight outfit text-[18px] font-light leading-[30px] text-center'>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
        </div>

        <div className='pt-[50px] flex flex-wrap justify-evenly md:gap-x-3 md:gap-y-5 sm:gap-y-5 gap-y-5'>
            {/* feature card 1 */}
            <div className='xl:w-[32%] lg:w-[30%] md:w-[48%] sm:w-full w-full bgCard border-2 border-[#FFFFFF10] px-[30px] pt-[30px] pb-[40px] rounded-3xl'>
                <img src={thunder_img} alt="thunder_logo" className='mb-[20px] -ml-[40px] -mt-[20px]'/>
                <h2 className='textColor sora mb-[10px] xl:text-[25px] lg:text-[23px] md:text-[23px] sm:text-[20px] text-[20px] font-normal leading-[45px]'>Light Weight</h2>
                <p className='textColorLight outfit xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] font-light leading-[30px] '>Motion Art for Elementor is designed to be lightweight.</p>
            </div>
            {/* feature card 2 */}
            <div className='xl:w-[32%] lg:w-[30%] md:w-[48%] sm:w-full w-full bgCard border-2 border-[#FFFFFF10] px-[30px] pt-[30px] pb-[40px] rounded-3xl'>
                <img src={like_img} alt="like_logo" className='mb-[20px] -ml-[40px] -mt-[20px]'/>
                <h2 className='textColor sora mb-[10px] xl:text-[25px] lg:text-[23px] md:text-[23px] sm:text-[20px] text-[20px] font-normal leading-[45px]'>100% Responsive</h2>
                <p className='textColorLight outfit xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] font-light leading-[30px] '>Create a consistent visual experience across all devices.</p>
            </div>
            {/* feature card 3 */}
            <div className='xl:w-[32%] lg:w-[30%] md:w-full sm:w-full w-full bgCard border-2 border-[#FFFFFF10] px-[30px] pt-[30px] pb-[40px] rounded-3xl'>
                <img src={moon_img} alt="moon_logo" className='mb-[20px] -ml-[40px] -mt-[20px]'/>
                <h2 className='textColor sora mb-[10px] xl:text-[25px] lg:text-[23px] md:text-[23px] sm:text-[20px] text-[20px] font-normal leading-[45px]'>User Friendly Interface</h2>
                <p className='textColorLight outfit xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] font-light leading-[30px] '>Ensure a smooth experience for both applicants and administrators.</p>
            </div>
        </div>
    </section>
  )
}

export default Features