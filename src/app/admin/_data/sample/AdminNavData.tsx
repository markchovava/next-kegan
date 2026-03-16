import { AdminNavInterface } from "../entities/AdminNavEntity";



export const AdminNavData: AdminNavInterface[] = [
    {
        id: 1, 
        iconType: 'settings', 
        name: 'Settings', 
        href: '/admin/settings', 
        css: `bg-linear-to-br from-blue-500 to-blue-800 hover:bg-linear-to-br hover:from-blue-500 hover:to-blue-950` 
    },
    {
        id: 11, 
        iconType: 'user', 
        name: 'Users', 
        href: '/admin/user', 
        css: `bg-linear-to-br from-sky-500 to-sky-800 hover:bg-linear-to-br hover:from-sky-500 hover:to-sky-950` 
    },
    {
        id: 8, 
        iconType: 'page', 
        name: 'Pages', 
        href: '/admin/page-admin', 
        css: `bg-linear-to-br from-violet-500 to-violet-800 hover:bg-linear-to-br hover:from-violet-500 hover:to-violet-950` 
    },
    {
        id: 2, 
        iconType: 'project', 
        name: 'Projects', 
        href: '/admin/project', 
        css: `bg-linear-to-br from-green-500 to-green-800 hover:bg-linear-to-br hover:from-green-500 hover:to-green-950` 
    },
    {
        id: 3, 
        iconType: 'service', 
        name: 'Services', 
        href: '/admin/service', 
        css: `bg-linear-to-br from-indigo-500 to-indigo-800 hover:bg-linear-to-br hover:from-indigo-500 hover:to-indigo-950` 
    },
    {
        id: 4, 
        iconType: 'product', 
        name: 'Products Info', 
        href: '/admin/product-admin', 
        css: `bg-linear-to-br from-cyan-500 to-cyan-800 hover:bg-linear-to-br hover:from-cyan-500 hover:to-cyan-950` 
    },
    { 
        id: 5, 
        iconType: 'order', 
        name: 'Orders', 
        href: '/admin/order', 
        css: `bg-linear-to-br from-mist-500 to-mist-800 hover:bg-linear-to-br hover:from-mist-500 hover:to-mist-950` 
    },
    {
        id: 6, 
        iconType: 'media', 
        name: 'Media', 
        href: '/admin/media', 
        css: `bg-linear-to-br from-fuchsia-500 to-fuchsia-800 hover:bg-linear-to-br hover:from-fuchsia-500 hover:to-fuchsia-950` 
    },
    {
        id: 9, 
        iconType: 'client', 
        name: 'Clients', 
        href: '/admin/client', 
        css: `bg-linear-to-br from-teal-500 to-teal-800 hover:bg-linear-to-br hover:from-teal-500 hover:to-teal-950` 
    },
    {
        id: 10, 
        iconType: 'partner', 
        name: 'Partners', 
        href: '/admin/partner', 
        css: `bg-linear-to-br from-mauve-500 to-mauve-800 hover:bg-linear-to-br hover:from-mauve-500 hover:to-mauve-950` 
    },
    {
        id: 7, 
        iconType: 'message', 
        name: 'Messages', 
        href: '/admin/message', 
        css: `bg-linear-to-br from-sky-500 to-sky-800 hover:bg-linear-to-br hover:from-sky-500 hover:to-sky-950` 
    },
]
