"use client"

import TitlePrimary from "../titles/TitlePrimary"


interface PropInterface{
    direction?: string
    id?: string
    title?: string
    details?: string | React.ReactNode
    image?: string
}


export default function DoubleSection({
    direction= 'right',
    id,
    title="", 
    details, 
    image
}: PropInterface) {

    switch(direction){
        case 'right':
            return(
                <section id={id} className="">
                    <div className="container__primary mx-auto grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-8">
                    <div className="w-full">
                        <div className="lg:w-[90%] w-full aspect-5/4 bg-gray-300 drop-shadow-lg overflow-hidden rounded-xl">
                            {image &&
                            <img src={image} className="w-full h-full object-cover" alt="Image" />
                            }
                        </div>
                    </div>
                    <div className="flex items-start justify-center flex-col">
                        <TitlePrimary title={title} />
                        <div className="font-light">
                        {details}
                        </div>
                    </div>
                    </div>
                </section>
            )
        case 'left':
            return(
                <section id={id} className="">
                    <div className="container__primary mx-auto grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-8">
                    <div className="flex items-start justify-center flex-col">
                        <TitlePrimary title={title} />
                        <div className="font-light">
                        {details}
                        </div>
                    </div>
                    <div className="flex items-center justify-end">
                        <div className="lg:w-[90%] w-full aspect-5/4 bg-gray-300 drop-shadow-lg overflow-hidden rounded-xl">
                        {image &&
                        <img src={image} className="w-full h-full object-cover" alt="Image" />
                        }
                        </div>
                    </div>
                    </div>
                </section>
            )
        default: 
            return(
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
 
}
