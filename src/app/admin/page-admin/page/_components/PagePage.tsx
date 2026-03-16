"use client"

import SpacerDefault from "@/_components/spacers/SpacerDefault"
import { usePageStore } from "../_store/usePageStore"
import HeadingDefault from "@/app/admin/_components/headings/HeadingDefault"
import SpacerPrimary from "@/_components/spacers/SpacerPrimary"
import TextInputAdminSearch from "@/app/admin/_components/forms/inputs/TextInputAdminSearch"
import ButtonAdminSearch from "@/app/admin/_components/buttons/ButtonAdminSearch"
import ButtonAdmin from "@/app/admin/_components/buttons/ButtonAdmin"
import ActionButtons from "@/app/admin/_components/buttons/ActionButtons"
import IconDefault from "@/_components/icons/IconDefault"



export default function PagePage() {
    const { 
      isSearching, 
      search, 
      setSearch, 
      setToggleModal, 
    } = usePageStore()

    const handleToggleModal = () => {
        setToggleModal(true)
    }

    const handleSearch = () => {}
    const handleDelete = () => {}

  return (
    <>
    <SpacerDefault />
    <HeadingDefault title="Pages" />
    <SpacerPrimary />

    <section className='container__primary bg-white drop-shadow-lg rounded-lg px-5 py-3 flex items-center justify-between'>
        <form onSubmit={handleSearch} className='lg:w-[60%] w-full flex items-center justify-start rounded-full border border-gray-300'>
            <TextInputAdminSearch 
                type='text'
                placeholder='Enter Search here...'
                onChange={setSearch}
                value={search}
            />
            <ButtonAdminSearch type="submit" status={isSearching} />
        </form>
        <ButtonAdmin
            onClick={handleToggleModal}
            name='Add' 
            css="px-8 py-3 text-white" 
        />
    </section>
    <SpacerPrimary />

    {/* DESKTOP */}
    <section className='container__primary hidden lg:block drop-shadow-lg'>
        {/* HEADER */}
        <div className='bg-gray-100 w-full border border-gray-300 flex items-center justify-start font-medium'>
            <div className='w-[50%] px-4 py-3 border-r border-gray-300'>NAME</div>
            <div className='w-[35%] px-4 py-3 border-r border-gray-300'>LEVEL</div>
            <div className='w-[15%] px-4 py-3 '>ACTIONS</div>
        </div>
        {/* TABLE ROW */}
        <div className='w-full bg-white border-x border-b border-gray-300 flex items-center justify-start'>
            <div className='w-[50%] px-4 py-3 border-r border-gray-300'>NAME</div>
            <div className='w-[35%] px-4 py-3 border-r border-gray-300'>LEVEL</div>
            <div className='w-[15%] px-4 py-3 '>
                <ActionButtons viewHref='#' onDelete={() => handleDelete()} />
            </div>
        </div>
        {/* TABLE ROW */}
        <div className='w-full bg-white border-x border-b border-gray-300 flex items-center justify-start'>
            <div className='w-[50%] px-4 py-3 border-r border-gray-300'>NAME</div>
            <div className='w-[35%] px-4 py-3 border-r border-gray-300'>LEVEL</div>
            <div className='w-[15%] px-4 py-3 '>
                <ActionButtons viewHref='/admin/role/1' onDelete={() => handleDelete()} />
            </div>
        </div>
    </section>

    {/* MOBILE */}
    <section className='container__primary lg:hidden block '>
        <div className='w-full drop-shadow-lg bg-white rounded-xl p-6 space-y-3 mb-6'>
            <div className='w-full flex items-start justify-between'>
                <div className=''>
                    <p className='font-light'>Name</p>
                    <p>The text here</p>
                </div>
                <ActionButtons viewHref='/admin/role/1' onDelete={() => handleDelete()} />
            </div>
            <div className=''>
                <p className='font-light'>Level</p>
                <p>The text here</p>
            </div>
        </div>
        <div className='w-full drop-shadow-lg bg-white rounded-xl p-6 space-y-3 mb-6'>
            <div className='w-full flex items-start justify-between'>
                <div className=''>
                    <p className='font-light'>Name</p>
                    <p>The text here</p>
                </div>
                <ActionButtons viewHref='#' onDelete={() => handleDelete()} />

            </div>
            <div className='w-full'>
                <p className='font-light'>Level</p>
                <p>The text here</p>
            </div>
        </div>
    </section>

    <SpacerPrimary />

    <section className='container__primary flex items-center justify-end gap-3'>
        <button type='button' className={`cursor-pointer rounded-full overflow-hidden border border-gray-300 px-8 py-2 
            flex items-center justify-center gap-1 bg-gray-50 hover:bg-gray-200 ease-initial transition-colors duration-200`}>
            <IconDefault css='' type='left' />
            Prev
        </button>
        <button type='button' className={`cursor-pointer rounded-full overflow-hidden border border-gray-300 px-8 py-2 
            flex items-center justify-center gap-1 bg-gray-50 hover:bg-gray-200 ease-initial transition-colors duration-200`}>
            Next
            <IconDefault css='' type='right' />
        </button>
    </section>

    <SpacerDefault />
    </>
  )
}
