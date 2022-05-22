import {useState} from 'react'
import Image from 'next/image'
import { setPrice } from '../utils/actions'

export default function Orders({img, title, price, size, type, setCost}) {

    const [totalPrice, setTotalPrice] = useState(price)
    
    const increase = () => {
        if(totalPrice < price * 9){
            setTotalPrice(p => p + price)
            setCost(p => p + price)
        }
    }

    const decrease = () => {
        if(totalPrice !== price){
            setTotalPrice(p => p - price)
            setCost(p => p - price)
        }
    }

  return (
    <div className='flex items-center justify-between bg-white rounded-lg py-2 px-4 mt-3'>
        <div className="flex items-center">
            <span className='w-24'>
                <Image src={img} alt="pizza" />
            </span>
            <span className='ml-2'>
                <h3 className='text-lg font-semibold'>{title}</h3>
                <h5 className='text-sm'>{type} тесто, {size} см</h5>
            </span>
        </div>
        <div className="flex items-center">
            <div className="mr-5 bg-[#ffeee2] flex items-center px-3 py-1 rounded-md">
                <button className='text-orange-500 text-lg' onClick={decrease}>-</button>
                <b className='mx-4 text-orange-500'>{totalPrice / price}</b>
                <button className='text-orange-500 text-lg' onClick={increase}>+</button>
            </div>
            <h3 className='sm:text-lg font-semibold text-orange-500'>{totalPrice}</h3>
        </div>
    </div>
  )
}
