"use client"

import React, { useState } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useProjectStore } from '../_store/useProjectStore';
import { toast } from 'react-toastify';
import ButtonAdminClose from '../../_components/buttons/ButtonAdminClose';
import SpacerPrimary from '@/_components/spacers/SpacerPrimary';
import HeadingSecondary from '../../_components/headings/HeadingSecondary';
import TextInputDefault from '../../_components/forms/inputs/TextInputDefault';
import { ButtonAdminSubmit } from '../../_components/buttons/ButtonAdminSubmit';
import SelectAdminDefault from '../../_components/forms/selects/SelectAdminDefault';



const title = "Add Project"


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


export default function ProjectAddModal() {
    const { 
        data, 
        errors,
        toggleModal,
        isSubmitting,
        setData, 
        setInputValue, 
        setToggleModal, 
        clearErrors,
        setIsSubmitting,
        validateForm,
    } = useProjectStore()

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
            const firstError =  validation.errors.name || 
                validation.errors.level
            toast.warn(firstError);
            return;
        }
        setIsSubmitting(true);
        const formData = {
            name: data.name,
            level: data.level,
           
        } 
        setIsSubmitting(false);
        console.log('FORM DATA: ', formData)
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
                                    label='Name:' 
                                    name='name' 
                                    type="text"
                                    value={data.name} 
                                    placeholder='Enter your Name...'
                                    onChange={setInputValue} 
                                    error={errors.name}
                                />
                                <SpacerPrimary />
                                
                                <SelectAdminDefault
                                    label='Level:' 
                                    name='level' 
                                    data={Array.from({ length: 4 }, (v, i) => i + 1)}
                                    value={data.level} 
                                    onChange={setInputValue} 
                                    error={errors.level.toString()}
                                />
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