import Image from "next/image"
import { Context } from "../utils/Context"
import {useContext, useEffect, useMemo} from 'react'
import {selectOrder} from '../utils/actions'

export default function Card({id, title, desc, img, price, isNew, trend, setOpenMenu}) {

  const {dispatch} = useContext(Context)

  const select = () => {
    dispatch(selectOrder({id, img, title, desc, price}))
    setOpenMenu(true)
  }


  return (
    <div className='bg-white border-[1px] border-slate-600 rounded-lg pb-3 relative'>
      <div className={`bg-[crimson] text-white px-5 py-2 rounded-r absolute top-10 left-0 z-10 ${isNew ?'block':'hidden'}`}>NEW</div>
      <div className={`bg-[crimson] text-white px-5 py-2 rounded-r absolute top-10 left-0 z-10 ${trend ?'block':'hidden'}`}>ХИТ</div>
      <div className='border-b border-slate-400 w-10/12 mx-auto overflow-hidden duration-200'>
        <Image className='hover:scale-105'  alt={title} src={img} />
      </div>
        <div className="w-10/12 mx-auto">
            <h3 className='font-bold mt-2'>{title}</h3>
            <p className='text-sm mt-1'>{desc}</p>
            <div className="flex items-center justify-between mt-4">
                <button onClick={() => select()} className='bg-orange-600 text-white text-xs font-semibold px-4 py-2 rounded-md'>Выбрать</button>
                <span className='text-orange-500 font-semibold'>от {price} ₽</span>
            </div>
        </div>
    </div>
  )
}
