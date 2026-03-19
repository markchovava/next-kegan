import HeaderPrimary from '../_components/headers/HeaderPrimary'
import FooterDefault from '../_components/footers/FooterDefault'
import { pageMetaBySlugAction } from '../_data/actions/PageMetaActions';
import { Metadata } from 'next';
import { PageMetaInterface } from '../_data/entity/PageMetaEntity';
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
  const pageMeta = await getPageMeta('terms-of-use');

  if (!pageMeta?.data) {
    return {
      title: 'Term Of Use',
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
     <HeaderPrimary title='Terms of use' image={headerImage}  />

     <section className='flex items-center justify-center py-20'>
        <h1 className='text-[4rem]'>Coming soon</h1>
     </section>

     <FooterDefault />
    </>
  )
}
