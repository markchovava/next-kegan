"use client"


interface PropInterface{
    day: string
    time: string
}
export default function CardDate({day, time}: PropInterface) {
  return (
    <div className='w-24 cursor-pointer drop-shadow bg-gray-50 rounded-lg overflow-hidden'>
        <h6 className='bg-slate-700 text-center text-white font-extrabold text-xl'>
            {day}
        </h6>
        <p className='px-1 py-1 text-sm text-center'>{time}</p>
    </div>
  )
}
