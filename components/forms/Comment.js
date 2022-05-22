import {useState} from 'react'

export default function Comment({cost}) {

  const [comment, setComment] = useState(false)

  return (
    <div>
        <h4 className="mt-5 text-slate-500 font-normal">Комментарий*</h4>
        <div>
            <textarea onBlur={({target}) => setComment(target.value)} name="" id="" placeholder='Есть уточнения?' className='rounded-md text-sm w-full h-64 resize-none mt-2 p-5'></textarea>
            <div className={`mt-1 text-red-500 ${comment ? 'hidden':'block'}`}>Please leave your comments</div>
        </div>
        <div className='mt-6 flex items-center justify-between'>
            <h2 className='text-orange-500 text-2xl font-bold'>
                Итого: {cost} ₽
            </h2>
            <button className="text-white bg-orange-500 px-8 py-4 font-semibold rounded-md">Оформить заказ</button>
        </div>
    </div>
  )
}
