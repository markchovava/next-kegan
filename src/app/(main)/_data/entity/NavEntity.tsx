export interface NavInterface{
    id: number | string 
    name: string
    href: string
    isOpen: boolean
    items: NavInterface[]
}



export const NavEntity: NavInterface = {
    id: "", 
    name: '', 
    href: '', 
    isOpen: false, 
    items: []
}