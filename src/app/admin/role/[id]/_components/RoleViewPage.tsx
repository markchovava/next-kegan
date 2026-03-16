"use client"
import SpacerDefault from '@/_components/spacers/SpacerDefault'
import SpacerPrimary from '@/_components/spacers/SpacerPrimary'
import { useRoleStore } from '../../_store/useRoleStore'
import HeadingDefault from '@/app/admin/_components/headings/HeadingDefault'
import ButtonAdmin from '@/app/admin/_components/buttons/ButtonAdmin'
import RecordDefault from '@/app/admin/_components/records/RecordDefault'
import { useEffect } from 'react'
import LoaderPrimary from '@/app/admin/_components/loaders/LoaderPrimary'
import { valueWithFallback } from '@/_utils/StringManipulation'
import { formatDate } from '@/_utils/formatDate'
import { RoleEntity } from '../../_data/entity/RoleEntity'



const title = "View Role"


interface PropInterface{
  id: string | number
  dbData: any
}

export default function RoleViewPage({id, dbData}: PropInterface) {
    const { 
      setData, 
      toggleModal, 
      setToggleModal,
    } = useRoleStore()

    useEffect(() => {
        if(Number(dbData.status) == 1) {
            setData(dbData.data) 
        } else {
            setData(RoleEntity)
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
    } = useRoleStore()
  const updatedAt = preData.updatedAt ? valueWithFallback(formatDate(preData.updatedAt)) : "Not Added Yet."

  if(isLoading) {
    return (
      <LoaderPrimary />
    )
  }

  return(
     <section className='container__primary bg-white drop-shadow-lg rounded-lg p-6 space-y-4'>
        <RecordDefault label='Name' value={valueWithFallback(preData.name)} />
        <RecordDefault label='Level' value={valueWithFallback(preData.level.toString())} />
        <RecordDefault label='Updated' value={updatedAt} />
        <RecordDefault label='Author' value={valueWithFallback(preData.user.name)} />
        <SpacerPrimary />
    </section>
  )
}
