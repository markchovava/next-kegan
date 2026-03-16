"use client"

interface PropInterface{
    title: string
}

export default function TitleSecondary({ 
    title 
}: PropInterface) {
    
  return (
    <h2 className="text-[1.5rem] font-bold mb-2">{title}</h2>
  )
}
