import SliderDefault from '../sliders/SliderDefault'
import NavResponsiveDefault from '../navs/NavResponsiveDefault'
import LogoDefault from '../logos/LogoDefault'
import NavDefault from '../navs/NavDefault'

export default function HeaderDefault() {
  return (
    <>
    {/* DESKTOP */}
    <header className="w-full lg:block hidden lg:h-[98vh] relative">
        {/* SLIDER */}
        <section className="w-full h-full absolute z-10 top-0 left-0">
            <SliderDefault />
        </section>
        {/* NAVIGATION */}
        <section className="z-20 absolute top-0 left-0 w-full h-40 text-white">
            <nav className="container__primary mx-auto flex items-center justify-between pt-4 pb-3">
              <LogoDefault css='h-16' />
              <NavDefault />
            </nav>
        </section>
    </header>

    {/* MOBILE */}
    <header className="w-full lg:hidden block bg-linear-to-tr from-blue-600 to-blue-950">
        {/* NAV */}
        <NavResponsiveDefault />
        
        {/* SLIDER */}
        <section className='h-screen'>
          <SliderDefault />
        </section>
    </header>
    </>
  )
}
