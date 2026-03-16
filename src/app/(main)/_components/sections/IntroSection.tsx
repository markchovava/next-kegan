"use client"

import Link from "next/link"
import { ButtonPrimary } from "../buttons/ButtonPrimary"
import Spacer from "@/_components/spacers/Spacer"

interface PropInterface{
    withBtn?: boolean
    data: React.ReactNode
}

export default function IntroSection({ withBtn=false, data }: PropInterface) {
  return (
    <section className="bg-gray-100 text-2xl font-light">
       <Spacer />
        <div className="lg:w-[60%] w-[90%] mx-auto">
        {/* <TitleDefault title="About Us" /> */}
        {data}
        <div className="h-8" />
        {withBtn &&
        <div className="flex items-center justify-start">
            <Link href='/about'>
                <ButtonPrimary 
                    title="View More" 
                    css='text-lg py-3.5 px-9 text-white' />
            </Link>
        </div>
        }
        </div>
         <Spacer />
    </section>
  )
}
