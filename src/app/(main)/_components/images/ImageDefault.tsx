"use client"


interface PropInterface{
    src: string,
    alt: string
}

export default function ImageDefault({src, alt}: PropInterface) {
  return (
    <div className='w-full drop-shadow-lg overflow-hidden flex aspect[2/1] items-center justify-center bg-gray-200 h-32 rounded-lg'>
        <img src={src} alt={alt} className="object-fit w-full h-full" />
    </div>
  )
}
