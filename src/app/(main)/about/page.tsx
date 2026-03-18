import Spacer from '@/_components/spacers/Spacer'
import FadeSlideIn from '../_components/effects/FadeSlideIn'
import HeaderPrimary from '../_components/headers/HeaderPrimary'
import IntroSection from '../_components/sections/IntroSection'
import { AboutData } from '../_data/sample/AboutData'
import FooterDefault from '../_components/footers/FooterDefault'
import DoubleSection from '../_components/sections/DoubleSection'
import AboutPage from './_components/AboutPage'
import { partnerAllAction } from '../_data/actions/PartnerActions'


export default async function page() {
    const [partnerData ] = await Promise.all([partnerAllAction()])
    const headerImage = '/assets/img/banner/about.jpg'

  return (
    <div className='bg-gray-50'>
    <HeaderPrimary title='About Us' image={headerImage} />

    <Section 
        css='bg-gray-900 text-gray-50' 
        title={AboutData.intro.title} 
        details={AboutData.intro.details} 
    />

    <Section 
        css='bg-blue-950 text-gray-50' 
        title={AboutData.background.title} 
        details={AboutData.background.details} 
    />

    <Section 
        css='bg-gray-100 text-gray-950' 
        title={AboutData.current.title} 
        details={AboutData.current.details} 
    />


   
    
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

    <AboutPage partnerData={partnerData} />

    <FooterDefault />
    </div>
  )
}


interface SectInterface{
    details: any
    title: string
    css: string
}

function Section({css, details, title}: SectInterface){
    return(
        <div className={css}>
            <FadeSlideIn slideDirection="up" duration={1500}>
                <IntroSection 
                    withBtn={false} 
                    title={title}
                    data={details} />
            </FadeSlideIn>
        </div>
    )
}
