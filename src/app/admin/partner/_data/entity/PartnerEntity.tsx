import { UserEntity, UserInterface } from "@/app/admin/user/_data/entity/UserEntity"

export interface PartnerInterface{
    id: string | number
    userId: number | string
    name: string
    image: string
    imageUpload: File | null
    priority: string | number
    createdAt: string
    updatedAt: string
    user: UserInterface
}


export const PartnerEntity: PartnerInterface = {
    id: "",
    userId: "",
    name: "",
    image: "",
    imageUpload: null,
    priority: "",
    createdAt: "",
    updatedAt: "",
    user: UserEntity
};