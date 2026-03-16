"use client"

import Link from "next/link"


interface PropInterface{
  css: string
}

export default function LogoDefault({css='h-16'}: PropInterface) {
  return (
    <Link href='/'>
      <figure className={`${css} w-auto overflow-hidden bg-white rounded drop-shadow-lg`}>
          <img src='/assets/img/logo/logo_small.png' alt='' className="w-full h-full object-fit" />
      </figure>
    </Link>
  )
}
