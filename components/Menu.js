import React from 'react'
import Image from 'next/image'
import {menuItems} from './data'

export default function Menu() {

  return (
    <div className='flex justify-between mt-3 max-w-4xl mx-auto overflow-x-auto scrolbar-none'>
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
