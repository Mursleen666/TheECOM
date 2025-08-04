import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='my-10 mt-40 text-sm'>
    <div className='flex flex-col grid-cols-[3fr_1fr_1fr] sm:grid gap-14 my-10 mt-40 text-sm'>
      <div>
        <img className='mb-5 w-32' src={assets.logo} alt="" />
        <p className='w-full text-gray-600 md:2/3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nulla id officia accusantium vitae dolores sunt hic sint. Numquam, eaque eos. Esse harum temporibus mollitia asperiores repellat autem quidem ipsam?</p></div>
        
            <div>
            <p className='text-xl font-medium mb-5'>  COMPANY</p>
            <ul className='text-gray-600 gap-1 flex flex-col'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='text-gray-600 gap-1 flex flex-col'>
                <li>+1-3333-42332-2</li>
                <li>Alexbhuti@gamil.com</li>
            </ul>
        </div>
      </div>
    <div>
        <hr />
        <p className='py-5  text-sm text-center'>Copyright 2025@ forever.com - All Rights Recieved</p>
      </div>
    </div>

  )
}

export default Footer
