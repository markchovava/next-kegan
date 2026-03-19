"use client"

import Spacer from "@/_components/spacers/Spacer"
import ContactSection from "../../_components/sections/ContactSection"
import { useAppInfoStore } from "../../_store/useAppInfoStore"
import { useEffect } from "react"



interface PropInterface{
    appInfoData: any
}

export default function ContactPage({appInfoData}: PropInterface) {

    const {
        setData: setAppInfoData
    } = useAppInfoStore()
    
    
    useEffect(() => {
        if(appInfoData?.data) {
            setAppInfoData(appInfoData.data)
        }
    }, [setAppInfoData])

  return (
    <>
        <Spacer />
        <ContactSection withMap={true} />
    </>
  )
}
