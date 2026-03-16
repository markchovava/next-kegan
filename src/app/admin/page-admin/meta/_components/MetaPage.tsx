"use client"

import SpacerDefault from '@/_components/spacers/SpacerDefault'
import SpacerPrimary from '@/_components/spacers/SpacerPrimary'
import HeadingDefault from '@/app/admin/_components/headings/HeadingDefault'
import TextInputAdminSearch from '@/app/admin/_components/forms/inputs/TextInputAdminSearch'
import ButtonAdminSearch from '@/app/admin/_components/buttons/ButtonAdminSearch'
import ButtonAdmin from '@/app/admin/_components/buttons/ButtonAdmin'
import ActionButtons from '@/app/admin/_components/buttons/ActionButtons'
import IconDefault from '@/_components/icons/IconDefault'
import { usePageMetaStore } from '../_store/usePageMetaStore'
import { useEffect } from 'react'
import PlaceholderMobileDefault from '@/app/admin/_components/placeholders/PlaceholderMobileDefault'
import PlaceholderDefault from '@/app/admin/_components/placeholders/PlaceholderDefault'
import LoaderPrimary from '@/app/admin/_components/loaders/LoaderPrimary'
import { toast } from 'react-toastify'
import { _pageMetaDeleteAction } from '../_data/actions/PageMetaActions'
import { valueWithFallback } from '@/_utils/StringManipulation'
import PaginateDefault from '@/app/admin/_components/paginations/PaginateDefault'


interface PropInterface{
    dbData: any
}

export default function MetaPage({ dbData }: PropInterface) {
    const {  
        search, 
        isSearching, 
        setSearch, 
        setToggleModal,
        toggleModal,
        setDataList,
        meta,
        links,
        getSearchDatalist,
        getPaginatedDatalist,
    } = usePageMetaStore()
          
    useEffect(() => {
        // Call setData even if dbData.data is null 
        // to ensure isLoading becomes false
        setDataList(dbData) 
    }, [dbData.data, setDataList]) // Adding dependencies is best practice
        
    const handleToggleModal = () => {
        setToggleModal(!toggleModal)
    }

    async function handlePaginate(url: string) {
        await getPaginatedDatalist(url)
    }

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
        await getSearchDatalist(search)
        } catch (error) {
            console.error('Form submission error:', error);
        }
    }

  return (
    <>
    <SpacerDefault />
    <HeadingDefault title="Metas" />
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

    <MainDataArea />

    <SpacerPrimary />

    <section className='container__primary flex items-center justify-end gap-3'>
        <PaginateDefault
            meta={meta} 
            links={links} 
            handlePaginate={handlePaginate} />
    </section>

    <SpacerDefault />
    </>
  )
}




function MainDataArea(){
    const { 
        isLoading,
        dataList,
        setIsLoading,
        getDataList
    } = usePageMetaStore()

    async function handleDelete(id: string | number){
        setIsLoading(true)
        try{
            const res = await _pageMetaDeleteAction(id) 
            const {data, status, message} = res
            if(status === 1) {
              toast.success(message)
              await getDataList()
              setIsLoading(false)
              return
            }
            toast.warn('Something went wrong, please try again.')
            setIsLoading(false)
            return
        }catch(error){
          console.error('Delete error: ', error);
          setIsLoading(false)
        } 
  
    }

    if(isLoading) {
        return (
            <LoaderPrimary />
        )
    }

    return(
        <>
        {/* DESKTOP */}
        <section className='container__primary hidden lg:block drop-shadow-lg'>
            {/* HEADER */}
            <div className='bg-gray-100 w-full border border-gray-300 flex items-center justify-start font-medium'>
                <div className='w-[30%] px-4 py-3 border-r border-gray-300'>TITLE</div>
                <div className='w-[40%] px-4 py-3 border-r border-gray-300'>DESCRIPTION</div>
                <div className='w-[20%] px-4 py-3 border-r border-gray-300'>USER</div>
                <div className='w-[10%] px-4 py-3 '>ACTIONS</div>
            </div>
            {/* TABLE ROW */}
            {dataList && dataList.length > 0 ?
                dataList.map((i, key) => (
                    <div key={key} className='w-full bg-white border-x border-b border-gray-300 flex items-center justify-start'>
                        <div className='w-[30%] px-4 py-3 border-r border-gray-300'>{valueWithFallback(i.title)}</div>
                        <div className='w-[40%] px-4 py-3 border-r border-gray-300'>{valueWithFallback(i.description)}</div>
                        <div className='w-[20%] px-4 py-3 border-r border-gray-300'>
                            {i.user.name ? valueWithFallback(i.user.name) : i.user.email}
                        </div>
                        <div className='w-[10%] px-4 py-3 '>
                            <ActionButtons 
                                viewHref={`/admin/page-admin/meta/${i.id}`} 
                                onDelete={() => handleDelete(i.id)} />
                        </div>
                    </div>
                ))
                :
                <PlaceholderDefault />
            }
        
        </section>

        {/* MOBILE */}
        <section className='container__primary lg:hidden block '>
            {dataList && dataList.length > 0 ?
                dataList.map((i, key) => (
                    <div key={key} className='w-full drop-shadow-lg bg-white rounded-xl p-6 space-y-3 mb-6'>
                        <div className='w-full flex items-start justify-between'>
                            <div className=''>
                                <p className='font-light'>Title</p>
                                <p>{i.title}</p>
                            </div>
                            <ActionButtons 
                                viewHref={`/admin/page-admin/meta/${i.id}`} 
                                onDelete={() => handleDelete(i.id)} />
                        </div>
                        <div className=''>
                            <p className='font-light'>Description</p>
                            <p>{i.description}</p>
                        </div>
                        <div className=''>
                            <p className='font-light'>Role</p>
                            <p>{i.user.name ? i.user.name : i.user.email}</p>
                        </div>
                    </div>
                ))
                :
                <PlaceholderMobileDefault />
            }
        
        </section>
        </>
    )
}
