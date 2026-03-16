import Spacer from '@/_components/spacers/Spacer'
import FadeSlideIn from '../_components/effects/FadeSlideIn'
import HeaderPrimary from '../_components/headers/HeaderPrimary'
import IntroSection from '../_components/sections/IntroSection'
import ContactSection from '../_components/sections/ContactSection'
import { AboutData } from '../_data/sample/AboutData'
import FooterDefault from '../_components/footers/FooterDefault'
import DoubleSection from '../_components/sections/DoubleSection'
import TitlePrimary from '../_components/titles/TitlePrimary'
import CarousePrimary from '../_components/carousels/CarouselPrimary'
import { PartnerData } from '../_data/sample/PartnerData'


export default function page() {
    const headerImage = '/assets/img/banner/about.jpg'

  return (
    <div className='bg-gray-50'>
    <HeaderPrimary title='About Us' image={headerImage} />

    <FadeSlideIn slideDirection="up" duration={1500}>
        <IntroSection 
            withBtn={false} 
            data={AboutData.info} />
    </FadeSlideIn>
    
    <div className="bg-blue-950 text-gray-50 text-xl">
        {/*  */}
        <FadeSlideIn slideDirection="left" duration={1500}>
            <Spacer />
            <DoubleSection
                direction="left" 
                image={AboutData.mission.image}
                title={AboutData.mission.title} 
                details={AboutData.mission.details} />
            <Spacer />
        </FadeSlideIn>
        {/*  */}
        <FadeSlideIn slideDirection="right" duration={1500}>
        <DoubleSection
            direction="right" 
            image={AboutData.vision.image}
            title={AboutData.vision.title} 
            details={AboutData.vision.details} />
        <Spacer />
        </FadeSlideIn>
    </div>

    <div className="mx-auto container__primary">
        <Spacer />
        <TitlePrimary title="Our Partners" />
        <CarousePrimary data={PartnerData} />
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
