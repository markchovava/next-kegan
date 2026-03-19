import { UserEntity, UserInterface } from "./UserEntity"

export interface AppInfoInterface{
    address: string
    createdAt: string
    description: string
    email: string
    facebook: string
    id: string | number
    image: string
    instagram: string
    linkedin: string
    name: string
    phone: string
    tiktok: string
    twitter: string
    updatedAt: string
    user: UserInterface
    userId: string | number
    website: string
    whatsapp: string
}




export const AppInfoEntity: AppInfoInterface = {
    address: "",
    createdAt: "",
    description: "",
    email: "",
    facebook: "",
    id: "",
    image: "",
    instagram: "",
    linkedin: "",
    name: "",
    phone: "",
    tiktok: "",
    twitter: "",
    updatedAt: "",
    user: UserEntity,
    userId: "",
    website: "",
    whatsapp: "",
}