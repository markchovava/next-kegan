"use client"

import Link from "next/link"
import { ButtonPrimary } from "../buttons/ButtonPrimary"
import Spacer from "@/_components/spacers/Spacer"
import TitlePrimary from "../titles/TitlePrimary"


interface PropInterface{
    withBtn?: boolean
    data: React.ReactNode
    title?: string
}

export default function IntroSection({ withBtn=false, data, title }: PropInterface) {
  return (
    <section className="text-xl font-light">
       <Spacer />
        <div className="lg:w-[60%] w-[90%] mx-auto">
        {title &&
          <TitlePrimary 
            title={title ?? ''} />
        }
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
