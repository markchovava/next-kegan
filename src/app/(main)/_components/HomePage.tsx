"use client"

import Spacer from "@/_components/spacers/Spacer"
import TitlePrimary from "./titles/TitlePrimary"
import CarousePrimary from "./carousels/CarouselPrimary"
import { ResponseInterface } from "@/app/admin/_data/entities/ResponseEntity"
import { useEffect } from "react"
import { usePartnerStore } from "@/app/admin/partner/_store/usePartnerStore"
import FadeSlideIn from "./effects/FadeSlideIn"
import ContactSection from "./sections/ContactSection"
import { useClientStore } from "@/app/admin/client/_store/useClientStore"


interface PropInterface{
    partnerData: ResponseInterface
    clientData: ResponseInterface
}


export default function HomePage({
    partnerData, 
    clientData,
} : PropInterface) {
    const { 
        setDataList: setPartnerList, 
        dataList: partnerList 
    } = usePartnerStore()
    const { 
        setDataList: setClientList, 
        dataList: clientList 
    } = useClientStore()

    
    useEffect(() => {
        if(partnerData) {
            setPartnerList(partnerData)
        }
        if(clientData) {
            setClientList(clientData)
        }
    }, [])

  return (
    <>

    <div className="mx-auto container__primary">
       <Spacer />
       <TitlePrimary title="Our Clients" />
      <CarousePrimary data={clientList} />
    </div>

    <FadeSlideIn slideDirection="up" duration={1500}>
        <div className="bg-gray-50">
          <Spacer />
          <ContactSection withMap={true} />
        </div>
    </FadeSlideIn>
    
    <div className="mx-auto container__primary">
        <Spacer />
        <TitlePrimary title="Our Partners" />
        <CarousePrimary data={partnerList} />
        <Spacer />
    </div>
    </>
  )
}
