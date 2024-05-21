import React from 'react'
import comp_logo_1 from '../assets/images/company_1.png'
import comp_logo_2 from '../assets/images/company_2.png'
import comp_logo_3 from '../assets/images/company_3.png'
import ratings from '../assets/images/ratings.png'

const About = () => {
  return (
<section className='flex flex-col gap-y-7'>
  {/* Info div */}
  <div className='my-[80px] flex flex-col xl:gap-x-[152px] lg:gap-x-[130px] lg:flex-row'>
    <div className='xl:w-[140px] lg:w-[140px] md:w-full w-auto text-center lg:text-left xl:text-left p-[5px]'>
      <h3 className='sora text-[18px] font-medium pt-[13px] pb-[10px] leading-7'>
        <span className='gradient'>Transform </span>
        <span className='gradient'>Your Website</span>
      </h3>
      <p className='textColor outfit text-[18px] font-light leading-6'>With Motion Art Effect</p>
    </div>

    <div className='px-[20px] xl:w-[665px] lg:w-[665px] md:w-full h-auto mt-[45px] lg:mt-0 text-center lg:text-left xl:text-left'>
      <h3 className='textColor sora xl:text-[65px] lg:text-[55px] md:text-[40px] sm:text-[35px] text-[35px] font-medium xl:leading-[85px] lg:leading-[75px] md:leading-[60px] sm:leading-[55px] leading-[55px] tracking-normal mb-[20px]'>
        Attract Your Visitors Attention With Colorful <span className='gradient'>Motion Art Effect</span>
      </h3>
      <p className='textColor xl:mr-[50px] lg:mr-[50px] text-[18px] outfit textColorLight font-light'>
        Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.
      </p>
    </div>
  </div>

  {/* Rating */}
  <div className='xl:mt-[40px] lg:mt-[20px] p-[10px] flex flex-col justify-center gap-[20px] lg:gap-[40px] text-center lg:flex-wrap'>
    <h3 className='textColor outfit text-[22px] font-normal'>Trusted by thousands of users around the world</h3>
    <div className='flex flex-wrap justify-around gap-5 xl:justify-between lg:justify-between md:justify-between sm:justify-center'>
      <div className='flex items-center gap-2'>
        <img src={comp_logo_1} alt="company_logo_1" />
        <div className='flex flex-col'>
          <img src={ratings} alt="ratings" className='' />
          <p className='textColorLight text-[14px] sora mt-[15px]'><span className='font-bold'>4.5</span> Score, 9 Reviews</p>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <img src={comp_logo_2} alt="company_logo_2" />
        <div className='flex flex-col'>
          <img src={ratings} alt="ratings" className='' />
          <p className='textColorLight text-[14px] sora mt-[15px]'><span className='font-bold'>4.5</span> Score, 9 Reviews</p>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <img src={comp_logo_3} alt="comp_logo_3" />
        <div className='flex flex-col'>
          <img src={ratings} alt="ratings" className='' />
          <p className='textColorLight text-[14px] sora mt-[15px]'><span className='font-bold'>4.5</span> Score, 9 Reviews</p>
        </div>
      </div>
    </div>
  </div>
</section>



  )
}

export default About