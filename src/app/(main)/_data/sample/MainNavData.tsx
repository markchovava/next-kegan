import { NavInterface } from "../entity/NavEntity"

export const WhatWeDoData: NavInterface[] = [
    {id: 1, name: 'Fixed Assets Tags', href:'/what-we-do#one', isOpen: false, items: []},
    {id: 2, name: 'Fixed Assets Tagging Solutions', href:'/what-we-do#two', isOpen: false, items: []},
    {id: 3, name: 'Assets Value Added Services', href:'/what-we-do#three', isOpen: false, items: []},
    {id: 4, name: 'FA Management Systems', href:'/what-we-do#four', isOpen: false, items: []},
    {id: 5, name: 'Beyond Fixed Assets Tagging', href:'/what-we-do#five', isOpen: false, items: []},
    {id: 6, name: 'Custom Software Development', href:'/what-we-do#six', isOpen: false, items: []},
]


export const PrimaryNavData: NavInterface[] = [
    {id: 1, name: 'Home', href:'/', isOpen: false, items: []},
    {id: 2, name: 'About Us',  href:'/about', isOpen: false, items: []},
    {id: 3, name: 'What we do',  href:'/what-we-do', isOpen: false, items: WhatWeDoData},
    {id: 4, name: 'Contact Us',  href:'/contact', isOpen: false, items: []},
]


export const FooterData: NavInterface[] = [
    {id: 1, name: 'Privacy', href:'/privacy', isOpen: false, items: []},
    {id: 2, name: 'Terms of Use', href:'/terms-of-use', isOpen: false, items: []},
    {id: 3, name: 'Cookies Policy', href:'/cookie-policy', isOpen: false, items: []},
]


export const SocialData: NavInterface[] = [
    {id: 1, name: 'facebook', href:'#', isOpen: false, items: []},
    {id: 2, name: 'whatsapp', href:'#', isOpen: false, items: []},
    {id: 3, name: 'linkedin', href:'#', isOpen: false, items: []},
    {id: 3, name: 'twitter', href:'#', isOpen: false, items: []},
    {id: 3, name: 'tiktok', href:'#', isOpen: false, items: []},
]
