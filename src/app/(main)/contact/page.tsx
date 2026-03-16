import FooterDefault from '../_components/footers/FooterDefault'
import HeaderPrimary from '../_components/headers/HeaderPrimary'
import ContactSection from '../_components/sections/ContactSection'
import Spacer from '@/_components/spacers/Spacer'



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
