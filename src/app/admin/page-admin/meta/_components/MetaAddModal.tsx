"use client"

import React, { useEffect } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { usePageMetaStore } from '../_store/usePageMetaStore';
import { toast } from 'react-toastify';
import ButtonAdminClose from '@/app/admin/_components/buttons/ButtonAdminClose';
import HeadingSecondary from '@/app/admin/_components/headings/HeadingSecondary';
import SpacerPrimary from '@/_components/spacers/SpacerPrimary';
import TextInputDefault from '@/app/admin/_components/forms/inputs/TextInputDefault';
import { ButtonAdminSubmit } from '@/app/admin/_components/buttons/ButtonAdminSubmit';
import IconDefault from '@/_components/icons/IconDefault';
import TextAreaInputDefault from '@/app/admin/_components/forms/textareas/TextAreaInputDefault';
import { _pageMetaStoreAction } from '../_data/actions/PageMetaActions';




const title = "Add Meta"


const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1,
        }
    },
}


export default function MetaAddModal() {
    const {
        data, 
        toggleModal, 
        isSubmitting,
        errors,
        resetKeyword,
        resetData,
        clearErrors,
        setInputValue, 
        setToggleModal, 
        setIsSubmitting,
        validateForm,
        getDataList,
    } = usePageMetaStore()
        
    useEffect(() => { 
        resetData() 
        resetKeyword()
    }, [])
        
        const handleToggleModal = () => {
            setToggleModal(!toggleModal)
        }
        
        async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
            clearErrors();
            e.preventDefault();
            // Validate form using store
            const validation = validateForm();
            if (!validation.isValid) {
                // Show the first error as toast
                const firstError =  validation.errors.title ||
                    validation.errors.description || 
                    validation.errors.slug
                toast.warn(firstError);
                return;
            }
            
            setIsSubmitting(true);
            const formData = {
                title: data.title,
                description: data.description,
                keywords: JSON.stringify(data.keywords),
                slug: data.slug
            }
            // console.log('formData', formData)
            try {
                const res = await _pageMetaStoreAction(formData);
                console.log('res USER', res)
                const {status, message} = res;
                switch(status){
                    case 1:
                        toast.success(message);
                        await getDataList();
                        clearErrors();
                        resetData();
                        setIsSubmitting(false);
                        setToggleModal(false)
                        return
                    case 0:
                        toast.warn(message)
                        setIsSubmitting(false);
                        return
                    default:
                        toast.success('Something went wrong, please try again.');
                        setIsSubmitting(false);
                        return
                } 
            } catch (error) {
                toast.error('Failed to save data. Please try again.');
                console.error('Form submission error:', error);
                setIsSubmitting(false);
            }
        }


    

   
    return (
        <AnimatePresence>
            {toggleModal && (
                <motion.section
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    className={`w-screen h-screen fixed top-0 left-0 z-200 overflow-y-auto`}>
                    <div className='absolute z-0 top-0 left-0 w-full h-full bg-black opacity-40'></div>
                    <div className='w-full h-full absolute z-10 overflow-auto scroll__width py-24'>
                        <section className='mx-auto lg:w-[60%] w-[90%] bg-white text-black p-6 rounded-2xl'>
                            <div className='flex items-center justify-end'>
                                <ButtonAdminClose onClick={handleToggleModal} />
                            </div>

                            <form onSubmit={handleSubmit}>
                                <HeadingSecondary title={title} css='text-center' />
                                <SpacerPrimary />
                                <hr className="w-full border-b border-gray-100" />
                                <SpacerPrimary />
                                
                                <TextInputDefault
                                    label='Title' 
                                    name='title' 
                                    type="text"
                                    value={data.title} 
                                    placeholder='Enter your Title...'
                                    onChange={setInputValue} 
                                    error={errors.title}
                                />
                                <SpacerPrimary />

                                <TextInputDefault
                                    label='Slug' 
                                    name='slug' 
                                    type="text"
                                    value={data.slug} 
                                    placeholder='Enter your Slug (no spacing)...'
                                    onChange={setInputValue} 
                                    error={errors.title}
                                />
                                <SpacerPrimary />

                                <TextAreaInputDefault
                                    label='Description' 
                                    name='description' 
                                    value={data.description} 
                                    placeholder='Enter your Description...'
                                    onChange={setInputValue} 
                                    error={errors.description}
                                />
                                <SpacerPrimary />
                                
                                <KeywordInput />
                                <SpacerPrimary />  
                                
                                <div className='flex items-center justify-center'>
                                    <ButtonAdminSubmit
                                        title='Submit' 
                                        css='px-12 text-white py-4' 
                                        status={isSubmitting} 
                                    />
                                </div>
                                <SpacerPrimary />
                            </form>
                        </section>
                    </div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}



function KeywordInput(){
    const {
        keyword,
        setKeyword, 
        addKeyword, 
        removeKeyword,
        data
    } = usePageMetaStore()

    const handleAddWord = () => {
        addKeyword(keyword)
    }

    const handleRemoveWord = (i: string) => {
        removeKeyword(i)
    }

    return (
        <div className='w-full'>
            <p className='font-light mb-1'>Keywords</p>
            <div className='w-full mb-2 flex items-center justify-start border border-gray-300 hover:border-gray-500 rounded-lg'>
                <input 
                    type='text' 
                    name='keyword' 
                    value={keyword}
                    onChange={setKeyword}
                    placeholder='Enter Keyword here...'
                    className='outline-none flex-1 px-4 py-2 border-r border-gray-300' />
                <button 
                    type='button' 
                    className='px-4' 
                    onClick={handleAddWord}>
                    <IconDefault 
                        type='add' 
                        css={`cursor-pointer text-3xl ease-initial duration-200 transition-all 
                        hover:scale-110 hover:text-blue-600`} />
                </button>
            </div>
            {data.keywords.map((i, key) => (
                <span 
                    key={key} 
                    className='mr-2 mb-2 border border-gray-300 px-3 py-1 rounded-full inline-flex items-center text-sm'>
                    {i} 
                    <button 
                        type='button'
                        className='ml-1 flex items-center justify-center cursor-pointer' 
                        onClick={() => handleRemoveWord(i)}>
                        <IconDefault type='remove' css='hover:text-red-600' />
                    </button>
                </span>
            ))}
        </div>
    )
}


