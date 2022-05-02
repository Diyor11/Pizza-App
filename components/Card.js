import Image from "next/image"
export default function Card({id, title, desc, img, price, isNew, trend}) {
  return (
    <div className='bg-white border-[1px], border-slate-500 rounded-lg'>
        <Image className="rounded-lg" alt={title} src={img} />
        <div className="border-t-1 border-black">
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className="flex items-center justify-between">
                <button className='bg-orange-500'>Выбрать</button>
                <span>от {price} ₽</span>
            </div>
        </div>
    </div>
  )
}
