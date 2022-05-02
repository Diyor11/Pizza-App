import Link from 'next/link'
import Menu from '../components/Menu'
import Reels from '../components/Reels'
import Location from '../components/Location'
import DownCart from '../components/DownCart'
import PIzzas from '../components/PIzzas'

export default function Home() {
  return (
    <div className='container mx-auto'>
      <Menu />
      <Reels />
      <Location />
      <PIzzas />
      <DownCart />
    </div>
  )
}
