import React from 'react'
import TitleDefault from '../titles/TitleDefault'
import LogoDefault from '../logos/LogoDefault'
import NavDefault from '../navs/NavDefault'
import NavResponsiveDefault from '../navs/NavResponsiveDefault'


interface PropInterface{
  title: string
  image?: string
}

export default function HeaderPrimary({ title, image }: PropInterface) {
  return (
    <>
    {/* DESKTOP */}
    <header className="w-full lg:block hidden lg:h-[60vh] relative">
        <section className="absolute z-5 top-0 left-0 w-full h-full bg-linear-to-tr from-blue-700 to-slate-950">
        </section>
        <section 
            className="absolute inset-0 z-10 bg-fixed bg-cover bg-bottom" 
            style={{ backgroundImage: `url(${image})` }}>
        </section>
        <section className='absolute top-0 left-0 z-10 w-full h-full bg-linear-to-bl from-blue-950 to-transparent'></section>
        <section className='absolute z-15 w-full mb-20 flex items-center justify-center bottom-0 text-white drop-shadow-lg'>
            <TitleDefault title={title} />
        </section>
        <section className="z-20 absolute top-0 left-0 w-full h-40 text-gray-50">
            <nav className="container__primary mx-auto flex items-center justify-between pt-4 pb-3">
            <LogoDefault css='h-16' />
            <NavDefault />
            </nav>
        </section>
    </header>

    {/* MOBILE */}
    <header className="w-full lg:hidden block bg-linear-to-tr from-blue-600 to-blue-950 text-gray-50">
        {/* NAV */}
        <NavResponsiveDefault />
        
        {/* TITLE */}
        <div className='container__primary mx-auto flex pt-8 pb-12 items-center justify-center text-center'>
            <TitleDefault title={title} />
        </div>
    </header>
    </>
  )
}
