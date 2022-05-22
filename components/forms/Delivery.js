import { useState } from "react"

export default function Delivery() {

  const [error, setError] = useState({address: false, apartment: false, homeNumber: false, street: false, houseNumber: false, housePhone: false})

  return (
    <div>
      <div className="flex flex-col mt-3">
        <label htmlFor="" className="font-normal text-slate-400">Улица*</label>
        <input id='nameField' type="text" placeholder="Алексей"  className='mt-1 p-4 text-sm rounded-md' onBlur={({target}) => setError({...error, address: target.value == false})}/>
        <div className={`mt-1 text-red-600 ${error.address ? 'block':'hidden'}`}>Indicate your address</div>
      </div>
      <div className="flex md:flex-row flex-col md:items-center items-stretch gap-x-2 mt-3">
        <div className='flex flex-col grow'>
          <label className='font-normal text-slate-400' htmlFor="nameField">Дом*</label>
          <input id='nameField' type="text" placeholder="Алексей"  className='mt-1 p-4 text-sm rounded-md' onBlur={({target}) => setError({...error, apartment: target.value == false})}/>
          <div className={`mt-1 text-red-600 ${error.apartment ? 'block':'hidden'}`}>Apartment number</div>
        </div>
        <div className='flex flex-col grow'>
          <label className='font-normal text-slate-400' htmlFor="phoneNumber">Подъезд*</label>
          <input id='phoneNumber' type="text" placeholder="+998" className='mt-1 p-4 text-sm rounded-md' onBlur={({target}) => setError({...error, street: target.value == false})}/>
          <div className={`mt-1 text-red-600 ${error.street ? 'block':'hidden'}`}>Hause street</div>
        </div>
        <div className='flex flex-col grow'>
          <label className='font-normal text-slate-400' htmlFor="emailField">Этаж*</label>
          <input id='emailField' type="email" placeholder="1" className='mt-1 p-4 text-sm rounded-md' onBlur={({target}) => setError({...error, floor: target.value == false})}/>
          <div className={`mt-1 text-red-600 ${error.floor ? 'block':'hidden'}`}>Floor</div>
        </div>
        <div className='flex flex-col grow'>
          <label className='font-normal text-slate-400' htmlFor="emailField">Квартира*</label>
          <input id='emailField' type="email" placeholder="29" className='mt-1 p-4 text-sm rounded-md' onBlur={({target}) => setError({...error, homeNumber: target.value == false})}/>
          <div className={`mt-1 text-red-600 ${error.homeNumber ? 'block':'hidden'}`}>Hause number</div>
        </div>
        <div className='flex flex-col grow'>
          <label className='font-normal text-slate-400' htmlFor="emailField">Домофон*</label>
          <input id='emailField' type="email" placeholder="0000" className='mt-1 p-4 text-sm rounded-md' onBlur={({target}) => setError({...error, housePhone: target.value == false})}/>
          <div className={`mt-1 text-red-600 ${error.housePhone ? 'block':'hidden'}`}>Hause Phone</div>
        </div>
      </div>
    </div>
  )
}
