"use client"

import Link from "next/link"
import { NavInterface } from "../../_data/entity/NavEntity"
import { useMainNavStore } from "../../_store/useMainNavStore"
import IconDefault from "@/_components/icons/IconDefault"


interface PropInterface{
    data: NavInterface
    onClick: () => void

}

export default function NavItemDefault({data, onClick}: PropInterface) {
    const {id, name, href, items, isOpen} = data
    const {current} = useMainNavStore()

    if(items && items.length > 0){
        return (
        <li className="relative group" onClick={onClick}>
            <button 
                className={`${current.id === id ? 'text-sky-200' : ''} cursor-pointer hover:text-sky-200 ease-in-out duration-200 transition-all 
                flex items-center justify-center gap-1`}>
                {name}
                <IconDefault type="down" css="" />
            </button>
            
            {/* Instead of conditional rendering, we use opacity and pointer-events */}
            <ul className={`
                absolute top-full left-0 w-[170%] text-sm font-normal rounded-b-lg overflow-hidden bg-transparent drop-shadow-lg pt-1
                transition-all duration-300 ease-out origin-top
                ${isOpen 
                ? "opacity-100 translate-y-0 visible" 
                : "opacity-0 -translate-y-2 invisible pointer-events-none"}
            `}>
                {items.map((i, key) => (
                <Link key={key} href={i.href}>
                    <li  className="hover:bg-blue-950 bg-blue-900 ease-in-out duration-200 transition-all px-2 py-2">
                    {i.name}
                    </li>
                </Link>
                ))}
            </ul>
        </li>
        )
    }else{
        return(
            <Link href={href}>
                <li 
                    onClick={onClick} 
                    className={` ${current.id === id ? 'text-sky-200' : ''} 
                    cursor-pointer hover:text-sky-200 ease-initial duration-200 transition-all`}>
                    {name}
                </li>
            </Link>
        )
    }
  return (
    <div>
        
           
    </div>
  )
}
