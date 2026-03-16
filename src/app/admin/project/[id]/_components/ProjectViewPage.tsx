"use client"
import SpacerDefault from '@/_components/spacers/SpacerDefault'
import SpacerPrimary from '@/_components/spacers/SpacerPrimary'
import { useProjectStore } from '../../_store/useProjectStore'
import HeadingDefault from '@/app/admin/_components/headings/HeadingDefault'
import ButtonAdmin from '@/app/admin/_components/buttons/ButtonAdmin'
import RecordDefault from '@/app/admin/_components/records/RecordDefault'



const title = "View Project"



export default function ProjectPage() {
  const { setToggleModal } = useProjectStore()

  const handleToggleModal = () => {
    setToggleModal(true)
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

    <section className='container__primary bg-white drop-shadow-lg rounded-lg p-6 space-y-4'>
        <RecordDefault label='Name' value={`Data Display here.`} />
        <RecordDefault label='Level' value={`Data Display here.`} />
        <RecordDefault label='Created' value={`Data Display here.`} />
        <RecordDefault label='Author' value={`Data Display here.`} />
        <SpacerPrimary />
    </section>

    <SpacerDefault />
    </>
  )
}
