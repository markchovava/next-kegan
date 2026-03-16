"use client"

interface PropInterface{
    title: string
}

export default function TitlePrimary({title}: PropInterface) {
  return (
    <h2 className="text-[2rem] font-bold mb-2">{title}</h2>
  )
}
