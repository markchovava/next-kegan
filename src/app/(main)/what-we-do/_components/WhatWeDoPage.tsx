"use client"

import Spacer from "@/_components/spacers/Spacer"
import CarousePrimary from "../../_components/carousels/CarouselPrimary"
import TitlePrimary from "../../_components/titles/TitlePrimary"
import { useClientStore } from "@/app/admin/client/_store/useClientStore"
import { useEffect } from "react"
import { ResponseInterface } from "@/app/admin/_data/entities/ResponseEntity"
import Link from "next/link"
import { ServiceData } from "../../_data/sample/ServiceData"
import FadeSlideIn from "../../_components/effects/FadeSlideIn"


interface PropInterface{
    clientData: ResponseInterface
}

export default function WhatWeDoPage({ clientData }: PropInterface) {
    const { 
        setDataList: setClientList, 
        dataList: clientList 
    } = useClientStore()

     useEffect(() => {
        if(clientData) {
            setClientList(clientData)
        }
    }, [])
  return (
    <>

    <Spacer />
    <FadeSlideIn slideDirection="up" duration={1500}>
        <section className='w-full'>
            <div className='container__primary grid lg:grid-cols-4 grid-cols-2 gap-6'>
                {ServiceData.map((i, key) => (
                    <WhatWeDoItem 
                        key={key} 
                        name={i.name} 
                        src={i.src} 
                        href={i.href} />
                ))}
            
            </div>
        </section>    
    </FadeSlideIn>

    <Spacer />
    <div className="mx-auto container__primary">
        <TitlePrimary title="Our Clients" />
        <CarousePrimary data={clientList} />
        <Spacer />
    </div>
    </>
  )
}



interface ItemInterface{
    href: string
    name: string
    src: string
}

function WhatWeDoItem({
    href,
    name,
    src,
}: ItemInterface) {

    return (
        <div className='w-full group rounded-xl overflow-hidden bg-white drop-shadow-xl cursor-pointer'>
            <div className='w-full aspect-5/4 bg-gray-100'>
            <img 
                src={src} 
                alt='Image' 
                className='w-full h-full object-cover group-hover:scale-110 ease-in-out transition-all' /> 
            </div>
            <div className='w-full text-center text-xl font-medium pb-4 pt-2'>
            <Link href={href ?? '#'} className="group-hover:underline">
                {name}
            </Link> 
            </div>
        </div>
    )
}
