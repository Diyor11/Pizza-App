import Card from './Card'
import Img1 from '../assets/pizza/1.png'
import Img2 from '../assets/pizza/1.webp'
import Img3 from '../assets/pizza/2.png'
import Img4 from '../assets/pizza/2.webp'
import Img5 from '../assets/pizza/3.png'
import Img6 from '../assets/pizza/4.png'
import Img7 from '../assets/pizza/5.png'
import Img8 from '../assets/pizza/6.png'

export default function PIzzas() {

    const pizzas = [
        {
            id: 1,
            img: Img1,
            title: 'Чикен Сладкий Чили',
            desc: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный с',
            price: 399,
            new: true,
            trend: false
        },
        {
            id: 2,
            img: Img2,
            title: 'EASY PEASY огуречный расколбас',
            desc: 'Курица, Лук, Перец Халапеньо',
            price: 549,
            new: false,
            trend: true
        },
        {
            id: 3,
            img: Img3,
            title: 'EASY PEASY чикен а-ля хрен',
            desc: 'Курица, Лук, Соус Карбонара,',
            price: 249,
            new: false,
            trend: false
        },
        {
            id: 4,
            img: Img4,
            title: 'Cезона',
            desc: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мар',
            price: 630,
            new: false,
            trend: false
        },
        {
            id: 5,
            img: Img5,
            title: '4 сезона',
            desc: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мар',
            price: 249,
            new: false,
            trend: false
        },
        {
            id: 6,
            img: Img6,
            title: 'Чикен Сладкий Чили',
            desc: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный с',
            price: 159,
            new: true,
            trend: false
        },
        {
            id: 7,
            img: Img7,
            title: 'EASY PEASY огуречный расколбас',
            desc: 'Курица, Лук, Перец Халапеньо',
            price: 210,
            new: true,
            trend: false
        },
        {
            id: 8,
            img: Img8,
            title: 'Чикен Сладкий Чили',
            desc: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный с',
            price: 299,
            new: true,
            trend: false
        },
    ]

  return (
    <div className='mt-3'>
        <h2 className='mt-3 text-xl'>Пицца</h2>
        <div className="mt-3 grid grid-cols-4 gap-x-6 gap-y-5">
            {
                pizzas.map((i) => <Card key={i.id} id={i.id} title={i.title} img={i.img} desc={i.desc} price={i.price} isNew={i.new} trend={i.trend} />)
            }
        </div>
    </div>
  )
}
