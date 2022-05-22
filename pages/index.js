import {useState, useContext} from 'react'
import Menu from '../components/Menu'
import Reels from '../components/Reels'
import Location from '../components/Location'
import DownCart from '../components/DownCart'
import PIzzas from '../components/PIzzas'
import Sushis from '../components/Sushis'
import Dessert from '../components/Desserts'
import Drinks from '../components/Drinks'
import Snacks from '../components/Snacks'
import Souce from '../components/Souce'
import Combos from '../components/Combos'
import Info from '../components/Info'
import Order from '../components/Order'


export default function Home() {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='container mx-auto'>
      <Menu />
      <Reels />
      <Location />
      <PIzzas setOpenMenu={setOpenMenu} />
      <DownCart />
      <Sushis setOpenMenu={setOpenMenu} />
      <Dessert setOpenMenu={setOpenMenu} />
      <Drinks setOpenMenu={setOpenMenu} />
      <Snacks setOpenMenu={setOpenMenu} />
      <Souce setOpenMenu={setOpenMenu} />
      <Combos setOpenMenu={setOpenMenu} />
      <Info />
      <Order openMenu={openMenu} setOpenMenu={setOpenMenu}/>
    </div>
  )
}
