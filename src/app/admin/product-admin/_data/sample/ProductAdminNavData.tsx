import { AdminNavInterface } from "@/app/admin/_data/entities/AdminNavEntity";


export const ProductAdminNavData: AdminNavInterface[] = [
    {
        id: 1, 
        iconType: 'product', 
        name: 'Products', 
        href: '/admin/product-admin/product', 
        css: `bg-linear-to-br from-blue-500 to-blue-800 hover:bg-linear-to-br hover:from-blue-500 hover:to-blue-950` 
    },
    {
        id: 2, 
        iconType: 'category', 
        name: 'Category', 
        href: '/admin/product-admin/category', 
        css: `bg-linear-to-br from-cyan-500 to-cyan-800 hover:bg-linear-to-br hover:from-cyan-500 hover:to-cyan-950` 
    },
    {
        id: 3, 
        iconType: 'tag', 
        name: 'Tags', 
        href: '/admin/product-admin/tag', 
        css: `bg-linear-to-br from-cyan-500 to-cyan-800 hover:bg-linear-to-br hover:from-cyan-500 hover:to-cyan-950` 
    },

]