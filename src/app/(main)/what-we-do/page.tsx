import React from 'react'
import HeaderPrimary from '../_components/headers/HeaderPrimary'
import FooterDefault from '../_components/footers/FooterDefault'
import FadeSlideIn from '../_components/effects/FadeSlideIn'
import DoubleSection from '../_components/sections/DoubleSection'
import Spacer from '@/_components/spacers/Spacer'
import { ServiceData } from '../_data/sample/ServiceData'
import ContactSection from '../_components/sections/ContactSection'
import TitlePrimary from '../_components/titles/TitlePrimary'
import CarousePrimary from '../_components/carousels/CarouselPrimary'
import { ClientData } from '../_data/sample/ClientData'



export default function page() {
  const headerImage = '/assets/img/banner/service.jpg'

  return (
    <div className='w-[100wv] overflow-hidden'>
    <HeaderPrimary 
        title='What we do?'
        image={headerImage} />

    <Spacer />
    {ServiceData.map((i, key) => (
      <FadeSlideIn key={key} slideDirection={'up'} duration={1000}>
          <DoubleSection
              id={i.id}
              image={i.image}
              direction={(key+1) % 2 === 0 ? 'right' : 'left'} 
              title={i.title} 
              details={i.description} />
          <Spacer />
      </FadeSlideIn>
    ))}


    <div className="mx-auto container__primary">
      <TitlePrimary title="Our Clients" />
      <CarousePrimary data={ClientData} />
      <Spacer />
    </div>


    <FadeSlideIn slideDirection="up" duration={1500}>
          <div className="bg-gray-50">
          <Spacer />
          <ContactSection withMap={false} />
          </div>
    </FadeSlideIn>

    <FooterDefault />
    </div>
  )
}
