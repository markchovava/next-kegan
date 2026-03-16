"use client"

import TitlePrimary from "../titles/TitlePrimary"


interface PropInterface{
  title?: string
  details?: string
  image?: string
}

export default function RightSection({
  title="", 
  details, 
  image
}: PropInterface) {
  return (
    <section className="">
        <div className="container__primary mx-auto grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-8">
        <div className="flex items-start justify-center flex-col">
            <TitlePrimary title={title} />
            <p className="text-xl font-light">
            {details}
            </p>
        </div>
        <div className="flex items-center justify-end">
          <div className="lg:w-[90%] w-full aspect-5/4 bg-gray-300 rounded-lg">
          {image &&
            <img src={image} className="w-full h-full object-cover" alt="Image" />
          }
          </div>
        </div>
        </div>
    </section>
  )
}
