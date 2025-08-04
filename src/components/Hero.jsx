import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    // the left hero
    <div className='flex flex-col sm:flex-row border border-gray-400'> 
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
      <div className='text-gray-600'>
        <div className='flex gap-2 items-center'>
            <p className='w-8 md:w-11 h-[2px] bg-gray-700'></p>
            <p className='font-medium text-sm md:text-base'>OUR BEST SELLER</p>
        </div>
        <h1 className='parata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
        <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[2px] bg-gray-700'></p>

          
        </div>
      </div>
      </div>
      {/* the right hero  */}
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
      
    </div>
  )
}

export default Hero
