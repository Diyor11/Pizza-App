import Image from "next/image"

export default function Card({id, title, desc, img, price, isNew, trend, setOpenMenu}) {



  return (
    <div className='bg-white border-[1px], border-slate-600 rounded-lg pb-3'>
      <div className='border-b border-slate-400 w-10/12 mx-auto overflow-hidden duration-200'>
        <Image className='hover:scale-105'  alt={title} src={img} />
      </div>
        <div className="w-10/12 mx-auto">
            <h3 className='font-bold mt-2'>{title}</h3>
            <p className='text-sm mt-1'>{desc}</p>
            <div className="flex items-center justify-between mt-4">
                <button onClick={() => setOpenMenu(true)} className='bg-orange-600 text-white text-xs font-semibold px-4 py-2 rounded-md'>Выбрать</button>
                <span className='text-orange-500 font-semibold'>от {price} ₽</span>
            </div>
        </div>
    </div>
  )
}
