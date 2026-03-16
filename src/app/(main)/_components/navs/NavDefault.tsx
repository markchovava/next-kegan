"use client"
import { useEffect } from 'react'
import { useMainNavStore } from '../../_store/useMainNavStore'
import NavItemDefault from './NavItemDefault'
import { NavInterface } from '../../_data/entity/NavEntity'


export default function NavDefault() {
    const {setNavList, setCurrent, setIsOpen, navList, current} = useMainNavStore()

    const handleClick = (i: NavInterface) => {
        setCurrent(i)
        setIsOpen(!i.isOpen, i)

    }
   
  return (
    <ul className="flex items-center gap-4 text-lg font-medium">
        {navList.map((i, key) => (
            <NavItemDefault key={key} data={i} onClick={() => handleClick(i)} />
        ))}     
    </ul>
  )
}
