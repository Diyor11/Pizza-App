import Card from './Card'
import { souce } from './data'
import {memo} from 'react'

function Souce({setOpenMenu}) {

  return (
    <div>
        <h2 className='food-title'>Соусы</h2>
        <div className="cards-wrapper">
            {
                souce.map((i) => <Card key={i.id} id={i.id} title={i.title} img={i.img} desc={i.desc} price={i.price} isNew={i.new} trend={i.trend} setOpenMenu={setOpenMenu} />)
            }
        </div>
    </div>
  )
}

export default memo(Souce)
