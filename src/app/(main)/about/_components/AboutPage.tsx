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
import { useAppInfoStore } from "../../_store/useAppInfoStore"

interface PropInterface{
    partnerData: ResponseInterface
    appInfoData: any
}


export default function AboutPage({partnerData, appInfoData}: PropInterface) {
    const { 
        setDataList: setPartnerList, 
        dataList: partnerList 
    } = usePartnerStore()
    const {
        setData: setAppInfoData
    } = useAppInfoStore()


    useEffect(() => {
        if(appInfoData?.data) {
            setAppInfoData(appInfoData.data)
        }
        if(partnerData) {
            setPartnerList(partnerData)
        }
    }, [setAppInfoData, setPartnerList])
  return (
    <>
    <section className="w-full bg-blue-900 text-gray-50">
        <div className="mx-auto container__primary">
            <Spacer />
            <TitlePrimary title="Our Partners" />
            <CarousePrimary data={partnerList} />
            <Spacer />
        </div>
    </section>

    <FadeSlideIn slideDirection="up" duration={1500}>
        <div className="bg-gray-50">
        <Spacer />
        <ContactSection withMap={false} />
        </div>
    </FadeSlideIn>
    </>
  )
}
