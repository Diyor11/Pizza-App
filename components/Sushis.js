import Card from './Card'
import { sushis } from './data'
import {memo} from 'react'

function Sushis({setOpenMenu}) {

  return (
    <div>
        <h2 className='food-title'>Пицца</h2>
        <div className="cards-wrapper">
            {
                sushis.map((i) => <Card key={i.id} id={i.id} title={i.title} img={i.img} desc={i.desc} price={i.price} isNew={i.new} trend={i.trend} setOpenMenu={setOpenMenu} />)
            }
        </div>
    </div>
  )
}

export default memo(Sushis)
