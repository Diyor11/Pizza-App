import Promocode from "../components/forms/Promocode"
import About from '../components/forms/About'
import Delivery from '../components/forms/Delivery'
import Orders from '../components/Orders'
import Payment from "../components/forms/Payment"
import Comment from "../components/forms/Comment"

export default function Cart() {

  

  return (
    <div className='w-3/5 mx-auto'>
        <h2 className='food-title'>Ваш заказ</h2>
        <div className="mt-5">
          {
            [0, 1].map((e, i) => (
              <Orders key={i} />
            ))
          }
        </div>
        <Promocode />
        <h2 className='text-2xl font-semibold mt-4'>О вас</h2>
        <About />
        <h2 className='text-2xl font-semibold mt-4'>Доставка</h2>
        <Delivery />
        <h2 className='text-2xl font-semibold mt-4'>Оплата</h2>
        <Payment />
        <h2 className='text-3xl font-semibold mt-9'>Комментарий</h2>
        <Comment />
    </div>
  )
}

