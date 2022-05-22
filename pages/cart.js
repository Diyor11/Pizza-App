import Promocode from "../components/forms/Promocode"
import About from '../components/forms/About'
import Delivery from '../components/forms/Delivery'
import Orders from '../components/Orders'
import Payment from "../components/forms/Payment"
import Comment from "../components/forms/Comment"
import {useContext, useState} from 'react'
import {Context} from '../utils/Context'

export default function Cart() {

  const calculatePrice = (d) => {
     return d.length ? d.length !== 1 ? 
      d.reduce((a, b) => a.price + b.price)
      : 
      d[0].price 
      :0
  }

  const {state, dispatch} = useContext(Context)
  const [cost, setCost] = useState(calculatePrice(state.orders))

  return (
    <div className='sm:w-3/5 w-full sm:px-0 px-5 mx-auto'>
        <h2 className='food-title'>Ваш заказ</h2>
        <div className="mt-5">
          {
            state.orders.map(({img, title, type, price, size}, i) => (
              <Orders setCost={setCost} key={i} img={img} title={title} type={type} price={price} size={size} />
            ))
          }
        </div>
        <Promocode cost={cost} />
        <h2 className='text-2xl font-semibold mt-4'>О вас</h2>
        <About />
        <h2 className='text-2xl font-semibold mt-4'>Доставка</h2>
        <Delivery />
        <h2 className='text-2xl font-semibold mt-4'>Оплата</h2>
        <Payment />
        <h2 className='text-3xl font-semibold mt-9'>Комментарий</h2>
        <Comment cost={cost} />
    </div>
  )
}

