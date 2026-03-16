"use client"
import IconDefault from '@/_components/icons/IconDefault'
import { FooterData, SocialData } from '../../_data/sample/MainNavData'
import { useMainNavStore } from '../../_store/useMainNavStore'
import LogoDefault from '../logos/LogoDefault'
import Link from 'next/link'


export default function FooterDefault() {
  const { navList } = useMainNavStore()
  
  return (
    <footer className='w-full pt-16 pb-12 text-gray-50 bg-linear-to-br from-blue-950 to-slate-950'>
      <section className='container__primary mx-auto pb-10 grid lg:gap-3 gap-12 lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
        {/* LOGO */}
        <div className='flex'>
          <LogoDefault css='h-18' />
        </div>
        {/* LINKS */}
        <div>
          <h2 className='mb-4'>IMPORTANT LINKS</h2>
          <ul className='font-light'>
            {navList.map((i, key) => (
              <Link key={key} href={i.href}>
                <li className='hover:underline mb-1.5 ease-initial transition-all duration-200'>
                  {i.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        {/* OTHER LINKS */}
        <div>
          <h2 className='mb-4'>OTHER LINKS</h2>
          <ul className='font-light'>
            {FooterData.map((i, key) => (
              <Link key={key} href={i.href}>
                <li className='hover:underline mb-1.5 ease-initial transition-all duration-200'>
                  {i.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <h2 className='mb-4'>SOCIAL MEDIA LINKS</h2>
          <ul className='flex items-center justify-start gap-2'>
            {SocialData.map((i, key) => (
              <Link key={key} href={i.href}>
                <li>
                <IconDefault 
                  css='text-2xl hover:scale-110 ease-initial duration-200' 
                  type={i.name} />
                </li>
              </Link>
            ))}

          </ul>
        </div>
      </section>
      <section className='container__primary mx-auto border-t border-slate-700 pt-2'>
        <p className='text-end text-sm text-gray-300 font-light'> 
          &copy; {new Date().getFullYear()} Developed and Maintained by FLDesigners.
        </p>
      </section>
    </footer>
  )
}
