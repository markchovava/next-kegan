"use client"

import Spacer from "@/_components/spacers/Spacer"
import CarousePrimary from "../../_components/carousels/CarouselPrimary"
import TitlePrimary from "../../_components/titles/TitlePrimary"
import { useClientStore } from "@/app/admin/client/_store/useClientStore"
import { useEffect } from "react"
import { ResponseInterface } from "@/app/admin/_data/entities/ResponseEntity"


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
        <div className="mx-auto container__primary">
            <TitlePrimary title="Our Clients" />
            <CarousePrimary data={clientList} />
            <Spacer />
        </div>
    </>
  )
}
