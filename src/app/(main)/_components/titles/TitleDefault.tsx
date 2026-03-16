"use client"

interface PropInterface{
    title: string
}

export default function TitleDefault({title}: PropInterface) {
  return (
    <h2 className="lg:text-[4rem] text-[3rem] font-extrabold">
      {title}
    </h2>
  )
}
