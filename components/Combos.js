import Card from './Card'
import { combos } from './data'

export default function Combos({setOpenMenu}) {

  return (
    <div className='mt-3'>
        <h2 className='food-title'>Комбо</h2>
        <div className="cards-wrapper">
            {
                combos.map((i) => <Card key={i.id} id={i.id} title={i.title} img={i.img} desc={i.desc} price={i.price} isNew={i.new} trend={i.trend} setOpenMenu={setOpenMenu}/>)
            }
        </div>
    </div>
  )
}