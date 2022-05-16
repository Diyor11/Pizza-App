
export default function Delivery() {
  return (
    <div>
      <div className="flex flex-col mt-3">
        <label htmlFor="" className="font-normal text-slate-400">Улица*</label>
        <input id='nameField' type="text" placeholder="Алексей"  className='mt-1 p-4 text-sm rounded-md'/>
        <div className="mt-1 text-red-600">Indicate your address</div>
      </div>
      <div className="flex items-center gap-x-2 mt-3">
        <div className='flex flex-col grow'>
          <label className='font-normal text-slate-400' htmlFor="nameField">Дом*</label>
          <input id='nameField' type="text" placeholder="Алексей"  className='mt-1 p-4 text-sm rounded-md'/>
          <div className="mt-1 text-red-600">Apartment number</div>
        </div>
        <div className='flex flex-col grow'>
          <label className='font-normal text-slate-400' htmlFor="phoneNumber">Подъезд*</label>
          <input id='phoneNumber' type="text" placeholder="+998" className='mt-1 p-4 text-sm rounded-md' />
          <div className="mt-1 text-red-600">Hause street</div>
        </div>
        <div className='flex flex-col grow'>
          <label className='font-normal text-slate-400' htmlFor="emailField">Этаж*</label>
          <input id='emailField' type="email" placeholder="Почта" className='mt-1 p-4 text-sm rounded-md' />
          <div className="mt-1 text-red-600">Floor</div>
        </div>
        <div className='flex flex-col grow'>
          <label className='font-normal text-slate-400' htmlFor="emailField">Квартира*</label>
          <input id='emailField' type="email" placeholder="Почта" className='mt-1 p-4 text-sm rounded-md' />
          <div className="mt-1 text-red-600">Hause number</div>
        </div>
        <div className='flex flex-col grow'>
          <label className='font-normal text-slate-400' htmlFor="emailField">Домофон*</label>
          <input id='emailField' type="email" placeholder="Почта" className='mt-1 p-4 text-sm rounded-md' />
          <div className="mt-1 text-red-600">Hause Phone</div>
        </div>
      </div>
    </div>
  )
}
