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
    <div className='scrolbar-none mt-7 hidden items-center md:gap-4 w-full sm:w-80 md:w-full overflow-x-scroll realtive mx-auto min-h-[320px] justify-center sm:flex'>
        {
            reels.map(({text, img} ,i) => {

                return(
                <div className={`block ms:hidden`} key={i}>
                    <div className="relative min-w-72">
                        <Image className='w-full' alt={text} src={img} />
                        <h5 className='absolute text-white text-lg bottom-5 left-2'>{text}</h5>
                    </div>
                </div>
                )
            })
        }
    </div>
  )
}
