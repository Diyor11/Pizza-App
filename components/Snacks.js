import Card from './Card'
import { snacks } from './data'
import {memo} from 'react'

function Pizzas({setOpenMenu}) {


  return (
    <div className='mt-3'>
        <h2 className='food-title'>Закуски</h2>
        <div className="cards-wrapper">
            {
                snacks.map((i) => <Card key={i.id} id={i.id} title={i.title} img={i.img} desc={i.desc} price={i.price} isNew={i.new} trend={i.trend} setOpenMenu={setOpenMenu} />)
            }
        </div>
    </div>
  )
}

export default memo(Pizzas)
