export interface AppInfoInterface{
    id: string | number
    image: string
    imageUpload: File | null
    name: string
    description: string
    address: string
    email: string
    phone: string
    website: string
    facebook: string
    whatsapp: string
    instagram: string
    linkedin: string
    twitter: string
    tiktok: string
    createdAt: string
    updatedAt: string
}

export const AppInfoEntity: AppInfoInterface = {
    id: "",
    image: "",
    imageUpload: null,
    name: "",
    description: "",
    address: "",
    email: "",
    phone: "",
    website: "",
    facebook: "",
    whatsapp: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    tiktok: "",
    createdAt: "",
    updatedAt: "",
}