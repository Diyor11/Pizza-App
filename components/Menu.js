import React from 'react'
import Image from 'next/image'
import {menuItems} from './data'

export default function Menu() {


  return (
    <div className='flex justify-between mt-2'>
        {
          menuItems.map(({text, svg}, i) => (
          <div className="menu-item" key={i}>
            <Image src={svg} alt={text} />
            <h5>{text}</h5>
          </div>

          ))
        }
    </div>
  )
}
