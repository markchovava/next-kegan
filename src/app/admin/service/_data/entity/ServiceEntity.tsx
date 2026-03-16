import { UserEntity, UserInterface } from "@/app/admin/user/_data/entity/UserEntity"

export interface ServiceInterface{
    id: string | number
    userId: string | number
    name: string
    image: string
    imageUpload: File | null
    description: string
    priority: string | number
    createdAt: string
    updatedAt: string
    user: UserInterface
}


export const ServiceEntity: ServiceInterface = {
    id: "",
    userId: "",
    name: "",
    image: "",
    imageUpload: null,
    priority: "",
    description: "",
    createdAt: "",
    updatedAt: "",
    user: UserEntity,
};