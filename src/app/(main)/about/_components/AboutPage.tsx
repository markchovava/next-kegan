"use client"

import Spacer from "@/_components/spacers/Spacer"
import TitlePrimary from "../../_components/titles/TitlePrimary"
import CarousePrimary from "../../_components/carousels/CarouselPrimary"
import { PartnerData } from "../../_data/sample/PartnerData"
import { usePartnerStore } from "@/app/admin/partner/_store/usePartnerStore"
import { useClientStore } from "@/app/admin/client/_store/useClientStore"
import { useEffect } from "react"
import FadeSlideIn from "../../_components/effects/FadeSlideIn"
import ContactSection from "../../_components/sections/ContactSection"
import { ResponseInterface } from "@/app/admin/_data/entities/ResponseEntity"

interface PropInterface{
    partnerData: ResponseInterface
}


export default function AboutPage({partnerData}: PropInterface) {
    const { 
        setDataList: setPartnerList, 
        dataList: partnerList 
    } = usePartnerStore()


    useEffect(() => {
        if(partnerData) {
            setPartnerList(partnerData)
        }
    }, [])
  return (
    <>
    <div className="mx-auto container__primary">
        <Spacer />
        <TitlePrimary title="Our Partners" />
        <CarousePrimary data={partnerList} />
        <Spacer />
    </div>

    <FadeSlideIn slideDirection="up" duration={1500}>
        <div className="bg-gray-50">
        <Spacer />
        <ContactSection withMap={false} />
        </div>
    </FadeSlideIn>
    </>
  )
}
