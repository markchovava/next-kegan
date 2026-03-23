import Spacer from '@/_components/spacers/Spacer'
import { cache } from 'react'
import { Metadata } from 'next'
import { PageMetaInterface } from '../../_data/entity/PageMetaEntity'
import { pageMetaBySlugAction } from '../../_data/actions/PageMetaActions'
import { clientAllAction } from '../../_data/actions/ClientActions'
import HeaderPrimary from '../../_components/headers/HeaderPrimary'
import FadeSlideIn from '../../_components/effects/FadeSlideIn'
import DoubleSection from '../../_components/sections/DoubleSection'
import { FixedAssetData, GeneralConsultingData } from '../../_data/sample/ServiceData'
import WhatWeDoPage from '../_components/WhatWeDoPage'
import ContactSection from '../../_components/sections/ContactSection'
import FooterDefault from '../../_components/footers/FooterDefault'



interface PropInterface{
    data: PageMetaInterface
    status: number | string
}

const getPageMeta = cache(async (slug: string): Promise<PropInterface | null> => {
  const data = await pageMetaBySlugAction(slug);
  return data ?? null;
});

export async function generateMetadata(): Promise<Metadata> {
  const pageMeta = await getPageMeta('general-consulting');

  if (!pageMeta?.data) {
    return {
      title: 'Kegan Management Consulting - General Consulting',
      description: '',
    };
  }

  const { title, description, keywords } = pageMeta.data;
  let parsedKeywords: string[] = [];
  try {
    parsedKeywords = JSON.parse(keywords);
  } catch {
    parsedKeywords = [];
  }

  return {
    title,
    description,
    keywords: parsedKeywords,
    openGraph: {
      title,
      description,
    },
  };
}

export default async function page() {
  const [ clientData ] = await Promise.all([ clientAllAction() ])
  const headerImage = '/assets/img/banner/service.jpg'

  return (
    <div className='w-[100wv] overflow-hidden'>
    <HeaderPrimary 
        title='General Consulting'
        image={headerImage} />

    <Spacer />
    {GeneralConsultingData.map((i, key) => (
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


    <WhatWeDoPage clientData={clientData} />


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
