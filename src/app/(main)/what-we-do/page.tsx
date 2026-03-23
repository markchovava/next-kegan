import HeaderPrimary from '../_components/headers/HeaderPrimary'
import FooterDefault from '../_components/footers/FooterDefault'
import FadeSlideIn from '../_components/effects/FadeSlideIn'
import Spacer from '@/_components/spacers/Spacer'
import ContactSection from '../_components/sections/ContactSection'
import { clientAllAction } from '../_data/actions/ClientActions'
import WhatWeDoPage from './_components/WhatWeDoPage'
import { PageMetaInterface } from '../_data/entity/PageMetaEntity'
import { cache } from 'react'
import { pageMetaBySlugAction } from '../_data/actions/PageMetaActions'
import { Metadata } from 'next'



interface PropInterface{
    data: PageMetaInterface
    status: number | string
}

const getPageMeta = cache(async (slug: string): Promise<PropInterface | null> => {
  const data = await pageMetaBySlugAction(slug);
  return data ?? null;
});

export async function generateMetadata(): Promise<Metadata> {
  const pageMeta = await getPageMeta('what-we-do');

  if (!pageMeta?.data) {
    return {
      title: 'What we do',
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
  const headerImage = '/assets/img/banner/people.jpg'

  return (
    <div className='w-[100wv] overflow-hidden'>
    <HeaderPrimary 
        title='What we do?'
        image={headerImage} />

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
