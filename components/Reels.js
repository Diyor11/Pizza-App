import Image from 'next/image'
import Img1 from '../assets/reels/1.png'
import Img2 from '../assets/reels/2.png'

export default function Reels() {

    const reels = [
        {
            text: '3 средние пиццыот 999 рублей',
            img: Img1
        },
        {
            text: 'Кэшбек 10% на самовывоз (доставка)',
            img: Img2
        },
        {
            text: '3 средние пиццыот 999 рублей',
            img: Img1
        },
        {
            text: 'Кэшбек 10% на самовывоз (доставка)',
            img: Img2
        },
    ]

  return (
    <div className='mt-3 flex items-center gap-4'>
        {
            reels.map(({text, img} ,i) => (
                <div className="relative" key={i}>
                    <Image alt={text} src={img} />
                    <h5 className='absolute text-white text-lg bottom-5 left-2'>{text}</h5>
                </div>
            ))
        }
    </div>
  )
}
