import HeaderPrimary from '../_components/headers/HeaderPrimary'
import FooterDefault from '../_components/footers/FooterDefault'
import { PageMetaInterface } from '../_data/entity/PageMetaEntity';
import { pageMetaBySlugAction } from '../_data/actions/PageMetaActions';
import { Metadata } from 'next';
import { cache } from 'react';


interface PropInterface{
    data: PageMetaInterface
    status: number | string
}

const getPageMeta = cache(async (slug: string): Promise<PropInterface | null> => {
  const data = await pageMetaBySlugAction(slug);
  return data ?? null;
});

export async function generateMetadata(): Promise<Metadata> {
  const pageMeta = await getPageMeta('cookie-policy');

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
    const headerImage = '/assets/img/banner/service.jpg'
  return (
    <>
     <HeaderPrimary title='Cookie Policy' image={headerImage}  />

     <section className='flex items-center justify-center py-20'>
        <h1 className='text-[4rem]'>Coming soon</h1>
     </section>

     <FooterDefault />
    </>
  )
}
