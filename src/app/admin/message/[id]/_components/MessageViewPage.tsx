"use client"

import SpacerDefault from '@/_components/spacers/SpacerDefault'
import SpacerPrimary from '@/_components/spacers/SpacerPrimary'
import { useMessageStore } from '../../_store/useMessageStore'
import HeadingDefault from '@/app/admin/_components/headings/HeadingDefault'
import ButtonAdmin from '@/app/admin/_components/buttons/ButtonAdmin'
import RecordDefault from '@/app/admin/_components/records/RecordDefault'
import { MessageEntity } from '../../_data/entity/MessageEntity'
import { useEffect } from 'react'
import { valueWithFallback } from '@/_utils/StringManipulation'
import { formatDate } from '@/_utils/formatDate'
import LoaderPrimary from '@/app/admin/_components/loaders/LoaderPrimary'
import StickerDefault from '@/app/admin/_components/stickers/StickerDefault'



const title = "View Message"

interface PropInterface{
  id: string | number
  dbData: any
}

export default function MessageViewPage({dbData}: PropInterface) {
    const { 
      setData, 
      toggleModal, 
      setToggleModal,
    } = useMessageStore()

    useEffect(() => {
        if(Number(dbData.status) == 1) {
          setData(dbData.data) 
        } else {
          setData(MessageEntity)
        }
    }, [dbData.data, setData])

    const handleToggleModal = () => {
      setToggleModal(!toggleModal)
    }

  return (
    <>
    <SpacerDefault />
    <HeadingDefault title={title} />
    <SpacerPrimary />

    <section className='container__primary flex items-center justify-end'>
      <ButtonAdmin 
        type='button' 
        name='Edit' 
        onClick={handleToggleModal}
        css='py-2 px-6' />
    </section>

    <MainDataArea />
    <SpacerDefault />
    </>
  )
}



function MainDataArea(){
  const { 
      preData, 
      isLoading,
    } = useMessageStore()
  const updated = preData.updatedAt ? formatDate(preData.updatedAt) : 'Not Added yet.'

  if(isLoading) {
    return (
      <LoaderPrimary />
    )
  }

  console.log('PREDATA', preData)

  return(
     <section className='container__primary bg-white drop-shadow-lg rounded-lg p-6 space-y-4'>
        <RecordDefault label='Title' value={valueWithFallback(preData.title)} />
        <RecordDefault label='Email' value={valueWithFallback(preData.email)} />
        <RecordDefault 
            label='Status' 
            value={<StickerDefault label={valueWithFallback(preData.status)} css='px-1.5 py-0.5' />}  
        />
        <RecordDefault label='Message' value={valueWithFallback(preData.message)} />
        <RecordDefault label='Updated' value={updated} />
        <SpacerPrimary />
    </section>
  )
}
