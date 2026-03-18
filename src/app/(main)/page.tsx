import FooterDefault from "./_components/footers/FooterDefault";
import HeaderDefault from "./_components/headers/HeaderDefault";
import IntroSection from "./_components/sections/IntroSection";
import FadeSlideIn from "./_components/effects/FadeSlideIn";
import Spacer from "@/_components/spacers/Spacer";
import { AboutData } from "./_data/sample/AboutData";
import DoubleSection from "./_components/sections/DoubleSection";
import { partnerAllAction } from "./_data/actions/PartnerActions";
import HomePage from "./_components/HomePage";
import { clientAllAction } from "./_data/actions/ClientActions";
import SliderSecondary from "./_components/sliders/SliderSecondary";
import SliderDefault from "./_components/sliders/SliderDefault";



export default async function Home() {
  const [
    partnerData, 
    clientData 
  ] = await Promise.all([
      partnerAllAction(), 
      clientAllAction()
  ])

  return (
   <div className='bg-gray-50'>
    <HeaderDefault />

    <div className="w-full lg:h-120 h-160">
      <SliderSecondary />
    </div>
  

    <div className="bg-gray-900 text-gray-50">
      <FadeSlideIn slideDirection="up" duration={1500}>  
        <IntroSection 
            withBtn={true} 
            data={AboutData.intro.details} />
      </FadeSlideIn>
    </div>

    <div className="bg-blue-950 text-gray-50 text-xl">
        {/*  */}
        <FadeSlideIn slideDirection="left" duration={1500}>
              <Spacer />
              <DoubleSection
                  direction="right" 
                  image={AboutData.mission.image}
                  title={AboutData.mission.title} 
                  details={AboutData.mission.details} />
              <Spacer />
        </FadeSlideIn>
        {/*  */}
        <FadeSlideIn slideDirection="right" duration={1500}>
          <DoubleSection
              direction="left" 
              image={AboutData.vision.image}
              title={AboutData.vision.title} 
              details={AboutData.vision.details} />
          <Spacer />
        </FadeSlideIn>
    </div>

    <HomePage 
        partnerData={partnerData} 
        clientData={clientData} 
    />

    <FooterDefault />
   </div>
  );
}
