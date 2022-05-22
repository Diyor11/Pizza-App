import { useState } from 'react'

export default function About() {

  const [errors, setErrors] = useState({name: false, number: false, email: false})

  return (
    <div className='flex md:flex-row flex-col  md:items-center items-stretch gap-x-2 mt-3'>
      <div className='flex flex-col grow'>
        <label className='font-normal text-slate-400' htmlFor="nameField">Имя*</label>
        <input id='nameField' type="text" placeholder="Алексей"  className='mt-1 px-4 py-3 text-sm rounded-md' onBlur={e => setErrors({...errors, name: e.target.value == false})}/>
        <div className={`mt-1 text-red-600 ${errors.name ? 'block':'hidden'}`}>First Name is required</div>
      </div>
      <div className='flex flex-col grow mt-3'>
        <label className='font-normal text-slate-400' htmlFor="phoneNumber">Номер телефона*</label>
        <input id='phoneNumber' type="text" placeholder="+998" className='mt-1 px-4 py-3 text-sm rounded-md' onBlur={e => setErrors({...errors, number: e.target.value == false})}/>
        <div className={`mt-1 text-red-600 ${errors.number ? 'block':'hidden'}`}>number must be at least 13 characters</div>
      </div>
      <div className='flex flex-col grow'>
        <label className='font-normal text-slate-400' htmlFor="emailField">Почта*</label>
        <input id='emailField' type="email" placeholder="Почта" className='mt-1 px-4 py-3 text-sm rounded-md' onBlur={e => setErrors({...errors, email: e.target.value == false})}/>
        <div className={`mt-1 text-red-600 ${errors.email ? 'block':'hidden'}`}>Email is invalid</div>
      </div>
    </div>
  );
}
