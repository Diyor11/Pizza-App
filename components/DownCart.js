import Link from 'next/link'
import { useContext } from 'react'
import { Context } from '../utils/Context'

export default function DownCart() {

    const {state} = useContext(Context)

  return (
    <div className='fixed bottom-2 right-3 sm:hidden'>
        <Link href='/cart'>
            <a className='bg-orange-500 w-10 h-10 flex items-center justify-center rounded-full relative'>
                <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <g >
                                    <path
                                    d="M7.78125 15.5001H20.4846C20.7991 15.5001 21.0751 15.293 21.1602 14.9922L23.9729 5.1921C24.0333 4.98083 23.9919 4.75388 23.8588 4.57833C23.7255 4.40333 23.5183 4.29998 23.2971 4.29998H6.15802L5.6554 2.04833C5.58398 1.72768 5.29834 1.5 4.96875 1.5H0.703125C0.314575 1.5 0 1.81317 0 2.19999C0 2.587 0.314575 2.89999 0.703125 2.89999H4.40442L6.94354 14.2749C6.19647 14.5983 5.67188 15.3386 5.67188 16.2001C5.67188 17.358 6.61816 18.3 7.78125 18.3H20.4846C20.8733 18.3 21.1877 17.987 21.1877 17.6C21.1877 17.2132 20.8733 16.9 20.4846 16.9H7.78125C7.39398 16.9 7.07813 16.5863 7.07813 16.2001C7.07813 15.8138 7.39398 15.5001 7.78125 15.5001Z"
                                    fill="white"
                                    />
                                    <path
                                    d="M7.07812 20.3998C7.07812 21.5579 8.02441 22.4998 9.18768 22.4998C10.3508 22.4998 11.2971 21.5579 11.2971 20.3998C11.2971 19.2419 10.3508 18.2998 9.18768 18.2998C8.02441 18.2998 7.07812 19.2419 7.07812 20.3998Z"
                                    fill="white"
                                    />
                                    <path
                                    d="M16.9689 20.3998C16.9689 21.5579 17.9152 22.4998 19.0782 22.4998C20.2415 22.4998 21.1876 21.5579 21.1876 20.3998C21.1876 19.2419 20.2415 18.2998 19.0782 18.2998C17.9152 18.2998 16.9689 19.2419 16.9689 20.3998Z"
                                    fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_4730_10536">
                                    <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                </svg>      
            <span className='absolute -top-2 right-0 bg-red-500 text-white px-1 text-xs rounded-full'>{state.orders.length}</span>
        </a>
    </Link>
  </div>
  )
}