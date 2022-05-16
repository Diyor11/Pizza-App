import Card from './Card'
import { desserts } from './data'
import {memo} from  'react'

function Dessert({setOpenMenu}) {


  return (
    <div className='mt-3'>
        <h2 className='food-title'>Десерты</h2>
        <div className="cards-wrapper">
            {
                desserts.map((i) => <Card key={i.id} id={i.id} title={i.title} img={i.img} desc={i.desc} price={i.price} isNew={i.new} trend={i.trend} setOpenMenu={setOpenMenu} />)
            }
        </div>
    </div>
  )
}

export default memo(Dessert)
