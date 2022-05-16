import React from 'react'
import { pizzas } from './data'
import Img from '../assets/pizza/1.png'
import Image from 'next/image'

export default function Orders() {
  return (
    <div className='flex items-center justify-between bg-white rounded-lg py-2 px-4 mt-3'>
        <div className="flex items-center">
            <span className='w-24'>
                <Image src={Img} alt="pizza" />
            </span>
            <span className='ml-2'>
                <h3 className='text-lg font-semibold'>{pizzas[0].title}</h3>
                <h5 className='text-sm'>Традиционное тесто, 23 см</h5>
            </span>
        </div>
        <div className="flex items-center">
            <div className="mr-5 bg-[#ffeee2] flex items-center px-3 py-1 rounded-md">
                <button className='text-orange-500'>-</button>
                <b className='mx-4 text-orange-500'>1</b>
                <button className='text-orange-500'>+</button>
            </div>
            <h3 className='text-lg font-semibold text-orange-500'>747 ₽</h3>
        </div>
    </div>
  )
}
