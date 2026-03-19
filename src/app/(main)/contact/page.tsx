import FooterDefault from '../_components/footers/FooterDefault'
import HeaderPrimary from '../_components/headers/HeaderPrimary'
import ContactSection from '../_components/sections/ContactSection'
import Spacer from '@/_components/spacers/Spacer'
import { PageMetaInterface } from '../_data/entity/PageMetaEntity'
import { pageMetaBySlugAction } from '../_data/actions/PageMetaActions'
import { cache } from 'react'
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
  const pageMeta = await getPageMeta('contact-us');

  if (!pageMeta?.data) {
    return {
      title: 'Contact Us',
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



export default function page() {
  const headerImage = '/assets/img/banner/contact.jpg'
  
  return (
    <>
    <HeaderPrimary title='Contact Us' image={headerImage} />

    <Spacer />
    <ContactSection withMap={true} />

    <FooterDefault />
    </>
  )
}
