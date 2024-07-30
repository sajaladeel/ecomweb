import React from 'react'
import Image from 'next/image'
import DeliveryImg from "/public/images/deliv.jpg"
import { RiEBike2Fill } from 'react-icons/ri'
import { IoFastFood } from 'react-icons/io5'
import { BsDoorOpen } from 'react-icons/bs'

const Delivery = () => {
  return (
    <div className='pt-[8rem] pb-[3rem]'>
      <div className='w-[80%] mx-auto flex items-center space-x-[3rem]'>
        {/* img */}
        <div>
          <Image src={DeliveryImg} alt='delivery' height={200} width={200} />
        </div>
        {/* text */}
        <div>
          <h1 className='text-[30px] uppercase md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]'>
            Your <span className='text-red-600'> favourite Burger</span> On the way
          </h1>
          <p className='mt-[2rem] text-black text-[17px] text-opacity-70'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est veritatis dolores illum quo molestias similique fuga atque perferendis ad, provident dolor quam debitis earum facilis sit ab modi obcaecati nesciunt.
          </p>
          <div className='flex items-center space-x-3 mt-[1rem]'>
            <RiEBike2Fill className='w-[2rem] h-[2rem] text-red-600' />
            <h1 className='text-[18px] text-black font-medium'>Delivery in only 30 minutes!</h1>
          </div>
          <div className='flex items-center space-x-3 mt-[1rem]'>
            <IoFastFood className='w-[2rem] h-[2rem] text-red-600' />
            <h1 className='text-[18px] text-black font-medium'>Free Shipping from $75</h1>
          </div>
          <div className='flex items-center space-x-3 mt-[1rem]'>
            <BsDoorOpen className='w-[2rem] h-[2rem] text-red-600' />
            <h1 className='text-[18px] text-black font-medium'>Delivery on Your Doorstep.</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Delivery
