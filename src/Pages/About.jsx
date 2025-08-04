import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLatterBox from '../components/NewsLatterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-12 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Forever – Your Destination for Timeless Elegance and Luxury.

            At Forever, we curate the finest selection of fragrances, skincare, beauty products, and lifestyle essentials, bringing you only the best in luxury and sophistication. Whether you're searching for the perfect scent to define your signature or the ideal gift for someone special, our collection is designed to captivate and inspire.</p>
          <p>With a focus on high-quality, authentic products, Forever is your trusted online destination for premium brands and exclusive finds. We believe in timeless elegance that transcends trends, offering you carefully selected collections that are as enduring as they are extraordinary.

            Explore, indulge, and find your forever favorites.

          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Forever, our mission is to provide an unparalleled shopping experience that delivers the finest in luxury, quality, and authenticity. We are committed to curating a collection of timeless, high-end products that inspire confidence and celebrate individuality.

          </p>
        </div>
      </div>
      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>At Forever, we are committed to delivering the highest standards of quality in every product we offer. We carefully curate our collections, working only with trusted brands and suppliers known for their craftsmanship and excellence. Each item is meticulously inspected to ensure it meets our strict quality criteria, ensuring authenticity, durability, and performance.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>We offer fast, reliable shipping and flexible payment options, ensuring your shopping experience is seamless from start to finish. Plus, with our customer-friendly return and exchange policies, you can shop with peace of mind, knowing that we’re here to make every aspect of your experience as smooth and stress-free as possible.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Servies</b>
          <p className='text-gray-600'> From the moment you browse our site to the delivery of your order, we’re here to make sure your experience is seamless, enjoyable, and truly exceptional. If you ever need assistance, our friendly customer service team is just a message or call away, ready to provide the support you deserve..</p>

        </div>
        

      </div>
      <NewsLatterBox />
    </div>
  )
}

export default About
