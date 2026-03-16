import { UserEntity, UserInterface } from "@/app/admin/user/_data/entity/UserEntity"

export interface PageMetaInterface{
    id: string | number
    userId: string | number
    title: string
    slug: string
    description: string
    keywords: string[]
    createdAt: string
    updatedAt: string
    user: UserInterface
}


export const PageMetaEntity: PageMetaInterface = {
    id: "",
    userId: "",
    title: "",
    slug: "",
    description: "",
    keywords: [],
    createdAt: "",
    updatedAt: "",
    user: UserEntity
};