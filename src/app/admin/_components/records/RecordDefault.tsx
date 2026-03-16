"use client"


interface PropInterface{
    label: string
    value: React.ReactNode
}


export default function RecordDefault(
    {label, value}: 
    PropInterface
) {

  return (
    <div className='text-lg flex lg:flex-row flex-col items-start justify-start lg:gap-3 gap-1'>
        <div className='lg:w-[15%] leading-tight w-full font-light'>{label}:</div>
        <div className='lg:w-[85%] leading-tight w-full'>{value}</div>
    </div>
  )
}
