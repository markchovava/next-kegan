import HeaderPrimary from '../_components/headers/HeaderPrimary'
import FooterDefault from '../_components/footers/FooterDefault'



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
