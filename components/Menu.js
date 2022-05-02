import React from 'react'
import Fire from '../assets/nav/Fire.svg'
import Pizza from '../assets/nav/Pizza.svg'
import Combo from '../assets/nav/Combo.svg'
import Dessert from '../assets/nav/Dessert.svg'
import Drink from '../assets/nav/Drink.svg'
import Sauce from '../assets/nav/Sauce.svg'
import Snacks from '../assets/nav/Snacks.svg'
import Sushi from '../assets/nav/Sushi.svg'
import Image from 'next/image'

export default function Menu() {

  const menuItems = [
    {
      text: 'Акции',
      svg: Fire
    },
    {
      text: 'Пицца',
      svg: Pizza
    },
    {
      text: 'Суши',
      svg: Sushi
    },
    {
      text: 'Напитки',
      svg: Drink
    },
    {
      text: 'Закуски',
      svg: Snacks
    },
    {
      text: 'Комбо',
      svg: Combo
    },
    {
      text: 'Десерты',
      svg: Dessert
    },
    {
      text: 'Соусы',
      svg: Sauce
    },
  ]

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
