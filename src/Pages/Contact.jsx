import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';


const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className='w-3/4 md:max-w-[480]' src={assets.contact_img} alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-gray-500'>Our Store</p>
            <p className='text-gray-500'>House 66 streen6## London <br />Sute 35 william_45</p>
            <p className='text-gray-600'>Tel: (450) 555-65643 <br />Email: admin@Forever.com</p>
            <p className='text-gray-600 font-semibold text-xl'>Careers at Forever</p>
            <p className='text-gray-500'>Learn more about our team and job opening.</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobes</button>

          </div>
      </div>
    </div>
  )
}

export default Contact
