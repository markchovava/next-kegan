import { AdminNavInterface } from "@/app/admin/_data/entities/AdminNavEntity";


export const PageAdminNavData: AdminNavInterface[] = [
    {
        id: 1, 
        iconType: 'page', 
        name: 'Pages', 
        href: '/admin/page-admin/page', 
        css: `bg-linear-to-br from-blue-500 to-blue-800 hover:bg-linear-to-br hover:from-blue-500 hover:to-blue-950` 
    },
    {
        id: 2, 
        iconType: 'meta', 
        name: 'Pages Meta', 
        href: '/admin/page-admin/meta', 
        css: `bg-linear-to-br from-cyan-500 to-cyan-800 hover:bg-linear-to-br hover:from-cyan-500 hover:to-cyan-950` 
    },

]