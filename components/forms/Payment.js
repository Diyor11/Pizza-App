import {useState} from "react";

export default function Payment() {

    const [select, setSelect] = useState('')

    const selectType = e => {
        console.log(e.target.value)
        setSelect(e.target.value)
    }

  return (
    <div className="flex items-center mt-3">
      <div className="flex items-center mr-4 cursor-pointer">
        <input type="radio" id='cash' className='opacity-0 absolute' value='cash' name='payment' onFocus={selectType} />
        <div className={`mr-3 rounded-full duration-300 w-5 h-5 ${select === 'cash' ?'slected-payment':'border border-slate-500'}`}></div>
        <label htmlFor="cash" className='cursor-pointer text-slate-500'>Наличными*</label>
      </div>
      <div className="flex items-center mr-4 cursor-pointer">
        <input type="radio" id='card' className='opacity-0 absolute' value='card' name='payment' onFocus={selectType} />
        <div className={`mr-3 rounded-full duration-300 w-5 h-5 ${select === 'card' ?'slected-payment':'border border-slate-500'}`}></div>
        <label htmlFor="card" className='cursor-pointer text-slate-500'>Картой*</label>
      </div>
      <div className="flex items-center mr-4 cursor-pointer">
        <input type="radio" className='opacity-0 absolute' id='apple play' value='apple play' name='payment' onFocus={selectType} />
        <div className={`mr-3 rounded-full duration-300 w-5 h-5 ${select === 'apple play' ?'slected-payment':'border border-slate-500'}`}></div>
        <label htmlFor="apple play" className='cursor-pointer text-slate-500'>Apple Pay*</label>
      </div>
    </div>
  );
}
