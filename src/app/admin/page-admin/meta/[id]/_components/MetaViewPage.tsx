"use client"
import SpacerDefault from '@/_components/spacers/SpacerDefault'
import SpacerPrimary from '@/_components/spacers/SpacerPrimary'
import HeadingDefault from '@/app/admin/_components/headings/HeadingDefault'
import ButtonAdmin from '@/app/admin/_components/buttons/ButtonAdmin'
import RecordDefault from '@/app/admin/_components/records/RecordDefault'
import { usePageMetaStore } from '../../_store/usePageMetaStore'
import { useEffect } from 'react'
import LoaderPrimary from '@/app/admin/_components/loaders/LoaderPrimary'
import { formatDate } from '@/_utils/formatDate'
import { jsonArrayToString, valueWithFallback } from '@/_utils/StringManipulation'


const title = "View Meta"


interface PropInterface{
  id: string | number
  dbData: any
}

export default function MetaViewPage({id, dbData}: PropInterface) {
    const { 
      setData,
      setKeywordList,
      toggleModal, 
      setToggleModal,
    } = usePageMetaStore()
  
    useEffect(() => {
        setData(dbData?.data) 
        if(dbData?.data?.keywords?.length > 0) {
          setKeywordList(dbData.data.keywords)
        }
    }, [dbData?.data, setData, setKeywordList]) 
    
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

    {/*  */}
    <MainDataArea />

    <SpacerDefault />
    </>
  )
}



function MainDataArea(){
  const { 
      preData, 
      isLoading,
    } = usePageMetaStore()
  


  if(isLoading) {
    return (
      <LoaderPrimary />
    )
  }

  const keywordsStr = preData.keywords.toString()
  const keywords = preData.keywords.length > 0 ? jsonArrayToString(keywordsStr) : 'Data Not Added.'

  return(
    <section className='container__primary bg-white drop-shadow-lg rounded-lg p-6 space-y-4'>
        <RecordDefault label='Title' value={valueWithFallback(preData.title)} />
        <RecordDefault label='Slug' value={valueWithFallback(preData.slug)} />
        <RecordDefault label='Keywords' value={keywords} />
        <RecordDefault label='Description' value={valueWithFallback(preData.description)} />
        <RecordDefault label='Created' value={valueWithFallback(formatDate(preData.createdAt))} />
        <RecordDefault label='Author' value={preData.user.name ? preData.user.name : preData.user.email} />
        <SpacerPrimary />
    </section>
  )
}

