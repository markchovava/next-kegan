"use client"
import SpacerDefault from '@/_components/spacers/SpacerDefault'
import SpacerPrimary from '@/_components/spacers/SpacerPrimary'
import HeadingDefault from '../../_components/headings/HeadingDefault'
import RecordDefault from '../../_components/records/RecordDefault'
import ButtonAdmin from '../../_components/buttons/ButtonAdmin'
import RecordImage from '../../_components/records/RecordImage'
import { useAppInfoStore } from '../_store/useAppInfoStore'
import { useEffect } from 'react'
import LoaderPrimary from '../../_components/loaders/LoaderPrimary'
import { valueWithFallback } from '@/_utils/StringManipulation'



interface PropInterface{
  dbData: any
}

export default function AppInfoPage({ dbData }: PropInterface) {
  const { setData, setToggleModal } = useAppInfoStore()

  useEffect(() => {
    // Call setData even if dbData.data is null 
    // to ensure isLoading becomes false
    setData(dbData.data) 
  }, [dbData.data, setData]) // Adding dependencies is best practice

  const handleToggleModal = () => {
    setToggleModal(true)
  }

  // console.log('preData', preData)



  return (
    <>
    <SpacerDefault />
    <HeadingDefault title="App Information" />
    <SpacerPrimary />

    <section className='container__primary flex items-center justify-end'>
      <ButtonAdmin 
        type='button' 
        name='Edit' 
        onClick={handleToggleModal}
        css='py-2 px-6' />
    </section>

    <DataMainArea />

    <SpacerDefault />
    </>
  )
}



function DataMainArea() {
    const { preData, isLoading } = useAppInfoStore()
    

    if(isLoading){
      return <LoaderPrimary />
    }

    return(
      <section className='container__primary bg-white drop-shadow-lg rounded-lg p-6 space-y-4'>
        
        <RecordImage label='Image' value={preData.image} />
        
        <RecordDefault label='Name' value={valueWithFallback(preData.name)} />
        <RecordDefault label='Email' value={valueWithFallback(preData.email)} />
        <RecordDefault label='Address' value={valueWithFallback(preData.address)} />
        <RecordDefault label='Phone Number' value={valueWithFallback(preData.phone)} />
        <RecordDefault label='Website' value={valueWithFallback(preData.website)} />
        <RecordDefault label='Description' value={valueWithFallback(preData.description)} />
        <RecordDefault label='WhatsApp' value={valueWithFallback(preData.whatsapp)} />
        <RecordDefault label='Facebook' value={valueWithFallback(preData.facebook)} />
        <RecordDefault label='Instagram' value={valueWithFallback(preData.instagram)} />
        <RecordDefault label='LinkedIn' value={valueWithFallback(preData.linkedin)} />
        <RecordDefault label='Tiktok' value={valueWithFallback(preData.tiktok)} />
        
        <SpacerPrimary /> 
      </section>
    )
}
