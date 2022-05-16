export default function About() {
  return (
    <div className='flex items-center gap-x-2 mt-3'>
      <div className='flex flex-col grow'>
        <label className='font-normal text-slate-400' htmlFor="nameField">Имя*</label>
        <input id='nameField' type="text" placeholder="Алексей"  className='mt-1 px-4 py-3 text-sm rounded-md'/>
        <div className="mt-1 text-red-600">First Name is required</div>
      </div>
      <div className='flex flex-col grow'>
        <label className='font-normal text-slate-400' htmlFor="phoneNumber">Номер телефона*</label>
        <input id='phoneNumber' type="text" placeholder="+998" className='mt-1 px-4 py-3 text-sm rounded-md' />
        <div className="mt-1 text-red-600">number must be at least 13 characters</div>
      </div>
      <div className='flex flex-col grow'>
        <label className='font-normal text-slate-400' htmlFor="emailField">Почта*</label>
        <input id='emailField' type="email" placeholder="Почта" className='mt-1 px-4 py-3 text-sm rounded-md' />
        <div className="mt-1 text-red-600">Email is invalid</div>
      </div>
    </div>
  );
}
