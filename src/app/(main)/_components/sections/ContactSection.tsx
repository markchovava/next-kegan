"use client"

import TitlePrimary from '../titles/TitlePrimary'
import { useContactStore } from '../../_store/useContactStore'
import TextInput from '../forms/inputs/TextInput'
import TextArea from '../forms/textareas/TextArea'
import { ButtonPrimary } from '../buttons/ButtonPrimary'
import IconDefault from '@/_components/icons/IconDefault'
import SpacerPrimary from '@/_components/spacers/SpacerPrimary'
import TitleSecondary from '../titles/TitleSecondary'
import AddressMap from '../maps/AddressMap'
import Spacer from '@/_components/spacers/Spacer'
import CardDate from '../cards/CardDate'
import { DateTimeData } from '../../_data/sample/ContactData'
import { toast } from 'react-toastify'
import { contactStoreAction } from '../../contact/_actions/ContactActions'
import { useAppInfoStore } from '../../_store/useAppInfoStore'

interface PropInterface{
    withMap?: boolean
}


export default function ContactSection({withMap=false}: PropInterface) {
    const {
        data, 
        errors, 
        isSubmitting, 
        setInputValue, 
        setIsSubmitting,
        validateForm,
        clearErrors,
        resetData,
    } = useContactStore()
    const { 
        data: appInfoData,
    } = useAppInfoStore()


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        clearErrors();
        e.preventDefault();
        // Validate form using store
        const validation = validateForm();
        if (!validation.isValid) {
            // Show the first error as toast
            const firstError =  validation.errors.name || 
                validation.errors.email ||
                validation.errors.message; 
            toast.warn(firstError);
            return;
        }
        setIsSubmitting(true);
        const formData = {
            name: data.name,
            email: data.email,
            message: data.message,
            title: 'MESSAGE FROM WEBSITE CONTACT FORM',
            status: 'Unread'
        }
        try {
            const res = await contactStoreAction(formData);
            const {status, message} = res;
            switch(status){
                case 1:
                    clearErrors();
                    resetData();
                    setIsSubmitting(false);
                    toast.success(message);
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
            return
        }

    }


  return (
    <>
    <section className="container__primary mx-auto grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="px-4 lg:mb-0 mb-12">
            <form onSubmit={handleSubmit}>
                <TitlePrimary title="Write to us" />
                <TextInput
                    name="name"
                    value={data.name}
                    label='Name'
                    type='text' 
                    placeholder='Enter Name here.'
                    onChange={setInputValue}
                    error={errors.name}
                />
                <TextInput
                    name="email"
                    value={data.email}
                    label='Email'
                    type='text' 
                    placeholder='Enter Email here.'
                    onChange={setInputValue}
                    error={errors.email}
                />
                <TextArea
                    name="message"
                    value={data.message}
                    label='Message' 
                    placeholder='Enter Message here.'
                    onChange={setInputValue}
                    error={errors.message}
                />
                <ButtonPrimary
                    title="Submit" 
                    status={isSubmitting}
                    css='text-lg py-3 px-9 text-white' 
                />
            </form>
        
        </div>
        <div className='px-4'>
            <TitlePrimary title="Visit Us" />
            <p className='font-light text-lg'>
                We value our customers and encourage you to visit us during normal business hours 
                to explore our expert consulting solutions. Whether you're in need of fixed assets labels, fixed assets tags, or 
                support with fixed assets verification, our team is dedicated to enhancing your operational 
                efficiency.
            </p>
            <SpacerPrimary />
            <TitleSecondary title="KEGAN Management Consulting" />
            <ul className='font-light space-y-3 pt-3 pb-4'>
                {appInfoData.phone &&
                    <li className='flex items-center justify-start gap-2 text-lg'>
                        <IconDefault type='phone' css='text-lg text-blue-700' />
                        {appInfoData.phone}
                    </li>
                }
                {appInfoData.address &&
                    <li className='flex items-center justify-start gap-2 text-lg'>
                        <IconDefault type='address' css='text-lg text-blue-700' />
                        {appInfoData.address}
                    </li>
                }
            </ul>
            <SpacerPrimary />
            <div className='flex flex-wrap items-center justify-start gap-3 mb-2'>
                {DateTimeData.map((i, key) => (
                    <CardDate 
                        key={key} 
                        day={i.day} 
                        time={i.time} 
                    />
                ))}
            </div>
            <p className='font-light text-sm'>Closed on all Major Holidays.</p>

        </div>
    </section>

    <Spacer />
    {withMap &&
        <section className='h-80 w-full overflow-hidden'>
            <AddressMap />
        </section>
    }
    </>
  )
}
