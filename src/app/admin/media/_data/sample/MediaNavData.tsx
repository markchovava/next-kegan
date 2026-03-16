import { AdminNavInterface } from "@/app/admin/_data/entities/AdminNavEntity";


export const MediaNavData: AdminNavInterface[] = [
    {
        id: 1, 
        iconType: 'image', 
        name: 'Images', 
        href: '/admin/media/image', 
        css: `bg-linear-to-br from-blue-500 to-blue-800 hover:bg-linear-to-br hover:from-blue-500 hover:to-blue-950` 
    },
    {
        id: 2, 
        iconType: 'video', 
        name: 'Videos', 
        href: '/admin/media/video', 
        css: `bg-linear-to-br from-cyan-500 to-cyan-800 hover:bg-linear-to-br hover:from-cyan-500 hover:to-cyan-950` 
    },
    {
        id: 3, 
        iconType: 'document', 
        name: 'Documents', 
        href: '/admin/media/document', 
        css: `bg-linear-to-br from-cyan-500 to-cyan-800 hover:bg-linear-to-br hover:from-cyan-500 hover:to-cyan-950` 
    },

]